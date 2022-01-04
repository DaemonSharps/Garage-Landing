export function getLocaleISOString(){
    const date = new Date();
    //лайфхак, шведы используют время, близкое к UTC
    return date.toLocaleString('sv').replace(' ', 'T');
}

export const isNullOrEmptyString = (string) =>{
    return (!string || string.length === 0 || string.trim() === '');
}

export function setCookie(name, value, sameSite = "none", maxAgeSeconds = 0, expiresAtSeconds = 0){
    let cookie = `${name}=${value};`;
    cookie += `SameSite=${sameSite};`;

    if(maxAgeSeconds !== 0){
        cookie += "max-age=" + (maxAgeSeconds * 1000).toString() + ";";
    }
    if(expiresAtSeconds !== 0){
        const date = new Date(expiresAtSeconds * 1000);
        cookie += "expires=" + date.toString() + ";";
    }
    document.cookie = cookie;
}

export function getCookieValue(name){
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim().split('=');
        if (c[0] === name) {
            return c[1];
        }
    }
    return "";
}