Crafty.c('fli', {
	init: function( ) {
		this.requires("2D, DOM, fly");
		
		this.origin("center")
		var mix = Crafty.math.randomNumber(100, 900)
		var miy = ( Crafty.math.randomNumber(5, 450) + (this.x / 8)  )
		this.attr({x: mix, y: miy, z: 10000, w: 24, h: 30 })
      
	  
	  Crafty.e("2D, DOM, Color, diana")
	  .origin("center")
	  .attr({x: this.x +2, y: this.y, w: 6, h: 8})
	  .color("#00FF00", 0);
	   }
})

Crafty.c('bol', {
	init: function( ) {
		  var ax = (450 * (polv / 100)), ay = (-450 * (polv / 100))
  if (ang < -45){
  ax = (450 + ((ang + 45)* 10)) * (polv / 100)
 ay = (-450 + ((ang + 45)* 4)) * (polv / 100)
  }
  else if(ang > -45){
  ax = (450 + ((ang + 45)* 10)) * (polv / 100)
  ay = (-450 + ((ang + 45)* 10)) * (polv / 100)
  }
		
		this.requires("2D, DOM, bo, Gravity, bola, Collision");
		this.attr({x: 78, y: 380, z: 0, w: 20, h: 20 })
	    this.onHit('platform' , function(hitDatas) {this.vy = 0; this.vx = 0; })
        this.onHit('diana', function(hitDatas) {this.vy = 0; this.vx = 0; fillarsenal();
         Crafty.audio.play("splat",1,0.6)
		 fi +=1
		 f.textContent ='fiambres ' + fi
         Crafty.e("2D, DOM, sp").attr({x: (hitDatas[0].obj.x -3), y: hitDatas[0].obj.y, z: 0, w: 32, h: 32 })
         hitDatas[0].obj.destroy(); Crafty("fli").each(function(i) { this.destroy() });
         Crafty.e("Delay").delay(function() { Crafty.e("fli")},2000)})
	  this.vx = ax
      this.vy = ay
      this.gravity("platform")
	  
arr.pop().destroy()
	   }
})





