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

