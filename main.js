X=0;
Y=0;
function preload(){}
function draw(){
image(camara,0,0,260,260);
}
function setup(){
    feliz=createCanvas(260,260);
    feliz.center();
    camara=createCapture(VIDEO);
    camara.size(260,260);
    camara.hide();
    casa=ml5.poseNet(camara,perrito);
    casa.on('rostro',blondie);
}
function perrito(){
    console.log("Ya esta listo el modelo. :)");
}
function blondie(posole){
    if (posole.length>0) {
        console.log(posole);
        X=posole[0].rostro.nose.x;
        Y=posole[0].rostro.nose.y;

    }
   
}