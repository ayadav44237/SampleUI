// Define the AngularJS module and controller
angular.module('project', ['ngMaterial'])
  .controller('TeamController', function($scope) {
    $scope.adminUsers = [];
    $scope.accountUsers = [];
    $scope.newMember = {};

    // Function to add a new member
    $scope.addMember = function() {
      if ($scope.newMember.role === 'Admin') {
        $scope.adminUsers.push({
          name: 'New Admin',
          email: $scope.newMember.email
        });
      } else {
        $scope.accountUsers.push({
          name: 'New Account User',
          email: $scope.newMember.email
        });
      }
      $scope.newMember = {}; // Clear the form
    };

    // Placeholder functions for edit and delete
    $scope.editUser = function(user) {
      alert('Edit functionality coming soon!');
    };

    $scope.deleteUser = function(user) {
      alert('Delete functionality coming soon!');
    };
  });