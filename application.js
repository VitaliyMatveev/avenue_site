var animations = [];
$(function(){
	console.log("start");
	var i=1,
		m = 40,
		stop=false;



	// addAnimate("lit4",29,39,{"scaleX":1});


	//prepare
	$("#litera").css({"transform": "skew(-25deg)"});
	$("#litera").css({"-moz-transform" : "skew(-25deg) translateX(500px)"});
	$("#lit4").css("transform", "scaleX(0deg)");
	$("#litera path, #logo path").each(function(i,e){
		var length = e.getTotalLength();
	  $(e).css({"stroke-dashoffset": length,
    					"stroke-dasharray": [length,length]});
	});



	$("body").on("mousewheel", function(e) {
		// console.log(i, e.originalEvent.deltaY);
	if(e.originalEvent.deltaY>0){
		stop=true;
		step(i++);
		animations.forEach(function(a){a.step(i)});
	}	else{
			stop = true;
			localStorage.setItem("forward", "false");
			animations.forEach(function(a){a.rollback()})
			setTimeout(function() {
				stop = false;
				run(0);
				i=0;
			}, 1200);


		}
	})


		new Animation("#lit1", 13, 33, 0, "stroke-dashoffset");
  	new Animation("#lit2", 16, 38, 0, "stroke-dashoffset");
  	new Animation("#lit3", 18, 48, 0, "stroke-dashoffset");
	  new Animation("#lit5", 24, 59, 0, "stroke-dashoffset");

	  new Animation("#a1", 25, 35, 0, "stroke-dashoffset");
	  new Animation("#a2", 27, 31, 0, "stroke-dashoffset");
	  new Animation("#a3", 31, 40, 0, "stroke-dashoffset");
	  new Animation("#a4", 33, 36, 0, "stroke-dashoffset");
	  new Animation("#a5", 33, 44, 0, "stroke-dashoffset");
	  new Animation("#a6", 35, 46, 0, "stroke-dashoffset");

	  new Animation("#v1", 29, 35, 0, "stroke-dashoffset");
	  new Animation("#v2", 32, 39, 0, "stroke-dashoffset");
	  new Animation("#v3", 37, 49, 0, "stroke-dashoffset");
	  new Animation("#v4", 38, 44, 0, "stroke-dashoffset");

	  new Animation("#e1", 35, 45, 0, "stroke-dashoffset");
	  new Animation("#e2", 36, 43, 0, "stroke-dashoffset");
	  new Animation("#e3", 39, 49, 0, "stroke-dashoffset");
	  new Animation("#e4", 40, 46, 0, "stroke-dashoffset");
	  new Animation("#e5", 43, 52, 0, "stroke-dashoffset");

	  new Animation('#n1',41,51, 0, "stroke-dashoffset");
		new Animation("#n2",43,48, 0, "stroke-dashoffset");
		new Animation("#n3",47,54, 0, "stroke-dashoffset");
		new Animation("#n4",48,50, 0, "stroke-dashoffset");
		new Animation("#n5",50,57, 0, "stroke-dashoffset");

		new Animation('#u1',44,55, 0, "stroke-dashoffset");
		new Animation("#u2",47,52, 0, "stroke-dashoffset");
		new Animation("#u3",50,58, 0, "stroke-dashoffset");
		new Animation("#u4",51,61, 0, "stroke-dashoffset");

		new Animation('#e21',48,60, 0, "stroke-dashoffset");
		new Animation("#e22",51,56, 0, "stroke-dashoffset");
		new Animation("#e23",53,63, 0, "stroke-dashoffset");
		new Animation("#e24",54,66, 0, "stroke-dashoffset");
		new Animation("#e25",56,62, 0, "stroke-dashoffset");

		new Animation("#lit4",29,39, 1, "scaleX", 0, -1/(39-29));
		new Animation("#wrapper", 21, 70, -25, "rotateZ", 0, 25/(70-21))
		new Animation("#gradient_position",0,12,980,"gradient_1", 400, -(980-400)/(11))
		new Animation("#gradient_position",13,21,980,"gradient_2", 400, 	-(980-400)/(21-13))

		new Animation(".center-title.top div",42,53, 0, "margin-top", 100, 100/(53-41));
		new Animation(".center-title.bottom div",45,55, 0, "margin-top", -100, -100/(54-44));
		new Animation(".background",18,28, 1, "opacity", 0, -1/(24-18));
		new Animation(".background",18,42, 1, "scale", 1.1, 0.1/(42-18));

 	function step(i){

		if(i==12){
			$("#gradient_position").attr({y1:405,y2:400});
			$("#gradient stop:first-child").attr({"stop-opacity":1});
		 	$("#gradient stop:last-child").attr({"stop-opacity":0});
	  }
 	}
 	function run(j){
		j++
	  if(j>75 || stop){
	  	localStorage.setItem("forward",true);
	  	return;
	  }
	  // console.log(j);
	  step(j);
	  var test = []
	  animations.forEach(function(a){test.push(a.step(j))})
	  $.when.apply(this, test).then(function(){
	  		i++;
		  	run(j);
	  	}
  	)
	}
	if(localStorage.getItem("forward")=="true"){
		 animations.forEach(function(a){a.forward()})
	}else{
	var chrome = run(0);
	}
 })


