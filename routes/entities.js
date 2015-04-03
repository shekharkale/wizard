

exports.keepalive = function(req, res) {

    console.log("Got keepalive counter = " + req.query.sessionID);
    console.log("Got keepalive counter = " + req.query.time);

};

