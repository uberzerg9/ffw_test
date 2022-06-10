const parseUrl = (url) => {
    const obj = {
        protocol: '',
        hostname: '',
        pathname: '',
        hash: ''
    }

    obj.protocol = url.split('://')[0];
    obj.hostname = url.split('://')[1].split('/')[0];
    obj.pathname = url.split('.com')[1].split('?')[0];
    obj.hash = '#' + url.split('#')[1];

    return obj;
}

let obj = parseUrl('http://ffwagency.com/do/any.php?a=1#foo')

console.log( obj.hash );
console.log( obj.hostname );
console.log( obj.pathname );