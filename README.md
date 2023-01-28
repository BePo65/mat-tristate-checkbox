# @bepo65/mat-tristate-checkbox
![Version](https://img.shields.io/badge/version-15.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/bepo65/mat-tristate-checkbox/@angular/material?color=red&label=Angular-Material&logo=angular&logoColor=red)

> &lt;mat-tristate-checkbox&gt; provides the same functionality as the Angular Material checkbox enhanced with 3 states. This repository contains the checkbox component and a demo project.

## Prerequisites

The package can be used in Angular apps with Angular Material installed. This Version requires Angular 15.

## Installation of checkbox

```sh
npm install @bepo65/mat-tristate-checkbox
```

## Sample usage of checkbox

Now you can use the mat-tristate-checkbox component in your app components, for example in app.component.ts:
```javascript
import { MatTristateCheckboxModule } from '@bepo65/mat-tristate-checkbox';
...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    MatTristateCheckboxModule
  ],
  ...
})
export class AppModule { }
```
And in template file app.component.html:
```html
<form [formGroup]="form">
  <mat-tristate-checkbox formControlName="keepMeLoggedIn">remember me</mat-tristate-checkbox>
</form>
```

## Demo project

There is a demo project on  [stackblitz](https://stackblitz.com/edit/angular-mat-tristate-cb-demo) that shows a simple use case.

## Properties of checkbox

| Name | Description |
|------|-------------|
|  @Input()<br />color: ThemePalette  | Theme color palette for the component. Defaults to 'accent' |
|  @Input()<br />disabled: any  | Whether the checkbox is disabled. |
|  @Input()<br />labelPosition: 'before' &#124; 'after'  | Whether the label should appear after or before the checkbox. Defaults to 'after' |

## Values of checkbox
The value aof the checkbox cycle through these values:
```
undefined > false > true
```

## Usage of demo project

```sh
npm install
npm run start
```

## Run all tests

```sh
npm run test
```

## Changelog
For list of changes and bugfixes, see [CHANGELOG.md](CHANGELOG.md).

## Contributing
The [CHANGELOG.md](CHANGELOG.md) is generated with `standard-changelog` (`npm run release`).
The following is the list of supported scopes:
* checkbox
* demo
* none/empty string: useful for test and refactor changes that are done across all packages (e.g. test: add missing unit tests) and for docs changes that are not related to a specific package (e.g. docs: fix typo in tutorial).

## Release hints
Required versions (e.g. caused by version dependencies):
| Package | Version | Remark |
|-----|------------------|---|
| @angular-eslint/* | 13.x.y | requires angular V13 |
| @angular-eslint/* | 13.x.y | requires eslint V8 |
| @typescript-eslint/* | 5.x.y | requires eslint V8 |

Updating to Angular V13 is still under construction.

## Hacks
+ `ejs` was installed to solve a dependency of '@angular-eslint/builder' found by github dependabot. Can be deleted from package.json, when '@angular-eslint/builder' is updated.

## Author

**Bernhard Pottler**

  on Github: [@BePo65](https://github.com/BePo65)


## License

Copyright © 2020 [Bernhard Pottler](https://github.com/BePo65).

This project and all of its packages are released under [MIT](https://github.com/BePo65/bepo65-mat-tristate-checkbox/blob/master/LICENSE) license.
