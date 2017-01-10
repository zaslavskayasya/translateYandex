app.config(function ($routeProvider) {
    $routeProvider.when('/translate', {
        controller: 'mainController',
        templateUrl: 'templates/trnslate.html'
    }).when('/about', {
        controller: '',
        templateUrl: 'templates/about.html'
    }).when('/synonyms' , {
        controller: 'SynonymController',
        templateUrl: 'templates/synonym.html'
    }).when('/contacts', {
        controller: '',
        templateUrl: 'templates/contacts.html'
    })
});