/* global angular */

(function() {
'use strict';

angular
    .module('maDigicode', ['ngMaterial', 'ngAnimate', 'maUnderscore'])
    .directive('digicode', digicode);
    
digicode.$inject = ['underscore', '$animate'];
    
function digicode(_, $animate) {

    var digits = [];
    var tryCount = 0;
    var maxTry = 1;
    
    var htmlTemplate = [
        '<div class="ma-digicode">',
        '  <div layout="column">',
        '    <div layout="row" ng-repeat="row in [0, 3, 6]">',
        '      <md-button ng-disabled="ctrl.isDisabled" id="ma-digicode-{{ ctrl.order[col + row] }}" class="md-fab md-primary" ng-repeat="col in [0, 1, 2]" ng-click="ctrl.appendDigit(ctrl.order[col + row])">',
        '          {{ ctrl.order[col + row] }}',
        '      </md-button>',
        '    </div>',
        '  </div>',
        '</div>'
        ].join('');
    
    var directive = {
        restrict: 'E',
        template: htmlTemplate,
        scope: {},
        bindToController: {
            maxTry: '@',
            checkPin: '&', // return a promise
            success: '&',
            failure: '&'
        },
        controller: ctrl,
        controllerAs: 'ctrl'
    };
    
    ctrl.$inject = ['$element'];
    
    return directive;
    
    // animation
    function shake(element) {
        $animate.addClass(element, 'shake').then(function() {
            $animate.removeClass(element, 'shake');
        });
    }
    
    // return true if one element of the same index is equal
    function isOneElementEqual(list1, list2) {
        for (var i in list1) {
            if (list1[i] === list2[i]) {
                return true;
            }
        }
        return false;
    }
    
    function ctrl($element) {
        var self = this;
        
        // shuffle the digicode
        self.order = _.shuffle(_.range(1,10));
        
        // override default value maxTry
        if (typeof self.maxTry !== 'undefined') {
            maxTry = parseInt(self.maxTry, 10);
        } 
        
        // prevent input when checking the pin
        self.isDisabled = false;
        
        // click append a digit to the pin code
        self.appendDigit = function(digit) {
            digits.push(digit);
            
            // check the pin code
            if (digits.length === 4) {
                
                tryCount++;
                self.isDisabled = true;
                
                var enteredPin = digits.join('');
                var promise = self.checkPin({pin: enteredPin});
                
                var isUnlock = false;
                promise.then(function(isCorrect) {
                    if (isCorrect) {
                        isUnlock = true;
                    }
                });
                promise.finally(function() {
                    if (isUnlock) {
                        tryCount = 0;
                        self.success();
                    } else {
                        shake($element);
                        if(tryCount === maxTry) {
                            tryCount = 0;
                            self.failure();
                        }
                    }
                    digits = [];
                    self.isDisabled = false;
                });
                
                // shuffle until all elements change
                var originalList = self.order;
                do {
                    self.order = _.shuffle(_.range(1,10));
                } while (isOneElementEqual(originalList, self.order))
            }
        };
    }
    
}

})(); 