app.controller('mainController', function ($scope, API) {
    $scope.translate = {
        query: null,
        lang: 'en-ru'
    }
    $scope.lang = [{
        title: 'Английский-Русский',
        value: 'en-ru' },
        {
            title: 'Русский-Английский',
            value: 'ru-en'
        },
        {
            title: 'Русский-Украинский',
            value: 'ru-uk'
        },{
            title: 'Украинский-Русский',
            value: 'uk-ru'
        }
    ]
    $scope.translateIt = function () {
        API.getAPI($scope.translate).then(function(vocabulary_data){
            console.log(vocabulary_data);
            $scope.translateResult = vocabulary_data.def[0].tr;
            $scope.translateExample = vocabulary_data.def.ex;
            $scope.synonimsResult =  vocabulary_data.def[0].tr;
            console.log($scope.translateResult);
            console.log($scope.synonimsResult);
        })
    }
    $scope.translateResult =[];
    $scope.translateExample = [];
    $scope.synonimsResult = []
})

app.controller('SynonymController', function ($scope, API) {
    $scope.translate = {
        query: null,
        lang: 'en-ru'
    }
    $scope.lang = [{
        title: 'Русский',
        value: 'ru-ru' },
        {
            title: 'Английский',
            value: 'en-en'
        },
        {
            title: 'Украинский',
            value: 'uk-uk'
        }
    ]
    $scope.translateIt = function () {
        API.getAPI($scope.translate).then(function(vocabulary_data){
            console.log(vocabulary_data);
            $scope.translateResult = vocabulary_data.def[0].tr;
            $scope.translateExample = vocabulary_data.def.ex;
            $scope.synonimsResult =  vocabulary_data.def[0].tr;
            console.log($scope.translateResult);
            console.log($scope.synonimsResult);
        })
    }
    $scope.translateResult =[];
    $scope.translateExample = [];
    $scope.synonimsResult = [];
})