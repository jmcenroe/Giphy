var topics = [
    'hot dog',
    'hamburger',
    'pizza',
    'sushi',
    'burrito',
    'taco',
    'chips',
    'broccoli',
    'tomato',
    'squash'
];

$(document).ready(funciton() {

    createButtons(topics);
    createInput();
});

funciton createButtons(array){
    $('body')
        .append($('<header>'));

    // Loops through array of buttons 
    for (i = 0; i < array.length; i++){
        var button = "<button class='btn' id='" + array[i] + "'>" + array[i];

        $('header').append($(button)
            .text(array[i])
            .on('click', function(){
                buttonClicked(this);
            })

        );

    }
}

function newButton(query){
    var button = "<button class='btn' id='" + query + "'>" + query;

    $('header').append($(button)
        .text(query)
        .on('click', function(){
            buttonClicked(this);
        })
    );
}

function createInput() {
    $('body').append($("<form class='search form'>"));

    $('search form')
        .append($("<label for='custom'>"))
        .append($("<input type='text' class='form control' id='custom'>"))
        .append($("<input class='btn' id='searchBtn' type='submit' value='Search'>"));

    $('label').text('Custom Search: ');

    $('searchBtn')
        .on('click', function() {
            event.preventDefault();
            buttonClicked($(this));
        })
        .text("Search");
}

function buttonClicked(Scope){
  var clicked = $(scope).attr('id');

  if (topics.indexOf(clicked) !== -1){
  gifSearch(clicked);
} else if (clicked === 'searchBtn'){
  searchBtnClicked();
  else {
    console.log('Oops- something\'s not right')
  }
}

function searchBtnClicked(){
  var query = $('custom').val();

  if (query === ''){
    console.log('You must type something into the search box.')
  } else {
    topics.push(query)

    newButton(query);

    $('custom').val(' ');

    gifSearch(query);
  }
}

funciton gifSearch(searchTerm){
  
  //Reset the container html every time gifSearch runs
  $('container').html("");

  //Append a new container to the body
  $('body').append($('<div class="main container">'));

  var apiKey = "e9f95e9854974af3ac89fd3e68fa0759",
    limit = 10,
    rating = 'rating=pg';

    var url = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&' + rating + '&api_key=' + 
    apiKey + '&limit' + limit;
}

//Animate and pause images on click
$('img').on('click', function(){
  var id = $(this).attr('id');

  if ($(this).attr('static') === 'true'){
    $(this).attr('src', data.data[id].images.fixed_width.url);
    $(this).attr('static', 'false');
  } else if {
    $(this).attr('src', data.data[id].images.fixed_width.url);
    $(this).attr("static", "true");
  } else {
    console.log('Oops- something\'s not right. Statci is: ' + 
      $(this).attr('static'));
  }
  });


  }
}

    }
  }  
}
