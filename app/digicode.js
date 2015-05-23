/* global angular */

(function() {
'use strict';

angular
    .module('digicode', ['ngMaterial', 'ngAnimate', 'ngUnderscore'])
    .directive('digicode', digicode);
    
digicode.$inject = ['underscore', '$animate'];   
    
function digicode(_, $animate) {

    var codes = [];
    var numberOfTry = 0;
    var maxTry = 3;
    
    return {
        templateUrl: 'app/digicode.html',
        scope: {},
        controller: ctrl,
        controllerAs: 'ctrl',
        bindToController: true
    };
    
    // should be taken as attribute
    function pin() {
        return "1234";
    }
    
    
    function ctrl($scope, $element) {
        var self = this;
        // shuffle the digicode
        this.order = _.shuffle(_.range(1,10));
        
        
        this.check = function(code) {
            codes.push(code);
            if (codes.length === 4) {
                if (codes.join('') === pin()) {
                    console.log("sucess");
                    // success callback
                } else {
                    console.log("failure");
                    // shaking animation
                    $animate.addClass($element, 'shake').then(function() {
                        $animate.removeClass($element, 'shake');
                        self.order = _.shuffle(_.range(1,10));
                        $scope.$apply();
                    });
                    
                    numberOfTry++;
                    if(numberOfTry === maxTry) {
                        console.log("too many failure quit");
                        //failure callback
                    }
                }
                codes = [];
            }
        };
    }
    
}

})();