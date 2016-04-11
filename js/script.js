/**
 * Created by Aron on 11.4.2016.
 */
var title = 'Tónleikar á Íslandi';

$('.main').html('<h1 class="center">' + title + '');
$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for (var i = response.results.length - 1; i >= 0; i--) {
                $('.main').append('' +
                    '<div class="col s12 m3">' +
                        '<div class="card">' +
                            '<div class="card-image">' +
                                '<img src="' + response.results[i].imageSource + '">' +
                            '</div>' +
                            '<div class="card-content">' +
                                '<span class="card-title">' + response.results[i].eventDateName + '</span>' +
                                '<p>' + response.results[i].eventHallName + '</p>' +
                                '<small>' + response.results[i].dateOfShow + '</small>' +
                            '</div>' +
                        '</div>' +
                    '</div>');
            $("img").error(function () {
                $(this).unbind("error").attr("src", "image/missing.jpg");
            });
            }
        }
});

