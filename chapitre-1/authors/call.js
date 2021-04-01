var request = require("request");

request.get(

    "http://localhost:8000/authors/2/books",

    function (err, res, body) {
        if (err) {
            console.error(err);
            return;
        }

        var result = JSON.parse(body);

        console.log("result :", result);
    }
);