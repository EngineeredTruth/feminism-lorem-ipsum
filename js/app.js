angular.module('app',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url:'/',
          templateUrl: './views/home.html',
          controller: 'Ctrl'
        })

        $urlRouterProvider.otherwise('/');

    })
