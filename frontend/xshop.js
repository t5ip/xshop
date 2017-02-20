var app = angular.module('xshop', [])
app.controller('getAllApple', function($scope, $http) {
    $http.get('http://127.0.0.1:8080/xshop/getall/apple/').
        then(function(response) {
            $scope.data = response.data;
        });
});
// @todo: write controllers for all quicksearch buttons: macbook, ipad, iphone, thinkbook etc. Just vary the last 
// term in the route (after keyword). Or can keyword be given as a parameter to controller in angular.js?
app.controller('getByKeyword', function($scope, $http) {

    $scope.keyword = 'macbook';

    $scope.keywordQuery = function (keyword) {
        var uriString = 'http://127.0.0.1:8080/xshop/startdate/all/enddate/all/startprice/all/endprice/all/region/all/keyword/' + keyword + '/';
        $http.get(uriString).
            then(function(response) {
                $scope.data = response.data;
            });
        $scope.keyword = keyword;
    };
});
