// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2018 Numenta <http://numenta.com>
//
// AWS Cloudfront Lambda@Edge 'Origin Response' function
// This file is just a copy of the AWS Cloudfront Lambda@Edge function triggered
// by S3 Orign Response events
//
// This Lambda@Edge function is used to provide AWS Cloudfront with valid URL
// redirects when the requested URL path is not found at the S3 Origin.
// The URL redirect rules are declared in the 'url_redirect.csv' file and
// deployed to production as '.redirects.json' file at the root of the S3 bucket
// hosting the web site.

'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

/**
 * Get redirect rules from origin bucket
 */
function getRedirectRules(bucket, callback) {
  const params = { Bucket: bucket, Key: '.redirects.json' };
  S3.getObject(params, (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      callback(null, JSON.parse(data.Body.toString('utf-8')));
    }
  });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Get Redirect path for the given request if exists
 */
function getRedirectPath(request, callback) {
  try {
    const origin = request.origin.s3 || request.origin.custom;
    const bucket = origin.domainName.replace(/\.s3(.*)?\.amazonaws\.com/, '');
    const path = request.uri.substr(1);
    getRedirectRules(bucket, (err, data) => {
      if (err) {
        callback(err, null);
      }
      else {
        const isUrl = /^https?:\/\/.*$/;

        for (var i = 0, len = data.length; i < len; i++) {
          var [from, to] = data[i];

          // Apply redirect rule if matches url pattern
          const search = new RegExp('^' + escapeRegExp(from) + '(.*)$', 'i');
          if (search.test(path)) {
            var replace = isUrl.test(to) ? to : '/' + to + '$1';
            callback(null, path.replace(search, replace));
            return;
          }
        }
        // Not found
        console.log('request: %j', request);
        console.log('Missing redirect rule for path: %j', path);
        callback(null, null);
      }
    });
  }
  catch (e) {
    callback(e, null);
  }
}

/*
 * Generate HTTP redirect response with 302 status code and Location header.
 */
exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  // Try to redirect on error
  if (response.status >= 400 && response.status <= 599) {
    try {
      const request = event.Records[0].cf.request;
      getRedirectPath(request, (err, path) => {
        if (err) {
          console.log('event: %j', event);
          console.log('getRedirectPath:err: %j', err);
          callback(err, null);
          return;
        }
        if (path) {
          response.status = 301;
          response.statusDescription = 'Found';
          response.headers['location'] = [{ key: 'Location', value: path }];
          response.body = '';
        }
        callback(null, response);
      });
    }
    catch (e) {
      console.log('event: %j', event);
      console.log(e);
      callback(e, null);
    }
  }
  else {
    callback(null, response);
  }
};
