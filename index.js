(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/a.png", id:"a"},
		{src:"images/b.png", id:"b"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/c.png", id:"c"},
		{src:"images/count_bg.png", id:"count_bg"},
		{src:"images/count_man.png", id:"count_man"},
		{src:"images/count_man_2.png", id:"count_man_2"},
		{src:"images/count_man_3.png", id:"count_man_3"},
		{src:"images/count_txt.png", id:"count_txt"},
		{src:"images/cover_bg_1.png", id:"cover_bg_1"},
		{src:"images/cover_bg_2.png", id:"cover_bg_2"},
		{src:"images/cover_bg_top.png", id:"cover_bg_top"},
		{src:"images/cover_man_1.png", id:"cover_man_1"},
		{src:"images/cover_man_2.png", id:"cover_man_2"},
		{src:"images/cp_1.png", id:"cp_1"},
		{src:"images/cp_2.png", id:"cp_2"},
		{src:"images/cp_3.png", id:"cp_3"},
		{src:"images/d.png", id:"d"},
		{src:"images/denglong.png", id:"denglong"},
		{src:"images/dl_bottom.png", id:"dl_bottom"},
		{src:"images/dl_top.png", id:"dl_top"},
		{src:"images/q1_a.png", id:"q1_a"},
		{src:"images/q1_b.png", id:"q1_b"},
		{src:"images/q1_c.png", id:"q1_c"},
		{src:"images/q1_d.png", id:"q1_d"},
		{src:"images/q2_a.png", id:"q2_a"},
		{src:"images/q2_b.png", id:"q2_b"},
		{src:"images/q2_c.png", id:"q2_c"},
		{src:"images/q2_d.png", id:"q2_d"},
		{src:"images/q3_a.png", id:"q3_a"},
		{src:"images/q3_b.png", id:"q3_b"},
		{src:"images/q3_c.png", id:"q3_c"},
		{src:"images/q3_d.png", id:"q3_d"},
		{src:"images/q4_a.png", id:"q4_a"},
		{src:"images/q4_b.png", id:"q4_b"},
		{src:"images/q4_c.png", id:"q4_c"},
		{src:"images/q4_d.png", id:"q4_d"},
		{src:"images/r1_l.png", id:"r1_l"},
		{src:"images/r1_r.png", id:"r1_r"},
		{src:"images/r2_l.png", id:"r2_l"},
		{src:"images/r2_r.png", id:"r2_r"},
		{src:"images/r3_l.png", id:"r3_l"},
		{src:"images/r3_r.png", id:"r3_r"},
		{src:"images/r4_l.png", id:"r4_l"},
		{src:"images/r4_r.png", id:"r4_r"},
		{src:"images/r_man_1.png", id:"r_man_1"},
		{src:"images/r_man_2_1.png", id:"r_man_2_1"},
		{src:"images/r_man_2_2.png", id:"r_man_2_2"},
		{src:"images/r_man_3.png", id:"r_man_3"},
		{src:"images/result_b_2.png", id:"result_b_2"},
		{src:"images/topic_1_bg1.png", id:"topic_1_bg1"},
		{src:"images/topic_1_bg2.png", id:"topic_1_bg2"},
		{src:"images/topic_2_bg1.png", id:"topic_2_bg1"},
		{src:"images/topic_2_bg2.png", id:"topic_2_bg2"},
		{src:"images/topic_2_bg3.png", id:"topic_2_bg3"},
		{src:"images/topic_2_bg4.png", id:"topic_2_bg4"},
		{src:"images/topic_3_bg1.png", id:"topic_3_bg1"},
		{src:"images/topic_3_bg2.png", id:"topic_3_bg2"},
		{src:"images/topic_4_bg1.png", id:"topic_4_bg1"},
		{src:"images/topic_4_bg2.png", id:"topic_4_bg2"},
		{src:"images/zhz.png", id:"zhz"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.a = function() {
	this.initialize(img.a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,413);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.count_bg = function() {
	this.initialize(img.count_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_man = function() {
	this.initialize(img.count_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_2 = function() {
	this.initialize(img.count_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_man_3 = function() {
	this.initialize(img.count_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.count_txt = function() {
	this.initialize(img.count_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


(lib.cover_bg_1 = function() {
	this.initialize(img.cover_bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_2 = function() {
	this.initialize(img.cover_bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cover_bg_top = function() {
	this.initialize(img.cover_bg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,178);


(lib.cover_man_1 = function() {
	this.initialize(img.cover_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cover_man_2 = function() {
	this.initialize(img.cover_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.cp_1 = function() {
	this.initialize(img.cp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_2 = function() {
	this.initialize(img.cp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.cp_3 = function() {
	this.initialize(img.cp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.d = function() {
	this.initialize(img.d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.denglong = function() {
	this.initialize(img.denglong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.dl_bottom = function() {
	this.initialize(img.dl_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.dl_top = function() {
	this.initialize(img.dl_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.q1_a = function() {
	this.initialize(img.q1_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_b = function() {
	this.initialize(img.q1_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_c = function() {
	this.initialize(img.q1_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q1_d = function() {
	this.initialize(img.q1_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_a = function() {
	this.initialize(img.q2_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_b = function() {
	this.initialize(img.q2_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_c = function() {
	this.initialize(img.q2_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_d = function() {
	this.initialize(img.q2_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_a = function() {
	this.initialize(img.q3_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_b = function() {
	this.initialize(img.q3_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_c = function() {
	this.initialize(img.q3_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_d = function() {
	this.initialize(img.q3_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_a = function() {
	this.initialize(img.q4_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_b = function() {
	this.initialize(img.q4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_c = function() {
	this.initialize(img.q4_c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q4_d = function() {
	this.initialize(img.q4_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.r1_l = function() {
	this.initialize(img.r1_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r1_r = function() {
	this.initialize(img.r1_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,539);


(lib.r2_l = function() {
	this.initialize(img.r2_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r2_r = function() {
	this.initialize(img.r2_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r3_l = function() {
	this.initialize(img.r3_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r3_r = function() {
	this.initialize(img.r3_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r4_l = function() {
	this.initialize(img.r4_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,540);


(lib.r4_r = function() {
	this.initialize(img.r4_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,539);


(lib.r_man_1 = function() {
	this.initialize(img.r_man_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.r_man_2_1 = function() {
	this.initialize(img.r_man_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_2_2 = function() {
	this.initialize(img.r_man_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.r_man_3 = function() {
	this.initialize(img.r_man_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.result_b_2 = function() {
	this.initialize(img.result_b_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.topic_1_bg1 = function() {
	this.initialize(img.topic_1_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_1_bg2 = function() {
	this.initialize(img.topic_1_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,425);


(lib.topic_2_bg1 = function() {
	this.initialize(img.topic_2_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg2 = function() {
	this.initialize(img.topic_2_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg3 = function() {
	this.initialize(img.topic_2_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_2_bg4 = function() {
	this.initialize(img.topic_2_bg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.topic_3_bg1 = function() {
	this.initialize(img.topic_3_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_3_bg2 = function() {
	this.initialize(img.topic_3_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.topic_4_bg1 = function() {
	this.initialize(img.topic_4_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.topic_4_bg2 = function() {
	this.initialize(img.topic_4_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.zhz = function() {
	this.initialize(img.zhz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,144);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-222.05,-116.05,444.1,232.1);
	this.shape.setTransform(222.1,116);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,444.1,232.1);


(lib.result_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("A0nGQIAAsfMApOAAAIAAMfg");
	this.shape.setTransform(132,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264,80);


(lib.r_man2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_2_1();

	this.instance_1 = new lib.r_man_2_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,517);


(lib.q4_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_4_bg1();

	this.instance_1 = new lib.topic_4_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,447);


(lib.q4_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-286.9,-38,573.8,76);
	this.shape.setTransform(286.9,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,575.8,78);


(lib.q4_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-284.9,-38,569.8,76);
	this.shape.setTransform(284.9,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,571.8,78);


(lib.q4_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-284.9,-38,569.8,76);
	this.shape.setTransform(284.9,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,571.8,78);


(lib.q4_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().dr(-283,-40,566,80);
	this.shape.setTransform(283,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q3_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_3_bg1();

	this.instance_1 = new lib.topic_3_bg2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,601,388);


(lib.q3_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-284.9,-40,569.8,80);
	this.shape.setTransform(284.9,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,571.8,82);


(lib.q3_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-285.9,-38,571.8,76);
	this.shape.setTransform(285.9,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,573.8,78);


(lib.q3_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-283.9,-40,567.8,80);
	this.shape.setTransform(283.9,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,569.8,82);


(lib.q3_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().dr(-283,-40,566,80);
	this.shape.setTransform(283,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,566,80);


(lib.q2_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_2_bg1();

	this.instance_1 = new lib.topic_2_bg2();

	this.instance_2 = new lib.topic_2_bg3();

	this.instance_3 = new lib.topic_2_bg4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,520,421);


(lib.q2_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-285.9,-36,571.8,72);
	this.shape.setTransform(285.9,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,573.8,74);


(lib.q2_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-283.9,-36,567.8,72);
	this.shape.setTransform(283.9,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,569.8,74);


(lib.q2_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-285.9,-37,571.8,74);
	this.shape.setTransform(285.9,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,573.8,76);


(lib.q2_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-286.9,-38,573.8,76);
	this.shape.setTransform(286.9,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,575.8,78);


(lib.q1_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().dr(-288.9,-40,577.8,80);
	this.shape.setTransform(288.9,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,577.8,80);


(lib.q1_c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().dr(-286.9,-42,573.8,84);
	this.shape.setTransform(286.9,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.8,84);


(lib.q1_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().dr(-286.9,-40,573.8,80);
	this.shape.setTransform(286.9,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573.8,80);


(lib.q1_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s("#CCCCCC").ss(1,1,1).dr(-284.9,-42,569.8,84);
	this.shape.setTransform(284.9,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,571.8,86);


(lib.personmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topic_1_bg1();
	this.instance.setTransform(0,64);

	this.instance_1 = new lib.topic_1_bg2();
	this.instance_1.setTransform(0,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,64,553,425);


(lib.person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_man_1();

	this.instance_1 = new lib.cover_man_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,677);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_2();
	this.instance.setTransform(-132,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-40,264,80);


(lib.补间49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.result_b_2();
	this.instance.setTransform(-132,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-40,264,80);


(lib.补间48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();
	this.instance.setTransform(-72.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-72,145,144);


(lib.补间47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhz();
	this.instance.setTransform(-72.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-72,145,144);


(lib.补间46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1();
	this.instance.setTransform(-181,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-208.5,362,417);


(lib.补间45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.r_man_1();
	this.instance.setTransform(-181,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-208.5,362,417);


(lib.补间44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q4_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q3_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q2_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_a();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_b();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_c();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.q1_d();
	this.instance.setTransform(-283,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-40,566,80);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_top();
	this.instance.setTransform(-320,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-89,640,178);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-262.5,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-206.5,525,413);


(lib.duilian_rn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// 图层 4
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-2,533.4);

	this.instance_1 = new lib.r3_r();
	this.instance_1.setTransform(0,15.4);

	this.instance_2 = new lib.dl_top();
	this.instance_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},4).wait(1));

	// 图层 3
	this.instance_3 = new lib.dl_bottom();
	this.instance_3.setTransform(0,533);

	this.instance_4 = new lib.r2_r();
	this.instance_4.setTransform(0,15);

	this.instance_5 = new lib.dl_top();
	this.instance_5.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},3).to({state:[]},1).wait(1));

	// 图层 2
	this.instance_6 = new lib.dl_bottom();
	this.instance_6.setTransform(0,536.8);

	this.instance_7 = new lib.r4_r();
	this.instance_7.setTransform(5,17.4);

	this.instance_8 = new lib.dl_top();
	this.instance_8.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[]},1).wait(2));

	// 图层 1
	this.instance_9 = new lib.dl_bottom();
	this.instance_9.setTransform(-4,541.4);

	this.instance_10 = new lib.r1_r();
	this.instance_10.setTransform(-2,21.4);

	this.instance_11 = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.duilian_ln = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// 图层 4
	this.instance = new lib.dl_bottom();
	this.instance.setTransform(-3,540.8);

	this.instance_1 = new lib.r3_l();
	this.instance_1.setTransform(9,18);

	this.instance_2 = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},4).wait(1));

	// 图层 3
	this.instance_3 = new lib.dl_bottom();
	this.instance_3.setTransform(-2,537);

	this.instance_4 = new lib.r2_l();
	this.instance_4.setTransform(10,18);

	this.instance_5 = new lib.dl_top();
	this.instance_5.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},3).to({state:[]},1).wait(1));

	// 图层 2
	this.instance_6 = new lib.dl_bottom();
	this.instance_6.setTransform(-2,535);

	this.instance_7 = new lib.r4_l();
	this.instance_7.setTransform(10,18);

	this.instance_8 = new lib.dl_top();
	this.instance_8.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},2).to({state:[]},1).wait(2));

	// 图层 1
	this.instance_9 = new lib.dl_bottom();
	this.instance_9.setTransform(-8,533.9);

	this.instance_10 = new lib.r1_l();
	this.instance_10.setTransform(9,18.9);

	this.instance_11 = new lib.dl_top();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.denglong1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({rotation:25,x:107.6,y:-4.9},0).wait(5).to({rotation:0,x:0,y:0},0).wait(5).to({rotation:-25,x:-95.3,y:50},0).wait(5).to({rotation:0,x:0.1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.current4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0,320.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,216.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0,112.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.current3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0,328.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,220.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0,104.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.current2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0,336.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(0,224.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(0,114.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.current1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// d.png
	this.instance = new lib.d();
	this.instance.setTransform(0.5,352.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// c.png
	this.instance_1 = new lib.c();
	this.instance_1.setTransform(4.5,232.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// b.png
	this.instance_2 = new lib.b();
	this.instance_2.setTransform(4.5,116.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// a.png
	this.instance_3 = new lib.a();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coverbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cover_bg_1();

	this.instance_1 = new lib.cover_bg_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.count_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.parent.gotoAndPlay(6);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1OjOMAqdAAAIAAGdMgqdAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("A1OmBMAqdAAAIAAMDMgqdAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("A1OpJMAqdAAAIAASTMgqdAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("A1OseMAqdAAAIAAY9MgqdAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A1OvtMAqdAAAIAAfbMgqdAAAg");
	var mask_graphics_24 = new cjs.Graphics().p("A1OzTMAqdAAAMAAAAmnMgqdAAAg");
	var mask_graphics_29 = new cjs.Graphics().p("A1O3hMAqdAAAMAAAAvDMgqdAAAg");
	var mask_graphics_34 = new cjs.Graphics().p("A1O7KMAqdAAAMAAAA2VMgqdAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:130,y:12.8}).wait(4).to({graphics:mask_graphics_4,x:130,y:30.7}).wait(5).to({graphics:mask_graphics_9,x:130,y:50.7}).wait(5).to({graphics:mask_graphics_14,x:130,y:72}).wait(5).to({graphics:mask_graphics_19,x:130,y:92.7}).wait(5).to({graphics:mask_graphics_24,x:130,y:115.7}).wait(5).to({graphics:mask_graphics_29,x:130,y:142.7}).wait(5).to({graphics:mask_graphics_34,x:130,y:166}).wait(1));

	// 图层 1
	this.instance = new lib.count_txt();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,33.5);


(lib.count_bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.cou_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.count_man();

	this.instance_1 = new lib.count_man_2();

	this.instance_2 = new lib.count_man_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,290);


(lib.chuanpiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cp_1();

	this.instance_1 = new lib.cp_2();

	this.instance_2 = new lib.cp_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,450);


(lib.zhz_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间47("synched",0);
	this.instance.setTransform(72.5,-40);

	this.instance_1 = new lib.补间48("synched",0);
	this.instance_1.setTransform(72.5,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-112,145,144);


(lib.r_man3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.zhz = new lib.zhz_1();
	this.zhz.setTransform(136.5,366.1,1,1,0,0,0,72.5,72);

	this.instance = new lib.r_man_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.zhz}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,331,501);


(lib.r_man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// result1
	this.instance = new lib.补间45("synched",0);
	this.instance.setTransform(181,208.5);

	this.instance_1 = new lib.补间46("synched",0);
	this.instance_1.setTransform(181,208.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.question4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		var status4 = 0;
		this.q4_a.addEventListener("click", q4_a_click.bind(this));
		
		function q4_a_click()
		{
			if(status4 == 0){
				selected = 4;
				score += 4;
				this.current4.gotoAndStop(1);
				this.gotoAndPlay(31);
				status4 = 1;
			}
		}
		this.q4_b.addEventListener("click", q4_b_click.bind(this));
		
		function q4_b_click()
		{
			if(status4 == 0){
				selected = 3;
				score += 3;
				this.current4.gotoAndStop(2);
				this.gotoAndPlay(31);
				status4 = 1;
			}
		}
		this.q4_c.addEventListener("click", q4_c_click.bind(this));
		
		function q4_c_click()
		{
			if(status4 == 0){
				selected = 2;
				score += 2;
				this.current4.gotoAndStop(3);
				this.gotoAndPlay(31);
				status4 = 1;
			}
		}
		this.q4_d.addEventListener("click", q4_d_click.bind(this));
		
		function q4_d_click()
		{
			if(status4 == 0){
				selected = 1;
				score += 1;
				this.current4.gotoAndStop(4);
				this.gotoAndPlay(31);
				status4 = 1;
			}
		}
	}
	this.frame_39 = function() {
		if(selected == 1){
			this.current4.gotoAndStop(0);
		}
	}
	this.frame_44 = function() {
		if(selected == 2){
			this.current4.gotoAndStop(0);
		}
	}
	this.frame_49 = function() {
		if(selected == 3){
			this.current4.gotoAndStop(0);
		}
	}
	this.frame_55 = function() {
		if(selected == 4){
			this.current4.gotoAndStop(0);
		}
	}
	this.frame_64 = function() {
		try{
			this.parent.gotoAndPlay(5);
		}catch(err){
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(6).call(this.frame_55).wait(9).call(this.frame_64).wait(1));

	// btn
	this.q4_d = new lib.q4_d_1();
	this.q4_d.setTransform(322.9,1006,1,1,0,0,0,286.9,38);
	this.q4_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q4_d, 0, 1, 1);

	this.q4_c = new lib.q4_c_1();
	this.q4_c.setTransform(320.9,902,1,1,0,0,0,284.9,38);
	this.q4_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q4_c, 0, 1, 1);

	this.q4_b = new lib.q4_b_1();
	this.q4_b.setTransform(320.9,794,1,1,0,0,0,284.9,38);
	this.q4_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q4_b, 0, 1, 1);

	this.q4_a = new lib.q4_a_1();
	this.q4_a.setTransform(323.1,694.2,1,1,0,0,0,283,40);
	this.q4_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q4_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q4_a},{t:this.q4_b},{t:this.q4_c},{t:this.q4_d}]},30).to({state:[{t:this.q4_a},{t:this.q4_b},{t:this.q4_c},{t:this.q4_d}]},9).to({state:[{t:this.q4_a},{t:this.q4_b},{t:this.q4_c},{t:this.q4_d}]},5).to({state:[{t:this.q4_a},{t:this.q4_b},{t:this.q4_c},{t:this.q4_d}]},5).to({state:[{t:this.q4_a}]},6).to({state:[{t:this.q4_a}]},9).wait(1));

	// current
	this.current4 = new lib.current4();
	this.current4.setTransform(76,684.2,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.current4).wait(65));

	// person
	this.q4_person = new lib.q4_person();
	this.q4_person.setTransform(320.1,-237.5,1,1,0,0,0,280,223.5);
	this.q4_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q4_person).wait(4).to({_off:false},0).to({y:386.6},5).wait(30).to({y:-277.4},5).wait(21));

	// q4_a.png
	this.instance = new lib.补间37("synched",0);
	this.instance.setTransform(323.1,1226.3);
	this.instance._off = true;

	this.instance_1 = new lib.补间38("synched",0);
	this.instance_1.setTransform(323.1,690.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:690.2},10).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(40).to({startPosition:0},0).to({y:1218.2},10).wait(1));

	// q4_b.png
	this.instance_2 = new lib.补间39("synched",0);
	this.instance_2.setTransform(323.1,1226.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间40("synched",0);
	this.instance_3.setTransform(323.1,798.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,y:798.2},10).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(30).to({startPosition:0},0).to({y:1222.2},10).wait(6));

	// q4_c.png
	this.instance_4 = new lib.补间41("synched",0);
	this.instance_4.setTransform(323.1,1226.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间42("synched",0);
	this.instance_5.setTransform(323.1,902.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,y:902.3},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(20).to({startPosition:0},0).to({y:1226.3},10).wait(11));

	// q4_d.png
	this.instance_6 = new lib.补间43("synched",0);
	this.instance_6.setTransform(323.1,1226.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间44("synched",0);
	this.instance_7.setTransform(323.1,1006.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,y:1006.3},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).wait(10).to({startPosition:0},0).to({y:1226.3},10).wait(16));

	// top
	this.instance_8 = new lib.补间35("synched",0);
	this.instance_8.setTransform(320,-103);

	this.instance_9 = new lib.补间36("synched",0);
	this.instance_9.setTransform(320,49.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:49.5},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(30).to({startPosition:0},0).to({y:-130.6},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-192,640,178);


(lib.question3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		var status3 = 0;
		this.q3_a.addEventListener("click", q3_a_click.bind(this));
		
		function q3_a_click()
		{
			if(status3 == 0){
				selected = 4;
				score += 4;
				this.current3.gotoAndStop(1);
				this.gotoAndPlay(31);
				status3 = 1;
			}
		}
		this.q3_b.addEventListener("click", q3_b_click.bind(this));
		
		function q3_b_click()
		{
			if(status3 == 0){
				selected = 3;
				score += 3;
				this.current3.gotoAndStop(2);
				this.gotoAndPlay(31);
				status3 = 1;
			}
		}
		this.q3_c.addEventListener("click", q3_c_click.bind(this));
		
		function q3_c_click()
		{
			if(status3 == 0){
				selected = 2;
				score += 2;
				this.current3.gotoAndStop(3);
				this.gotoAndPlay(31);
				status3 = 1;
			}
		}
		this.q3_d.addEventListener("click", q3_d_click.bind(this));
		
		function q3_d_click()
		{
			if(status3 == 0){
				selected = 1;
				score += 1;
				this.current3.gotoAndStop(4);
				this.gotoAndPlay(31);
				status3 = 1;
			}
		}
	}
	this.frame_39 = function() {
		if(selected == 1){
			this.current3.gotoAndStop(0);
		}
	}
	this.frame_44 = function() {
		if(selected == 2){
			this.current3.gotoAndStop(0);
		}
	}
	this.frame_49 = function() {
		if(selected == 3){
			this.current3.gotoAndStop(0);
		}
	}
	this.frame_54 = function() {
		if(selected == 4){
			this.current3.gotoAndStop(0);
		}
	}
	this.frame_64 = function() {
		try{
			this.parent.gotoAndPlay(4);
		}catch(err){
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(5).call(this.frame_54).wait(10).call(this.frame_64).wait(1));

	// btn
	this.q3_d = new lib.q3_d_1();
	this.q3_d.setTransform(320.9,1000,1,1,0,0,0,284.9,40);
	this.q3_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q3_d, 0, 1, 1);

	this.q3_c = new lib.q3_c_1();
	this.q3_c.setTransform(321.9,890,1,1,0,0,0,285.9,38);
	this.q3_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q3_c, 0, 1, 1);

	this.q3_b = new lib.q3_b_1();
	this.q3_b.setTransform(319.9,780,1,1,0,0,0,283.9,40);
	this.q3_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q3_b, 0, 1, 1);

	this.q3_a = new lib.q3_a_1();
	this.q3_a.setTransform(326,678.2,1,1,0,0,0,283,40);
	this.q3_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q3_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q3_a},{t:this.q3_b},{t:this.q3_c},{t:this.q3_d}]},30).to({state:[{t:this.q3_a},{t:this.q3_b},{t:this.q3_c},{t:this.q3_d}]},9).to({state:[{t:this.q3_a},{t:this.q3_b},{t:this.q3_c},{t:this.q3_d}]},5).to({state:[{t:this.q3_a},{t:this.q3_b},{t:this.q3_c},{t:this.q3_d}]},5).to({state:[{t:this.q3_a}]},5).to({state:[{t:this.q3_a}]},10).wait(1));

	// current
	this.current3 = new lib.current3();
	this.current3.setTransform(76,672.2,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.current3).wait(65));

	// person
	this.q3_person = new lib.q3_person();
	this.q3_person.setTransform(320.5,-230,1,1,0,0,0,300.5,194);
	this.q3_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q3_person).wait(4).to({_off:false},0).to({y:394.2},5).wait(30).to({y:-245.8},5).wait(21));

	// q3_a.png
	this.instance = new lib.补间27("synched",0);
	this.instance.setTransform(322,1222.3);
	this.instance._off = true;

	this.instance_1 = new lib.补间28("synched",0);
	this.instance_1.setTransform(322,674.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true,y:674.2},10).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},10).wait(40).to({startPosition:0},0).to({y:1238.2},10).wait(1));

	// q3_b.png
	this.instance_2 = new lib.补间29("synched",0);
	this.instance_2.setTransform(322,1222.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间30("synched",0);
	this.instance_3.setTransform(322,782.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,y:782.2},10).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(30).to({startPosition:0},0).to({y:1238.2},10).wait(6));

	// q3_c.png
	this.instance_4 = new lib.补间31("synched",0);
	this.instance_4.setTransform(322,1222.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间32("synched",0);
	this.instance_5.setTransform(322,890.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,y:890.3},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(20).to({startPosition:0},0).to({y:1238.3},10).wait(11));

	// q3_d.png
	this.instance_6 = new lib.补间33("synched",0);
	this.instance_6.setTransform(322,1222.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间34("synched",0);
	this.instance_7.setTransform(322,998.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,y:998.3},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).wait(10).to({startPosition:0},0).to({y:1242.3},10).wait(16));

	// top
	this.instance_8 = new lib.补间25("synched",0);
	this.instance_8.setTransform(320,-107);

	this.instance_9 = new lib.补间26("synched",0);
	this.instance_9.setTransform(320,89);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:89},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(30).to({startPosition:0},0).to({y:-135},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-196,640,178);


(lib.question2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		var status2 = 0;
		this.stop();
		this.q2_a.addEventListener("click", q2_a_click.bind(this));
		
		function q2_a_click()
		{
			if(status2 == 0){
				selected = 4;
				score += 4;
				this.current2.gotoAndStop(1);
				this.gotoAndPlay(31);
				status2 = 1;
			}
		}
		this.q2_b.addEventListener("click", q2_b_click.bind(this));
		
		function q2_b_click()
		{
			if(status2 == 0){
				selected = 3;
				score += 3;
				this.current2.gotoAndStop(2);
				this.gotoAndPlay(31);
				status2 = 1;
			}
		}
		this.q2_c.addEventListener("click", q2_c_click.bind(this));
		
		function q2_c_click()
		{
			if(status2 == 0){
				selected = 2;
				score += 2;
				this.current2.gotoAndStop(3);
				this.gotoAndPlay(31);
				status2 = 1;
			}
		}
		this.q2_d.addEventListener("click", q2_d_click.bind(this));
		
		function q2_d_click()
		{
			if(status2 == 0){
				selected = 1;
				score += 1;
				this.current2.gotoAndStop(4);
				this.gotoAndPlay(31);
				status2 = 1;
			}
		}
	}
	this.frame_39 = function() {
		if(selected == 1){
			this.current2.gotoAndStop(0);
		}
	}
	this.frame_44 = function() {
		if(selected == 2){
			this.current2.gotoAndStop(0);
		}
	}
	this.frame_49 = function() {
		if(selected == 3){
			this.current2.gotoAndStop(0);
		}
	}
	this.frame_54 = function() {
		if(selected == 4){
			this.current2.gotoAndStop(0);
		}
	}
	this.frame_64 = function() {
		try{
			this.parent.gotoAndPlay(3);
		}catch(err){
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(5).call(this.frame_54).wait(10).call(this.frame_64).wait(1));

	// btn
	this.q2_a = new lib.q2_a_1();
	this.q2_a.setTransform(321.4,704.3,1,1,0,0,0,286.9,38);
	this.q2_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_a, 0, 1, 1);

	this.q2_d = new lib.q2_d_1();
	this.q2_d.setTransform(317.9,1039,1,1,0,0,0,285.9,36);
	this.q2_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_d, 0, 1, 1);

	this.q2_c = new lib.q2_c_1();
	this.q2_c.setTransform(315.9,931,1,1,0,0,0,283.9,36);
	this.q2_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_c, 0, 1, 1);

	this.q2_b = new lib.q2_b_1();
	this.q2_b.setTransform(317.9,818,1,1,0,0,0,285.9,37);
	this.q2_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q2_b, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d},{t:this.q2_a}]},30).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},9).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},5).to({state:[{t:this.q2_b},{t:this.q2_c},{t:this.q2_d}]},5).to({state:[]},5).wait(11));

	// current
	this.current2 = new lib.current2();
	this.current2.setTransform(70,705.8,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.current2).wait(65));

	// person
	this.q2_person = new lib.q2_person();
	this.q2_person.setTransform(320,-244.5,1,1,0,0,0,260,210.5);
	this.q2_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.q2_person).wait(4).to({_off:false},0).to({y:431.6},5).wait(30).to({y:-236.4},5).wait(21));

	// q2_a.png
	this.instance = new lib.补间23("synched",0);
	this.instance.setTransform(317,1226.5);
	this.instance._off = true;

	this.instance_1 = new lib.补间24("synched",0);
	this.instance_1.setTransform(317,710.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:317.5,y:706.3},10).to({_off:true},40).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({y:1202.2},10).wait(1));

	// q2_b.png
	this.instance_2 = new lib.补间21("synched",0);
	this.instance_2.setTransform(321,1238.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间22("synched",0);
	this.instance_3.setTransform(317,822.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,x:317,y:822.4},10).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},10).wait(30).to({startPosition:0},0).to({y:1196.4},10).wait(6));

	// q2_c.png
	this.instance_4 = new lib.补间19("synched",0);
	this.instance_4.setTransform(321,1238.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间20("synched",0);
	this.instance_5.setTransform(317,934.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({_off:true,x:317,y:934.4},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},10).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:1196.4},10).wait(10));

	// q2_d.png
	this.instance_6 = new lib.补间17("synched",0);
	this.instance_6.setTransform(321,1238.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间18("synched",0);
	this.instance_7.setTransform(317,1042.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true,x:317,y:1042.5},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},10).wait(10).to({startPosition:0},0).to({y:1206.5},10).wait(16));

	// top
	this.instance_8 = new lib.补间15("synched",0);
	this.instance_8.setTransform(320,-123);

	this.instance_9 = new lib.补间16("synched",0);
	this.instance_9.setTransform(320,89);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,y:89},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},4).wait(30).to({startPosition:0},0).to({y:-114.9},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-212,640,178);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间14("synched",0);
	this.instance.setTransform(1.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.8,-37.7,566,80);


(lib.duilian_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArRClIAAlJIWjAAIAAFJg");
	var mask_graphics_1 = new cjs.Graphics().p("ArRHQIAAufIWjAAIAAOfg");
	var mask_graphics_2 = new cjs.Graphics().p("ArRL7IAA31IWjAAIAAX1g");
	var mask_graphics_3 = new cjs.Graphics().p("ArQQmMAAAghLIWhAAMAAAAhLg");
	var mask_graphics_4 = new cjs.Graphics().p("ArQVRMAAAgqhIWhAAMAAAAqhg");
	var mask_graphics_5 = new cjs.Graphics().p("ArQZ8MAAAgz3IWhAAMAAAAz3g");
	var mask_graphics_6 = new cjs.Graphics().p("ArQenMAAAg9NIWgAAMAAAA9Ng");
	var mask_graphics_7 = new cjs.Graphics().p("EgLPAjSMAAAhGkIWfAAMAAABGkg");
	var mask_graphics_8 = new cjs.Graphics().p("EgLPAn+MAAAhP7IWfAAMAAABP7g");
	var mask_graphics_9 = new cjs.Graphics().p("EgLPAspMAAAhZRIWeAAMAAABZRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:68.2,y:-0.5}).wait(1).to({graphics:mask_graphics_1,x:68.2,y:29.4}).wait(1).to({graphics:mask_graphics_2,x:68.2,y:59.3}).wait(1).to({graphics:mask_graphics_3,x:68.1,y:89.3}).wait(1).to({graphics:mask_graphics_4,x:68.1,y:119.2}).wait(1).to({graphics:mask_graphics_5,x:68.1,y:149.1}).wait(1).to({graphics:mask_graphics_6,x:68.1,y:179}).wait(1).to({graphics:mask_graphics_7,x:68,y:208.9}).wait(1).to({graphics:mask_graphics_8,x:68,y:238.8}).wait(1).to({graphics:mask_graphics_9,x:68,y:268.7}).wait(1));

	// 图层 1
	this.duilian_rn = new lib.duilian_rn();
	this.duilian_rn.setTransform(68,0,1,1,0,0,0,72,17);

	this.duilian_rn.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.duilian_rn).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.duilian_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArdCzIAAlmIW7AAIAAFmg");
	var mask_graphics_1 = new cjs.Graphics().p("AreHcIAAu3IW9AAIAAO3g");
	var mask_graphics_2 = new cjs.Graphics().p("ArfMEIAA4HIW/AAIAAYHg");
	var mask_graphics_3 = new cjs.Graphics().p("ArfQrMAAAghWIW/AAMAAAAhWg");
	var mask_graphics_4 = new cjs.Graphics().p("ArgVTMAAAgqmIXBAAMAAAAqmg");
	var mask_graphics_5 = new cjs.Graphics().p("ArgZ8MAAAgz3IXBAAMAAAAz3g");
	var mask_graphics_6 = new cjs.Graphics().p("ArhekMAAAg9HIXDAAMAAAA9Hg");
	var mask_graphics_7 = new cjs.Graphics().p("EgLhAjMMAAAhGXIXDAAMAAABGXg");
	var mask_graphics_8 = new cjs.Graphics().p("EgLiAnzMAAAhPmIXFAAMAAABPmg");
	var mask_graphics_9 = new cjs.Graphics().p("EgLjAsbMAAAhY2IXHAAMAAABY2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:61.4,y:10}).wait(1).to({graphics:mask_graphics_1,x:61.3,y:39.6}).wait(1).to({graphics:mask_graphics_2,x:61.1,y:69.2}).wait(1).to({graphics:mask_graphics_3,x:61,y:98.8}).wait(1).to({graphics:mask_graphics_4,x:60.8,y:128.4}).wait(1).to({graphics:mask_graphics_5,x:60.6,y:158}).wait(1).to({graphics:mask_graphics_6,x:60.5,y:187.6}).wait(1).to({graphics:mask_graphics_7,x:60.3,y:217.2}).wait(1).to({graphics:mask_graphics_8,x:60.1,y:246.8}).wait(1).to({graphics:mask_graphics_9,x:60,y:276.4}).wait(1));

	// duilian
	this.duilian_ln = new lib.duilian_ln();
	this.duilian_ln.setTransform(64,9,1,1,0,0,0,72,17);

	this.duilian_ln.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.duilian_ln).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.denglong2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.denglong1();
	this.instance.setTransform(65,240,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({rotation:25},0).wait(4).to({rotation:0},0).wait(5).to({rotation:-25},0).wait(5).to({rotation:0,x:65.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,480);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
		
		this.start.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.gotoAndPlay(10);
		}
	}
	this.frame_24 = function() {
		this.stop();
		this.parent.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(15).call(this.frame_24).wait(1));

	// button
	this.start = new lib.start();
	this.start.setTransform(314.1,880.2,1,1,0,0,0,222.1,116);
	this.start.alpha = 0.012;
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).to({_off:true},1).wait(8).to({_off:false},0).wait(16));

	// title
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(314.6,-229.5);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(314.6,-276.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:323.1},9).to({y:384.5},1).to({_off:true,y:-276.5},14).wait(1));

	// person
	this.person = new lib.person();
	this.person.setTransform(320,1555.5,1,1,0,0,0,320,338.5);

	this.timeline.addTween(cjs.Tween.get(this.person).to({y:797.5},9).wait(1).to({y:1513.7},14).wait(1));

	// top
	this.instance_2 = new lib.补间3("synched",0);
	this.instance_2.setTransform(320,-105);

	this.instance_3 = new lib.补间4("synched",0);
	this.instance_3.setTransform(320,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:89},9).to({startPosition:0},1).to({_off:true,y:-115},14).wait(1));

	// denglong2
	this.denglong2 = new lib.denglong2();
	this.denglong2.setTransform(872.1,170,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong2).to({x:512.1},9).wait(1).to({x:884.2},14).wait(1));

	// denglong1
	this.denglong1 = new lib.denglong1();
	this.denglong1.setTransform(-204,170,1,1,0,0,0,65,240);

	this.timeline.addTween(cjs.Tween.get(this.denglong1).to({x:122},9).wait(1).to({x:-254.1},14).wait(1));

	// bg
	this.coverbg = new lib.coverbg();
	this.coverbg.setTransform(320,568,1,1,0,0,0,320,568);

	this.instance_4 = new lib.cover_bg_top();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.coverbg}]}).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.coverbg}]},8).to({state:[{t:this.instance_4},{t:this.coverbg}]},1).to({state:[]},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-436,1206.1,2330);


(lib.count_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// test
	this.count_test = new lib.count_test();
	this.count_test.setTransform(84.5,466.8,1,1,0,0,0,129.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.count_test).wait(1));

	// count_person
	this.cur_count = new lib.cou_person();
	this.cur_count.setTransform(95,97,1,1,0,0,0,95,145);

	this.timeline.addTween(cjs.Tween.get(this.cur_count).wait(1));

	// bg
	this.count_bg = new lib.count_bg_1();
	this.count_bg.setTransform(91.9,392,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.count_bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-176,640,1136);


(lib.result_person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// result4
	this.r_man3 = new lib.r_man3();
	this.r_man3.setTransform(185.5,218.5,1,1,0,0,0,165.5,250.5);
	this.r_man3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.r_man3).wait(3).to({_off:false},0).wait(1));

	// result3
	this.r_man2 = new lib.r_man2();
	this.r_man2.setTransform(177.5,226.5,1,1,0,0,0,149.5,258.5);
	this.r_man2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.r_man2).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// result2
	this.chuanpiao = new lib.chuanpiao();
	this.chuanpiao.setTransform(180.1,225,1,1,0,0,0,122,225);
	this.chuanpiao._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chuanpiao).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// result1
	this.r_man = new lib.r_man();
	this.r_man.setTransform(181,208.5,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.r_man).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,362,417);


(lib.result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(score <= 4){
			this.result_person.gotoAndStop(0);
			this.duilian_l.duilian_ln.gotoAndStop(1);
			this.duilian_r.duilian_rn.gotoAndStop(1);
			
		}
		else if(score > 4 && score <= 8){
			this.result_person.gotoAndStop(1);
			this.duilian_l.duilian_ln.gotoAndStop(2);
			this.duilian_r.duilian_rn.gotoAndStop(2);
		}
		else if(score > 8 && score <= 12){
			this.result_person.gotoAndStop(2);
			this.duilian_l.duilian_ln.gotoAndStop(3);
			this.duilian_r.duilian_rn.gotoAndStop(3);
		}else{
			this.result_person.gotoAndStop(3);
			this.duilian_l.duilian_ln.gotoAndStop(4);
			this.duilian_r.duilian_rn.gotoAndStop(4);
		}
	}
	this.frame_9 = function() {
		this.stop();
		console.log(score);
		this.result_btn.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		function fl_MouseClickHandler_9()
		{
			score = 0;
			this.gotoAndPlay(10);
			
			
		}
	}
	this.frame_24 = function() {
		try{
			this.parent.gotoAndPlay(0);
		}catch(err){
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(15).call(this.frame_24).wait(1));

	// btn
	this.result_btn = new lib.result_btn();
	this.result_btn.setTransform(324,870.3,1,1,0,0,0,132,40);
	this.result_btn.alpha = 0.012;
	this.result_btn._off = true;
	new cjs.ButtonHelper(this.result_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.result_btn).wait(9).to({_off:false},0).wait(15).to({y:1226.3},0).wait(1));

	// r1_r.png
	this.duilian_r = new lib.duilian_r();
	this.duilian_r.setTransform(569.8,533.2,1,1,0,0,0,70.5,269.5);

	this.timeline.addTween(cjs.Tween.get(this.duilian_r).wait(14).to({x:751.8},10).wait(1));

	// r1_l.png
	this.duilian_l = new lib.duilian_l();
	this.duilian_l.setTransform(77.1,525.7,1,1,0,0,0,62,270);

	this.timeline.addTween(cjs.Tween.get(this.duilian_l).wait(14).to({x:-100.9},10).wait(1));

	// result_b_2.png
	this.instance = new lib.补间49("synched",0);
	this.instance.setTransform(324,1286.4);

	this.instance_1 = new lib.补间50("synched",0);
	this.instance_1.setTransform(324,870.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:870.3},9).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).wait(5).to({startPosition:0},0).to({y:1228.3},10).wait(1));

	// person
	this.result_person = new lib.result_person();
	this.result_person.setTransform(320.1,-271.8,1,1,0,0,0,181,208.5);

	this.timeline.addTween(cjs.Tween.get(this.result_person).to({y:528.2},9).wait(5).to({y:-243.8},10).wait(1));

	// top
	this.instance_2 = new lib.cover_bg_top();

	this.instance_3 = new lib.补间51("synched",0);
	this.instance_3.setTransform(320,89);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间52("synched",0);
	this.instance_4.setTransform(320,-127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_4}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true,y:-127},10).wait(1));

	// bg
	this.instance_5 = new lib.cover_bg_2();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-480.3,640.3,1806.8);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		var status = 0;
		this.q1_a.addEventListener("click", q1_a_click.bind(this));
		function q1_a_click()
		{
			if(status == 0){
				selected = 4;
				score += 4;
				this.current1.gotoAndStop(1);
				this.gotoAndPlay(31);
				status = 1;
				
			}
		}
		
		this.q1_b.addEventListener("click", q1_b_click.bind(this));
		function q1_b_click()
		{
			if(status == 0){
				selected = 3;
				score += 3;
				this.current1.gotoAndStop(2);
				this.gotoAndPlay(31);
				status = 1;
				
			}
		}
		this.q1_c.addEventListener("click", q1_c_click.bind(this));
		function q1_c_click()
		{
			if(status == 0){
				selected = 2;
				score += 2;
				this.current1.gotoAndStop(3);
				this.gotoAndPlay(31);
				status = 1;
				
			}
		}
		this.q1_d.addEventListener("click", q1_d_click.bind(this));
		function q1_d_click()
		{
			if(status == 0){
				selected = 1;
				score += 1;
				this.current1.gotoAndStop(4);
				this.gotoAndPlay(31);
				status = 1;
				
			}
		}
	}
	this.frame_39 = function() {
		if(selected == 1){
			this.current1.gotoAndStop(0);
		}
	}
	this.frame_44 = function() {
		if(selected == 2){
			this.current1.gotoAndStop(0);
		}
	}
	this.frame_49 = function() {
		if(selected == 3){
			this.current1.gotoAndStop(0);
		}
	}
	this.frame_54 = function() {
		if(selected == 4){
			this.current1.gotoAndStop(0);
		}
	}
	this.frame_64 = function() {
		try{
			this.parent.gotoAndPlay(2);
		}catch(err){
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(5).call(this.frame_44).wait(5).call(this.frame_49).wait(5).call(this.frame_54).wait(10).call(this.frame_64).wait(1));

	// btn
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("EAsXgL3MhZBAAAIAAsgMBZBAAAEAsrAYYMhZVAAAIAAsgMBZVAAA");
	this.shape.setTransform(269.9,660);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("EgsqgYXMBZBAAAIAAMgMhZBAAAgEgsqgG3MBZVAAAIAANHMhZVAAAgEgsqAL4MBZVAAAIAAMgMhZVAAAg");
	this.shape_1.setTransform(269.9,660);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},30).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_1}]},5).to({state:[]},5).wait(11));

	// current
	this.q1_a = new lib.q1_a_1();
	this.q1_a.setTransform(268.9,422.6,1,1,0,0,0,284.9,42);
	this.q1_a.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_a, 0, 1, 1);

	this.current1 = new lib.current1();
	this.current1.setTransform(21.5,424.6,1,1,0,0,0,35.5,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.current1},{t:this.q1_a}]}).wait(65));

	// person
	this.instance = new lib.personmc();
	this.instance.setTransform(276.5,-564.1,1,1,0,0,0,276.5,212.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:80.1},5).wait(30).to({y:-587.9},10).wait(16));

	// q1_a.png
	this.instance_1 = new lib.补间13("synched",0);
	this.instance_1.setTransform(270,956.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间53("synched",0);
	this.instance_2.setTransform(268.9,422.3);

	this.instance_3 = new lib.补间14("synched",0);
	this.instance_3.setTransform(270,428.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_3}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true,x:268.9,y:422.3},10).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({y:976.6},10).wait(1));

	// q1_b.png
	this.instance_4 = new lib.补间11("synched",0);
	this.instance_4.setTransform(270,956.7);
	this.instance_4._off = true;

	this.q1_d = new lib.q1_d_1();
	this.q1_d.setTransform(272.9,776,1,1,0,0,0,288.9,40);
	this.q1_d.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_d, 0, 1, 1);

	this.q1_c = new lib.q1_c_1();
	this.q1_c.setTransform(270.9,658,1,1,0,0,0,286.9,42);
	this.q1_c.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_c, 0, 1, 1);

	this.q1_b = new lib.q1_b_1();
	this.q1_b.setTransform(270.9,544,1,1,0,0,0,286.9,40);
	this.q1_b.alpha = 0.012;
	new cjs.ButtonHelper(this.q1_b, 0, 1, 1);

	this.instance_5 = new lib.补间12("synched",0);
	this.instance_5.setTransform(270,544.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5},{t:this.q1_b},{t:this.q1_c},{t:this.q1_d}]},10).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_5}]},10).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({_off:true,regX:288.9,regY:40,x:272.9,y:776,alpha:0.012,mode:"independent"},10).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},10).wait(30).to({y:542.2},0).to({y:974.2},10).wait(6));

	// q1_c.png
	this.instance_6 = new lib.补间9("synched",0);
	this.instance_6.setTransform(270,956.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间10("synched",0);
	this.instance_7.setTransform(270,658.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({_off:true,y:658.2},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},10).wait(20).to({startPosition:0},0).to({y:974.2},10).wait(11));

	// q1_d.png
	this.instance_8 = new lib.补间7("synched",0);
	this.instance_8.setTransform(270,956.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间8("synched",0);
	this.instance_9.setTransform(270,774.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({_off:true,y:774.2},10).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},10).wait(10).to({startPosition:0},0).to({y:978.2},10).wait(16));

	// top
	this.instance_10 = new lib.补间5("synched",0);
	this.instance_10.setTransform(272,-384.1);

	this.instance_11 = new lib.补间6("synched",0);
	this.instance_11.setTransform(272,-184);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,y:-184},4).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},4).wait(30).to({startPosition:0},0).to({y:-380.1},4).to({_off:true},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-473.1,640,938.7);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// result
	this.result = new lib.result();
	this.result.setTransform(320,89,1,1,0,0,0,320,89);
	this.result._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result).wait(6).to({_off:false},0).wait(1));

	// count
	this.count_person = new lib.count_person();
	this.count_person.setTransform(324,322.1,1,1,0,0,0,95,145);
	this.count_person._off = true;

	this.timeline.addTween(cjs.Tween.get(this.count_person).wait(5).to({_off:false},0).to({_off:true},1).wait(1));

	// question4
	this.question4 = new lib.question4();
	this.question4.setTransform(320,89,1,1,0,0,0,320,89);
	this.question4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question4).wait(4).to({_off:false},0).to({_off:true},1).wait(2));

	// question3
	this.question3 = new lib.question3();
	this.question3.setTransform(320,89,1,1,0,0,0,320,89);
	this.question3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question3).wait(3).to({_off:false},0).to({_off:true},1).wait(3));

	// question2
	this.question2 = new lib.question2();
	this.question2.setTransform(320,89,1,1,0,0,0,320,89);
	this.question2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question2).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

	// question1
	this.question = new lib.question();
	this.question.setTransform(324.5,485.6,1,1,0,0,0,276.5,212.5);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// cover
	this.cover = new lib.cover();
	this.cover.setTransform(320,89,1,1,0,0,0,320,89);

	this.timeline.addTween(cjs.Tween.get(this.cover).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51,132,1206.1,2330);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;