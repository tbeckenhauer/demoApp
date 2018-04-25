angular.module('demoApp')
    .directive('tmbDashboardButton', ['settings', function (settings) {
        return {
            controller: function ($scope) {
                settings.listenTo('uistyle', function(uistyle) {
                    $scope.uistyle = uistyle.id;
                });
            },
            replace: true,
            templateUrl: 'components/tmbDashboardButton.html',
            scope: {
                execCmd: '&',
                cmdVal: '@'
            }
        }
    }]);
