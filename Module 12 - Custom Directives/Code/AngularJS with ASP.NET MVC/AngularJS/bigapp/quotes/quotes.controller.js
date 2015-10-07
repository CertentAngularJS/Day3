angular.module('stockApp.quotes')
    .controller("QuotesController", QuotesController);

function QuotesController($scope) {
    // https://developer.yahoo.com/yql/console
    // select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")
    // https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=jsonp
    $scope.stockQuotes = {
        "query": {
            "count": 4,
            "created": "2015-10-06T12:41:31Z",
            "lang": "en-US",
            "diagnostics": {
                "url": [
                 {
                     "execution-start-time": "0",
                     "execution-stop-time": "197",
                     "execution-time": "197",
                     "content": "http://www.datatables.org/yahoo/finance/quote/yahoo.finance.quote.xml"
                 },
                 {
                     "execution-start-time": "201",
                     "execution-stop-time": "212",
                     "execution-time": "11",
                     "content": "http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT"
                 }
                ],
                "publiclyCallable": "true",
                "cache": {
                    "execution-start-time": "199",
                    "execution-stop-time": "200",
                    "execution-time": "1",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "5d1e1de680846a307c9874dc3d6878dc"
                },
                "query": {
                    "execution-start-time": "200",
                    "execution-stop-time": "213",
                    "execution-time": "13",
                    "params": "{url=[http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT]}",
                    "content": "select * from csv where url=@url and columns='Ask,AverageDailyVolume,Bid,AskRealtime,BidRealtime,BookValue,Change&PercentChange,Change,Commission,Currency,ChangeRealtime,AfterHoursChangeRealtime,DividendShare,LastTradeDate,TradeDate,EarningsShare,ErrorIndicationreturnedforsymbolchangedinvalid,EPSEstimateCurrentYear,EPSEstimateNextYear,EPSEstimateNextQuarter,DaysLow,DaysHigh,YearLow,YearHigh,HoldingsGainPercent,AnnualizedGain,HoldingsGain,HoldingsGainPercentRealtime,HoldingsGainRealtime,MoreInfo,OrderBookRealtime,MarketCapitalization,MarketCapRealtime,EBITDA,ChangeFromYearLow,PercentChangeFromYearLow,LastTradeRealtimeWithTime,ChangePercentRealtime,ChangeFromYearHigh,PercebtChangeFromYearHigh,LastTradeWithTime,LastTradePriceOnly,HighLimit,LowLimit,DaysRange,DaysRangeRealtime,FiftydayMovingAverage,TwoHundreddayMovingAverage,ChangeFromTwoHundreddayMovingAverage,PercentChangeFromTwoHundreddayMovingAverage,ChangeFromFiftydayMovingAverage,PercentChangeFromFiftydayMovingAverage,Name,Notes,Open,PreviousClose,PricePaid,ChangeinPercent,PriceSales,PriceBook,ExDividendDate,PERatio,DividendPayDate,PERatioRealtime,PEGRatio,PriceEPSEstimateCurrentYear,PriceEPSEstimateNextYear,Symbol,SharesOwned,ShortRatio,LastTradeTime,TickerTrend,OneyrTargetPrice,Volume,HoldingsValue,HoldingsValueRealtime,YearRange,DaysValueChange,DaysValueChangeRealtime,StockExchange,DividendYield'"
                },
                "javascript": {
                    "execution-start-time": "199",
                    "execution-stop-time": "242",
                    "execution-time": "43",
                    "instructions-used": "193590",
                    "table-name": "yahoo.finance.quote"
                },
                "user-time": "244",
                "service-time": "209",
                "build-version": "0.2.240"
            },
            "results": {
                "quote": [
                 {
                     "symbol": "YHOO",
                     "AverageDailyVolume": "16741600",
                     "Change": "+0.14",
                     "DaysLow": "30.35",
                     "DaysHigh": "31.20",
                     "YearLow": "27.20",
                     "YearHigh": "52.62",
                     "MarketCapitalization": "29.04B",
                     "LastTradePriceOnly": "30.85",
                     "DaysRange": "30.35 - 31.20",
                     "Name": "Yahoo! Inc.",
                     "Symbol": "YHOO",
                     "Volume": "12883405",
                     "StockExchange": "NMS"
                 },
                 {
                     "symbol": "AAPL",
                     "AverageDailyVolume": "61316800",
                     "Change": "+0.40",
                     "DaysLow": "109.07",
                     "DaysHigh": "111.37",
                     "YearLow": "92.00",
                     "YearHigh": "134.54",
                     "MarketCapitalization": "631.75B",
                     "LastTradePriceOnly": "110.78",
                     "DaysRange": "109.07 - 111.37",
                     "Name": "Apple Inc.",
                     "Symbol": "AAPL",
                     "Volume": "52190261",
                     "StockExchange": "NMS"
                 },
                 {
                     "symbol": "GOOG",
                     "AverageDailyVolume": "2586690",
                     "Change": "+14.56",
                     "DaysLow": "627.00",
                     "DaysHigh": "643.01",
                     "YearLow": "486.23",
                     "YearHigh": "678.64",
                     "MarketCapitalization": "439.75B",
                     "LastTradePriceOnly": "641.47",
                     "DaysRange": "627.00 - 643.01",
                     "Name": "Alphabet Inc.",
                     "Symbol": "GOOG",
                     "Volume": "1803930",
                     "StockExchange": "NMS"
                 },
                 {
                     "symbol": "MSFT",
                     "AverageDailyVolume": "34280700",
                     "Change": "+1.06",
                     "DaysLow": "45.70",
                     "DaysHigh": "46.89",
                     "YearLow": "39.72",
                     "YearHigh": "50.05",
                     "MarketCapitalization": "372.95B",
                     "LastTradePriceOnly": "46.63",
                     "DaysRange": "45.70 - 46.89",
                     "Name": "Microsoft Corporation",
                     "Symbol": "MSFT",
                     "Volume": "34373686",
                     "StockExchange": "NMS"
                 }
                ]
            }
        }
    };
}