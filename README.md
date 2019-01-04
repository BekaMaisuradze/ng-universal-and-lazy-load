# NgUniversalAndLazyLoad

This is a simple project for demonstrating Angular Universal and Lazy loading of Angular Modules<br /><br />
Related articles:<br />
[Angular Universal & Server-side rendering Deep-Dive](https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7)<br />
[Lazy loading Angular Modules](https://medium.com/angularmedellin/lazy-loading-angular-modules-58fc844b5c7d)

## How to start up Angular Universal

// Dynamic SSR<br />
`npm run build:ssr && npm run serve:ssr`
This will compile your application and spin up a Node Express server to serve your Universal application on `http://localhost:4000`

// Static Pre-Rendering<br />
`npm run build:prerender && npm run serve:prerender`
This script compiles your application and pre-renders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
