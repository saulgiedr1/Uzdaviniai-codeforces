window.onload=function(){

    let ilgis;
    let plotis;
    let plytele;

    ilgis=17;
    plotis=9;
    plytele=4;
    let kiekis;

    kiekis=plyteliuSkaicius(ilgis,plotis,plytele);

    console.log(kiekis);
}


function plyteliuSkaicius(a,b,c){

  if ((a*b) % (Math.pow(c ,2))  === 0){
    return  a*b/Math.pow(c, 2);
  }
   else if (a % c !== 0){
    return  ((a-(a % c)) *b/Math.pow(c,2))+b/c ;    
   }
  else if (b % c !== 0){
  return ((b-(b % c)) *a/Math.pow(c,2))+a/c ;
}
  else {
   return   false;
  } 


}
