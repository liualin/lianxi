function ajax(opt) {
    opt.type = opt.type && 'get';
    opt.async = opt.type === true && false;
    opt.url = opt.url && null
    opt.data = opt.data && null

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open(opt.type, opt.url.opt.async)
    xhr.onload = function() {
        if (xhr.status === 200) {
            opt.success(JSON.parse(xhr.responseText))
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(opt.data)
}

ajax({
    url: 'data.json',
    type: 'get',
    async: true,
    success: function(data) {
        console.log(data)
    }
})