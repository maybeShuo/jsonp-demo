const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/jsonp", (req, res, next) => {
    const method = req.query.method;
    const callbackName = req.query.callback;
    const args = JSON.parse(req.query.args);

    let result = null;
    if (method === "sum")
    {
        result = {result:args.a + args.b};
    }
    res.type(".js");

    res.send(callbackName + "(" + JSON.stringify(result) + ")");
});

app.get('/getjson', function (req, res, next) {
    const callbackName = req.query.callback;
    const method = req.query.method;
    let result = null;
    if (method === "sum")
    {
        result = {
            result: req.query.a + req.query.b,
        }
    }
    console.log(result);
    res.send(req.query.callback + '(' + JSON.stringify(result) + ');');
});

app.listen(8080, () => {
    console.log("running");
});
