$(function(){
	console.log("start");
	// var paper = Raphael("lines");
	 //paper.setViewBox(0,0,1680,1050);
	 //var path = paper.path("m .44703,371.50424 0,622.88135").attr({"stroke":"#3eeec1","stroke-width":"50"}); 
	  //var transformedPath = paper.path("m 792.45387,375.85333 12.64442,0 57.7549,569.01929 -63.07643,0 z").attr({"fill":"000"}).glow({fill:true,he});
	  	//animate({"fill":"90-#000-#fff"},1000);
	 // path.animate({path:transformedPath},1000);
	 //paper.rect(961.57306, 251.37711, 67.29351, 750.79449).attr({"fill":"#3eeec1","stroke":"none"});
	// paper.path("m 4.97459,1040.594 29.30565,-68.47519 14.86725,10e-6 30.16338,68.47518").attr("id","test");
	// paper.path("m 23.80829,1015.159 35.48049,0");
	// paper.path("M 12.50385,1040.5193 39.06884,979.47269").attr({"stroke":"#3fb5dd"});
	// paper.path("m 39.2118,978.97235 5.0034,0.0715 25.87474,61.89925");
	// paper.path("m 41.827085,991.54507 6.59631,17.06093 -13.76176,0.022 z");
	// paper.path("m 20.55625,1041.1575 8.1484,-18.1552 26.16065,0.072 8.00545,17.9408");
	// paper.setFinish().attr({"stroke-width":"3"}).transform("t0,-952.36204")	
	

	addAnimate('a1',1,11);
	addAnimate("a2",2,6);
	addAnimate("a3",6,15);
	addAnimate("a4",8,11);
	addAnimate("a5",8,19);
	addAnimate("a6",11,21);

	addAnimate('v1',4,14);
	addAnimate("v2",7,14);
	addAnimate("v3",12,24);
	addAnimate("v4",13,19);
	
	addAnimate('e1',10,20);
	addAnimate("e2",11,18);
	addAnimate("e3",14,24);
	addAnimate("e4",15,21);
	addAnimate("e5",18,27);

	addAnimate('n1',16,26);
	addAnimate("n2",18,23);
	addAnimate("n3",22,29);
	addAnimate("n4",23,25);
	addAnimate("n5",25,32);

	addAnimate('u1',19,30);
	addAnimate("u2",22,27);
	addAnimate("u3",25,33);
	addAnimate("u4",26,36);
	
	addAnimate('e21',23,35);
	addAnimate("e22",26,31);
	addAnimate("e23",28,38);
	addAnimate("e24",29,41);
	addAnimate("e25",31,37);

	function addAnimate(el, from, to){		
		var m = 100;
		del = from*m;
		dur = (to-from)*m;		
		return $("#"+el).delay(del).animate({strokeDashoffset:0},{
			duration:dur
		})
	}
})
