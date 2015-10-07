angular.module('stockApp')
    .controller("QuotesController", QuotesController);

function QuotesController($scope, $filter, stockQuotes) {
    $scope.stockQuotes = stockQuotes;
    $scope.upStockQuotes = $filter("upFilter")(stockQuotes.query.results.quote, 2);
}