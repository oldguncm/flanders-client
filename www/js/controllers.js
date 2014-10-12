angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $location) {
  $scope.login = function(username, password) {
    $rootScope.username = username;
    $location.path('/dash');
  }

  $scope.anonymous = function() {
    $rootScope.username = 'Anonymous';  
    $location.path('/dash');
  }
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
