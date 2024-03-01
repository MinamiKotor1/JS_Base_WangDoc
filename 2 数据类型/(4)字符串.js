function b64Encode(str) {
    return btoa(encodeURIComponent(str))
}

function b64Decode(str) {
    return decodeURIComponent(atob(str))
}

str = b64Encode('你好')
console.log(str)
console.log(b64Decode(str))