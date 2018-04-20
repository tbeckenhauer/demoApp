'use strict';

describe('Directive: tmpJsonPrinter', function () {
    var $compile,
        $rootScope,
        makeNewScope,
        makeNewDirective;

    beforeEach(function () {
        module('demoApp');
        inject(function(_$compile_, _$rootScope_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;

            makeNewDirective = function (directive, props = {}) {
                let newScope = $rootScope.$new();
                Object.keys(props).forEach((k) => {
                    newScope[k] = props[k];
                });
                let element = $compile(directive)(newScope);
                newScope.$digest();
                return element;
            };
        });
    });

    it('should return an empty string if no json object is provided', function() {
        var element = makeNewDirective('<tmb-json-printer></tmb-json-printer>')
        expect(angular.element('ul', element).length).toBe(1);
    });

    it('should print out the key and value of an object as an li tag', function() {
        var element = makeNewDirective('<tmb-json-printer></tmb-json-printer>', {
            obj: { 'Key 1': 'Value 1' }
        });
        expect(angular.element('li', element).length).toBe(1);
    });

    it('should print out the keys and values of an object as li tags', function() {
        var element = makeNewDirective('<tmb-json-printer></tmb-json-printer>', {
            obj: {
                'Key 1': 'Value 1',
                'Key 2': 'Value 2',
            }
        });
        expect(angular.element('li', element).length).toBe(2);
    });

});
