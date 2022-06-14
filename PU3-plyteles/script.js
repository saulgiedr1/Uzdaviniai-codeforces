window.onload=function(){

    let ilgis;
    let plotis;
    let plytele;

    ilgis=8;
    plotis=4;
    plytele=2;
    let kiekis;

    kiekis=plyteliuSkaicius(ilgis,plotis,plytele);

    console.log(kiekis);
}


function plyteliuSkaicius(a,b,c){

  if ((a*b) % (Math.pow(c ,2))  === 0){
    return  a*b/Math.pow(c, 2);
  }
  
  



}