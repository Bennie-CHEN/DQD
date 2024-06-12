// dongqiudi_response_rewriter.js
let body = $response.body;
let obj = JSON.parse(body);

if (obj.code !== undefined) {
    obj.code = "1";
}

body = JSON.stringify(obj);
$done({body});
