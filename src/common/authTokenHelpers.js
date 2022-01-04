function HS512(text, key){
    const hash = require('crypto').createHmac('sha512', key);
    hash.update(text, "utf-8");
    let res = hash.digest('base64');
    return res;
}

export const validateRefreshToken = token =>{
    if(token === undefined || token.trim() === '' || token === "") return false;
    
    const [ header, payload, signature ] = token.split('.');
    let expectedSignature = HS512(`${header}.${payload}`, process.env.REACT_APP_RT_KEY);
    let realSignature = Buffer.from(signature, 'base64').toString('base64');
    let res = expectedSignature === realSignature;
    return res;
}

export function parseToken(token){
    var base64Payload = token.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
}