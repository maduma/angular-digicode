/* global angular */

(function() {
'use strict';

angular
    .module('maUnderscore', [])
    .factory('underscore', underscore);

function underscore() {
    return window._;
}

})();