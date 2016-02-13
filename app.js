angular.module('editableDirective', [])
    .directive('makeEditable', function () {
        return {
            scope: true,
            transclude: true,
            templateUrl: 'make-editable.html'
        }
    })