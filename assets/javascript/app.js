$(document).ready(function() {

    var searchGifs = {
        searchTerms: ["cake", "presents", "music", "candles"],
        createButtons: function() {
            for (var i = 0; i < searchGifs.searchTerms.length; i++) {
                var newBtn = $('<button>');
                newBtn.attr("data-search", searchGifs.searchTerms[i]);
                newBtn.addClass("btn");
                newBtn.addClass("searchButtons");
                newBtn.text(searchGifs.searchTerms[i]);
                $('#searchButtonsContainer').append(newBtn);
            }
        },
        addSearchTerms: function(e) {
          e.preventDefault();
          var userTerm = $('#submitBox').val();

          if (searchGifs.searchTerms.indexOf(userTerm) < 0 && userTerm.length > 0) {
              searchGifs.searchTerms.push(userTerm);
              var newBtn = $('<button>');
              newBtn.attr("data-search", userTerm);
              newBtn.addClass("btn");
              newBtn.addClass("searchButtons");
              newBtn.text(userTerm);
              $('#searchButtonsContainer').append(newBtn);
          }

        },
        displayResults: function(e) {
            $('#showGIFS').empty();
            e.preventDefault();

            var userQuery = $(this).data('search');
            var key = "&api_key=dc6zaTOxFJmzC";
            var limit = "&limit=100"
            var reqUrl = "https://api.giphy.com/v1/gifs/search?q=" + userQuery + limit + key;
            // console.log(reqUrl);
            $.ajax({
                url: reqUrl,
                method: "GET"
            }).done(function(response) {

                for (var i = 0; i < response.data.length; i++) {
                    var gifContain = $('<div>');
                    gifContain.addClass('gifContainer');
                    var animateLink = response.data[i].images["fixed_height"].url;
                    var stillLink = response.data[i].images["fixed_height_still"].url;
                    var rating = response.data[i].rating;
                    console.log(rating);
                    var ratingSpan = $('<p>');
                    ratingSpan.addClass('gifRating');
                    ratingSpan.text("Rating: " + rating);
                    var newImg = $('<img>');
                    newImg.attr('src', stillLink);
                    newImg.attr('data-animate', animateLink);
                    newImg.attr('data-still', stillLink);
                    newImg.attr('data-state', "still")
                    newImg.addClass('gif');
                    gifContain.prepend(ratingSpan);
                    gifContain.append(newImg);

                    $('#showGIFS').append(gifContain);
                }

                $('.gif').on("click", function() {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr('src', $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr('src', $(this).data("still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
        },

    }
    searchGifs.createButtons();



    $('#submitTerm').click(searchGifs.addSearchTerms);
    $(document).on('click', '.searchButtons', searchGifs.displayResults);
});