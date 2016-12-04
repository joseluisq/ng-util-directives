(function ($, angular) {
  angular

    .module('ng-util-directives', [])

    .directive('formvalidation', function () {
      return {
        restrict: 'A',
        scope: {
          fn: '&formvalidationSubmit'
        },
        link: function (scope, el, attrs, ngModelCtrl) {
          $(function () {
            var method = attrs.formvalidationSubmit || null

            el.validate({
              errorPlacement: function (error, element) {
                $(element).parent().append(error)
              },
              highlight: function (element, errorClass) {
                $(element).addClass(errorClass)
              },
              unhighlight: function (element, errorClass) {
                $(element).removeClass(errorClass)
              },
              submitHandler: function () {
                if (method) {
                  scope.$apply(scope.fn.apply(this, arguments))
                }
              }
            })
          })
        }
      }
    })

    .directive('datetimepicker', function () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, el, attrs, ngModelCtrl) {
          $(function () {
            var format = attrs.datetimepickerFormat || 'DD/MM/YYYY HH:mm:ss'
            var locale = attrs.datetimepickerLocale || 'en'

            el.datetimepicker({
              locale: locale,
              format: format,
              icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                next: 'fa fa-chevron-right',
                previous: 'fa fa-chevron-left'
              }
            })
            .on('dp.change', function (e) {
              ngModelCtrl.$setViewValue(e.date.format(format))
              scope.$apply()
            })
          })
        }
      }
    })

    .directive('datepicker', function () {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
          $(function () {
            element.datepicker({
              dateFormat: 'dd/mm/yy',
              changeMonth: true,
              changeYear: true,
              minDate: new Date('1941-12-31'),
              maxDate: new Date((new Date().getFullYear() - 18).toString() + '-12-31'),
              yearRange: '1902:' + window.moment().format('Y'),
              onSelect: function (date) {
                ngModelCtrl.$setViewValue(date)
                scope.$apply()
              }
            })
          })
        }
      }
    })
})(window.jQuery, window.angular)
