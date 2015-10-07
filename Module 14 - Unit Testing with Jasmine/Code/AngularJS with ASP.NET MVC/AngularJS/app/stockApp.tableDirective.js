(function () {
    angular.module('stockApp')
        .directive("stockappTable", stockappTable);

    function stockappTable() {
        return {
            templateUrl: "app/stockApp.quoteTable.html",
            scope: { quotes: "=" }
        };
    }
})();