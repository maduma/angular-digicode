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
    this.pin = function() {
        this.count++;
        var deferred = $q.defer();
        $timeout(function(){
            deferred.resolve('4444');
        },400);
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