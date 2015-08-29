angular
  .module('app')
  .factory('AuthService', ['Meeter', '$q', '$rootScope', function(User, $q,
      $rootScope) {
    function login(email, password) {
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(user) {
      return User
        .create({
          email: user.email,
          password: user.password,
          age: user.age,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          description: user.description,
          photo: user.photo,
          occupation:user.occupation,
          phoneNumber:user.phoneNumber,
          favorites:{
            "ncaaf": user.favorites.ncaaf,
            "nfl": user.favorites.nfl,
            "ncaab": user.favorites.ncaab,
            "nba": user.favorites.nba,
            "mlb": user.favorites.mlb,
            "nhl": user.favorites.nhl,
            "soccer": user.favorites.soccer,
            "pga": user.favorites.pga,
            "sportsDontMatter": user.favorites.sportsDontMatter,
            "hipHopRap": user.favorites.hipHopRap,
            "rockAlternative": user.favorites.rockAlternative,
            "pop": user.favorites.pop,
            "randb": user.favorites.randb,
            "country": user.favorites.country,
            "latin": user.favorites.latin,
            "edm": user.favorites.edm,
            "actionAdventure": user.favorites.actionAdventure,
            "comedy": user.favorites.comedy,
            "romance": user.favorites.romance,
            "drama": user.favorites.drama,
            "horrorThrillers": user.favorites.horrorThrillers,
            "documentaries": user.favorites.documentaries,
            "classicFilms": user.favorites.classicFilms,
            "americanFood": user.favorites.americanFood,
            "mexicanFood": user.favorites.mexicanFood,
            "asian": user.favorites.asian,
            "mediterraneanGreek":user.favorites.mediterraneanGreek,
            "italian": user.favorites.italian,
            "vegetarian": user.favorites.vegetarian,
            "glutenFree": user.favorites.glutenFree,
            "politics": user.favorites.politics,
            "smoking": user.favorites.smoking,
            "drinking": user.favorites.drinking,
          }
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
