$(function(){
	console.log("start");
	var i=0,
		m = 50;


	// addAnimate("lit4",29,39,{"scaleX":1});
function setVelocity(){
if(i<=24){
	var diff = (1000-400)/12;
	var val = $("#gradient_position").data("h");
	if(val==null){
		val = 400;
	}

	val+=diff;
		$("#gradient_position").data("h",val);
	console.log("velocity",val,diff);
	if(i<12){
		if(val>=950)
			val=950;
	$("#gradient_position").attr({ y1: val+5, y2: val});
	}else{
			// if(i==13){
			// 	$("#gradient_position").data("h",400);
			// 	$("#gradient_position").attr({y1:400,y2:401});
			//  		$("#gradient stop:first-child").attr({"stop-opacity":1});
			//  	$("#gradient stop:last-child").attr({"stop-opacity":0});
			// }
			$("#gradient_position").velocity({ y1: val, y2: val+5},50);
		}
	}
}

	//prepare
	$("#litera").css({"transform": "skew(-25deg)"});
	$("#litera").css({"-moz-transform" : "skew(-25deg) translateX(500px)"});
	$("#lit4").css("transform", "scaleX(0deg)");



	$("body").on("mousewheel", function(e) {
		console.log(i);
		clearInterval(chrome);
		step(i++);
		// run(i++);
		// run(i++);
		// console.log(e.deltaX, e.deltaY, e.deltaFactor);
		// $("#linearGradient12756").velocity({ y1: 1000, y2: 1100},1000)
		$
	})

	// var js = "switch(i){";
 //  	function addTimer(js, obj, start, delay){
 //  		js+= "case"+ start+": addAnimate('" + obj+"',"+delay+");break;"
 //  	}
 //  	addTimer(js, "lit1", 13, 7);
 //  	addTimer(js, "lit2", 16, 6);
 //  	addTimer(js, "lit3", 18, 12);
 //  	addTimer(js, "lit4", 24, 35);
 //  	js+="}"
 //  	eval(js);
 	function step(i){
		setVelocity();

 		registerStroke("#lit1", 13, 33, 3000);
  	registerStroke("#lit2", 16, 38, 3000);
  	registerStroke("#lit3", 18, 48, 3000);
	  registerStroke("#lit5", 24, 59, 3000);

	  registerStroke("#a1", 25, 35, 200);
	  registerStroke("#a2", 27, 31, 200);
	  registerStroke("#a3", 31, 40, 200);
	  registerStroke("#a4", 33, 36, 200);
	  registerStroke("#a5", 33, 44, 200);
	  registerStroke("#a6", 35, 46, 200);

	  registerStroke("#v1", 29, 35, 200);
	  registerStroke("#v2", 32, 39, 200);
	  registerStroke("#v3", 37, 49, 200);
	  registerStroke("#v4", 38, 44, 200);

	  registerStroke("#e1", 35, 45, 200);
	  registerStroke("#e2", 36, 43, 200);
	  registerStroke("#e3", 39, 49, 200);
	  registerStroke("#e4", 40, 46, 200);
	  registerStroke("#e5", 43, 52, 200);

	  registerStroke('#n1',41,51, 200);
		registerStroke("#n2",43,48, 200);
		registerStroke("#n3",47,54, 200);
		registerStroke("#n4",48,50, 200);
		registerStroke("#n5",50,57, 200);

		registerStroke('#u1',44,55, 200);
		registerStroke("#u2",47,52, 200);
		registerStroke("#u3",50,58, 200);
		registerStroke("#u4",51,61, 200);

		registerStroke('#e21',48,60, 200);
		registerStroke("#e22",51,56, 200);
		registerStroke("#e23",53,63, 200);
		registerStroke("#e24",54,66, 200);
		registerStroke("#e25",56,62, 200);
		registerRotate("#wrapper", 21, 70);

		registerScale("#lit4",29,39);
 	}
	var chrome = setInterval(function() {
  	i++;
  	step(i);

  	console.log(i);
  	if(i>75)
  		clearInterval(chrome);
	}, m)
	// setTimeout(function(){clearInterval(chrome)},4000);

	// function register(el,from,to,type){
	// 	if(i>from&&i<to)
	// 		setAttr(el,"stroke-dashoffset", 3000/(to-from), 0);
	// }
	function setAttr(el, param, diff, limit){
		var val = $(el).data("val");
		if(val==null){
			val = parseFloat($(el).css(param));
		}
		var source = val;
		val -= diff;
		console.log(el,source, val,diff)
		if(val<limit){
			val = limit;
		}
		$(el).css(param,val);
		$(el).data("val",val);
	}

	function setScale(el, param, diff, limit){
		var val = $(el).data("val");
		if(val==null){
			val = 0;
		}
		console.log(el, val,diff)
		val += diff;
		// console.log(el, val,diff)
		if(val>limit){
			val = limit;
		}
		$(el).css("transform",param+"("+val+")");
		$(el).data("val",val);
	}

	function setTransform(el, param, diff, limit){
		var style = $(el).attr("style");
		if(style==null){
			val = 0;
		}else{
		var val = parseFloat($(el).attr("style").split("(")[1])
		}

		val = (val+diff);
		val += "deg";
		$(el).css("transform",param+"("+val+")");
	}

	function registerStroke(el, from, to, dashoffset){
		if(i>=from&&i<=to)
			setAttr(el,"stroke-dashoffset", dashoffset/(to-from), 0);
	}
	function registerScale(el, from, to){
		if(i>from&&i<to)
			setScale(el,"scaleX", 1/(to-from), 1);
	}
	function registerRotate(el, from, to){
		if(i>from&&i<to)
			setTransform(el,"rotateZ", -25/(to-from), -25);
	}
	// function addAnimate(el, from, to, param, debbug){

	// 	if(i<from){
	// 		setTimeout(function(){ addAnimate(el, from, to, param, debbug)}, m);
	// 	} else {
	// 		if (param == null){
	// 			param = {"stroke-dashoffset":0};
	// 		}
	// 		dur = (to-from)*m;
	// 		if(debbug===true){
	// 			if(i>=to)
	// 				return

	// 		dur = m;
	// 		var diff = (-25/(70-21));
	// 		$("#"+el).css("transform","rotateZ("+param["rotateZ"]+")");
	// 		var val = parseFloat(param["rotateZ"])+diff;
	// 		param["rotateZ"]= val+"deg";
	// 		console.log("debbub",param);
	// 		setTimeout(function(){ addAnimate(el, from, to, param, debbug)}, dur);
	// 		return;
	// 		}

	// 		// console.log(param);

	// 		animates.push($("#"+el).velocity(param,{
	// 			duration:1,
	// 			 "easing": "linear",
	// 			complete :function(e){
	// 				if(debbug===true){
	// 					var val = parseFloat(param["rotateZ"])+diff;
	// 					param["rotateZ"]= val+"deg";
	// 					console.log("debbub",param);
	// 					setTimeout(function(){ addAnimate(el, from, to, param, debbug)}, dur);
	// 				}
	// 			}
	// 		}));

	// 		}
	// }


})

function move(param){
	var k = 100;
	var diff = (-25/k);
	var val = parseFloat(param["rotateZ"])+diff;

}
