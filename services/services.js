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