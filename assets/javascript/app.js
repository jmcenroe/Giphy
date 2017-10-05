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

$(document).ready(funciton(){

    createButtons(topics);
    createInput();
});

funciton createButtons(array) {
    $('body')
        .append($('<header>'));

    // Loops through array of buttons 
    for (i = 0; i < array.length; i++) {
        var button = "<button class='btn' id='" + array[i] + "'>" + array[i];

        $('header').append($(button)
            .text(array[i])
            .on('click', function() {
                buttonClicked(this);
            })

        );

    }
}

function newButton(query) {
    var button = "<button class='btn' id='" + query + "'>" + query;

    $('header').append($(button)
        .text(query)
        .on('click', function() {
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

    $('label').text('Custom Search:');

    $('searchBtn')
        .on('click', function() {
            event.preventDefault();
            buttonClicked($(this));
        })
        .text("Search");
}

