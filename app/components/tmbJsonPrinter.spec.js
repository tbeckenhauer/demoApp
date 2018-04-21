'use strict';

describe('Directive: tmpJsonPrinter', function () {
    var $compile,
        $rootScope,
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
        var element = makeNewDirective('<tmb-json-printer></tmb-json-printer>');
        expect(angular.element(element).is('data')).toBe(true);
    });

    describe('Number to li', () => {
        it('should print out a li tag for each key value<Number> pair of an object', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    a: 1,
                }
            });
            expect(angular.element('li', element).length).toBe(1);
        });
    });

    describe('String to li', () => {
        it('should print out a li tag for each key value<String> pair of an object', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    'Favorite Book': 'The Cat in the Hat',
                }
            });
            expect(angular.element('li', element).length).toBe(1);
        });
    })

    describe('objects to ul', () => {
        it('should print out an Object as an unordered list', () => {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: { }
            });
            expect(angular.element('ul', element).length).toBe(1);
        });

        it('should recursively print objects with ul', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    a: {
                        b: {}
                    },
                }
            });
            expect(angular.element('ul', element).length).toBe(3);
        });

        it('should recursively print out li tags for each key value<String> pair of an object', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    a: {
                        b: {
                            'Favorite Book3': 'The Cat in the Hat3',
                        },
                        'Favorite Book2': 'The Cat in the Hat2',
                    },
                    'Favorite Book1': 'The Cat in the Hat',
                }
            });
            expect(angular.element('ul', element).length).toBe(3);
            expect(angular.element('li', element).length).toBe(3);
        });

        it('should recursively print out li tags for each key value<String> pair of an object', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    'Favorite Book1': 'The Cat in the Hat',
                    a: {
                        'Favorite Book2': 'The Cat in the Hat2',
                        b: {
                            'Favorite Book3': 'The Cat in the Hat3',
                        },
                    },
                }
            });
            expect(angular.element('li', element).length).toBe(3);
        });

        it('should recursively print out li tags for each key value<String> pair of an object', function() {
            var element = makeNewDirective('<tmb-json-printer obj="obj"></tmb-json-printer>', {
                obj: {
                    'Favorite Book1': 'The Cat in the Hat',
                    'Favorite Book2': 'The Cat in the Hat2',
                    a: {
                        'Favorite Book3': 'The Cat in the Hat3',
                        'Favorite Book4': 'The Cat in the Hat4',
                    },
                }
            });
            expect(angular.element('li', element).length).toBe(4);
        });

    });
});
