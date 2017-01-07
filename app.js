var app = angular.module('vocabulary', []);

app.service('API', function ($http, $q) {
    return {
        getAPI: function (translateQuery) {
            var d = $q.defer();
            $http({
                method: 'GET',
                url: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup',
                params: {
                    key: 'dict.1.1.20170104T191253Z.8df3b0ecb8fe5e10.1a029dbf22ca29197d81e609184b2b03d9ca60c1',
                    lang: translateQuery.lang,
                    text: translateQuery.query
                }
            }).then(function (data) {
                console.log(data);
                var vocabulary_data = data.data;
                d.resolve(vocabulary_data)
            })
            return d.promise;
        }
    }
})

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