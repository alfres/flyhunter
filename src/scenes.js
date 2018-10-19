Crafty.defineScene("portada", function() {
	reseting()
  
  Crafty.e("2D, DOM, Color, falsosuelo")
  .color("grey")
  .attr({x: 0, y: 490, z: 10000, w: 1000, h: 5 })

  Crafty.e("2D, DOM, Color, platform")
  .color("grey")
  .attr({x: 0, y: 495, w: 1000, h: 5 })

 Crafty.e("2D, DOM, cannon")
 .attr({x: 50, y: 360, z: 0, w: 140, h: 104 }).origin("center").rotation = ang
  
 
Crafty("fli").each(function(i) { this.destroy() });

Crafty.e("fli")


});
 

