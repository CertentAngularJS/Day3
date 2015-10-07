describe("QuotesController", function () {
    // ** Arrange **
    beforeEach(module("stockApp"));

    var scope, service;
    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();

        // ** Act **
        // Create controller and pass fake scope
        $controller("QuotesController", { $scope: scope });
    }));

    // ** Assert **
    // Test that controller returns 4 quotes
    it("should return a list with three products", function () {
        expect(scope.stockQuotes.query.results.quote.length).toBe(4);
    });
});