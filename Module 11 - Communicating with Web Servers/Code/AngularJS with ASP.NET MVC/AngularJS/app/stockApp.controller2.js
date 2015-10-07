angular.module('stockApp')
    .controller("QuotesController", QuotesController);

function QuotesController($scope, stockQuotes) {
    $scope.stockQuotes = stockQuotes;
}