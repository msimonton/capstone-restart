"Use Strict"

$(document).ready(() => {
//   $('.resID').click(function() {
//     var liftieUrl = 'https://cors-anywhere.herokuapp.com/http://liftie.info/api/resort/breck'
//     var resAPI= this.id
//     $.ajax({
//         url: liftieUrl,
//         method: "GET",
//         success: function(data) {
//           console.log(data)
//             var obj = data.lifts.status;
//             var cams = data.webcams;
//             for (var i = 0; i < cams.length; i++) {
//                 $('#cam').append('<img src=' + cams[i].image + '>')
//             }
//
//             $.each(obj, function(key, value) {
//                 $('#results').append('<p>' + key + ": " + value + '</p>');
//             });
//             $('#cam').append('<div>' + data.weather.conditions + '</div>')
//         },
//         error: function(err) {
//             console.log(err)
//         }
//       })
//     })









// $(document).ready(() => {
//   $('.resortList2').click(function(event) {
//     event.preventDefault
//
//   })
//
//     var liftieUrl = 'http://liftie.info/api/resort/'
//     $('.resID').click(function() {
//         console.log(this.id)
//         docCookies.setItem("resortPathId", '' + this.id + '')
//
//     var resortCookie = docCookies.getItem('resortPathId')
//     var path = this.id;
//
//     $.ajax({
//         url: liftieUrl + "breck",
//         method: "GET",
//         success: function(data) {
//             var obj = data.lifts.status;
//             var cams = data.webcams;
//             for (var i = 0; i < cams.length; i++) {
//                 $('#cam').append('<img src=' + cams[i].image + '>')
//             }
//
//             $.each(obj, function(key, value) {
//                 $('#results').append('<p>' + key + ": " + value + '</p>');
//             });
//             $('#cam').append('<div>' + data.weather.conditions + '</div>')
//         },
//         error: function(err) {
//             console.log(err)
//         }
//       })
//     })
    $('#resSearchForm').submit(function(event)  {
      event.preventDefault()

       vals= {

       beg: parseInt($('#begInput').val()),
       int: parseInt($('#intInput').val()),
       adv: parseInt($('#advInput').val()),
       exp: parseInt($('#expInput').val()),
       trees: parseInt($('#treeInput').val()),
       piste:parseInt($('#pisteInput').val()),
       snowQual: parseInt($('#snowInput').val()),
       crowds: parseInt($('#crowdInput').val()),
       terr: parseInt($('#terrInput').val()),
       fam: parseInt($('#famInput').val()),
       night: parseInt($('#nightInput').val()),
       skiin: parseInt($('#skiinInput').val()),
       apres: parseInt($('#apresInput').val()),
       cost: parseInt($('#costInput').val())
     }

     var id = $('#begInput').val();

     $.ajax({
        type: 'post',
        url: '/resorts/search-results',
        data : vals,
        success: function(data) {
             var id = data.id;
             $('#begInput').val(id);
             window.location=(data)
        },
        error: function(err) {
             console.log(err);
        }

    });

    })
















  // })






//   function select() {
//
//      var id = $('#begInput').val();
//
//      $.ajax({
//         type: 'post',
//         url: '/id',
//         data : {
//              id : id
//         },
//         success: function(data) {
//              var id = data.id;
//              $('#begInput').val(id);
//         },
//         error: function(err) {
//              console.log(err);
//         }
//
//     });
// }




function initMap() {
    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

})



//  Resort search range labels
