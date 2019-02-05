# coorpacademy-public-libraries

[![Build Status](https://travis-ci.org/CoorpAcademy/coorpacademy-public-libraries.svg?branch=master)](https://travis-ci.org/CoorpAcademy/coorpacademy-public-libraries)
[![codecov](https://codecov.io/gh/CoorpAcademy/coorpacademy-public-libraries/branch/master/graph/badge.svg)](https://codecov.io/gh/CoorpAcademy/coorpacademy-public-libraries)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Home of the public libraries of [Coorpacademy](http://github.com/CoorpAcademy)

## Library list :books:

So far, this monorepo hold the following public libraries:
- [config](./packages/config) : Config merging library

## How To Create a new lib :notebook:

To create a new library, just copy the `project-template` from [the packages folder](./packages/project-template))
To have it test add it's folder namer to the [.travis.yml](./.travis.yml) : `PACKAGE=my-project`

This is to be automated in the close future, and will be available under the `npm run scaffold-project` command.
