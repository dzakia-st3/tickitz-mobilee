var sendNotification = function(data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "MDI0ZmViNDQtZDM0MS00NDczLTg4YzEtNzYxZjcxNzVkMzEx"
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  
  var message = { 
    app_id: "80b9b5e1-6865-4f56-9ea0-b7ca1fe33f01",
    contents: {"en": "Cek movie terbaru yuk"},
    headings: {"en": "Tickitz"},
    included_segments: ["Subscribed Users"]
  };
  
  sendNotification(message);