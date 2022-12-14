X=0;
Y=0;
function preload(){
 imagen=loadImage('https://i.postimg.cc/X7p3V0sK/dalmata2.png');
}
function draw(){
image(camara,0,0,300,300);
image(imagen,X,Y,120,120);
}
function setup(){
    moño=createCanvas(300,300);
    moño.center();
    camara=createCapture(VIDEO);
    camara.size(300,300);
    camara.hide();
    arbol=ml5.poseNet(camara,regalo);
    arbol.on('pose',resultado);
}
function regalo(){
    console.log("el modelo esta listo. :)");
}
function resultado(reno){
    if (reno.length>0) {
        console.log(reno);
        X=reno[0].pose.nose.x-55;
        Y=reno[0].pose.nose.y-96;

    }
   
}
function panda(){
save('Tu Foto De Perrito.png');

}