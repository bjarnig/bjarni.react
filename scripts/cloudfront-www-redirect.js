// CloudFront viewer-request function: 301 www.bjarni-gunnarsson.net -> apex.
// One distribution serves both aliases from one origin, so without this both
// hostnames answer 200 with identical bytes while every canonical points apex.
function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;

  if (host !== 'www.bjarni-gunnarsson.net') {
    return request;
  }

  // querystring values arrive as {value} or {multiValue:[{value},...]}
  var qs = request.querystring;
  var parts = [];
  for (var key in qs) {
    if (qs[key].multiValue) {
      for (var i = 0; i < qs[key].multiValue.length; i++) {
        parts.push(key + '=' + qs[key].multiValue[i].value);
      }
    } else if (qs[key].value) {
      parts.push(key + '=' + qs[key].value);
    } else {
      parts.push(key);
    }
  }
  var query = parts.length > 0 ? '?' + parts.join('&') : '';

  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: {
        value: 'https://bjarni-gunnarsson.net' + request.uri + query
      },
      'cache-control': { value: 'max-age=3600' }
    }
  };
}
