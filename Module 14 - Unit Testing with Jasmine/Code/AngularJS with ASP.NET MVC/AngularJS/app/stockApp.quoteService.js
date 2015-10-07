(function () {
    angular.module('stockApp')
        .constant("yahooFinanceWebServiceURL", {
            url: "https://query.yahooapis.com/v1/public/yql"
        })
        .service("quoteService", quoteService)
        .factory("quoteFactory", quoteFactory)
        .provider("quoteProvider", quoteProvider)
        .config(function(quoteProviderProvider) {
            quoteProviderProvider.setURL("https://query.yahooapis.com/v1/public/yql");
        });

    function quoteService($http, yahooFinanceWebServiceURL) {
        this.getQuotes = function () {
            var query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
            return getQuotes(query);
        }

        this.getQuote = function (symbol) {
            var query = 'select * from yahoo.finance.quote where symbol = ' + symbol;
            return getQuotes(query);
        }

        function getQuotes(query) {
            var config = {
                    params: {
                        q: query,
                        format: "json",
                        diagnostics: "true",
                        env: "store://datatables.org/alltableswithkeys",
                        callback: "JSON_CALLBACK"
                }
            };
            return $http.jsonp(yahooFinanceWebServiceURL.url, config);
        }
    }

    function quoteFactory($http, yahooFinanceWebServiceURL) {
        var factory = {};

        factory.getQuotes = function () {
            var query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
            return getQuotes(query);
        }

        factory.getQuote = function (symbol) {
            var query = 'select * from yahoo.finance.quote where symbol = ' + symbol;
            return getQuotes(query);
        }

        function getQuotes(query) {
            var config = {
                    method: "JSONP",
                    url: yahooFinanceWebServiceURL.url,
                    params: {
                        q: query,
                        format: "json",
                        diagnostics: "true",
                        env: "store://datatables.org/alltableswithkeys",
                        callback: "JSON_CALLBACK"
                    }
            };
            return $http(config);
        }
        return factory;
    }

    function quoteProvider() {
        var yahooFinanceWebServiceURL = { url: "" };
        this.setURL = function (url) {
            yahooFinanceWebServiceURL.url = url;
        }

        this.$get = function($http) {
            var factory = {};

            factory.getQuotes = function () {
                var query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
                return getQuotes(query);
            }

            factory.getQuote = function (symbol) {
                var query = 'select * from yahoo.finance.quote where symbol = ' + symbol;
                return getQuotes(query);
            }

            function getQuotes(query) {
                var config = {
                    method: "JSONP",
                    url: yahooFinanceWebServiceURL.url,
                    params: {
                        q: query,
                        format: "json",
                        diagnostics: "true",
                        env: "store://datatables.org/alltableswithkeys",
                        callback: "JSON_CALLBACK"
                    }
                };
                return $http(config);
            }
            return factory;
        }
    }
})();