/**
 * Created by Aron on 11.4.2016.
 */
var title = 'Tónleikar á Íslandi';
var errorcode = 'Því miður náðist ekki að sækja gögnin :/';
/**
 * Preloader svo að síðan sé ekki búin að loada á undan efninu
 */
jQuery(window).load(function() {
    // will first fade out the loading animation
    jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(1000).fadeOut("slow");
});


$('.main').html('<h1 class="text-center">' + title + '');
$.ajax({
    'url': 'https://apis.is/concerts',
    'type': 'GET',
    'dataType': 'json',
    'success': function(response) {
        for(var i = 0; i < response.results.length; i++){
            var data = response.results;
            var date = moment(data[i].dateOfShow).format('DD.MMMM YYYY, h:mm');
            $('.main').append('' +
                '<div class="col-sm-4 col-md-3">' +
                    '<div class="thumbnail">' +
                        '<img class="eventimage" src="' + data[i].imageSource + '">' +
                        '<div class="caption">' +
                            '<h4 class="ellipsis"><b>' + data[i].eventDateName + '</b></h4>' +
                            '<p>' + data[i].eventHallName + '</p>' +
                            '<small>' + date + '</small>' +
                        '</div>' +
                    '</div>' +
                '</div>');
            $("img").error(function () {
                $(this).unbind("error").attr("src", "image/missing.jpg");
            });

        }
    }
})
.fail(function() {
    $('.main').html('<h1 class="text-center">' + errorcode + '');
});




