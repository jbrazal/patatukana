

var app = angular.module('baybayin', [])
.controller('ctrl', function ($scope) {
    $scope.Names = allNames;
    $scope.chk_font4 = true;  //select default font
});


