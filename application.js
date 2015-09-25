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
	

	addAnimate('a1',25,35);
	addAnimate("a2",27,31);
	addAnimate("a3",31,40);
	addAnimate("a4",33,36);
	addAnimate("a5",33,44);
	addAnimate("a6",35,46);

	addAnimate('v1',29,35);
	addAnimate("v2",32,39);
	addAnimate("v3",37,49);
	addAnimate("v4",38,44);
	
	addAnimate('e1',35,45);
	addAnimate("e2",36,43);
	addAnimate("e3",39,49);
	addAnimate("e4",40,46);
	addAnimate("e5",43,52);

	addAnimate('n1',41,51);
	addAnimate("n2",43,48);
	addAnimate("n3",47,54);
	addAnimate("n4",48,50);
	addAnimate("n5",50,57);

	addAnimate('u1',44,55);
	addAnimate("u2",47,52);
	addAnimate("u3",50,58);
	addAnimate("u4",51,61);
	
	addAnimate('e21',48,60);
	addAnimate("e22",51,56);
	addAnimate("e23",53,63);
	addAnimate("e24",54,66);
	addAnimate("e25",56,62);

	addAnimate("lit1",13,20);
	addAnimate("lit2",16,22);
	addAnimate("lit3",18,30);
	addAnimate("lit5",24,35);
	$("#gradient_position").velocity({ y1: 1005, y2: 1000},{
		"duration":12*50, 
		"complete":function(){
			$("#gradient_position").attr({y1:400,y2:401});
			$("#gradient stop:first-child").attr({"stop-opacity":1});
			$("#gradient stop:last-child").attr({"stop-opacity":0});
			$("#gradient_position").velocity({ y1: 1000, y2: 1005},12*50);			
			
		}
	});	
	
	addAnimate("lit1",13,20);
	addAnimate("lit2",16,22);
	addAnimate("lit3",18,30);
	addAnimate("lit5",24,35);
	$("#litera").css({"transform": "skew(-25deg)"});

	$("#litera").css({"-moz-transform" : "skew(-25deg) translateX(500px)"});
	$("#wrapper").delay(21*50).velocity({rotateZ:"-25deg"},(70-21)*50);
	$("#lit4").velocity({scaleX:"0"},0).delay(29*50).velocity({scaleX:"1"},(39-29)*50);

	$("body").on("mousewheel", function(e) {
		// console.log(e.deltaX, e.deltaY, e.deltaFactor);
		// $("#linearGradient12756").velocity({ y1: 1000, y2: 1100},1000)
		
	})
	function addAnimate(el, from, to){		
		var m = 50
		del = from*m;
		dur = (to-from)*m;		
		$("#"+el).delay(del).velocity({"stroke-dashoffset":0},{
			duration:dur,
			"easing": "easeInSine"
		})
	}
})
