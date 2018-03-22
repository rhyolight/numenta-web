#!/bin/bash
# ----------------------------------------------------------------------
# Numenta Platform for Intelligent Computing (NuPIC)
# Copyright (C) 2017, Numenta, Inc.  Unless you have purchased from
# Numenta, Inc. a separate commercial license for this software code, the
# following terms and conditions apply:
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero Public License version 3 as
# published by the Free Software Foundation.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
# See the GNU Affero Public License for more details.
#
# You should have received a copy of the GNU Affero Public License
# along with this program.  If not, see http://www.gnu.org/licenses.
#
# http://numenta.org/licenses/
# ----------------------------------------------------------------------

# This scripts create web page redirect links by using S3 redirect metadata
# property.
# See https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html

set -o errexit
set -o xtrace

while getopts "f:b:" opt; do
  case "$opt" in
    b) BUCKET=${OPTARG};;
    f) CSV_FILE=${OPTARG};;
  esac
done

if [[ -z ${BUCKET} || -z ${CSV_FILE} ]]; then
  echo "Usage $0 -b BUCKET -f CSV_FILE"
  exit 1
fi

# AWS S3 buckets redirects are limited to 50 "RoutingRules".
# We will use "RoutingRules" for the first 50 items and S3 keys with redirect
# metadata for the extra redirects
readarray -t redirects < ${CSV_FILE}
first_50=("${redirects[@]:0:50}")
extra_redirects=("${redirects[@]:50}")
TMPFILE=`mktemp`
COUNT=0
echo '{
  "IndexDocument": {"Suffix": "index.html"},
  "ErrorDocument": {"Key": "404/index.html"},
  "RoutingRules": [' > "${TMPFILE}"
for row in ${first_50[@]}; do
  from_url=("${row%%,*}")
  to_url=("${row#*,}")
  to_url=${to_url%%[[:space:]]}

  if [[ ${COUNT} -gt 0 ]]; then
    echo ","
  fi
  COUNT=${COUNT}+1
  echo "{\"Condition\": {\"KeyPrefixEquals\": \"${from_url}\"},"
  echo "\"Redirect\": {"
  if [[ ${to_url} =~ https?://.*$ ]]; then
    protocol=${to_url%%://*}

    hostandpath=${to_url##*://}
    hostname=${hostandpath%%/*}
    # Special case for internal sites redirects
    if [ "${hostname}" == "numenta.com" ]; then
      hostname=${BUCKET}
      # Staging sites do not support "https" protocol
      if [ "${BUCKET}" != "numenta.com" ]; then
        protocol="http"
      fi
    elif [ "${hostname}" == "numenta.org" ]; then
      hostname=${BUCKET}
      # Staging sites do not support "https" protocol
      if [ "${BUCKET}" != "numenta.org" ]; then
        protocol="http"
      fi
    fi

    path=""
    if [ "${hostname}" != "${hostandpath}" ]; then
      path=${hostandpath#*/}
    fi

    echo "\"Protocol\": \"${protocol}\","
    echo "\"HostName\": \"${hostname}\","
    echo "\"ReplaceKeyWith\": \"${path}\","
  else
    hostname=${BUCKET}
    # Special case for internal sites redirects
    if [ "${hostname}" == "numenta.com" ]; then
        protocol="https"
    elif [ "${hostname}" == "numenta.org" ]; then
      protocol="https"
    else
        protocol="http"
    fi
    echo "\"Protocol\": \"${protocol}\","
    echo "\"HostName\": \"${hostname}\","
    echo "\"ReplaceKeyPrefixWith\": \"${to_url}\","
  fi
  echo "\"HttpRedirectCode\": \"301\"}}"
done >> "${TMPFILE}"
echo "]}" >> "${TMPFILE}"
aws s3api put-bucket-website --bucket ${BUCKET} --website-configuration file://${TMPFILE}
cat ${TMPFILE}
rm ${TMPFILE}

# Create S3 key redirects for all other redirects
TMPFILE=`mktemp`
for row in ${extra_redirects[@]}; do
  from_url=("${row%%,*}")
  to_url=("${row#*,}")
  to_url=${to_url%%[[:space:]]}
  if [[ ! ${to_url} =~ https?://.*$ ]]; then
    hostname=${BUCKET}
    path=${to_url}
    # Special case for internal sites redirects
    if [ "${hostname}" == "numenta.com" ]; then
        protocol="https"
    elif [ "${hostname}" == "numenta.org" ]; then
      protocol="https"
    else
        protocol="http"
    fi
    to_url=${protocol}://${hostname}/${path}
  fi
  aws s3 cp ${TMPFILE} s3://${BUCKET}/${from_url} --website-redirect ${to_url}
done
