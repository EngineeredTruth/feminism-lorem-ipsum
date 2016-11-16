angular.module('app').controller('Ctrl', ['$scope', 'srvc', function($scope,srvc){
  $scope.$watch('numWords', ()=>{
    $scope.lorem = srvc.generateLorem(srvc.feministlexicon, $scope.numWords, srvc.feministlexicon.length);
  })
  $scope.numWords = 0;
}])

//adding a comment
