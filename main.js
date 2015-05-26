/* global angular */

(function() {
'use strict';

angular
    .module('main', ['maDigicode'])
    .controller('ctrl', ctrl);
    
function ctrl() {
    this.title = "Type the code to unlock";
    this.count = 0;
    this.successCount = 0;
    this.failureCount = 0;
    this.pin = function() {
        this.count++;
        return "4444";
    }
    this.success = function() {
        this.successCount++;
        console.log('SUCCESS');
    }
    this.failure = function() {
        this.failureCount++;
        console.log('FAILURE');
    }
}
    
})();