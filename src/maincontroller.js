app.controller("MainController", function($scope) {
    $scope.selectedPerson = 0;
    $scope.selectedGenre = null;
    $scope.people = [
        {
            id: 0,
            name: 'Leon',
            music: ['Rock', 'Metal', 'Dubstep', 'Electro'],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: ['Indie', 'Drumstep', 'Dubstep', 'Electro'],
            live: false
        },
        {
            id: 2,
            name: 'Harry',
            music: ['Rock', 'Metal', 'Trash Metal', 'Heavy Metal'],
            live: true

        },
        {
            id: 3,
            name: 'Allyce',
            music: ['Pop', 'RnB', 'Hip Hop'],
            live: true
        }
    ];

    $scope.newPerson = null;
    $scope.addNew = function(){
        if ($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
                    id: $scope.people.length,
                    name: $scope.newPerson,
                    live: true,
                    music: []
            });
        };
    }
});