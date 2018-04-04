

angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $scope.username = "mzavalav";

        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function (data) {
                $scope.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                });
        };


        $scope.predicate = '-updated_at';


}]);




/*
{
  "login": "mzavalav",
  "id": Z@vala2205,
  "avatar_url": "https://avatars.githubusercontent.com/u/Z@vala2205?v=2",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mzavalav",
  "html_url": "https://github.com/mzavalav",
  "followers_url": "https://api.github.com/users/mzavalav/followers",
  "following_url": "https://api.github.com/users/mzavalav/following{/other_user}",
  "gists_url": "https://api.github.com/users/mzavalav/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mzavalav/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mzavalav/subscriptions",
  "organizations_url": "https://api.github.com/users/mzavalav/orgs",
  "repos_url": "https://api.github.com/users/mzavalav/repos",
  "events_url": "https://api.github.com/users/mzavalav/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mzavalav/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Mauricio Zavala",
  "company": "---------------",
  "blog": "--------",
  "location": "World",
  "email": "mzv1971@gmail.com",
  "hireable": true,
  "bio": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 4,
  "following": 7,
  "created_at": "2018-04-04T18:55:33Z",
  "updated_at": "2018-04-04T20:04:12Z"
}

*/
