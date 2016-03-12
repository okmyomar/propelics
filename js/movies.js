/*
* Create an array of objects (fill it with at least 10 elements) in which each object represents a movie . Each movie can
* have a title (String), starring (Array of Strings), isFavorite (Boolean) and Score (Number, can have decimals)
* properties

  Solution: Each time the user wants to see the list by a different order, array will be orderer according
  to the order topic the user wants.
*/

var MOVIES = [
  { title: 'Titanic', starring: ['Leonardo Dicaprio', 'Kane winslet'], isFavorite: true, score: 9 },
  { title: 'Amelie', starring: ['Audrey Tautou', 'Mathieu Kassovitz'], isFavorite: false, score: 10 },
  { title: 'The Shawshank Redemption', starring: ['Tim Robbins', 'Morgan Freeman'], isFavorite: true, score: 8.5 },
  { title: 'Cinema paradiso', starring: [' Philippe Noiret', 'Enzo Cannavale'], isFavorite: false, score: 9 },
  { title: 'Forest gump', starring: ['Tom Hanks', 'Robin Wright'], isFavorite: true, score: 7 },
  { title: 'Bridge of Spies', starring: ['Tom Hanks'], isFavorite: true, score: 6 },
  { title: 'Once upon a time in america', starring: [' Robert De Niro', 'James Woods'], isFavorite: true, score: 9.9 },
  { title: 'American history x', starring: ['Edward Norton', 'Edward Furlong'], isFavorite: true, score: 8 },
  { title: 'Pulp fiction', starring: ['John Travolta', 'Uma Thurman'], isFavorite: true, score: 7 },
  { title: 'Fight club', starring: ['Brad Pitt', 'Edward Norton'], isFavorite: false, score: 9.2 },
  { title: 'Gladiator', starring: [' Russell Crowe','Joaquin Phoenix'], isFavorite: true, score: 10 },
  { title: 'The origin', starring: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'], isFavorite: false, score: 6.5 }
]

function createListItme(title, starring, isFavorite, score) {
  var text = title + ', Starring: ' + starring + ' has a score of ' + score;
  var text = isFavorite ? text + ' (Favorite)' : text;
  var item = document.createElement("li");
  var nodeText = document.createTextNode(text);
  item.appendChild(nodeText);

  return item;
}

// Order function definitios, there are multiple ways for order the objects inside the movies array
var orders = {
  titleasc: function(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  },
  titledes: function (a, b) {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  },
  scoreasc: function(a, b) {
    if (a.score > b.score) return 1;
    if (a.score < b.score) return -1;
    return 0;
  },
  scoredes: function (a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  },
  isFavoriteasc: function(a, b) {
    if (a.isFavorite > b.isFavorite) return 1;
    if (a.isFavorite < b.isFavorite) return -1;
    return 0;
  },
  isFavoritedes: function (a, b) {
    if (a.isFavorite > b.isFavorite) return -1;
    if (a.isFavorite < b.isFavorite) return 1;
    return 0;
  },
}

function orderMovies() {
  var listMoviesNode = document.getElementById('movies-list');
  listMoviesNode.innerHTML = ''; // Always restart ul container
  var topic = document.getElementById('movie-topic');
  var order = document.getElementById('movie-order');
  var topicSelected = topic.options[topic.selectedIndex].value;
  var orderSelected = order.options[order.selectedIndex].value;
  var orderFunction = topicSelected + orderSelected;

  MOVIES.sort(orders[orderFunction]); // Order Array movies depending on user input

  for (var i = 0; i < MOVIES.length; i++) {
    var movie = MOVIES[i];
    var newItem = createListItme(movie.title, movie.starring, movie.isFavorite, movie.score);

    listMoviesNode.appendChild(newItem);
  }
}

document.getElementById('movies-trigger').addEventListener('click', orderMovies);

