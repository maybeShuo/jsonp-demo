function invoke(url, method, args, callback)
{
    var script = document.createElement("script");
    //var body = document.getElementsByTagName("body")[0];
    script.charset = "utf-8";
    script.async = "async";
    var callbackName = "_jsonp_callback_" + Math.round(Math.random() * 10000);
    window[callbackName] = res => {
        window[callbackName] = null;
        delete window[callbackName];
        callback(res);
        document.body.removeChild(script);
    };
    script.src = url + "?method=" + method + "&callback=" + callbackName + "&args=" + encodeURIComponent(JSON.stringify(args));


    document.body.appendChild(script);
}
