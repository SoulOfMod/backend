var request = require("request");

request.get(

    "http://localhost:8000/countries",

    function (err, res, body) {
        if (err) {
            console.error(err);
            return;
        }

        var result = JSON.parse(body);

        var Reverse = [];
        for (var i = result.length - 1; i >= 0; i--) {
            Reverse.push(result[i]);
        }
        console.log("newResult :", Reverse);
    }
)