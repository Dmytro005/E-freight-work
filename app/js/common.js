/// Connect carousel

new WOW().init();

var carousel = $('.carousel').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false
});

//------Only desktop settings --------/
if ($("body").width() >= 800) {

    ///Smoothly scroll for anchor
    var options = {
        offset: 200
    }
    $("a").mPageScroll2id();
} 


//------Only mobile settings --------/
if ($("body").width() >= 800) {
    var carousel = $('.carousel').flickity({
        prevNextButtons: true,
    });
}

//------Carousel in section Problems setting Start-------//

//Carousel progressbar
var carousel = new Flickity('.carousel');
var progressBar = document.querySelector('.progress-bar');

$('.button-previous').css("opacity", "0.5");

//Displays number of carousel slides
$("#all").text(carousel.slides.length);
$("#current").text(carousel.selectedIndex + 1 + " /");


////Butttons Next Previous
$('.button-previous').on('click', function () {
    $(".carousel").flickity('previous');
});
$('.button-next').on('click', function () {
    $('.carousel').flickity('next');
});


//Carouser Progressbar
carousel.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    // console.log(progress);
    progressBar.style.width = progress * 100 + '%';

    //Previous button unavailable
    if ((carousel.selectedIndex + 1) < 2) {
        $('.button-previous').css("opacity", "0.5");
    } else {
        $('.button-previous').css("opacity", "1");
    }

    //Next button unavailable
    if ((carousel.selectedIndex + 1) == carousel.slides.length) {
        $('.button-next').css("opacity", "0.5");
    } else {
        $('.button-next').css("opacity", "1");
    }

    $("#current").text(carousel.selectedIndex + 1 + " /");
});


//Add scroll Top to #arrow
$("#arrow").on("click", function () {

    $('html,body').animate({
        scrollTop: $("#about").offset().top - (($(window).height() - $("#about").outerHeight(true)) / 2)
    }, 1000);
})

///Drop Down Team
$(".drop-down").click(function () {
    $("#team").fadeToggle();
    $(this).toggleClass("close");
    $("#about").toggleClass('.wrap');
})

//MENU mobile
jQuery(document).ready(function ($) {
    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content'),
        navigation = $('.cd-primary-nav'),
        toggleNav = $('.cd-nav-trigger');

    function Close() {
        toggleNav.removeClass('close-nav');
        $("body").css("overflow", "auto");
        overlayContent.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 500, 'easeInCubic', function () {
            navigation.removeClass('fade-in');

            overlayNav.children('span').velocity({
                translateZ: 0,
                scaleX: 0,
                scaleY: 0,
            }, 0);

            overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function () {
                    overlayContent.removeClass('is-hidden')
                });
            });
            if ($('html').hasClass('no-csstransitions')) {
                overlayContent.children('span').velocity({
                    translateZ: 0,
                    scaleX: 0,
                    scaleY: 0,
                }, 0, function () {
                    overlayContent.removeClass('is-hidden')
                });
            }
        });
    }

    function Open() {
        toggleNav.addClass('close-nav');
        $("body").css("overflow", "hidden");
        overlayNav.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 500, 'easeInCubic', function () {
            navigation.addClass('fade-in');
        });
    }

    //inizialize navigation and content layers
    layerInit();
    $(window).on('resize', function () {
        window.requestAnimationFrame(layerInit);
    });

    //open/close the menu and cover layers
    toggleNav.on('click', function () {
        if (!toggleNav.hasClass('close-nav')) {
            //it means navigation is not visible yet - open it and animate navigation layer
            Open();
        } else {
            //navigation is open - close it and remove navigation layer
            Close();
        }
    });

    function layerInit() {
        var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);

        overlayContent.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);
    }

    $(".click-menu").click(function () {
        Close();
    })
});

///Google map
function initMap() {

    var ExpeditionReinvented = {
        lat: 52.231136,
        lng: 21.003624
    };



    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: ExpeditionReinvented,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7c93a3"
            },
                    {
                        "lightness": "-10"
            }
        ]
    },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#a0a4a5"
            }
        ]
    },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#62838e"
            }
        ]
    },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#dde3e3"
            }
        ]
    },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#3f4a51"
            },
                    {
                        "weight": "0.30"
            }
        ]
    },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
            }
        ]
    },
            {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
            },
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#bbcacf"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "lightness": "0"
            },
                    {
                        "color": "#bbcacf"
            },
                    {
                        "weight": "0.50"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
            }
        ]
    },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
            }
        ]
    },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#a9b4b8"
            }
        ]
    },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "invert_lightness": true
            },
                    {
                        "saturation": "-7"
            },
                    {
                        "lightness": "3"
            },
                    {
                        "gamma": "1.80"
            },
                    {
                        "weight": "0.01"
            }
        ]
    },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
            }
        ]
    },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a3c7df"
            }
          ]

    }
              ]
    });

    var marker = new google.maps.Marker({
        position: ExpeditionReinvented,
        map: map
    });

    var contentString =
        '<div id="content"  style="text-align:center;" >' +
        '<div id="siteNotice">' + '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Headquarter</h1>' +
        '<div id="bodyContent">' +        
        '<a target="blank" href="https://goo.gl/maps/pkWxNiseZ7G2">Показати на мапі</a>' +
        '</div>';
    '' +
    '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: ExpeditionReinvented,
        map: map,
        title: 'Expedition Reinvented Headquarter'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}

//////Form 
//var inst = $('[data-remodal-id=form]').remodal();
//    $(document).ready(function () {
//        //E-mail Ajax Send
//        $("form").submit(function () { //Change
//            var th = $(this);
//            $.ajax({
//                type: "POST",
//                url: "../mail.php", //Change
//                data: th.serialize()
//            }).done(function () {
//                
//                inst.close();
//                
//                setTimeout(function () {
//                    th.trigger("reset");
//                }, 1000);
//            });
//            return false;
//        });
//
//    });
