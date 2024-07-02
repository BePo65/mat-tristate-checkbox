# mat-tristate-checkbox
![Version](https://img.shields.io/badge/version-17.0.2-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE)
![Angular version](https://img.shields.io/github/package-json/dependency-version/bepo65/mat-tristate-checkbox/@angular/core?color=red&label=Angular&logo=angular&logoColor=red)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/bepo65/mat-tristate-checkbox/@angular/material?color=red&label=Angular-Material&logo=angular&logoColor=red)

> &lt;mat-tristate-checkbox&gt; provides the same functionality as the Angular Material checkbox enhanced with 3 states.

## Release hints
Starting with version 16 this package is unscoped (i.e. is named 'mat-image-overflow' not '@bepo65/mat-image-overflow').

## Prerequisites

The package can be used in Angular apps with Angular Material installed. This Version requires Angular 16.

## Installation of checkbox

```sh
npm install mat-tristate-checkbox
```

## Sample usage of checkbox

Now you can use the mat-tristate-checkbox component in your app components, for example in app.module.ts:

```javascript
import { MatTristateCheckboxComponent } from 'mat-tristate-checkbox';
...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    MatTristateCheckboxComponent
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

Try out the [demo page](https://bepo65.github.io/mat-tristate-checkbox/).

![Screenshot](assets/screenshot.jpg "Screenshot of the demo page")

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

## License

Copyright © 2024 [Bernhard Pottler](https://github.com/BePo65).

Distributed under the MIT License. See `LICENSE` for more information.

This project uses the fonts '[Roboto](https://fonts.google.com/specimen/Roboto/about)' and '[Material Icons](https://github.com/google/material-design-icons)' from the [Google Fonts Library](https://fonts.google.com/) that are licensed under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).
