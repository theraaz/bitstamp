# Bitstamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

Run `npm install` to install all the dependencies

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The app actually lifts two servers. One for backend and other for frontend. You can access backend api server at http://localhost:1344

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
you can change the api url in src/environment files. Currently it is set to http://localhost:1344
You need to lift api server or provide your own api url. To lift api server, after running `ng build` run `node app.js`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
API tests can be run by running command `npm run server-test`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
