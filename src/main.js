/*const animation={
    canvasElt:null,
    ctx:null,
    animate(){
        window.requestAnimationFrame(()=>{
            this.animate();
        });
        if (this.posX>=this.canvasElt.width || this.posX<=0 || this.posY>=this.canvasElt.height || this.posY<=0 ) this.speed*=-1;
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.posX+=this.speed*Math.cos(this.direction);
        this.posY+=this.speed*Math.sin(this.direction);

        this.draw();
    },
    init(){
        this.posX=20;
        this.posY=50;
        this.speed=10;
        this.direction= Math.PI/8;
        this.canvasElt= document.createElement("canvas");
        document.body.insertAdjacentElement("beforeend",this.canvasElt);
        this.ctx=this.canvasElt.getContext("2d");
        this.canvasElt.height=window.innerHeight;
        this.canvasElt.width=window.innerWidth;
        this.animate();
    },
    draw(){
        this.ctx.fillRect(this.posX,this.posY,20,10);
    }
};
animation.init();
*/

const canvasElt= document.createElement("canvas");
document.body.insertAdjacentElement("beforeend",canvasElt);
let ctx=canvasElt.getContext("2d");
canvasElt.height=window.innerHeight;
canvasElt.width=window.innerWidth;

let posX=200;
let posY=100;
let mouse = {x:0,y:0};
function animate(x){
    window.requestAnimationFrame(()=>{
        animate();
    });
    let direction= Math.atan2(mouse.y-posY,mouse.x-posX);
    let speed=Math.hypot(mouse.x-posX,mouse.y-posY)*0.1;
    if (speed>=7){
        speed=7;
    };
    ctx.clearRect(0, 0, canvasElt.width, canvasElt.height);
    posX+=speed*Math.cos(direction);
    posY+=speed*Math.sin(direction);
    ctx.save();
    ctx.translate(posX,posY);
    ctx.rotate(direction);
    ctx.fillRect(-10,-5,20,10);
    ctx.restore();
};
window.addEventListener("mousemove",function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    console.log(mouse);
});
animate();


//if (posX>=canvasElt.width || posX<=0 || posY>=canvasElt.height || posY<=0 ) speed*=-1;