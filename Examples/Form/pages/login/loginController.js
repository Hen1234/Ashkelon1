// login controller
// angular.module("myApp")
// .controller("loginController", function ($scope) {
//     $scope.submit = function(){
//         $scope.answer = "Submitted! you entered: " + $scope.uname
//     };
// });

// login controller
angular.module("myApp")
.controller("loginController", function ($scope, $http) {
    
    //var $ctrl = this;
    
    // $scope.submit = function(){
    //     $scope.answer = "Submitted! you entered: " + $scope.uname
    // };

    // $ctrl.$onInit = function() {
        $http({
            // method: 'GET',
            // url: 'http://localhost:3000/Users/select'
            method:'POST',
            url: 'http://localhost:3000/Users/login',
            data: {
                // username: "hen2",
                // password: "123"
                "username": "hen2",
                "password":"123"
            }


        }).then(function (response) {
            $scope.records = response.data;
            console.log(response.data);
        }, function(response) {
            $scope.records = response.statusText;
        });
    //}
});



