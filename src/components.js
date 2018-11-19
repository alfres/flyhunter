

Crafty.c('fli', {
	init: function( ) {
		this.requires("2D, DOM, fly, Matter");
		
		this.origin("center")
		var mix = Crafty.math.randomNumber(150, 900)
		var miy = ( Crafty.math.randomNumber(5, 450) + (this.x / 8)  )
		
		this.attr({x: mix, y: miy, z: -10000, w: 24, h: 30 ,
		matter : {
			shape : 'circle',
			isStatic : false
		}})
		.bind('UpdateFrame', function(){
			if(Crafty.audio.isPlaying('flys') == false){
				this.unbind('UpdateFrame'); 
				this._body.isStatic = true
				//Matter.World.remove(Crafty.Matter.world, [this._body, rock._body, elastic, elastic2 ]);
				
				Crafty.e("2D, DOM, Color, diana")
	  .origin("center")
	  .attr({x: this.x +6, y: this.y +5, w: 6, h: 8})
	  
				} 
		 Body.applyForce(
    rock._body,
    { x: rock._body.position.x, y: rock._body.position.y },
    { x: Crafty.math.randomNumber(-0.002, 0.002), y: Crafty.math.randomNumber(-0.002, 0.002) }
  )
		})
		
		   var    rockOptions = { density: 0.004 },
        rock = Crafty.e('2D, DOM, Actor, Matter')
		
		.attr({
		x : mix,
		y : (miy -80),
		w : 32,
		h : 30,
		matter : {
			shape : 'circle',
			isStatic : false
		}
	}),
        
        elastic = Constraint.create({ 
             bodyA: rock._body,
        bodyB: this._body,
        pointB: { x: -10, y: -7 },
stiffness: 0.2,
damping: 0.014,
length: 0
});

        elastic2 = Constraint.create({ 
             pointA: { x: mix, y: (miy -180) },
        bodyB: rock._body,
        pointB: { x: -10, y: -7 },
stiffness: 0.2,
damping: 0.014,
length: 0
});

Matter.World.add(Crafty.Matter.world, [elastic, elastic2 ]);
     Crafty.audio.play("flys", 1); 
	  
	  
	   }
})

Crafty.c('bol', {
	init: function( ) {
		  var tax = (450 * (polv / 100)), tay = (-450 * (polv / 100))
  if (ang < -45){
  tax = (450 + ((ang + 45)* 10)) * (polv / 100)
 tay = (-450 + ((ang + 45)* 10)) * (polv / 100)
  }
  else if(ang > -45){
  tax = (450 + ((ang + 45)* 10)) * (polv / 100)
  tay = (-450 + ((ang + 45)* 10)) * (polv / 100)
  }
		
		this.requires("2D, DOM, Matter,bo, bola, Collision, Mouse, Draggable, MouseDrag");
		this.attr({x: 102, y: 410, z: 0, w: 20, h: 20,
        matter: {
			restitution : 0,
			friction: 0.04,
			shape : 'circle',
			collisionFilter: {group: -1},
density: 0.005			
  }
		


		})
		this.attr({torquemada: {pos: 0.002, neg: -0.002} })
		this.onHit('platform2' , function(hitDatas) {this._body.torque = this.torquemada['pos']; this.torquemada['pos'] += 0.000005})
		this.onHit('platform' ,  function(hitDatas) {this._body.torque = this.torquemada['neg']; this.torquemada['neg'] -= 0.000005})
		this.onHit('platform3' , function(hitDatas) { this.destroy()})
        this.onHit('diana', function(hitDatas) {
			fillarsenal();
         Crafty.audio.play("splat",1,0.6)
		 fi +=1
		 f.textContent ='fiambres ' + fi
         Crafty.e("2D, DOM, sp").attr({x: (hitDatas[0].obj.x), y: hitDatas[0].obj.y, z: 0, w: 32, h: 32 })
         hitDatas[0].obj.destroy(); Crafty("fli").each(function(i) { this.destroy() });
		     Body.applyForce(
    this._body,
    { x: (this._body.position.x ), y: this._body.position.y },
    { x: ((tax / -25000) ), y: ((tay / -25000) ) }
  )
		 
		 
         Crafty.e("Delay").delay(function() { Crafty.e("fli"); Crafty("Delay").each(function(i) { this.destroy() })},2000)})
	 // this.vx = tax
     // this.vy = tay
      this._body.collisionFilter = {group: 1}
	 
	    Body.applyForce(
    this._body,
    { x: (this._body.position.x ), y: this._body.position.y },
    { x: ((tax / 9000) ), y: ((tay / 9000) ) }
  )
  
	  
arr.pop().destroy()
	   }
})





