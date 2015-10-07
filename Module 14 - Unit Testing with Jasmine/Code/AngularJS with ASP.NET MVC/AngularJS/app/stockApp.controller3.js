angular.module('stockApp')
    .controller("QuotesController", QuotesController);

function QuotesController($scope, quoteService, quoteFactory, quoteProvider) {
    /*quoteService.getQuotes()
        .success(function (data) { $scope.stockQuotes = data; })
        .error(function () { console.log("Failed to Load Data"); });*/

   /*quoteFactory.getQuotes()
        .success(function (data) { $scope.stockQuotes = data; })
        .error(function () { console.log("Failed to Load Data"); });*/

    quoteProvider.getQuotes()
        .success(function (data) { $scope.stockQuotes = data; })
        .error(function () { console.log("Failed to Load Data"); });
}