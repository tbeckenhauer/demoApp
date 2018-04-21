'use strict';

/**
 * @ngdoc function
 * @name demoApp.directive:tmbJsonPrinter
 * @description
 * # AboutCtrl
 * Directive capable of printing out json.
 * obj -> ul + li
 * arr -> ol + li
 * key/val -> dl dt dd
 */
angular.module('demoApp').directive('tmbJsonPrinter', function(Cards, Shuffle, Lodash) {
    return {
        scope: {
            obj: '=obj'
        },
        replace: true,
        template: '<data class="tmbJsonPrinter"></data>',
        link: function (scope, element, attrs, controller, transcludeFn) {
            scope.$watch('obj', function() {
                attachObjToElement(element, 'obj', scope.obj);
            });

            function attachObjToElement (elem, key, value) {
                let curElem;
                if(Lodash.isObject(value)) {
                    curElem = angular.element(elem).append('<ul></ul>');
                    curElem = angular.element('ul', curElem);
                    Object.keys(value).forEach((k) => {
                        attachObjToElement(curElem, k, value[k]);
                    });
                } else if (Lodash.isNumber(value)) {
                    attachLi(elem, key, value);
                } else if (Lodash.isString(value)) {
                    attachLi(elem, key, value);
                }
            }

            function attachLi(elem, key, value) {
                angular.element(elem).append(`
                    <li>
                        <dl>
                            <dt>${key}</dt>
                            <dd>${value}</dd>
                        </dl>
                    </li>`)
            }
        }
    };
});
