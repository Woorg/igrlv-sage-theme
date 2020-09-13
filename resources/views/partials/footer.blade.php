@php

	/*
		Social networks
	*/

  $youtube  = get_option('options_youtube');
  $vk       = get_field('vk', 'option');
  $telegram = get_field('telegram', 'option');
  $skype    = get_field('skype', 'option');
  $email    = get_field('email', 'option');

@endphp


<!-- begin footer-->
<footer class="footer">
	<div class="footer__row container flex flex_start flex_vertical">
		<div class="footer__copyright"><span>&copy;</span>{{ date('Y') }} {{ bloginfo('name') }}</div>

	</div>

</footer>
<!-- end footer-->


	<!-- <div id="popup-success" class="popup mfp-hide">
		<div class="popup__top">
			<button type="button" class="popup__close">x</button>
		</div>
		<div class="popup__body">
			<div class="popup__text text">Спасибо, ваше сообщение отправлено. <br/>В ближайшее время я с вами свяжусь.</div>
		</div>
	</div>

  <div id="popup-error" class="popup mfp-hide">
    <div class="popup__top">
      <button type="button" class="popup__close">x</button>
    </div>
    <div class="popup__body">
      <div class="popup__text text">Отправка не удалась.</div>
    </div>
  </div> -->


@php
  $lat = get_field( 'lat', 'option' );
  $lng = get_field( 'lng', 'option' );

@endphp


<script>
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: {{ floatval($lat) }}, lng: {{ floatval($lng) }} };
  // The map, centered at Uluru
  var map = new google.maps.Map( document.getElementById('map'), {
      zoom: 15,
      center: uluru,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
    ]
    }
  );
  // The marker, positioned at Uluru
  // var marker = new google.maps.Marker({position: uluru, icon: '<?php //echo $marker['url']; ?>', map: map});
};
</script>

{{ wp_footer() }}


	</body>
</html>
