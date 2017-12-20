/* Map function */
function init_map() {
    var myOptions = {
        zoom: 10,
        center: new google.maps.LatLng(43.34250249999999, 5.437152200000014),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(43.34250249999999, 5.437152200000014)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>Passerelle Numérique</strong><br>Ecole Centrale Marseille<br>'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);

/* Form function */
function verifForm() {
    if (document.getElementById('firstName').value == "") {
        alert("Veuillez entrer votre prénom ");
        valid = false;
        return valid;
    }

    if (document.getElementById('lastName').value == "") {
        alert("Veuillez entrer votre nom ");
        valid = false;
        return valid;
    }

    if (document.getElementById('courriel').value == "") {
        alert("Veuillez entrer votre email ");
        valid = false;
        return valid;
    }

    if (document.getElementById('subject').value == "") {
        alert("Veuillez entrer votre message ");
        valid = false;
        return valid;
    }
}
