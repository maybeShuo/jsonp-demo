function invokeByJquery(url, args)
{
    $.ajax({
      url,
      dataType: 'jsonp',
      jsonp: 'callback',
      data: args,
      success: function(data) {
          console.log(data);
          console.log('ajax get 方法请求'+JSON.stringify(data)+'\r\n');
      }
    });
}
