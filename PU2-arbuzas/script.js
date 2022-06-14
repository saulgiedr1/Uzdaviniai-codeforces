window.onload=function(){

let svoris;
svoris=8;
let dalinimas;

dalinimas=arbuzoDalys(svoris);
console.log(dalinimas);

}

function arbuzoDalys(a){
    if (a % 2 === 0) {
        return "yes"
    }
    else {
        return "no"
    }
}

