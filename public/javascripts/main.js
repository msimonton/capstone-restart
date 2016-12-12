$(document).ready(()=> {
$.ajax({
  url: 'https://cors-anywhere.herokuapp.com/http://liftie.info/api/resort/breck',
  method: "GET",
  success: function (data)  {
    // console.log(data)
    var obj = data.lifts.status

    $.each( obj, function( key, value ) {
      $('#results').append('<p>'+ key + ": " + value+'</p>' );
    });//     for(var i=0; i<9;i++){
//   $('#results').append('<p>'+data.lifts.status[i]+'</p>')
// }
  },
  error: function(err) {
            console.log(err)
        }
})
})




function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}



            //  Resort search range labels
