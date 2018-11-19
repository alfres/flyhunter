Crafty.defineScene("prev", function() {
  Crafty.e("2D, DOM, Text")
  //.color("grey")
  .attr({x: 0, y: 300, w: 1000, h: 150 , z: 40000001}) 
.textAlign('center').textFont({ size: '24px' }).text('press ENTER key to start')

 Crafty.bind('KeyDown', function(event) {
	  if(event.key === 13 || event.key === Crafty.keys.ENTER){Crafty.scene("portada")}
	  
	  
	  })
})
Crafty.defineScene("portada", function() {
	hierro = Crafty.e("2D, DOM, cannon, Matter")
 .attr({x: 50, y: 360, z: 0, w: 130, h: 130,
matter : {
			isStatic : true,
			angle :  Crafty.math.degToRad( ang ) ,
			shape : 'circle',
			isSensor: false,
			collisionFilter: {group: -1}
		}

 })
	reseting()
  
 Crafty.e("2D, DOM, Color, Matter")
 .attr({x: 0, y: 0, w: 1, h: 530,
  matter : {
			
			isStatic : true,
			collisionFilter: {group: 1}
		}
 })

  Crafty.e("2D, DOM, Color, Matter")
  .color("grey")
  .attr({x: 990, y: 0, w: 30, h: 540,
 matter : {
			
			isStatic : true,
			collisionFilter: {group: 1}
		}
  })
		
		  Crafty.e("2D, DOM, Color, Matter, platform")
  .color("red")
  .attr({x: 50, y: 543, w: 1500, h: 12 ,
		matter : {
			isStatic : true,
			collisionFilter: {group: 1}
		}}).rotation = -1
		
				  Crafty.e("2D, DOM, Color, Matter, platform3")
  .color("green")
  .attr({x: 0, y: 588, w: 1500, h: 12 ,
		matter : {
			isStatic : true,
			collisionFilter: {group: 1}
		}})


 Crafty.e('2D, Matter, DOM, Color, platform2').attr({
  x: 0, 
  y: 498, 
  z: 10000, 
  w: 950, 
  h: 12 ,
		matter : {
			
			isStatic : true,
			collisionFilter: {group: 1}
		}}).color("grey").rotation = 1


Crafty.e("fli")


});
 

