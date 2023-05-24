# @bepo65/mat-tristate-checkbox
![Version](https://img.shields.io/badge/version-15.1.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/bepo65/mat-tristate-checkbox/@angular/material?color=red&label=Angular-Material&logo=angular&logoColor=red)

> &lt;mat-tristate-checkbox&gt; provides the same functionality as the Angular Material checkbox enhanced with 3 states.

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

## Changelog
For list of changes and bugfixes, see [CHANGELOG.md](CHANGELOG.md).

## Author

**Bernhard Pottler**

  on Github: [@BePo65](https://github.com/BePo65)


## License

Copyright © 2020 [Bernhard Pottler](https://github.com/BePo65).

This project and its packages are released under [MIT](https://github.com/BePo65/bepo65-mat-tristate-checkbox/blob/master/LICENSE) license.
