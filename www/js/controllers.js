angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $location) {
  $scope.login = function(username, password) {
    $.ajax({
      type: 'POST',
      url: 'http://flanders.herokuapp.com/login',
      data: {
        username: username,
        password: password
      }
    }).done(function(results) {
      if (results.statusCode === 200) {
        var token = JSON.parse(results.body)

        $.ajax({
          type: 'POST',
          url: 'http://flanders.herokuapp.com/info',
          data: {
            access_token: token.access_token
          }
        }).done(function(results) {
          if (results.statusCode === 200) {
            $rootScope.currentUser = JSON.parse(results.body);
            $location.path('/friends');
          } else {
            alert('Authentication failure');
          }
        });
      } else {
        alert('Authentication failure');
      }
    });
  }

  $scope.anonymous = function() {
    $rootScope.username = 'Anonymous';  
    $location.path('/friends');
  }
})

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  // $scope.friends = Friends.all();

  $('.compose input').focusin(function() {
    $('.tabs').css('height', '0px');
    $('.compose').css('bottom', '0px');
  });

  $('.compose input').focusout(function() {
    $('.tabs').css('height', '75px');
    $('.compose').css('bottom', '75px');
  });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
