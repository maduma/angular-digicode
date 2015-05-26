/* global angular */

(function() {
'use strict';

angular
    .module('main', ['digicode'])
    .controller('ctrl', ctrl);
    
function ctrl() {
    this.title = "Enter the code to unlock";
    this.count = 0;
    this.pin = function() {
        this.count++;
        return "4444";
    }
    this.success = function() {
        console.log('SUCCESS');
    }
    this.failure = function() {
        console.log('FAILURE');
    }
}
    
})();