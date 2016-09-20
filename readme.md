# react-starter-kit
[![Build
Status](https://travis-ci.org/esayemm/react-starter-kit.svg?branch=master)](https://travis-ci.org/esayemm/react-starter-kit)

A starter kit for frontend project using babel for transpiling es6, webpack for building assets, karma for testing, and a supplied Dockerfile for building a container.

##Dev
#### `gulp [PORT?=8080]`
Starts webpack dev server on port 8080 or given env PORT.

##Test

```
npm test
---
npm run test:watch
```

Keep your spec files wherever you want, just follow the naming convention `foo.spec.js`.

##Lint

Comes with pre-commit installed, which will run lint against git modified files before every commit, to disable just remove the pre-commit package and entry in package.json.

```sh
npm run lint
```

## Docker

Build the docker image after you run gulp build. The default dockerfile simply runs a nginx server that serves the `build/` files.

```sh
// inside project root dir
docker build -t <docker username>/<docker hub repo> .

// run docker image
docker run -d --name <custom name> -p <host port>:80 <docker username>/<docker hub repo>
```

##Release

Running version will do a gulp build and push the tag to github. You can then run docker build to rebuild container, or just leave that to a CI service.

`npm version [major | minor | patch]`