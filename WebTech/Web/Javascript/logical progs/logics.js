
function replaceOldCharWithNewChar (oChar, nChar, str){
    return str.replace(oChar,nChar);
}
console.log(replaceOldCharWithNewChar("f", "t", "fire"));

function replaceSpace(ochar, nchar, s) {
for(let i of s){
    let cnt = 0;
    if(i === " "){
        cnt++;
        console.log(cnt);
    }
    if(cnt===1){
        return cnt;
    }
}
console.log(replaceSpace("JS   is  a  programming  language"));
}