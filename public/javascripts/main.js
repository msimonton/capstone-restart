'Use Strict'




var vals= {
 beg:'',
 int:'',
 adv:'',
 exp:'',
 trees:'' ,
 piste:'',
 snowQual:'' ,
 crowds:'',
 terr: '',
 fam:'',
 night:'' ,
 skiin: '',
 apres: '',
 cost:''
}


console.log(vals)




var docCookies = {
    getItem: function(sKey) {
        if (!sKey) {return null;}
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function(sKey) {
        if (!sKey) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function() {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

$(document).ready(() => {

    var liftieUrl = 'https://cors-anywhere.herokuapp.com/http://liftie.info/api/resort/'
    $('.resortList').click(function() {
        console.log(this.id)
        docCookies.setItem("resortPathId", '' + this.id + '')

    var resortCookie = docCookies.getItem('resortPathId')
    var path = this.id;

    $.ajax({
        url: liftieUrl + resortCookie,
        method: "GET",
        success: function(data) {
            var obj = data.lifts.status;
            var cams = data.webcams;
            for (var i = 0; i < cams.length; i++) {
                $('#cam').append('<img src=' + cams[i].image + '>')
            }
            console.log(data);

            $.each(obj, function(key, value) {
                $('#results').append('<p>' + key + ": " + value + '</p>');
            });
            $('#cam').append('<div>' + data.weather.conditions + '</div>')
        },
        error: function(err) {
            console.log(err)
        }
      })
    })
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
     console.log(vals)

    })
  })




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




//  Resort search range labels
