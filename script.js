var cantidad1 = 400
var cantidad2 = 0.12
var Luis = angular.module('Luis', []);
Luis.controller('Calculo', function($scope) {
  $scope.iva = cantidad1 * cantidad2;
}); 


