
$(document).ready(function () {

    $.getJSON("data.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            var tr = '<tr>';
            tr += "<td>" + data[i].name + "</td>";
            tr += "<td>" + data[i].description + "</td>";
            // tr += "<td><button onClick=\"window.open('https://www.google.com/maps/place/" +
            tr += "<td><a href='https://www.google.com/maps?q=" +
            data[i].location +
            "'><button>Map It!</button></a></td>";
            tr += "</tr>";
            $('#table1').append(tr);
//AIzaSyBKo7miQTjcyRcFHo5OMywOHxrmT1Tsnjo is google maps api
        }
    });

});


