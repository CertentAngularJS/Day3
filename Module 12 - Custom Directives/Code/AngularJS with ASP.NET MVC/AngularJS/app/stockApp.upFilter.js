(function () {
    angular.module('stockApp')
        .filter("upFilter", upFilter);

    function upFilter() {
        return function (data, amount) {
            if (typeof data === 'undefined' || typeof data[0].Change === 'undefined') return data;
            amount = amount || 0;

            var filtered = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].Change > amount) { filtered.push(data[i]); }
            }
            return filtered;
        };
    }
})();