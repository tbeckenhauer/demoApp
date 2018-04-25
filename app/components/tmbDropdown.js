angular.module('demoApp')
    .directive('tmbDropdown', ['settings', function (settings) {
        return {
            controller: function ($scope) {
                settings.listenTo('uistyle', function(uistyle) {
                    $scope.uistyle = uistyle.id;
                });
            },
            replace: true,
            templateUrl: 'components/tmbDropdown.html',
            scope: {
                label: '@',
                currentOption: '=',
                onChange: '&',
                options: '='
            }
        }
    }]);
