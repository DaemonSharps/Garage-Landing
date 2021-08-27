export function getLocaleISOString(){
    const date = new Date();
    //лайфхак, шведы используют время, близкое к UTC
    return date.toLocaleString('sv').replace(' ', 'T');
}