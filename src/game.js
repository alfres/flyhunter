 var ang = -45, polv = 100 , muni = 3, arr, fi = 0, hierro
 
 var  Engine = Matter.Engine,
       Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
   Render = Matter.Render,
Runner = Matter.Runner,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

 function walk(){
ang = (a.value * -1) 
hierro._body.angle = Crafty.math.degToRad( ang )
  //Crafty("cannon").each(function(i) { this.rotation = ang });
 la.textContent = a.value + 'º'
 }
 
  function power(){
polv = b.value 
 lb.textContent = polv
 
 }
 function reseting(){
	fi = 0
	f.textContent ='fiambres ' + fi
	ang = -45
	a.value = 45
	walk()
	polv = 100
	 b.value = polv
	 lb.textContent = polv
fillarsenal()
	 
 }
 function fillarsenal(){
	 Crafty("arsenal").each(function(i) { this.destroy() });
	 muni = 3
  Crafty.e("2D, DOM, bo,arsenal").attr({x: 1, y: 478, z: 0, w: 12, h: 12 })
  Crafty.e("2D, DOM, bo,arsenal").attr({x: 13, y: 478, z: 0, w: 12, h: 12 })
  Crafty.e("2D, DOM, bo,arsenal").attr({x: 7, y: 467, z: 0, w: 12, h: 12 })	 
	arr = Crafty("arsenal").get() 
 }
   
   function plaipause(){
if(muni > 0){ Crafty.e("bol"); muni -= 1}else {alert('sin balas')}
   }

Game = {
	
 load:function(){
 
  Crafty.init(1000,565, document.getElementById('marco'));
Crafty.Matter.init({
	debug : false,
	gravity : {
		x : 0,
		y : 0.9
	}
});
  Crafty.sprite("img/bo.png", {bo:[0,0,48,48]});
 Crafty.sprite("img/cannon.png", {cannon:[0,0,261,261]});
 Crafty.sprite("img/fly.png", {fly:[0,0,157,149]});
 Crafty.sprite("img/bloodsplats_0004.png", {sp:[0,0,128,128]});
 Crafty.audio.add("splat", "sounds/impactsplat04.mp3");
Crafty.audio.add("flys", "sounds/fly.mp3");

Crafty.scene("prev")


 
}

}

