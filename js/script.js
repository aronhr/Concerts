/**
 * Created by Aron on 11.4.2016.
 */

$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for (var i = response.results.length - 1; i >= 0; i--) {
                $('.main').append('' +
                    '<div class="col s12 m4">' +
                        '<div class="card">' +
                            '<div class="card-image">' +
                                '<img src="' + response.results[i].imageSource + '">' +
                                '<span class="card-title">' + response.results[i].eventDateName + '</span>' +
                            '</div>' +
                            '<div class="card-content">' +
                                '<p>' + response.results[i].eventHallName + '</p>' +
                                '<small>' + response.results[i].dateOfShow + '</small>' +
                            '</div>' +
                        '</div>' +
                    '</div>');
            }
        }
});