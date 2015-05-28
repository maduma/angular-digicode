/* global angular */

(function() {
'use strict';

angular
    .module('maDigicode', ['ngMaterial', 'ngAnimate', 'maUnderscore'])
    .directive('digicode', digicode);
    
digicode.$inject = ['underscore', '$animate'];
    
function digicode(_, $animate) {

    var codes = [];
    var tryCount = 0;
    var maxTry = 1;
    
    var htmlTemplate = [
        '<div class="digicode box-shadow">',
        '  <div layout="column">',
        '    <div layout="row" ng-repeat="row in [0, 3, 6]">',
        '      <md-button class="md-fab md-primary" ng-repeat="col in [0, 1, 2]" ng-click="ctrl.check(ctrl.order[col + row])">',
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
            pin: '&',
            success: '&',
            failure: '&'
        },
        controller: ctrl,
        controllerAs: 'ctrl'
    };
    
    ctrl.$inject = ['$element'];
    
    return directive;
    
    // shaking animation
    function shake(element) {
        $animate.addClass(element, 'shake').then(function() {
            $animate.removeClass(element, 'shake');
        });
    }
    
    function ctrl($element) {
        var self = this;
        // shuffle the digicode
        self.order = _.shuffle(_.range(1,10));
        // override default value maxTry
            if (typeof self.maxTry !== 'undefined') {
            maxTry = parseInt(self.maxTry, 10);
        } 
        // check the pin
        self.check = function(code) {
            codes.push(code);
            if (codes.length === 4) {
                tryCount++;
                if (codes.join('') === self.pin()) {
                    tryCount = 0;
                    self.success();
                } else {
                    shake($element);
                    if(tryCount === maxTry) {
                        tryCount = 0;
                        self.failure();
                    }
                }
                codes = [];
                self.order = _.shuffle(_.range(1,10));
            }
        };
    }
    
}

})();