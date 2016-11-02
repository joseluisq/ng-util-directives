# ng-util-directives
> Some Angular 1.x useful directives

## Install

```sh
bower install ng-util-directives --save
```

In your Angular app:

```js
angular.module('myApp', ['ng-util-directives'])
```

### [jQuery UI Datepicker](https://jqueryui.com/datepicker/) Directive
Usage:

```html
<input type="text" class="form-control" datetimepicker datetimepicker-format="DD/MM/YYYY">
```

### [Datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/) Directive

Usage:

```html
<div class="form-group">
  <div class="input-group date" name="txttime"
    placeholder="Select your time"
    ng-model="duration" datetimepicker datetimepicker-format="DD/MM/YYYY HH:mm:ss" datetimepicker-locale="es">

    <input type="text" class="form-control">

    <span class="input-group-addon">
      <span class="fa fa-clock-o"></span>
    </span>
  </div>
</div>
```

### [jQuery Validation](https://github.com/jzaefferer/jquery-validation) Directive

Usage:

```html
<div class="container" ng-controller="AppCtrl as app">

  <form formvalidation formvalidation-submit="app.onSubmit()">
    <fieldset class="form-group">
      <input class="form-control" name="txtemail"
        ng-model="app.email"
        required
        data-msg-required="Enter your e-mail"
        data-rule-email="true"
        data-msg-email="Enter a valid e-mail format">
    </fieldset>
  </form>

</div>
```

## License
MIT license

© 2016 [José Luis Quintana](https://git.io/joseluisq)
