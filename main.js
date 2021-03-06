/* global angular */

(function() {
'use strict';

angular
    .module('main', ['maDigicode'])
    .controller('ctrl', ctrl);
    
ctrl.$inject = ['$q', '$timeout'];
    
function ctrl($q, $timeout) {
    this.title = "Type the code to unlock";
    this.count = 0;
    this.successCount = 0;
    this.failureCount = 0;
    this.checkPin = function(pin) {
        this.count++;
        var deferred = $q.defer();
        $timeout(function(){
            if (pin === "4444") {
                deferred.resolve(true);
            } else {
                deferred.reject(false);
            }
        },150);
        return deferred.promise;
    };
    this.success = function() {
        this.successCount++;
        console.log('SUCCESS');
    };
    this.failure = function() {
        this.failureCount++;
        console.log('FAILURE');
    };
}
    
})();