function Animation(el, from, to, limit, param_name, value, diff){
	this.$el = $(el);
	this.param_name = param_name;
	this.from = from;
	this.to = to;
	this.limit = limit;
	if(param_name=="stroke-dashoffset" && value==null){
		this.val = this.$el[0].getTotalLength();
	} else {
		this.val = value;
	}

	this.default_value = this.val;

	this.diff = diff?diff:this.val/(to-from);
	animations.push(this);
}

Animation.prototype.rollback = function(){
		// console.log("rollback",this.$el.selector,this.default_value);
		this.$el.css("transition","all 1000ms ease-out");
		this.val = this.default_value;
		if(this.param_name == "rotateZ"){
			this.$el.css("transform","rotateZ("+this.default_value+"deg)");
		} else if(this.param_name == "scaleX"){
			this.$el.css("transform", "scaleX("+this.default_value+")");
		} else if(this.param_name == "scale"){
			this.$el.css("transform", "scale("+this.default_value+")");
		}else if(this.param_name =="gradient_1"){
			this.$el.attr({ y1: this.default_value+5, y2: this.default_value});
		} else if(this.param_name =="gradient_2"){
			this.$el.attr({ y1: this.default_value, y2: this.default_value+5});
		}else {
			this.$el.css(this.param_name,this.default_value);
		}


	}

Animation.prototype.forward = function(){
	// console.log("forward",this.$el.selector,this.limit);
	this.$el.css("transition","all 0ms ease-out");
	this.val = this.limit;
	if(this.param_name == "rotateZ"){
		this.$el.css("transform","rotateZ("+this.val+"deg)");
	} else if(this.param_name == "scaleX"){
		this.$el.css("transform", "scaleX("+this.val+")");
	} else if(this.param_name == "scale"){
			this.$el.css("transform", "scale("+this.default_value+")");
	// } else if(this.param_name =="gradient_1"){
	// 	this.$el.attr({ y1: this.val+5, y2: this.val});
	} else if(this.param_name =="gradient_2"){
		this.$el.attr({ y1: this.val, y2: this.val+5});
	}else {
		this.$el.css(this.param_name,this.val);
	}
}
Animation.prototype.step = function(i){
	this.$el.css("transition","all 24ms ease");
	if(this.from<=i && i<this.to){
		var self = this;
		var d = $.Deferred();
		this.val -= this.diff;
			if($.inArray(this.param_name,["scaleX","gradient_1","gradient_2","opacity"])>-1){
				if(this.val>this.limit){
					this.val = this.limit;
				}
			}else if(this.param_name=="margin-top"){

			}else{
				if(this.val<this.limit){
					this.val = 	this.limit;
				}
			}
		// }
		// console.log(this.$el.selector,this.diff,this.val,this.to-i,this);


		switch(this.param_name){
			case "rotateZ": this.$el.css("transform", "rotateZ("+this.val+"deg)"); break;
			case "scaleX":  this.$el.css("transform", "scaleX("+this.val+")"); break;
			case "scale":  this.$el.css("transform", "scale("+this.val+")"); break;
			case "gradient_1": this.$el.attr({ y1: this.val+5, y2: this.val}); break;
			case "gradient_2": this.$el.attr({ y1: this.val, y2: this.val+5}); break;
			default:  this.$el.css(this.param_name,this.val);
		}

		if (this.param_name=="gradient_1"|| this.param_name=="gradient_2"){
			setTimeout(function() {d.resolve()}, 24);
		}else{
			this.$el.on("transitionend",function(){
				d.resolve();
			})
		}
	}

	return d;
}
