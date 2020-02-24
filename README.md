[![CircleCI](https://circleci.com/gh/rhyuen/now-serverless-circleci.svg?style=svg)](https://circleci.com/gh/rhyuen/now-serverless-circleci)

# ABOUT

An attempt at using `CircleCI` with Zeit's `Now` and `Typescript`.

# Issues

1. Connection for HTTP requests in tests are always refused when run in CircleCI but not when the tests are run locally.

2. It seems that `jest` sets `NODE_ENV` to `test` by default.  [source:stackoverflow](https://stackoverflow.com/questions/48461394/node-env-with-jest)

# Things I've tried

> 1. Switching between localhost and 127.0.0.1 in the target url.

> 2. Using the `beforeAll(() => {})` call in one of the jest tests.

> 3. Adding the `.now` folder fields to the CircleCI build environment to make the 'project not linked to NOW' error field go away.

> 4. Found this [link](https://discuss.circleci.com/t/cant-connect-to-node-http-server-running-on-localhost/19857/8) that gets an ip address.  It looks promising.

# Resolved Issues