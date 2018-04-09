var jsCalculator = angular.module('jsCalculator',[]);


jsCalculator.controller('calController',['$scope',function($scope){

 $scope.number = '';
 $scope.array = [];
 $scope.symbol = [];
 $scope.total = 0;

  $scope.addNum = function(num){
    if ($scope.total == 0){
    $scope.number += num;
    console.log($scope.number);
  }
  };

  $scope.add = function(){
    if($scope.number){
      $scope.array.push($scope.number);
      $scope.symbol.push('+');
      $scope.number = '';
    }
    if ($scope.total != 0 && $scope.total != NaN){
      $scope.array.push($scope.total.toString());
      $scope.symbol.push('+');
      $scope.total = 0;
    }
  };

  $scope.subtract = function(){
    if($scope.number){
    $scope.array.push($scope.number);
    $scope.symbol.push('-');
    $scope.number = '';
    }
    if ($scope.total != 0 && $scope.total != NaN){
      $scope.array.push($scope.total.toString());
      $scope.symbol.push('-');
      $scope.total = 0;
    }
  };

  $scope.multiply = function(){
    if($scope.number){
    $scope.array.push($scope.number);
    $scope.symbol.push('*');
    $scope.number = '';
    }
    if ($scope.total != 0 && $scope.total != NaN){
      $scope.array.push($scope.total.toString());
      $scope.symbol.push('*');
      $scope.total = 0;
    }

  };

  $scope.divide = function(){
    if($scope.number){
    $scope.array.push($scope.number);
    $scope.symbol.push('/');
    $scope.number = '';
    }
    if ($scope.total != 0 && $scope.total != NaN){
      $scope.array.push($scope.total.toString());
      $scope.symbol.push('/');
      $scope.total = 0;
    }

  };

  $scope.allClear = function(){
    $scope.array = [];
    $scope.symbol = [];
    $scope.number = '';
    $scope.total = 0;

  };

  $scope.clearEntry = function(){

    if ($scope.number){
      $scope.number = ''
    } else if ($scope.symbol[($scope.symbol.length-1)] == '='){
      //do nothing
    } else {
      $scope.symbol.pop();
    };

  };

  $scope.equal = function() {
    if($scope.total != 0) {
      return $scope.total;
    }
    if ($scope.number == ''){
      return
    }
    $scope.array.push($scope.number);
    $scope.total = parseFloat($scope.array[0]);
    //$scope.array = [];

    for( var i=1; i< $scope.array.length; i++){
        if(($scope.symbol)[i-1] == '+'){
          $scope.total +=  parseFloat($scope.array[i]);
          //console.log($scope.total);
        }
        if(($scope.symbol)[i-1] == '-'){
          $scope.total -=  parseFloat($scope.array[i]);
        }
        if(($scope.symbol)[i-1] == '*'){
          $scope.total *=  parseFloat($scope.array[i]);
        }
        if(($scope.symbol)[i-1] == '/'){
          $scope.total /=  parseFloat($scope.array[i]);
        }


    };
    console.log($scope.array);
    $scope.array1 = $scope.array;
    console.log($scope.symbol);
    $scope.symbol1 = $scope.symbol;
    console.log($scope.total);
    $scope.total1 = $scope.total;
    $scope.len1 = $scope.array.length;

    $scope.symbol = [];
    $scope.array = [];
    $scope.number = '';
    return $scope.total;

  };







  }]);
