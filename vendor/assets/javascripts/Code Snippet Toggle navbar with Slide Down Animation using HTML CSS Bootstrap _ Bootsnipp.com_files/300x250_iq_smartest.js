(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 300,
        height: 250,
        fps: 30,
        color: "#FFFFFF",
        manifest: [
            {src: "images/shine_glass.png", id: "shine_glass"},
            {src: "images/silhouettejpgcopy.jpg", id: "silhouettejpgcopy"},
            {src: "images/wasserman.jpg", id: "wasserman"}
        ]
    };


// symbols:


    (lib.shine_glass = function () {
        this.initialize(img.shine_glass);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 70, 146);


    (lib.silhouettejpgcopy = function () {
        this.initialize(img.silhouettejpgcopy);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 240, 416);


    (lib.wasserman = function () {
        this.initialize(img.wasserman);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 240, 334);


    (lib.text11 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("Ap+BmIALgaQAKAHAHAAQAFAAADgDQADgDAEgIIACgHIg5h3IAqAAIAVAwQAJAWADANIABAAIAfhTIAjAAIg0B/QgHATgIAIQgMAPgVAAQgOAAgQgKgAJnBtIAChtIgCAAIhBBtIgkAAIAAimIAkAAIgBBsIABAAIBChsIAjAAIAACmgAHABtIABhtIgBAAIhBBtIgkAAIAAimIAlAAIgCBsIABAAIBChsIAjAAIAACmgACFBtIAAimIAkAAIAACIIAlAAIAAiIIAkAAIAACIIAmAAIAAiIIAkAAIAACmgABBBtIAChtIgBAAIhCBtIghAAIAAimIAiAAIgBBsIABAAIBBhsIAkAAIAACmgAibBtIAAimIBeAAIAAAcIg6AAIAAAjIA6AAIAAAdIg6AAIAAAtIBCAAIAAAdgAjfBtIAAhJIg5AAIAABJIgkAAIAAimIAkAAIAAA/IA5AAIAAg/IAlAAIAACmgAmABtIAChqIgCAAIgeBDIgRAAIgdhDIgCAAIABBqIghAAIAAimIAkAAIAlBKIAlhKIAkAAIAACmgAIthNQgNgHAAgQQAAgGADgFIAYACIAAABIgBAFQAAAFADADQADADAHAAQAHAAADgDQADgDgBgFIAAgFIAAgBIAYgCQADAEgBAHQABAQgMAHQgLAGgQAAQgQAAgKgGgAAHhNQgLgHAAgQQABgGADgFIAVACIAAABIgBAFQAAAFAEADQACADAIAAQAGAAAEgDQACgDAAgFIgBgFIAAgBIAZgCQACAEAAAHQAAAQgMAHQgLAGgPAAQgQAAgLgGg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-65.2, -11.2, 130.4, 22.5);


    (lib.text10 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AITBnIAAgkIhmAAIAAAkIgWAAIAAg4IAMAAQALgRAGgVQAIgXACgxIABgkIBWAAIAACSIAUAAIAAA4gAHSg4QgBAlgHAbQgEATgMAUIBEAAIAAh/IgrAAgAoiAzQgTgXAAgoQAAgsASgWQARgVAeAAQAYAAAOAJQALAHAEAMQADALgDALIgWACIAAgGQAAgNgHgGQgJgJgPAAQgTAAgJAMQgMANAAAkIAAANQAAAgAOAPQALANAWAAQALAAANgFQAGgDAJgFIAJARQgIAEgKAFQgQAHgQAAQghAAgSgWgAqsBAIAJgQQAHAFAHAAQANAAAIgTIAEgIIg8h6IAbAAIAtBgIAIgWIAchKIAWAAIg0CBQgKAYgIAHQgKAJgPAAQgKAAgNgJgAAkAwQgSgVAAgqQAAgtASgVQASgVAfAAQAeAAATAVQASAWAAAsQAAAqgSAVQgSAWgfAAQggAAgRgWgAA3hIQgMAOAAAiIAAASQAAAfAMAOQALAMATAAQATAAAKgMQANgOAAgfIAAgSQAAgigNgOQgKgMgTAAQgTAAgLAMgAkrBGIAAimIAXAAIAABDIATAAQAQAAAIABQAOADAKAIQASAOAAAVQAAAWgQAOQgQAQgfAAgAkUAyIAeAAQANAAAJgJQAIgJAAgNQAAgPgJgGQgIgIgPAAIgcAAgAmEBGIAAiTIgwAAIAAgTIB4AAIAAATIgwAAIAACTgArfBGIAAiTIhNAAIAACTIgWAAIAAimIB5AAIAACmgAL7BDIAAiTIgwAAIAAgTIB4AAIAAATIgwAAIAACTgAKjBDIAAiFIhQCFIgYAAIAAimIAWAAIAACFIBRiFIAYAAIAACmgAEzBDIAAimIBUAAIAAATIg+AAIAAAzIA+AAIAAATIg+AAIAAA5IBHAAIAAAUgACvBDIAAimIBeAAIAAATIhHAAIAAAyIAVAAQAQAAAIABQAOADAKAIQASAOAAAVQAAAVgQAOQgQAPggAAgADGAvIAfAAQAQAAAIgJQAHgJgBgLQAAgQgJgHQgHgGgPAAIgeAAgAgbBDIAAiTIhLAAIAACTIgYAAIAAimIB7AAIAACmg");
        this.shape.setTransform(-0.6, 0.9);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-84.2, -9.5, 167.2, 20.8);


    (lib.text9 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAgAqQgMgNAAgdQAAgbAMgOQAMgOAUAAQAUAAAMAOQALAOAAAbQAAAcgLAOQgMAOgUAAQgUAAgMgOgAAtgjQgIAJAAAWIAAAJQAAAWAIAJQAGAIANAAQANAAAGgIQAIgJAAgWIAAgJQAAgWgIgJQgGgIgNAAQgNAAgGAIgAnSAqQgMgPAAgbQAAgbAMgOQALgOATAAQAPAAAKAHQAOAJgEARIgOABIAAgEQAAgHgFgFQgFgGgLAAQgLAAgHAIQgHAHAAAYIAAAHQAAAWAIAKQAHAIAPAAQAHAAAJgDIAJgFIAGALIgMAFQgJAFgLAAQgWAAgMgOgABuAqQAMgBAFgKQAEgHACgRIACgpIAAgTIA7AAIAABrIgPAAIAAheIgeAAIgBAZQAAAPgDAVQgEASgGAHQgIAJgPAAgAHQA2IAAhTIgcA4IgGAAIgcg4IAABTIgNAAIAAhrIAQAAIAeA5IAbg5IARAAIAABrgAE8A2IAAhrIA3AAIAAANIgoAAIAAAgIAoAAIAAALIgoAAIAAAmIAuAAIAAANgAEaA2IAAhVIg1BVIgPAAIAAhrIAOAAIAABVIA1hVIAPAAIAABrgAgbA2IAAheIggAAIAAgNIBMAAIAAANIgdAAIAABegAhAA2IgLgeIgnAAIgKAeIgOAAIAnhrIAMAAIAoBrgAhPAMIgMgfIgDgNIgBAAIgDAOIgMAeIAfAAgAijA2IAAgzIgzAAIAAAzIgPAAIAAhrIAPAAIAAAuIAzAAIAAguIAOAAIAABrgAkAA2IgLgeIgnAAIgKAeIgOAAIAnhrIAMAAIAoBrgAkPAMIgMgfQgCgGgBgHIgBAAIgDAOIgMAeIAfAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-47.9, -5.6, 95.9, 11.3);


    (lib.text8 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("AHxCBIgXg+IhNAAIgXA+Ig0AAIBikBIApAAIBiEBgAHMAWIgJgWQgLgggEgSIgCAAQgHAfgJAUIgHAVIAxAAgAB9CBIAAkBIBVAAQAvAAAVAQQAXASAAAjQAAASgIAPQgJAPgPAGIAAABQASAEALAOQALAQAAAWQAAASgHAQQgGAPgKAIQgWAUg0AAgAC1BVIAiAAQASAAAIgKQAJgIAAgRQAAgRgLgJQgJgHgVAAIgcAAgAC1gaIAcAAQATAAAJgKQAGgIAAgJQAAgQgIgHQgHgIgOAAIghAAgAgbCBIAAjTIhDAAIAAguIC7AAIAAAuIhCAAIAADTgAi1CBIACioIgCAAIhlCoIg3AAIAAkBIA5AAIgDCoIACAAIBlioIA3AAIAAEBgAouCBIAAkBIChAAIAAAuIhoAAIAAA1IASAAQAXAAAOACQAYAEAQAMQAfATAAAoQAAAkgbAXQgZAWg0AAgAn1BVIAhAAQAQAAAKgNQAIgJAAgPQAAgQgMgKQgKgIgRAAIgcAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-55.9, -12.9, 111.9, 26);


    (lib.text7 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("Ah/BAQgTgVAAgrQAAgpATgWQATgWAgAAQAgAAAUAWQATAWAAApQAAAqgTAWQgTAWghAAQghAAgSgWgAhigvQgKAKAAAeIAAAPQAAAeAKALQAIAJAOAAQAPAAAIgJQAJgLAAgeIAAgPQAAgegJgKQgIgJgPAAQgOAAgIAJgABuBUIAAhJIg6AAIAABJIgkAAIAAimIAkAAIAABBIA6AAIAAhBIAlAAIAACmg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-14.7, -8.6, 29.5, 17.4);


    (lib.text6 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhHA/QATgBAIgQQAGgNADgYQACgYABgnIAAgeIBZAAIAACmIgXAAIAAiTIgsAAIgBAnQgBAhgFAZQgDAagMANQgMAMgXACgADABSIAAiFIhRCFIgYAAIAAimIAXAAIAACFIBQiFIAZAAIAACmgAhtBSIAAiFIhQCFIgZAAIAAimIAXAAIAACFIBRiFIAYAAIAACmg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-21.5, -8.5, 43, 17.1);


    (lib.text5 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("AB4BTIAAilIAkAAIAAClgAgRBTIAAilIAjAAIAAA/IAQAAQAdAAAQALQAUANAAAZQAAAYgSAPQgQAOghAAgAASA2IAUAAQALAAAGgHQAGgGAAgKQAAgLgIgIQgHgFgLAAIgRAAgAhwBTIAAiIIgrAAIAAgdIB6AAIAAAdIgrAAIAACIg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-15.6, -8.4, 31.3, 16.8);


    (lib.text3 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("ACxBnIAAglIhnAAIAAAlIgVAAIAAg4IALAAQAMgTAGgTQAIgYABgwIABglIBXAAIAACTIATAAIAAA4gABwg4QgBAlgHAbQgEASgMAVIBEAAIAAh/IgrAAgAk8AwQgTgVABgrQgBgsATgVQARgVAfAAQAfAAATAVQASAVAAAsQAAArgSAVQgTAVgfAAQgfAAgRgVgAkphIQgNAOAAAhIAAATQAAAfANAOQAKAMATAAQAVAAAJgMQAMgOAAgfIAAgTQAAghgMgOQgJgMgVAAQgTAAgKAMgAGZBCIAAiSIgxAAIAAgUIB5AAIAAAUIgxAAIAACSgAFBBCIAAiEIhRCEIgYAAIAAimIAXAAIAACFIBRiFIAXAAIAACmgAguBCIAAimIBSAAIAAAUIg7AAIAAAyIA7AAIAAATIg7AAIAAA6IBEAAIAAATgAiyBCIAAimIBfAAIAAAUIhHAAIAAAxIAUAAQAQAAAJACQAOACAKAIQARAPAAAVQAAAUgPAPQgQAOggAAgAiaAvIAeAAQAQAAAJgJQAGgIAAgNQAAgQgJgGQgHgGgQAAIgdAAgAl9BCIAAiSIhMAAIAACSIgXAAIAAimIB6AAIAACmg");
        this.shape.setTransform(2.6, 0);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-45.5, -10.3, 96.3, 20.8);


    (lib.text2 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("ArNBBQgTgWAAgqQAAgrASgVQASgVAiAAQAaAAAOAJQALAHAEANQAEANgEANIgjACQACgQgGgHQgHgFgMAAQgNAAgHAJQgJALAAAfIAAAMQAAAdAKALQAKAKAQAAQAPAAAKgFQAKgFAHgFIAOAZQgLAIgOAGQgQAGgRAAQghAAgUgXgAtrBCQgUgWAAgrQAAgpAUgWQARgWAiAAQAhAAASAWQATAWAAApQAAArgTAWQgSAWghAAQgiAAgRgWgAtOguQgKALAAAeIAAAOQAAAfAKAKQAHAJAPAAQAOAAAJgJQAJgKAAgfIAAgOQAAgegJgLQgKgJgNAAQgQAAgGAJgAOJA/QgTgWAAgpQAAgrATgWQASgWAhAAQAhAAATAWQASAWAAArQAAApgSAWQgTAWghAAQghAAgSgWgAOmgxQgJALAAAeIAAAOQAAAfAJAKQAIAJAOAAQAPAAAIgJQAKgKAAgfIAAgOQAAgegKgLQgJgJgOAAQgOAAgIAJgAMABOQgPgHgIgJIAQgYQAIAJAMAEQALAFAMAAQASAAAGgJQAFgFAAgJQAAgMgHgGQgIgGgNAAIgOAAIAAgZIANAAQAMAAAGgHQAEgHABgGQgBgLgEgFQgGgGgKAAQgKAAgFADQgLAHAEAOIgfgDQgFgMAEgLQADgLALgHQAPgJAXAAQAfAAARAOQAOAMAAAUQAAAMgGAKQgHALgNAEIAAAAQAQAEAIAIQAIAKAAAPQgBAXgSAPQgSAOgeAAQgTAAgSgHgADvBVIAAimIBfAAIAAAdIg6AAIAAAkIA6AAIAAAbIg6AAIAAAtIBCAAIAAAdgABjBVIAAimIBpAAIAAAeIhEAAIAAAjIAMAAQAiAAAQALQAUALAAAaQAAAYgRAPQgQAOgiAAgACIA4IAWAAQAKAAAGgIQAGgGgBgJQAAgLgHgGQgHgGgLAAIgSAAgAgVBVIAAimIBdAAIAAAdIg6AAIAAAkIA6AAIAAAbIg6AAIAAAtIBCAAIAAAdgAh0BVIAAiIIgsAAIAAgeIB7AAIAAAeIgrAAIAACIgAkXBVIAAiIIgrAAIAAgeIB6AAIAAAeIgrAAIAACIgAmvBVIAAimIBgAAIAAAdIg7AAIAAAkIA7AAIAAAbIg7AAIAAAtIBCAAIAAAdgAnlBVIgQgoIgxAAIgPAoIgiAAIA/imIAbAAIA/CmgAn+AQIgFgQIgKgeIgCAAQgFAXgFAJIgEAOIAfAAgAwFBVIAAimIA6AAQAdAAAPALQATANAAAZQgBAWgOAMQgPAPgeAAIgYAAIAABEgAvggKIAUAAQANAAAGgGQAGgFAAgJQAAgKgGgGQgGgGgMAAIgVAAgAyRBVIAAimIBpAAIAAAeIhEAAIAAAjIALAAQAjAAAQALQAUAMAAAZQAAAYgSAPQgQAOghAAgAxsA4IAVAAQAMAAAFgIQAGgGAAgJQgBgLgHgGQgHgGgLAAIgSAAgAQaBSIAAimIA4AAQAdAAAOALQAPALAAAXQAAAMgFAJQgGAKgKAEIAAAAQAMAEAHAIQAHAKAAAOQAAAYgPANQgNANgjAAgAQ/A1IAVAAQAMAAAFgGQAGgFAAgLQAAgMgHgFQgGgFgNAAIgSAAgAQ/gSIASAAQAMAAAGgGQADgFAAgHQAAgKgEgEQgFgFgKAAIgUAAgAKxBSIAAimIAlAAIAACmgAInBSIAAimIAkAAIAAA/IAQAAQAdAAAQALQAUANAAAaQAAAYgRAPQgRAOghAAgAJLA1IAVAAQALAAAFgIQAGgGAAgJQAAgNgIgGQgGgFgMAAIgRAAgAGYBSIAAimIA4AAQAdAAAOALQAPALAAAXQAAAMgFAJQgFAKgKAEIAAAAQAMAEAGAIQAIAKAAAOQAAAYgQANQgOANghAAgAG8A1IAXAAQAKAAAHgGQAFgFAAgLQAAgMgHgFQgGgFgNAAIgTAAgAG8gSIATAAQANAAAEgGQAFgFAAgHQgBgKgEgEQgFgFgJAAIgWAAg");
        this.shape.setTransform(1.1, -12.1);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-115.9, -20.9, 234, 17.7);


    (lib.text1 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AjBBBQgSgXAAgqQAAgrARgVQASgVAdAAQAZAAAOAJQALAHADAMQADALgDALIgVABIAAgFQAAgMgHgHQgJgJgQAAQgRAAgKAMQgMAMAAAlIAAALQAAAiANAPQAMANAWAAQAJAAAPgFQAGgDAIgFIAJARQgHAEgKAFQgRAGgPAAQghAAgTgVgAlGBBQgSgXAAgqQAAgrARgVQASgVAdAAQAZAAAOAJQALAHADAMQADALgDALIgVABIAAgFQAAgMgHgHQgJgJgQAAQgRAAgKAMQgMAMAAAlIAAALQAAAiANAPQAMANAWAAQAJAAAPgFQAGgDAIgFIAJARQgHAEgKAFQgRAGgPAAQghAAgTgVgAJFBTIAAhOIhOAAIAABOIgXAAIAAimIAXAAIAABHIBOAAIAAhHIAXAAIAACmgAG2BTIgRguIg7AAIgQAuIgWAAIA9imIATAAIA8CmgAGfASIgSgwIgFgUIgBAAQgBAJgEAMIgSAvIAvAAgAEdBTIAAiBIgqBXIgKAAIgrhXIAACBIgVAAIAAimIAaAAIAtBZIAqhZIAaAAIAACmgAAlBTIAAimIA2AAQAbAAAPAMQAQANAAAVQAAAWgOANQgPANgZAAIgjAAIAABIgAA8gGIAiAAQAPAAAIgIQAIgIAAgNQAAgPgJgHQgIgGgOAAIgiAAgAhIBTIAAimIBTAAIAAAUIg8AAIAAAyIA8AAIAAARIg8AAIAAA8IBEAAIAAATgAl1BTIgQguIg7AAIgQAuIgWAAIA8imIATAAIA9CmgAmLASIgSgwIgFgUIgBAAQgCAJgEAMIgRAvIAvAAgApbBTIAAimIAzAAQAbAAANALQAOAMAAATQAAAOgGAKQgGAJgKAEIAAABQALADAIAJQAJALAAAPQAAAWgRAOQgOAMgcAAgApEBAIAgAAQARAAAHgIQAGgHAAgNQAAgPgHgHQgJgJgQAAIgeAAgApEgMIAcAAQAPAAAHgGQAIgIAAgLQAAgOgHgGQgHgGgNAAIgfAAg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-60.4, -8.6, 120.9, 17.4);


    (lib.Symbol22 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgjBAIAUhZIApAAIgUBZgAgIgmQgJgFAAgGQAAgGAJgFQAHgDAKAAQALAAAIADQAIAFAAAGQAAAGgIAFQgIADgLAAQgKAAgHgDg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-3.6, -6.5, 7.3, 13);


    (lib.Symbol21 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhBAzQgNgNAFgYQAFgWATgNQARgMAXAAQAZAAAHANIABAAIAJgqIArAAIgbB6IgpAAIABgKIAAAAQgMANgbAAQgXAAgMgMgAgUAAQgHAEgCAKQgFAVAYAAQAVAAAFgVQAFgSgWgBQgMAAgHAFg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-7.6, -6.3, 15.2, 12.7);


    (lib.Symbol20 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAKAuIALguQADgQgQAAQgSAAgEAVIgKApIgrAAIAUhZIAqAAIgDALQAFgFAJgEQAMgEAOAAQAUAAAJAIQAJAJgEATIgNA3g");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-6.8, -4.7, 13.6, 9.4);


    (lib.Symbol19 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag8AkQgOgLAGgZQAFgYATgLQAUgNAiAAQAkAAAOANQAOALgFAYQgFAZgUALQgTANgjAAQgkAAgOgNgAgXAAQgFAWAYAAQAXAAAFgWQAFgVgZAAQgXAAgEAVg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-7.1, -4.9, 14.3, 9.9);


    (lib.Symbol18 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AAnAuIAMgyQACgLgLgBQgPAAgDAQIgLAuIgoAAIAMgyQACgLgLgBQgPAAgDAQIgKAuIgrAAIAThZIAqAAIgDAMIABAAQAOgPAWABQANAAAGADQAGAEADAHQAOgPAYABQARAAAHAHQAJAIgDAPIgOA9g");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-9.7, -4.7, 19.4, 9.4);


    (lib.Symbol17 = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF5F00").s().p("AAPCkQgdgDgRgJQgTgJgLgSQgGgJgBgGQgHgYgMhAQATAfBWAKIAEABIAUBmgAhRATQgMgTAGgSQAEgMALgKICOh9IAUBzIh6BgQgmgKgLgRg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-9, -16.6, 18.1, 33.3);


    (lib.silhouette = function () {
        this.initialize();

        // Layer 2
        this.instance = new lib.silhouettejpgcopy();
        this.instance.setTransform(-123.9, -211.2);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-123.9, -211.2, 240, 416);


    (lib.shine1_long = function () {
        this.initialize();

        // Layer 1
        this.instance = new lib.shine_glass();
        this.instance.setTransform(-35, -73);

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-35, -73, 70, 146);


    (lib.question_dot_white = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhuBqIAAjTIDdAAIAADTg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-11.1, -10.6, 22.3, 21.3);


    (lib.question_dot_orange = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("AhuBqIAAjTIDdAAIAADTg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-11.1, -10.6, 22.3, 21.3);


    (lib.iq_tail_white = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgFA+IhjhmQgIgJAMgBIBkgLQADgBACABQACABADADIBhBjQABABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIhuARg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-10.8, -6.3, 21.7, 12.6);


    (lib.bg = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EgMeAu3MAAAhdtIY9AAMAAABdtg");
        this.shape.setTransform(30, -75, 1.875, 0.417);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-120, -200, 300, 250);


    (lib.УМНЕЙШИЙ = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("Ap+BmIALgZQAIAGAJAAQAIAAAHgOIACgHIg5h3IApAAIAVAwQAGAOAHAVIABAAIAMgjIASgwIAkAAIg0CAQgJAUgGAHQgMAOgVAAQgPAAgPgKgAJnBtIAChtIgCAAIhCBtIgjAAIAAimIAkAAIgBBsIABAAIBChsIAjAAIAACmgAG/BtIAChtIgBAAIhCBtIgjAAIAAimIAkAAIgCBsIACAAIBBhsIAkAAIAACmgACEBtIAAimIAlAAIAACIIAlAAIAAiIIAkAAIAACIIAlAAIAAiIIAlAAIAACmgABBBtIAChtIgCAAIhBBtIgiAAIAAimIAjAAIgBBsIABAAIBBhsIAkAAIAACmgAicBtIAAimIBfAAIAAAdIg6AAIAAAiIA6AAIAAAdIg6AAIAAAtIBCAAIAAAdgAjfBtIAAhJIg5AAIAABJIglAAIAAimIAlAAIAABAIA5AAIAAhAIAkAAIAACmgAmABtIABhpIgBAAIgeBDIgRAAIgdhDIgCAAIABBpIgiAAIAAimIAkAAIAmBLIAlhLIAkAAIAACmgAIshNQgMgHAAgPQAAgIADgEIAYACIgBABIAAAFQAAAGADACQACADAIAAQAHAAADgDQACgCAAgGIAAgFIgBgBIAZgCQADAFgBAHQABAPgMAHQgLAGgQAAQgQAAgLgGgAAHhNQgLgHAAgPQAAgIADgEIAWACIAAABIgBAFQAAAGADACQADADAHAAQAIAAADgDQACgCAAgGIgBgFIAAgBIAZgCQACAFAAAHQAAAPgMAHQgLAGgQAAQgQAAgKgGg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-65.2, -11.2, 130.4, 22.5);


    (lib.ВАССЕРМАНОМ = function () {
        this.initialize();

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("AFTApQgNgOAAgbQAAgbANgOQANgOAUAAQAVAAANAOQAMAPAAAaQAAAbgMAOQgMAPgWAAQgUAAgNgPgAFmgeQgHAHAAATIAAAJQAAATAHAHQAFAGAJAAQAJAAAGgGQAGgHAAgTIAAgJQAAgTgGgHQgFgGgKAAQgJAAgFAGgAjyApQgMgPAAgaQAAgcAMgOQAMgNAVAAQARAAAJAGQAIAFACAIQACAIgCAJIgXABQACgLgFgEQgDgDgJAAQgIAAgFAGQgFAGgBAVIAAAHQAAATAHAHQAGAGALAAQAJAAAHgDQAGgCAFgFIAJARQgGAFgKAEQgKAEgLAAQgWAAgNgPgAlPApQgNgPAAgaQAAgbANgPQAMgNAVAAQASAAAIAGQAIAFACAIQACAIgDAJIgVABQACgKgGgFQgEgDgIAAQgJAAgDAGQgHAHAAAUIAAAHQABATAGAHQAGAGALAAQAJAAAHgDIALgHIAJARQgGAFgKAEQgKAEgLAAQgWAAgNgPgAH5A2IABhCIgBAAIgUApIgKAAIgTgpIgBAAIAABCIgWAAIAAhrIAYAAIAYAyIAYgyIAYAAIAABrgAEgA2IAAgvIgmAAIAAAvIgYAAIAAhrIAYAAIAAArIAmAAIAAgrIAYAAIAABrgAC/A2IgKgaIggAAIgKAaIgWAAIAphrIASAAIAoBrgACvAJIgEgJQgEgLgCgJIgBAAIgKAdIAVAAgABUA2IABhCIgBAAIgUApIgKAAIgUgpIgBAAIABBCIgXAAIAAhrIAYAAIAZAyIAYgyIAYAAIAABrgAhNA2IAAhrIAlAAQAUAAAJAHQALAIAAARQAAAOgIAHQgKAKgTAAIgQAAIAAAsgAg1gHIANAAQAIAAAFgEQADgDAAgGQAAgHgDgDQgFgEgIAAIgNAAgAidA2IAAhrIA+AAIAAATIgmAAIAAAXIAmAAIAAARIgmAAIAAAdIArAAIAAATgAl2A2IgKgaIggAAIgJAaIgXAAIAqhrIARAAIApBrgAmFAJIgEgJQgEgLgDgJIgBAAIgJAdIAVAAgAoQA2IAAhrIAkAAQAUAAAIAHQAKAHAAAPQAAAIgEAGQgDAGgGADIAAAAQAHABAFAGQAEAGABAJQAAAQgKAIQgJAJgWAAgAn4AjIAOAAQAHAAAEgEQADgDAAgHQAAgJgEgCQgEgEgJAAIgLAAgAn4gKIALAAQAJAAADgEQADgEAAgEQAAgGgEgDQgCgDgHAAIgNAAg");
        this.shape.setTransform(1, 0);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-51.9, -5.6, 105.9, 11.3);


    (lib.wasserman_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_133 = function () {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(1));

        // Layer 6 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AnsE/QgogLg3gnQg2gmgcgmQgagjgMgvQgJgjgCg4QgDguARg0QARg1AfgnQAhgrAugeQAggVAygVQAlgQA7ABQAsABAxAJQAnAIAVAMQAXAMAoAlQAjAfAcA3QAKATASAtQAFAMgEAPQgFAUAAAGQAAAGAGAPQAFAMgHASQgJAbgqA8QgvBCg3A8Qg0A5hRARQgeAGgcAAQgdAAgbgHgAFMEGQhFggg4g5Qgzg0gEgfQgDgVAKgZQAKgZAAgDQgBgHgFgOIgJgcQgDgOAFgHIAJgLQACgFAJgHQAGgHgHgJQgLgOgbgLIAIgeQAIgYAQgVQARgWAdgbQAZgXAYgRQAQgLAVgIQARgHAmgKQAvgNA7ALQBEANA8AqQAoAdAkA7QAdAvAQAwQAHAWABAaIAAAlQACAogKAeQgGASgGAFQgGAFgOAAQgPgBgXAJQgWAKAJADQAKAFANADQAQADAIAAQAJgBAFAKQAGAKgKAIIgnApQgiAjgUAOQgiAWhHAJQgYADgWAAQg9AAgwgWg");
        mask.setTransform(4.4, -44.5);

        // shine1_long
        this.instance = new lib.shine1_long();
        this.instance.setTransform(-87.6, 13.8, 1, 1, -23.4);
        this.instance.alpha = 0.672;
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off: false}, 0).wait(1).to({
            x: -84,
            y: 12.3,
            alpha: 0.661
        }, 0).wait(1).to({x: -80.3, y: 10.8, alpha: 0.65}, 0).wait(1).to({
            x: -76.6,
            y: 9.2,
            alpha: 0.638
        }, 0).wait(1).to({x: -72.8, y: 7.7, alpha: 0.627}, 0).wait(1).to({
            x: -69,
            y: 6.1,
            alpha: 0.615
        }, 0).wait(1).to({x: -65.1, y: 4.5, alpha: 0.604}, 0).wait(1).to({
            x: -61.3,
            y: 3,
            alpha: 0.592
        }, 0).wait(1).to({x: -57.3, y: 1.4, alpha: 0.58}, 0).wait(1).to({
            x: -53.4,
            y: -0.3,
            alpha: 0.568
        }, 0).wait(1).to({x: -49.4, y: -1.9, alpha: 0.556}, 0).wait(1).to({
            x: -45.4,
            y: -3.5,
            alpha: 0.544
        }, 0).wait(1).to({x: -41.4, y: -5.1, alpha: 0.532}, 0).wait(1).to({
            x: -37.4,
            y: -6.8,
            alpha: 0.52
        }, 0).wait(1).to({x: -33.4, y: -8.4, alpha: 0.507}, 0).wait(1).to({
            x: -29.4,
            y: -10.1,
            alpha: 0.495
        }, 0).wait(1).to({x: -25.4, y: -11.7, alpha: 0.483}, 0).wait(1).to({
            x: -21.3,
            y: -13.4,
            alpha: 0.471
        }, 0).wait(1).to({x: -17.3, y: -15, alpha: 0.459}, 0).wait(1).to({
            x: -13.3,
            y: -16.6,
            alpha: 0.447
        }, 0).wait(1).to({x: -9.3, y: -18.3, alpha: 0.434}, 0).wait(1).to({
            x: -5.3,
            y: -19.9,
            alpha: 0.422
        }, 0).wait(1).to({x: -1.4, y: -21.5, alpha: 0.41}, 0).wait(1).to({
            x: 2.6,
            y: -23.1,
            alpha: 0.398
        }, 0).wait(1).to({x: 6.5, y: -24.7, alpha: 0.387}, 0).wait(1).to({
            x: 10.4,
            y: -26.3,
            alpha: 0.375
        }, 0).wait(1).to({x: 14.2, y: -27.9, alpha: 0.363}, 0).wait(1).to({
            x: 18,
            y: -29.5,
            alpha: 0.352
        }, 0).wait(1).to({x: 21.8, y: -31, alpha: 0.34}, 0).wait(1).to({
            x: 25.6,
            y: -32.5,
            alpha: 0.329
        }, 0).wait(1).to({x: 29.3, y: -34, alpha: 0.317}, 0).wait(1).to({
            x: 32.9,
            y: -35.5,
            alpha: 0.306
        }, 0).wait(1).to({x: 36.5, y: -37, alpha: 0.296}, 0).wait(1).to({
            x: 40.1,
            y: -38.5,
            alpha: 0.285
        }, 0).wait(1).to({x: 43.6, y: -39.9, alpha: 0.274}, 0).wait(1).to({
            x: 47,
            y: -41.3,
            alpha: 0.264
        }, 0).wait(1).to({x: 50.4, y: -42.7, alpha: 0.253}, 0).wait(1).to({
            x: 53.7,
            y: -44,
            alpha: 0.243
        }, 0).wait(1).to({x: 56.9, y: -45.4, alpha: 0.234}, 0).wait(1).to({
            x: 60.1,
            y: -46.7,
            alpha: 0.224
        }, 0).wait(1).to({x: 63.3, y: -47.9, alpha: 0.214}, 0).wait(1).to({
            x: 66.3,
            y: -49.2,
            alpha: 0.205
        }, 0).wait(1).to({x: 69.3, y: -50.4, alpha: 0.196}, 0).wait(1).to({
            x: 72.2,
            y: -51.6,
            alpha: 0.187
        }, 0).wait(1).to({x: 75, y: -52.7, alpha: 0.179}, 0).wait(1).to({
            x: 77.7,
            y: -53.9,
            alpha: 0.171
        }, 0).wait(1).to({x: 80.4, y: -54.9, alpha: 0.162}, 0).wait(1).to({
            x: 83,
            y: -56,
            alpha: 0.155
        }, 0).wait(1).to({x: 85.5, y: -57, alpha: 0.147}, 0).wait(1).to({
            x: 87.9,
            y: -58,
            alpha: 0.14
        }, 0).wait(1).to({x: 90.2, y: -59, alpha: 0.133}, 0).wait(1).to({
            x: 92.5,
            y: -59.9,
            alpha: 0.126
        }, 0).wait(1).to({x: 94.6, y: -60.8, alpha: 0.119}, 0).wait(1).to({
            x: 96.7,
            y: -61.6,
            alpha: 0.113
        }, 0).wait(1).to({x: 98.6, y: -62.4, alpha: 0.107}, 0).wait(1).to({
            x: 100.5,
            y: -63.2,
            alpha: 0.102
        }, 0).wait(1).to({x: 102.3, y: -63.9, alpha: 0.096}, 0).wait(1).to({
            x: 104,
            y: -64.6,
            alpha: 0.091
        }, 0).wait(1).to({x: 105.6, y: -65.2, alpha: 0.086}, 0).wait(1).to({
            x: 107.1,
            y: -65.8,
            alpha: 0.082
        }, 0).wait(1).to({x: 108.4, y: -66.4, alpha: 0.077}, 0).wait(1).to({
            x: 109.7,
            y: -66.9,
            alpha: 0.074
        }, 0).wait(1).to({x: 110.9, y: -67.4, alpha: 0.07}, 0).wait(1).to({
            x: 112,
            y: -67.9,
            alpha: 0.067
        }, 0).wait(1).to({x: 113, y: -68.3, alpha: 0.064}, 0).wait(1).to({
            x: 113.9,
            y: -68.6,
            alpha: 0.061
        }, 0).wait(1).to({x: 114.7, y: -68.9, alpha: 0.059}, 0).wait(1).to({
            x: 115.4,
            y: -69.2,
            alpha: 0.057
        }, 0).wait(1).to({x: 115.9, y: -69.5, alpha: 0.055}, 0).wait(1).to({
            x: 116.4,
            y: -69.7,
            alpha: 0.053
        }, 0).wait(1).to({x: 116.8, y: -69.8, alpha: 0.052}, 0).wait(1).to({
            x: 117,
            y: -69.9,
            alpha: 0.051
        }, 0).wait(1).to({x: 117.2, y: -70}, 0).wait(1).to({x: 117.3}, 0).wait(56));

        // Layer 1
        this.instance_1 = new lib.wasserman();
        this.instance_1.setTransform(-120, -167);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-120, -167, 240, 334);


    (lib.text8_mc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // БИТВА
        this.instance = new lib.text8();
        this.instance.setTransform(43.8, -198.7);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            y: -194.3,
            alpha: 0.161
        }, 0).wait(1).to({y: -190.5, alpha: 0.3}, 0).wait(1).to({y: -187.2, alpha: 0.419}, 0).wait(1).to({
            y: -184.4,
            alpha: 0.521
        }, 0).wait(1).to({y: -182, alpha: 0.608}, 0).wait(1).to({y: -179.9, alpha: 0.683}, 0).wait(1).to({
            y: -178.2,
            alpha: 0.746
        }, 0).wait(1).to({y: -176.7, alpha: 0.8}, 0).wait(1).to({y: -175.4, alpha: 0.845}, 0).wait(1).to({
            y: -174.4,
            alpha: 0.883
        }, 0).wait(1).to({y: -173.5, alpha: 0.914}, 0).wait(1).to({y: -172.8, alpha: 0.94}, 0).wait(1).to({
            y: -172.3,
            alpha: 0.96
        }, 0).wait(1).to({y: -171.8, alpha: 0.975}, 0).wait(1).to({y: -171.5, alpha: 0.987}, 0).wait(1).to({
            y: -171.3,
            alpha: 0.994
        }, 0).wait(1).to({y: -171.2, alpha: 0.999}, 0).wait(1).to({y: -171.1, alpha: 1}, 0).wait(104).to({
            y: -171.2,
            alpha: 0.998
        }, 0).wait(1).to({y: -171.4, alpha: 0.992}, 0).wait(1).to({y: -171.6, alpha: 0.981}, 0).wait(1).to({
            y: -172,
            alpha: 0.965
        }, 0).wait(1).to({y: -172.6, alpha: 0.943}, 0).wait(1).to({y: -173.3, alpha: 0.915}, 0).wait(1).to({
            y: -174.1,
            alpha: 0.881
        }, 0).wait(1).to({y: -175.2, alpha: 0.839}, 0).wait(1).to({y: -176.4, alpha: 0.789}, 0).wait(1).to({
            y: -177.9,
            alpha: 0.73
        }, 0).wait(1).to({y: -179.6, alpha: 0.662}, 0).wait(1).to({y: -181.6, alpha: 0.583}, 0).wait(1).to({
            y: -183.8,
            alpha: 0.492
        }, 0).wait(1).to({y: -186.4, alpha: 0.389}, 0).wait(1).to({y: -189.3, alpha: 0.273}, 0).wait(1).to({
            y: -192.6,
            alpha: 0.143
        }, 0).wait(1).to({y: -196.1, alpha: 0}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-12.1, -211.7, 111.9, 25.9);


    (lib.text_iq = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // c Анатолием
        this.instance = new lib.text9();
        this.instance.setTransform(40.6, -12.4);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            y: -17.2,
            alpha: 0.161
        }, 0).wait(1).to({y: -21.3, alpha: 0.3}, 0).wait(1).to({y: -24.9, alpha: 0.419}, 0).wait(1).to({
            y: -27.9,
            alpha: 0.521
        }, 0).wait(1).to({y: -30.5, alpha: 0.608}, 0).wait(1).to({y: -32.7, alpha: 0.683}, 0).wait(1).to({
            y: -34.6,
            alpha: 0.746
        }, 0).wait(1).to({y: -36.2, alpha: 0.8}, 0).wait(1).to({y: -37.5, alpha: 0.845}, 0).wait(1).to({
            y: -38.6,
            alpha: 0.883
        }, 0).wait(1).to({y: -39.6, alpha: 0.914}, 0).wait(1).to({y: -40.3, alpha: 0.94}, 0).wait(1).to({
            y: -40.9,
            alpha: 0.96
        }, 0).wait(1).to({y: -41.4, alpha: 0.975}, 0).wait(1).to({y: -41.7, alpha: 0.987}, 0).wait(1).to({
            y: -41.9,
            alpha: 0.994
        }, 0).wait(1).to({
            y: -42.1,
            alpha: 0.999
        }, 0).wait(1).to({alpha: 1}, 0).wait(108).to({alpha: 0.998}, 0).wait(1).to({
            y: -41.9,
            alpha: 0.992
        }, 0).wait(1).to({y: -41.7, alpha: 0.981}, 0).wait(1).to({y: -41.3, alpha: 0.965}, 0).wait(1).to({
            y: -40.8,
            alpha: 0.943
        }, 0).wait(1).to({y: -40.1, alpha: 0.915}, 0).wait(1).to({y: -39.4, alpha: 0.881}, 0).wait(1).to({
            y: -38.4,
            alpha: 0.839
        }, 0).wait(1).to({y: -37.2, alpha: 0.789}, 0).wait(1).to({y: -35.9, alpha: 0.73}, 0).wait(1).to({
            y: -34.3,
            alpha: 0.662
        }, 0).wait(1).to({y: -32.5, alpha: 0.583}, 0).wait(1).to({y: -30.4, alpha: 0.492}, 0).wait(1).to({
            y: -28,
            alpha: 0.389
        }, 0).wait(1).to({y: -25.4, alpha: 0.273}, 0).wait(1).to({y: -22.4, alpha: 0.143}, 0).wait(1).to({
            y: -19.1,
            alpha: 0
        }, 0).wait(1));

        // ВАССЕРМАНОМ
        this.instance_1 = new lib.ВАССЕРМАНОМ();
        this.instance_1.setTransform(40.9, 3.3);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off: false}, 0).wait(1).to({
            regX: 1,
            x: 41.9,
            y: -1.3,
            alpha: 0.161
        }, 0).wait(1).to({y: -5.3, alpha: 0.3}, 0).wait(1).to({y: -8.7, alpha: 0.419}, 0).wait(1).to({
            y: -11.6,
            alpha: 0.521
        }, 0).wait(1).to({y: -14.1, alpha: 0.608}, 0).wait(1).to({y: -16.3, alpha: 0.683}, 0).wait(1).to({
            y: -18.1,
            alpha: 0.746
        }, 0).wait(1).to({y: -19.6, alpha: 0.8}, 0).wait(1).to({y: -20.9, alpha: 0.845}, 0).wait(1).to({
            y: -22,
            alpha: 0.883
        }, 0).wait(1).to({y: -22.9, alpha: 0.914}, 0).wait(1).to({y: -23.6, alpha: 0.94}, 0).wait(1).to({
            y: -24.2,
            alpha: 0.96
        }, 0).wait(1).to({y: -24.6, alpha: 0.975}, 0).wait(1).to({y: -25, alpha: 0.987}, 0).wait(1).to({
            y: -25.2,
            alpha: 0.994
        }, 0).wait(1).to({y: -25.3, alpha: 0.999}, 0).wait(1).to({
            regX: 0,
            x: 40.9,
            y: -25.4,
            alpha: 1
        }, 0).wait(100).to({regX: 1, x: 41.9, y: -25.3, alpha: 0.998}, 0).wait(1).to({
            y: -25.2,
            alpha: 0.992
        }, 0).wait(1).to({y: -24.9, alpha: 0.981}, 0).wait(1).to({y: -24.6, alpha: 0.965}, 0).wait(1).to({
            y: -24.1,
            alpha: 0.943
        }, 0).wait(1).to({y: -23.5, alpha: 0.915}, 0).wait(1).to({y: -22.7, alpha: 0.881}, 0).wait(1).to({
            y: -21.8,
            alpha: 0.839
        }, 0).wait(1).to({y: -20.7, alpha: 0.789}, 0).wait(1).to({y: -19.4, alpha: 0.73}, 0).wait(1).to({
            y: -17.9,
            alpha: 0.662
        }, 0).wait(1).to({y: -16.2, alpha: 0.583}, 0).wait(1).to({y: -14.2, alpha: 0.492}, 0).wait(1).to({
            y: -11.9,
            alpha: 0.389
        }, 0).wait(1).to({y: -9.4, alpha: 0.273}, 0).wait(1).to({y: -6.5, alpha: 0.143}, 0).wait(1).to({
            regX: 0,
            x: 40.9,
            y: -3.4,
            alpha: 0
        }, 0).to({_off: true}, 1).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.3, -18, 95.9, 11.3);


    (lib.text_final = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // пусть победит
        this.instance = new lib.text10();
        this.instance.setTransform(40.7, -152.5);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: -0.6,
            regY: 0.9,
            x: 40.1,
            y: -149.1,
            alpha: 0.156
        }, 0).wait(1).to({y: -147, alpha: 0.288}, 0).wait(1).to({y: -145.3, alpha: 0.401}, 0).wait(1).to({
            y: -143.7,
            alpha: 0.498
        }, 0).wait(1).to({y: -142.4, alpha: 0.581}, 0).wait(1).to({y: -141.3, alpha: 0.654}, 0).wait(1).to({
            y: -140.3,
            alpha: 0.716
        }, 0).wait(1).to({y: -139.5, alpha: 0.77}, 0).wait(1).to({y: -138.7, alpha: 0.817}, 0).wait(1).to({
            y: -138.1,
            alpha: 0.857
        }, 0).wait(1).to({y: -137.6, alpha: 0.89}, 0).wait(1).to({y: -137.1, alpha: 0.919}, 0).wait(1).to({
            y: -136.8,
            alpha: 0.942
        }, 0).wait(1).to({y: -136.5, alpha: 0.961}, 0).wait(1).to({y: -136.2, alpha: 0.976}, 0).wait(1).to({
            y: -136.1,
            alpha: 0.987
        }, 0).wait(1).to({y: -135.9, alpha: 0.994}, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 40.7,
            y: -136.8,
            alpha: 1
        }, 0).wait(40).to({
            regX: -0.6,
            regY: 0.9,
            x: 39.8,
            y: -135.9
        }, 0).wait(1).to({x: 39}, 0).wait(1).to({x: 37.5}, 0).wait(1).to({x: 35.4}, 0).wait(1).to({x: 32.6}, 0).wait(1).to({x: 29}, 0).wait(1).to({x: 24.7}, 0).wait(1).to({x: 19.5}, 0).wait(1).to({x: 13.4}, 0).wait(1).to({x: 6.2}, 0).wait(1).to({x: -2}, 0).wait(1).to({x: -11.6}, 0).wait(1).to({x: -22.7}, 0).wait(1).to({x: -35.6}, 0).wait(1).to({x: -50.5}, 0).wait(1).to({x: -68}, 0).wait(1).to({x: -88.7}, 0).wait(1).to({x: -113.8}, 0).wait(1).to({x: -145.3}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -187.3,
            y: -136.8
        }, 0).wait(4));

        // умнейший
        this.instance_1 = new lib.text11();
        this.instance_1.setTransform(38.7, -99.1);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off: false}, 0).wait(1).to({
            y: -101.9,
            alpha: 0.156
        }, 0).wait(1).to({y: -104.3, alpha: 0.288}, 0).wait(1).to({y: -106.3, alpha: 0.401}, 0).wait(1).to({
            y: -108.1,
            alpha: 0.498
        }, 0).wait(1).to({y: -109.6, alpha: 0.581}, 0).wait(1).to({y: -110.8, alpha: 0.654}, 0).wait(1).to({
            y: -112,
            alpha: 0.716
        }, 0).wait(1).to({y: -112.9, alpha: 0.77}, 0).wait(1).to({y: -113.8, alpha: 0.817}, 0).wait(1).to({
            y: -114.5,
            alpha: 0.857
        }, 0).wait(1).to({y: -115.1, alpha: 0.89}, 0).wait(1).to({y: -115.6, alpha: 0.919}, 0).wait(1).to({
            y: -116,
            alpha: 0.942
        }, 0).wait(1).to({y: -116.4, alpha: 0.961}, 0).wait(1).to({y: -116.6, alpha: 0.976}, 0).wait(1).to({
            y: -116.8,
            alpha: 0.987
        }, 0).wait(1).to({y: -116.9, alpha: 0.994}, 0).wait(1).to({
            y: -117,
            alpha: 0.999
        }, 0).wait(1).to({alpha: 1}, 0).wait(39).to({x: 38.4}, 0).wait(1).to({x: 37.6}, 0).wait(1).to({x: 36.1}, 0).wait(1).to({x: 34}, 0).wait(1).to({x: 31.2}, 0).wait(1).to({x: 27.6}, 0).wait(1).to({x: 23.3}, 0).wait(1).to({x: 18.1}, 0).wait(1).to({x: 12}, 0).wait(1).to({x: 4.8}, 0).wait(1).to({x: -3.5}, 0).wait(1).to({x: -13.1}, 0).wait(1).to({x: -24.2}, 0).wait(1).to({x: -37}, 0).wait(1).to({x: -51.9}, 0).wait(1).to({x: -69.4}, 0).wait(1).to({x: -90.1}, 0).wait(1).to({x: -115.2}, 0).wait(1).to({x: -146.8}, 0).wait(1).to({x: -189.3}, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-43.5, -162, 167.2, 20.8);


    (lib.silhouette_mc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // silhouette
        this.instance = new lib.silhouette();
        this.instance.setTransform(170, -126.5);
        this.instance.alpha = 0.309;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(1).to({
            _off: false,
            alpha: 1
        }, 0).wait(1).to({alpha: 0.422}, 0).wait(2).to({alpha: 1}, 0).wait(1).to({alpha: 0.539}, 0).wait(1).to({alpha: 1}, 0).wait(43).to({
            regX: -3.9,
            regY: -3.2,
            x: 165.7,
            y: -129.7
        }, 0).wait(1).to({x: 164.5}, 0).wait(1).to({x: 162.3}, 0).wait(1).to({x: 159.1}, 0).wait(1).to({x: 154.7}, 0).wait(1).to({x: 149}, 0).wait(1).to({x: 141.9}, 0).wait(1).to({x: 133.3}, 0).wait(1).to({x: 122.9}, 0).wait(1).to({x: 110.9}, 0).wait(1).to({x: 97.2}, 0).wait(1).to({x: 82.2}, 0).wait(1).to({x: 66.3}, 0).wait(1).to({x: 50.2}, 0).wait(1).to({x: 34.8}, 0).wait(1).to({x: 20.7}, 0).wait(1).to({x: 8.3}, 0).wait(1).to({x: -2.1}, 0).wait(1).to({x: -10.4}, 0).wait(1).to({x: -16.9}, 0).wait(1).to({x: -21.6}, 0).wait(1).to({x: -24.8}, 0).wait(1).to({x: -26.6}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -23.3,
            y: -126.5
        }, 0).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(46.1, -337.7, 240, 416);


    (lib.second_text = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ПОБЕДИТ
        this.instance = new lib.text3();
        this.instance.setTransform(41.4, -5.5);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: 2.6,
            x: 44,
            y: -3.1,
            alpha: 0.14
        }, 0).wait(1).to({y: -1, alpha: 0.261}, 0).wait(1).to({y: 0.7, alpha: 0.366}, 0).wait(1).to({
            y: 2.3,
            alpha: 0.458
        }, 0).wait(1).to({y: 3.6, alpha: 0.538}, 0).wait(1).to({y: 4.8, alpha: 0.609}, 0).wait(1).to({
            y: 5.9,
            alpha: 0.67
        }, 0).wait(1).to({y: 6.8, alpha: 0.724}, 0).wait(1).to({y: 7.6, alpha: 0.771}, 0).wait(1).to({
            y: 8.3,
            alpha: 0.812
        }, 0).wait(1).to({y: 8.9, alpha: 0.848}, 0).wait(1).to({y: 9.4, alpha: 0.879}, 0).wait(1).to({
            y: 9.9,
            alpha: 0.905
        }, 0).wait(1).to({y: 10.3, alpha: 0.928}, 0).wait(1).to({y: 10.6, alpha: 0.946}, 0).wait(1).to({
            y: 10.9,
            alpha: 0.962
        }, 0).wait(1).to({y: 11.1, alpha: 0.974}, 0).wait(1).to({y: 11.2, alpha: 0.984}, 0).wait(1).to({
            y: 11.4,
            alpha: 0.991
        }, 0).wait(1).to({alpha: 0.996}, 0).wait(1).to({y: 11.5, alpha: 0.999}, 0).wait(1).to({
            regX: 0,
            x: 41.4,
            alpha: 1
        }, 0).wait(39).to({regX: 2.6, x: 44, alpha: 0.999}, 0).wait(1).to({
            y: 11.4,
            alpha: 0.995
        }, 0).wait(1).to({y: 11.3, alpha: 0.988}, 0).wait(1).to({y: 11.1, alpha: 0.979}, 0).wait(1).to({
            y: 10.9,
            alpha: 0.966
        }, 0).wait(1).to({y: 10.7, alpha: 0.95}, 0).wait(1).to({y: 10.3, alpha: 0.931}, 0).wait(1).to({
            y: 10,
            alpha: 0.909
        }, 0).wait(1).to({y: 9.5, alpha: 0.883}, 0).wait(1).to({y: 9, alpha: 0.853}, 0).wait(1).to({
            y: 8.4,
            alpha: 0.819
        }, 0).wait(1).to({y: 7.8, alpha: 0.781}, 0).wait(1).to({y: 7, alpha: 0.738}, 0).wait(1).to({
            y: 6.2,
            alpha: 0.69
        }, 0).wait(1).to({y: 5.3, alpha: 0.636}, 0).wait(1).to({y: 4.3, alpha: 0.575}, 0).wait(1).to({
            y: 3.1,
            alpha: 0.507
        }, 0).wait(1).to({y: 1.8, alpha: 0.431}, 0).wait(1).to({y: 0.4, alpha: 0.345}, 0).wait(1).to({
            y: -1.2,
            alpha: 0.248
        }, 0).wait(1).to({y: -3.2, alpha: 0.134}, 0).wait(1).to({
            regX: 0,
            x: 41.4,
            y: -5.5,
            alpha: 0
        }, 0).to({_off: true}, 1).wait(87));

        // УМНЕЙШИЙ
        this.instance_1 = new lib.УМНЕЙШИЙ();
        this.instance_1.setTransform(41.4, 52.2);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off: false}, 0).wait(1).to({
            y: 49.4,
            alpha: 0.14
        }, 0).wait(1).to({y: 47, alpha: 0.261}, 0).wait(1).to({y: 44.9, alpha: 0.366}, 0).wait(1).to({
            y: 43,
            alpha: 0.458
        }, 0).wait(1).to({y: 41.4, alpha: 0.538}, 0).wait(1).to({y: 40, alpha: 0.609}, 0).wait(1).to({
            y: 38.8,
            alpha: 0.67
        }, 0).wait(1).to({y: 37.7, alpha: 0.724}, 0).wait(1).to({y: 36.8, alpha: 0.771}, 0).wait(1).to({
            y: 36,
            alpha: 0.812
        }, 0).wait(1).to({y: 35.2, alpha: 0.848}, 0).wait(1).to({y: 34.6, alpha: 0.879}, 0).wait(1).to({
            y: 34.1,
            alpha: 0.905
        }, 0).wait(1).to({y: 33.6, alpha: 0.928}, 0).wait(1).to({y: 33.3, alpha: 0.946}, 0).wait(1).to({
            y: 33,
            alpha: 0.962
        }, 0).wait(1).to({y: 32.7, alpha: 0.974}, 0).wait(1).to({y: 32.5, alpha: 0.984}, 0).wait(1).to({
            y: 32.4,
            alpha: 0.991
        }, 0).wait(1).to({y: 32.3, alpha: 0.996}, 0).wait(1).to({
            y: 32.2,
            alpha: 0.999
        }, 0).wait(1).to({alpha: 1}, 0).wait(39).to({alpha: 0.999}, 0).wait(1).to({
            y: 32.3,
            alpha: 0.995
        }, 0).wait(1).to({y: 32.4, alpha: 0.988}, 0).wait(1).to({y: 32.6, alpha: 0.979}, 0).wait(1).to({
            y: 32.9,
            alpha: 0.966
        }, 0).wait(1).to({y: 33.2, alpha: 0.95}, 0).wait(1).to({y: 33.6, alpha: 0.931}, 0).wait(1).to({
            y: 34,
            alpha: 0.909
        }, 0).wait(1).to({y: 34.5, alpha: 0.883}, 0).wait(1).to({y: 35.1, alpha: 0.853}, 0).wait(1).to({
            y: 35.8,
            alpha: 0.819
        }, 0).wait(1).to({y: 36.6, alpha: 0.781}, 0).wait(1).to({y: 37.4, alpha: 0.738}, 0).wait(1).to({
            y: 38.4,
            alpha: 0.69
        }, 0).wait(1).to({y: 39.5, alpha: 0.636}, 0).wait(1).to({y: 40.7, alpha: 0.575}, 0).wait(1).to({
            y: 42.1,
            alpha: 0.507
        }, 0).wait(1).to({y: 43.6, alpha: 0.431}, 0).wait(1).to({y: 45.3, alpha: 0.345}, 0).wait(1).to({
            y: 47.2,
            alpha: 0.248
        }, 0).wait(1).to({y: 49.5, alpha: 0.134}, 0).wait(1).to({y: 52.2, alpha: 0}, 0).to({_off: true}, 1).wait(83));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.2, -15.8, 96.3, 20.8);


    (lib.question_orange = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 14 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_6 = new cjs.Graphics().p("AkKBkIAAjGIIVAAIAADGg");
        var mask_graphics_7 = new cjs.Graphics().p("AkaBfIAnkLIIOBOIgnELg");
        var mask_graphics_8 = new cjs.Graphics().p("AkvBYIBilHIH9CYIhiFHg");
        var mask_graphics_9 = new cjs.Graphics().p("AlIBMICul3IHiDgIitF3g");
        var mask_graphics_10 = new cjs.Graphics().p("AljA4IELmUIG8ElIkLGUg");
        var mask_graphics_11 = new cjs.Graphics().p("AmAAfIFzmgIGOFkIl0Geg");
        var mask_graphics_12 = new cjs.Graphics().p("Al8BaIE5naIHAEnIk6Hag");
        var mask_graphics_13 = new cjs.Graphics().p("AluCWID1oOIHoDjIj1IPg");
        var mask_graphics_14 = new cjs.Graphics().p("AlZDPICqo4IIJCbIiqI4g");
        var mask_graphics_15 = new cjs.Graphics().p("Ak6EGIBYpZIIdBOIhYJZg");
        var mask_graphics_16 = new cjs.Graphics().p("AlpE3IAApsILTAAIAAJsg");
        var mask_graphics_17 = new cjs.Graphics().p("AmaGcIAApsIBjAAIHhjLIBVDLIA5AAIAACIIBjDoIhjAqIAADSg");
        var mask_graphics_18 = new cjs.Graphics().p("AmuHiIAApsIBTAAIFQlXIG6GyIiLCLIAAGGg");
        var mask_graphics_19 = new cjs.Graphics().p("AmhIJIAApsIBeAAIClmlIJADkIhxEgIAAINg");
        var mask_graphics_20 = new cjs.Graphics().p("Al9KjIAApuICMAAIgJm1IAFAAIgFkVIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_graphics_21 = new cjs.Graphics().p("Al9KjIAApuICMAAIAAgcIhcoAIBWgPIgDifIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_graphics_22 = new cjs.Graphics().p("AlrKjIAApuICIAAIirnVICpg9IgEi4IJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_23 = new cjs.Graphics().p("AlIKjIAApuIB7AAIjkmIIDviLIgEi3IJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_24 = new cjs.Graphics().p("AkrKjIAApuIBnAAIkKk6IEoj5IgDiXIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_25 = new cjs.Graphics().p("AkVKjIAApuIBOAAIkdjtIEulpIAmAgIgDiUIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_26 = new cjs.Graphics().p("AkGKjIAApuIAvAAIkciiIDqmYICKBQIgEjgIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_graphics_27 = new cjs.Graphics().p("Aj7KjIAApuIADAAIkGhdICgm7IDqBVIgFkHIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_28 = new cjs.Graphics().p("Aj2KjIAApgIkNgvIBQnOIFFA4IgGkTIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_graphics_29 = new cjs.Graphics().p("Aj2KjIAApaIkNAAIgBnVIGWAAIgFkJIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(6).to({graphics: mask_graphics_6, x: -3.5, y: 39.9}).wait(1).to({
            graphics: mask_graphics_7,
            x: -4.1,
            y: 36.1
        }).wait(1).to({graphics: mask_graphics_8, x: -4.7, y: 32.2}).wait(1).to({
            graphics: mask_graphics_9,
            x: -5.3,
            y: 28.3
        }).wait(1).to({graphics: mask_graphics_10, x: -5.9, y: 24.4}).wait(1).to({
            graphics: mask_graphics_11,
            x: -6.5,
            y: 20.6
        }).wait(1).to({graphics: mask_graphics_12, x: -3.1, y: 18.4}).wait(1).to({
            graphics: mask_graphics_13,
            x: 0.4,
            y: 16.4
        }).wait(1).to({graphics: mask_graphics_14, x: 3.9, y: 14.3}).wait(1).to({
            graphics: mask_graphics_15,
            x: 7.2,
            y: 12.2
        }).wait(1).to({graphics: mask_graphics_16, x: 19.2, y: 10.1}).wait(1).to({
            graphics: mask_graphics_17,
            x: 24.1,
            y: 0
        }).wait(1).to({graphics: mask_graphics_18, x: 26.1, y: -7}).wait(1).to({
            graphics: mask_graphics_19,
            x: 24.9,
            y: -10.9
        }).wait(1).to({graphics: mask_graphics_20, x: 21.2, y: -26.3}).wait(1).to({
            graphics: mask_graphics_21,
            x: 21.2,
            y: -26.3
        }).wait(1).to({graphics: mask_graphics_22, x: 19.5, y: -26.3}).wait(1).to({
            graphics: mask_graphics_23,
            x: 15.9,
            y: -26.3
        }).wait(1).to({graphics: mask_graphics_24, x: 13.1, y: -26.3}).wait(1).to({
            graphics: mask_graphics_25,
            x: 10.9,
            y: -26.3
        }).wait(1).to({graphics: mask_graphics_26, x: 9.3, y: -26.3}).wait(1).to({
            graphics: mask_graphics_27,
            x: 8.3,
            y: -26.3
        }).wait(1).to({graphics: mask_graphics_28, x: 7.8, y: -26.3}).wait(1).to({
            graphics: mask_graphics_29,
            x: 7.7,
            y: -26.3
        }).wait(29));

        // orange_q
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#E56825").s().p("AiPGwIAAhaQAAhkAthHQAbgrBFg7QA9g4AXgcQAlgxAAgzQAAg4glghQgmgfg0AAQgXAAgYAIQgYAHgQANQgcAXgHAoQgGAmAPAoIjgAAQgohUAchWQAYhLA/gwQAygmBNgSQBCgQBOAAQDCAABiBqQAkAoAVA3QATA1AAA3QAABfgzBLQgkA2hGA2QhQA+gPATQgoAxAABSIAABAg");
        this.shape.setTransform(0, -15);
        this.shape._off = true;

        this.shape.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off: false}, 0).wait(52));

        // question_dot_orange
        this.instance = new lib.question_dot_orange();
        this.instance.setTransform(-3.4, 58.5, 1, 0.037, 0, 0, 0, -0.1, 10.8);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off: false}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleY: 0.29,
            x: -3.3,
            y: 55.4
        }, 0).wait(1).to({scaleY: 0.47, y: 53.5}, 0).wait(1).to({scaleY: 0.6, y: 52.1}, 0).wait(1).to({
            scaleY: 0.7,
            y: 51
        }, 0).wait(1).to({scaleY: 0.78, y: 50.1}, 0).wait(1).to({scaleY: 0.84, y: 49.4}, 0).wait(1).to({
            scaleY: 0.89,
            y: 48.9
        }, 0).wait(1).to({scaleY: 0.93, y: 48.5}, 0).wait(1).to({scaleY: 0.96, y: 48.2}, 0).wait(1).to({
            scaleY: 0.98,
            y: 48
        }, 0).wait(1).to({scaleY: 0.99, y: 47.9}, 0).wait(1).to({scaleY: 1, y: 47.8}, 0).wait(1).to({
            regX: -0.1,
            regY: 11,
            scaleY: 1,
            x: -3.4,
            y: 58.6
        }, 0).wait(43));

        // Layer 10 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_4 = new cjs.Graphics().p("AkKBkIAAjGIIVAAIAADGg");
        var mask_1_graphics_5 = new cjs.Graphics().p("AkaBfIAnkLIIOBOIgnELg");
        var mask_1_graphics_6 = new cjs.Graphics().p("AkvBYIBilHIH9CYIhiFHg");
        var mask_1_graphics_7 = new cjs.Graphics().p("AlIBMICul3IHiDgIitF3g");
        var mask_1_graphics_8 = new cjs.Graphics().p("AljA4IELmUIG8ElIkLGUg");
        var mask_1_graphics_9 = new cjs.Graphics().p("AmAAfIFzmgIGOFkIl0Geg");
        var mask_1_graphics_10 = new cjs.Graphics().p("Al8BaIE5naIHAEnIk6Hag");
        var mask_1_graphics_11 = new cjs.Graphics().p("AluCWID1oOIHoDjIj1IPg");
        var mask_1_graphics_12 = new cjs.Graphics().p("AlZDPICqo4IIJCbIiqI4g");
        var mask_1_graphics_13 = new cjs.Graphics().p("Ak6EGIBYpZIIdBOIhYJZg");
        var mask_1_graphics_14 = new cjs.Graphics().p("AlpE3IAApsILTAAIAAJsg");
        var mask_1_graphics_15 = new cjs.Graphics().p("AmaGcIAApsIBjAAIHhjLIBVDLIA5AAIAACIIBjDoIhjAqIAADSg");
        var mask_1_graphics_16 = new cjs.Graphics().p("AmuHiIAApsIBTAAIFQlXIG6GyIiLCLIAAGGg");
        var mask_1_graphics_17 = new cjs.Graphics().p("AmhIJIAApsIBeAAIClmlIJADkIhxEgIAAINg");
        var mask_1_graphics_18 = new cjs.Graphics().p("Al9KjIAApuICMAAIgJm1IAFAAIgFkVIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_1_graphics_19 = new cjs.Graphics().p("Al9KjIAApuICMAAIAAgcIhcoAIBWgPIgDifIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_1_graphics_20 = new cjs.Graphics().p("AlrKjIAApuICIAAIirnVICpg9IgEi4IJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_21 = new cjs.Graphics().p("AlIKjIAApuIB7AAIjkmIIDviLIgEi3IJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_22 = new cjs.Graphics().p("AkrKjIAApuIBnAAIkKk6IEoj5IgDiXIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_23 = new cjs.Graphics().p("AkVKjIAApuIBOAAIkdjtIEulpIAmAgIgDiUIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_24 = new cjs.Graphics().p("AkGKjIAApuIAvAAIkciiIDqmYICKBQIgEjgIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");
        var mask_1_graphics_25 = new cjs.Graphics().p("Aj7KjIAApuIADAAIkGhdICgm7IDqBVIgFkHIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_26 = new cjs.Graphics().p("Aj2KjIAApgIkNgvIBQnOIFFA4IgGkTIJsgNIAMIqIgGAAIAGETIgoAAIAAIIg");
        var mask_1_graphics_27 = new cjs.Graphics().p("Aj2KjIAApaIkNAAIgBnVIGWAAIgFkJIJsgNIALIqIgGAAIAGETIgnAAIAAIIg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({graphics: mask_1_graphics_4, x: -3.5, y: 39.9}).wait(1).to({
            graphics: mask_1_graphics_5,
            x: -4.1,
            y: 36.1
        }).wait(1).to({graphics: mask_1_graphics_6, x: -4.7, y: 32.2}).wait(1).to({
            graphics: mask_1_graphics_7,
            x: -5.3,
            y: 28.3
        }).wait(1).to({graphics: mask_1_graphics_8, x: -5.9, y: 24.4}).wait(1).to({
            graphics: mask_1_graphics_9,
            x: -6.5,
            y: 20.6
        }).wait(1).to({graphics: mask_1_graphics_10, x: -3.1, y: 18.4}).wait(1).to({
            graphics: mask_1_graphics_11,
            x: 0.4,
            y: 16.4
        }).wait(1).to({graphics: mask_1_graphics_12, x: 3.9, y: 14.3}).wait(1).to({
            graphics: mask_1_graphics_13,
            x: 7.2,
            y: 12.2
        }).wait(1).to({graphics: mask_1_graphics_14, x: 19.2, y: 10.1}).wait(1).to({
            graphics: mask_1_graphics_15,
            x: 24.1,
            y: 0
        }).wait(1).to({graphics: mask_1_graphics_16, x: 26.1, y: -7}).wait(1).to({
            graphics: mask_1_graphics_17,
            x: 24.9,
            y: -10.9
        }).wait(1).to({graphics: mask_1_graphics_18, x: 21.2, y: -26.3}).wait(1).to({
            graphics: mask_1_graphics_19,
            x: 21.2,
            y: -26.3
        }).wait(1).to({graphics: mask_1_graphics_20, x: 19.5, y: -26.3}).wait(1).to({
            graphics: mask_1_graphics_21,
            x: 15.9,
            y: -26.3
        }).wait(1).to({graphics: mask_1_graphics_22, x: 13.1, y: -26.3}).wait(1).to({
            graphics: mask_1_graphics_23,
            x: 10.9,
            y: -26.3
        }).wait(1).to({graphics: mask_1_graphics_24, x: 9.3, y: -26.3}).wait(1).to({
            graphics: mask_1_graphics_25,
            x: 8.3,
            y: -26.3
        }).wait(1).to({graphics: mask_1_graphics_26, x: 7.8, y: -26.3}).wait(1).to({
            graphics: mask_1_graphics_27,
            x: 7.7,
            y: -26.3
        }).wait(2).to({graphics: null, x: 0, y: 0}).wait(29));

        // white_q
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AiPGwIAAhaQAAhkAthHQAbgrBFg7QA9g4AXgcQAlgxAAgzQAAg4glghQgmgfg0AAQgXAAgYAIQgYAHgQANQgcAXgHAoQgGAmAPAoIjgAAQgohUAchWQAYhLA/gwQAygmBNgSQBCgQBOAAQDCAABiBqQAkAoAVA3QATA1AAA3QAABfgzBLQgkA2hGA2QhQA+gPATQgoAxAABSIAABAg");
        this.shape_1.setTransform(0, -15);
        this.shape_1._off = true;

        this.shape_1.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off: false}, 0).to({_off: true}, 25).wait(29));

        // question_dot_white
        this.instance_1 = new lib.question_dot_white();
        this.instance_1.setTransform(-3.4, 58.5, 1, 0.037, 0, 0, 0, -0.1, 10.8);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            regX: 0,
            regY: 0,
            scaleY: 0.29,
            x: -3.3,
            y: 55.4
        }, 0).wait(1).to({scaleY: 0.47, y: 53.5}, 0).wait(1).to({scaleY: 0.6, y: 52.1}, 0).wait(1).to({
            scaleY: 0.7,
            y: 51
        }, 0).wait(1).to({scaleY: 0.78, y: 50.1}, 0).wait(1).to({scaleY: 0.84, y: 49.4}, 0).wait(1).to({
            scaleY: 0.89,
            y: 48.9
        }, 0).wait(1).to({scaleY: 0.93, y: 48.5}, 0).wait(1).to({scaleY: 0.96, y: 48.2}, 0).wait(1).to({
            scaleY: 0.98,
            y: 48
        }, 0).wait(1).to({scaleY: 0.99, y: 47.9}, 0).wait(1).to({scaleY: 1, y: 47.8}, 0).wait(1).to({
            regX: -0.1,
            regY: 11,
            scaleY: 1,
            x: -3.4,
            y: 58.6
        }, 0).to({_off: true}, 2).wait(43));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.4, 57.7, 22.3, 0.8);


    (lib.question = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.instance = new lib.question_orange("synched", 0, false);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-14.4, 57.7, 22.3, 0.8);


    (lib.logo = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_82 = function () {
            /* stop();*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(1));

        // q3
        this.q3 = new lib.Symbol17();
        this.q3.setTransform(-17.6, 0, 0.949, 0.949);
        this.q3.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.q3).wait(1).to({x: -18.7, alpha: 0.077}, 0).wait(1).to({
            x: -19.7,
            alpha: 0.152
        }, 0).wait(1).to({x: -20.6, alpha: 0.223}, 0).wait(1).to({x: -21.5, alpha: 0.29}, 0).wait(1).to({
            x: -22.4,
            alpha: 0.353
        }, 0).wait(1).to({x: -23.2, alpha: 0.413}, 0).wait(1).to({x: -23.9, alpha: 0.469}, 0).wait(1).to({
            x: -24.6,
            alpha: 0.521
        }, 0).wait(1).to({x: -25.3, alpha: 0.57}, 0).wait(1).to({x: -25.9, alpha: 0.615}, 0).wait(1).to({
            x: -26.4,
            alpha: 0.657
        }, 0).wait(1).to({x: -26.9, alpha: 0.696}, 0).wait(1).to({x: -27.4, alpha: 0.731}, 0).wait(1).to({
            x: -27.9,
            alpha: 0.764
        }, 0).wait(1).to({x: -28.3, alpha: 0.794}, 0).wait(1).to({x: -28.6, alpha: 0.821}, 0).wait(1).to({
            x: -28.9,
            alpha: 0.846
        }, 0).wait(1).to({x: -29.2, alpha: 0.869}, 0).wait(1).to({x: -29.5, alpha: 0.889}, 0).wait(1).to({
            x: -29.8,
            alpha: 0.907
        }, 0).wait(1).to({x: -30, alpha: 0.924}, 0).wait(1).to({x: -30.2, alpha: 0.938}, 0).wait(1).to({
            x: -30.3,
            alpha: 0.951
        }, 0).wait(1).to({x: -30.5, alpha: 0.962}, 0).wait(1).to({x: -30.6, alpha: 0.971}, 0).wait(1).to({
            x: -30.7,
            alpha: 0.979
        }, 0).wait(1).to({x: -30.8, alpha: 0.986}, 0).wait(1).to({
            x: -30.9,
            alpha: 0.991
        }, 0).wait(1).to({alpha: 0.995}, 0).wait(1).to({
            x: -31,
            alpha: 0.998
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(51));

        // q4
        this.q4 = new lib.Symbol18();
        this.q4.setTransform(-3.2, 4.8, 0.949, 0.949);
        this.q4.alpha = 0;
        this.q4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.q4).wait(4).to({_off: false}, 0).wait(1).to({
            x: -4.2,
            alpha: 0.077
        }, 0).wait(1).to({x: -5.2, alpha: 0.152}, 0).wait(1).to({x: -6.2, alpha: 0.223}, 0).wait(1).to({
            x: -7.1,
            alpha: 0.29
        }, 0).wait(1).to({x: -7.9, alpha: 0.353}, 0).wait(1).to({x: -8.7, alpha: 0.413}, 0).wait(1).to({
            x: -9.5,
            alpha: 0.469
        }, 0).wait(1).to({x: -10.2, alpha: 0.521}, 0).wait(1).to({x: -10.8, alpha: 0.57}, 0).wait(1).to({
            x: -11.4,
            alpha: 0.615
        }, 0).wait(1).to({x: -12, alpha: 0.657}, 0).wait(1).to({x: -12.5, alpha: 0.696}, 0).wait(1).to({
            x: -13,
            alpha: 0.731
        }, 0).wait(1).to({x: -13.4, alpha: 0.764}, 0).wait(1).to({x: -13.8, alpha: 0.794}, 0).wait(1).to({
            x: -14.2,
            alpha: 0.821
        }, 0).wait(1).to({x: -14.5, alpha: 0.846}, 0).wait(1).to({x: -14.8, alpha: 0.869}, 0).wait(1).to({
            x: -15.1,
            alpha: 0.889
        }, 0).wait(1).to({x: -15.3, alpha: 0.907}, 0).wait(1).to({x: -15.5, alpha: 0.924}, 0).wait(1).to({
            x: -15.7,
            alpha: 0.938
        }, 0).wait(1).to({x: -15.9, alpha: 0.951}, 0).wait(1).to({x: -16, alpha: 0.962}, 0).wait(1).to({
            x: -16.2,
            alpha: 0.971
        }, 0).wait(1).to({x: -16.3, alpha: 0.979}, 0).wait(1).to({
            x: -16.4,
            alpha: 0.986
        }, 0).wait(1).to({alpha: 0.991}, 0).wait(1).to({
            x: -16.5,
            alpha: 0.995
        }, 0).wait(1).to({alpha: 0.998}, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(47));

        // q5
        this.q5 = new lib.Symbol19();
        this.q5.setTransform(15.5, 4.9, 0.949, 0.949);
        this.q5.alpha = 0;
        this.q5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.q5).wait(8).to({_off: false}, 0).wait(1).to({
            x: 14.2,
            alpha: 0.08
        }, 0).wait(1).to({x: 13, alpha: 0.156}, 0).wait(1).to({x: 11.8, alpha: 0.229}, 0).wait(1).to({
            x: 10.7,
            alpha: 0.298
        }, 0).wait(1).to({x: 9.7, alpha: 0.363}, 0).wait(1).to({x: 8.7, alpha: 0.424}, 0).wait(1).to({
            x: 7.8,
            alpha: 0.481
        }, 0).wait(1).to({x: 7, alpha: 0.534}, 0).wait(1).to({x: 6.2, alpha: 0.584}, 0).wait(1).to({
            x: 5.5,
            alpha: 0.629
        }, 0).wait(1).to({x: 4.8, alpha: 0.671}, 0).wait(1).to({x: 4.2, alpha: 0.71}, 0).wait(1).to({
            x: 3.7,
            alpha: 0.746
        }, 0).wait(1).to({x: 3.2, alpha: 0.778}, 0).wait(1).to({x: 2.7, alpha: 0.808}, 0).wait(1).to({
            x: 2.3,
            alpha: 0.835
        }, 0).wait(1).to({x: 1.9, alpha: 0.859}, 0).wait(1).to({x: 1.5, alpha: 0.881}, 0).wait(1).to({
            x: 1.2,
            alpha: 0.901
        }, 0).wait(1).to({x: 0.9, alpha: 0.918}, 0).wait(1).to({x: 0.7, alpha: 0.934}, 0).wait(1).to({
            x: 0.5,
            alpha: 0.947
        }, 0).wait(1).to({x: 0.3, alpha: 0.959}, 0).wait(1).to({x: 0.1, alpha: 0.969}, 0).wait(1).to({
            x: 0,
            alpha: 0.978
        }, 0).wait(1).to({x: -0.1, alpha: 0.985}, 0).wait(1).to({x: -0.2, alpha: 0.991}, 0).wait(1).to({
            x: -0.3,
            alpha: 0.995
        }, 0).wait(1).to({alpha: 0.998}, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(44));

        // q6
        this.q6 = new lib.Symbol20();
        this.q6.setTransform(28.1, 4.8, 0.949, 0.949);
        this.q6.alpha = 0;
        this.q6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.q6).wait(13).to({_off: false}, 0).wait(1).to({
            x: 26.8,
            alpha: 0.085
        }, 0).wait(1).to({x: 25.5, alpha: 0.167}, 0).wait(1).to({x: 24.3, alpha: 0.244}, 0).wait(1).to({
            x: 23.2,
            alpha: 0.317
        }, 0).wait(1).to({x: 22.2, alpha: 0.385}, 0).wait(1).to({x: 21.2, alpha: 0.448}, 0).wait(1).to({
            x: 20.3,
            alpha: 0.507
        }, 0).wait(1).to({x: 19.4, alpha: 0.562}, 0).wait(1).to({x: 18.7, alpha: 0.612}, 0).wait(1).to({
            x: 18,
            alpha: 0.659
        }, 0).wait(1).to({x: 17.3, alpha: 0.701}, 0).wait(1).to({x: 16.7, alpha: 0.74}, 0).wait(1).to({
            x: 16.2,
            alpha: 0.775
        }, 0).wait(1).to({x: 15.7, alpha: 0.807}, 0).wait(1).to({x: 15.2, alpha: 0.835}, 0).wait(1).to({
            x: 14.8,
            alpha: 0.861
        }, 0).wait(1).to({x: 14.5, alpha: 0.884}, 0).wait(1).to({x: 14.2, alpha: 0.905}, 0).wait(1).to({
            x: 13.9,
            alpha: 0.923
        }, 0).wait(1).to({x: 13.6, alpha: 0.939}, 0).wait(1).to({x: 13.4, alpha: 0.953}, 0).wait(1).to({
            x: 13.2,
            alpha: 0.965
        }, 0).wait(1).to({x: 13.1, alpha: 0.975}, 0).wait(1).to({x: 13, alpha: 0.983}, 0).wait(1).to({
            x: 12.9,
            alpha: 0.989
        }, 0).wait(1).to({x: 12.8, alpha: 0.994}, 0).wait(1).to({
            x: 12.7,
            alpha: 0.997
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(41));

        // q7
        this.q7 = new lib.Symbol21();
        this.q7.setTransform(38.2, 3.6, 0.949, 0.949);
        this.q7.alpha = 0;
        this.q7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.q7).wait(17).to({_off: false}, 0).wait(1).to({
            x: 37.2,
            alpha: 0.088
        }, 0).wait(1).to({x: 36.2, alpha: 0.172}, 0).wait(1).to({x: 35.3, alpha: 0.252}, 0).wait(1).to({
            x: 34.5,
            alpha: 0.327
        }, 0).wait(1).to({x: 33.7, alpha: 0.396}, 0).wait(1).to({x: 33, alpha: 0.461}, 0).wait(1).to({
            x: 32.3,
            alpha: 0.521
        }, 0).wait(1).to({x: 31.7, alpha: 0.577}, 0).wait(1).to({x: 31.1, alpha: 0.628}, 0).wait(1).to({
            x: 30.6,
            alpha: 0.674
        }, 0).wait(1).to({x: 30.1, alpha: 0.717}, 0).wait(1).to({x: 29.7, alpha: 0.755}, 0).wait(1).to({
            x: 29.3,
            alpha: 0.79
        }, 0).wait(1).to({x: 28.9, alpha: 0.821}, 0).wait(1).to({x: 28.6, alpha: 0.85}, 0).wait(1).to({
            x: 28.3,
            alpha: 0.875
        }, 0).wait(1).to({x: 28.1, alpha: 0.897}, 0).wait(1).to({x: 27.8, alpha: 0.917}, 0).wait(1).to({
            x: 27.6,
            alpha: 0.934
        }, 0).wait(1).to({x: 27.5, alpha: 0.949}, 0).wait(1).to({x: 27.3, alpha: 0.962}, 0).wait(1).to({
            x: 27.2,
            alpha: 0.973
        }, 0).wait(1).to({x: 27.1, alpha: 0.981}, 0).wait(1).to({
            x: 27,
            alpha: 0.988
        }, 0).wait(1).to({alpha: 0.994}, 0).wait(1).to({
            x: 26.9,
            alpha: 0.997
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(38));

        // q8
        this.q8 = new lib.Symbol22();
        this.q8.setTransform(45.7, 3.1, 0.949, 0.949);
        this.q8.alpha = 0;
        this.q8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.q8).wait(21).to({_off: false}, 0).wait(1).to({
            x: 44.8,
            alpha: 0.091
        }, 0).wait(1).to({x: 44, alpha: 0.178}, 0).wait(1).to({x: 43.2, alpha: 0.26}, 0).wait(1).to({
            x: 42.5,
            alpha: 0.337
        }, 0).wait(1).to({x: 41.8, alpha: 0.409}, 0).wait(1).to({x: 41.2, alpha: 0.475}, 0).wait(1).to({
            x: 40.6,
            alpha: 0.536
        }, 0).wait(1).to({x: 40.1, alpha: 0.592}, 0).wait(1).to({x: 39.6, alpha: 0.644}, 0).wait(1).to({
            x: 39.1,
            alpha: 0.69
        }, 0).wait(1).to({x: 38.7, alpha: 0.733}, 0).wait(1).to({x: 38.4, alpha: 0.771}, 0).wait(1).to({
            x: 38,
            alpha: 0.806
        }, 0).wait(1).to({x: 37.8, alpha: 0.836}, 0).wait(1).to({x: 37.5, alpha: 0.864}, 0).wait(1).to({
            x: 37.3,
            alpha: 0.888
        }, 0).wait(1).to({x: 37.1, alpha: 0.91}, 0).wait(1).to({x: 36.9, alpha: 0.929}, 0).wait(1).to({
            x: 36.7,
            alpha: 0.945
        }, 0).wait(1).to({x: 36.6, alpha: 0.959}, 0).wait(1).to({x: 36.5, alpha: 0.97}, 0).wait(1).to({
            x: 36.4,
            alpha: 0.98
        }, 0).wait(1).to({x: 36.3, alpha: 0.987}, 0).wait(1).to({alpha: 0.993}, 0).wait(1).to({
            x: 36.2,
            alpha: 0.997
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({alpha: 1}, 0).wait(35));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.2, -15.8, 17.2, 31.7);


    (lib.IQwhite = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 16
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AhKgIIBogYIAtAsQAAABhqAUQABgBgsgog");
        this.shape.setTransform(20, 14.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgUAgQgQgMgkghIgBgBIBJgYIAiAFIAoAnQABAMgFACQgSAJgsAKIgDAAQgIAAgRgHg");
        this.shape_1.setTransform(19.5, 14.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AgXAiIg0gzIgBgBIBMgiIAhATIAsAqQgGAPgEACQgVAQgrALIAAAAQgDAAgXgTg");
        this.shape_2.setTransform(19.5, 14.3);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgZAkQgfgkgXgWIBQgsIBQBPQgEAJgMAKQgYAXgpAMIgZgfg");
        this.shape_3.setTransform(19.4, 14.2);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AgEA8QgEgHgQgRQgdghgagYIBPgrIBQBLQgIAOgGAFQgXAUgqAPIAAAAIgFgFg");
        this.shape_4.setTransform(19.4, 14.2);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AgCA8IgVgYIg3g5IBPgqQAxAtAdAcQgEAMgIAGQgVASgrARIgBABQgBAAgDgEg");
        this.shape_5.setTransform(19.3, 14.3);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("AgBA9IgWgYQgZgcgegdIBPgpQA0AtAaAYQgCAMgIAGQgVAQgsAUIgBAAIgEgBg");
        this.shape_6.setTransform(19.3, 14.3);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AAAA9IgWgYIg3g5IBOgoQA2AtAXAVQABALgKAGQgUAPgrAWQgCABgEAAIAAAAg");
        this.shape_7.setTransform(19.2, 14.4);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgWAkIg3g4IBPgoQA4AuATASQAEAJgLAHQgSANgsAYQgEACgEACIgWgZg");
        this.shape_8.setTransform(19.2, 14.5);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhPgSIBYgsIBHBJQAAABhRAyQABAAhPhQg");
        this.shape_9.setTransform(19.4, 14.4);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape}]}, 15).to({state: [{t: this.shape_1}]}, 1).to({state: [{t: this.shape_2}]}, 1).to({state: [{t: this.shape_3}]}, 1).to({state: [{t: this.shape_4}]}, 1).to({state: [{t: this.shape_5}]}, 1).to({state: [{t: this.shape_6}]}, 1).to({state: [{t: this.shape_7}]}, 1).to({state: [{t: this.shape_8}]}, 1).to({state: [{t: this.shape_9}]}, 1).to({state: []}, 132).wait(33));

        // Layer 11 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_15 = new cjs.Graphics().p("AgFCfIAAjGIDGAAIAADGg");

        this.timeline.addTween(cjs.Tween.get(mask).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(15).to({graphics: mask_graphics_15, x: 19.3, y: 16}).wait(174));

        // Layer 10
        this.instance = new lib.iq_tail_white();
        this.instance.setTransform(16.4, 10.7);
        this.instance._off = true;

        this.instance.mask = mask;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off: false}, 0).wait(1).to({
            x: 19.2,
            y: 13.6
        }, 0).wait(1).to({x: 21.4, y: 15.9}, 0).wait(1).to({x: 23.1, y: 17.8}, 0).wait(1).to({
            x: 24.4,
            y: 19.2
        }, 0).wait(1).to({x: 25.5, y: 20.4}, 0).wait(1).to({x: 26.3, y: 21.2}, 0).wait(1).to({
            x: 26.8,
            y: 21.8
        }, 0).wait(1).to({x: 27.1, y: 22.1}, 0).wait(1).to({x: 27.3, y: 22.3}, 0).wait(1).to({
            x: 27.2,
            y: 22.2
        }, 0).wait(1).to({x: 26.9, y: 21.9}, 0).wait(1).to({x: 26.5, y: 21.4}, 0).wait(1).to({
            x: 26,
            y: 20.9
        }, 0).wait(1).to({x: 25.4, y: 20.3}, 0).wait(1).to({x: 25.1, y: 19.9}, 0).wait(1).to({
            x: 24.8,
            y: 19.6
        }, 0).wait(110).to({x: 25, y: 19.8}, 0).wait(1).to({x: 25.4, y: 20.3}, 0).wait(1).to({
            x: 25.9,
            y: 20.8
        }, 0).wait(1).to({x: 26.5, y: 21.4}, 0).wait(1).to({x: 26.9, y: 21.9}, 0).wait(1).to({
            x: 27.2,
            y: 22.2
        }, 0).wait(1).to({x: 27.3, y: 22.3}, 0).wait(1).to({x: 27.1, y: 22.1}, 0).wait(1).to({
            x: 26.8,
            y: 21.7
        }, 0).wait(1).to({x: 26.2, y: 21.1}, 0).wait(1).to({x: 25.4, y: 20.2}, 0).wait(1).to({
            x: 24.3,
            y: 19.1
        }, 0).wait(1).to({x: 22.9, y: 17.6}, 0).wait(1).to({x: 21.3, y: 15.9}, 0).wait(1).to({
            x: 19.2,
            y: 13.6
        }, 0).wait(1).to({x: 16.4, y: 10.7}, 0).to({_off: true}, 1).wait(32));

        // Layer 12 (mask)
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_15 = new cjs.Graphics().p("AheBjIAAjFIDGAAIAADFg");

        this.timeline.addTween(cjs.Tween.get(mask_1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(15).to({graphics: mask_1_graphics_15, x: 10.5, y: 8.1}).wait(174));

        // Layer 2
        this.instance_1 = new lib.iq_tail_white();
        this.instance_1.setTransform(23.5, 18.1);
        this.instance_1._off = true;

        this.instance_1.mask = mask_1;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off: false}, 0).wait(1).to({
            x: 21.1,
            y: 15.6
        }, 0).wait(1).to({x: 18.9, y: 13.4}, 0).wait(1).to({x: 17.1, y: 11.5}, 0).wait(1).to({
            x: 15.6,
            y: 10
        }, 0).wait(1).to({x: 14.5, y: 8.8}, 0).wait(1).to({x: 13.7, y: 7.9}, 0).wait(1).to({
            x: 13.1,
            y: 7.4
        }, 0).wait(1).to({x: 12.8, y: 7}, 0).wait(1).to({x: 12.7}, 0).wait(1).to({x: 12.8}, 0).wait(1).to({
            x: 13,
            y: 7.2
        }, 0).wait(1).to({x: 13.4, y: 7.6}, 0).wait(1).to({x: 13.9, y: 8.1}, 0).wait(1).to({
            x: 14.4,
            y: 8.6
        }, 0).wait(1).to({x: 14.9, y: 9}, 0).wait(1).to({x: 15.1, y: 9.2}, 0).wait(1).to({
            x: 15.2,
            y: 9.3
        }, 0).wait(108).to({x: 15.1, y: 9.2}, 0).wait(1).to({x: 14.9, y: 9}, 0).wait(1).to({
            x: 14.6,
            y: 8.7
        }, 0).wait(1).to({x: 14.1, y: 8.2}, 0).wait(1).to({x: 13.5, y: 7.7}, 0).wait(1).to({
            x: 13.1,
            y: 7.3
        }, 0).wait(1).to({x: 12.8, y: 7}, 0).wait(1).to({x: 12.7}, 0).wait(1).to({x: 12.8}, 0).wait(1).to({
            x: 13.1,
            y: 7.3
        }, 0).wait(1).to({x: 13.5, y: 7.8}, 0).wait(1).to({x: 14.2, y: 8.5}, 0).wait(1).to({
            x: 15.1,
            y: 9.5
        }, 0).wait(1).to({x: 16.4, y: 10.7}, 0).wait(1).to({x: 18, y: 12.4}, 0).wait(1).to({
            x: 20.1,
            y: 14.6
        }, 0).wait(1).to({x: 23.5, y: 18.1}, 0).to({_off: true}, 1).wait(32));

        // Layer 20 (mask)
        var mask_2 = new cjs.Shape();
        mask_2._off = true;
        var mask_2_graphics_154 = new cjs.Graphics().p("AhHhwIAEgDICLDgg");
        var mask_2_graphics_155 = new cjs.Graphics().p("AhvgKQAQgbAWgVQAWgWAagQQAZgQAdgJQAdgKAfgDIAXEIg");
        var mask_2_graphics_156 = new cjs.Graphics().p("AinBgQAEgmAQgjQAPgiAZgdQAYgdAhgWQAZgQAZgKQAagLAdgEQAcgEAdABQAcACAcAIIhJD+g");
        var mask_2_graphics_157 = new cjs.Graphics().p("AjHCgQgGggABggQABgfAIgeQAIgeAPgZQAPgbAVgYQAVgXAbgSQAbgSAdgLQAegLAcgEQAfgEAfADQAfADAeAKQAdALAbARIiRDeg");
        var mask_2_graphics_158 = new cjs.Graphics().p("AjvAJQAXhiBSg6QBSg7BkALQBdALAPADQA+ANAeAgIjmDMIjnCBQgxhZAXhjg");
        var mask_2_graphics_159 = new cjs.Graphics().p("AkOBEQgGhcA0hPQA1hNBZgbQA6gRAigEQA0gFAoAQQA+AZAhAUQA3AgAUAkIkUCXIjBC3QhBhEgIheg");
        var mask_2_graphics_160 = new cjs.Graphics().p("AkdBWQgYhmA3hdQA3hdBogdQCGgmBOArQBGAmAiAaQA6AtAOAtIk/BhIiNDhQhdg7gZhpg");
        var mask_2_graphics_161 = new cjs.Graphics().p("AkECGQgthVAUhdQAUheBMg9QBOg8BgAEQA+ACAiAHQA2AMAgAdQAzAsAaAhQAqAzAGAqIk8AtIhjD2QhbgkguhWg");
        var mask_2_graphics_162 = new cjs.Graphics().p("Aj0CcQg9hXAPhmQAPhoBShDQBThCBpAIQA/AFApAMQA5ASAgAjQBsB2gCBTIlAgHIg1EGQhogWg9hWg");
        var mask_2_graphics_163 = new cjs.Graphics().p("AjLDHQhHg/gPhfQgPhcAxhSQAwhTBaghQBaggBXAfQBAAWAdAPQAzAbAWAkQBNB9gKBFIk/gsIgLELQhegEhIhAg");
        var mask_2_graphics_164 = new cjs.Graphics().p("AivDcQhSg7gWhkQgXhhAyhZQAyhYBggiQB0goBQAgQB1AyAnBRQAZAzAKA4QAMA+gNAuIkshXIAaEJIgbABQhUAAhGgyg");
        var mask_2_graphics_165 = new cjs.Graphics().p("AijDtQhcg2gdhoQgdhkAyheQAyheBlgjQBDgWAlgFQA6gJArAUQAzAYAsApQAxAtATAvQAYA+AKA4QANBLgSAtIk5iAIA6EFQgeAHgeAAQhGAAg/gmg");
        var mask_2_graphics_166 = new cjs.Graphics().p("AiGDtQhhgzgihqQghhnAzhiQAxhhBqgiQBngiBiAyQA5AdAiAfQArAnAQAwQATA7ABA3QABBDgXAtIkMiJIBPD9QgrAOgnAAQg9AAg7geg");
        var mask_2_graphics_167 = new cjs.Graphics().p("AhVECQhggZg4hTQg4hSAMhhQAMhjBIhDQBJhCBkgEIBogBQA/AEAhAbQAlAfAdA4QAbA1AJAzQAJA0gFA2QgGA+gXAoIkOikIB0DwQg4Abg5AAQgjAAgkgJg");
        var mask_2_graphics_168 = new cjs.Graphics().p("AhRECQhjgYg5hUQg5hUANhkQANhmBNhCQBOhBBnACQA/ABAqAJQA8AOAhAfQAmAkAZAxQAbAzAEAyQAGA8gHA3QgJBGgcAlIkFjGIB8DqQg8Agg/AAQggAAghgIg");
        var mask_2_graphics_169 = new cjs.Graphics().p("Ag8EGQhmgSg/hTQg/hTAKhmQAKhpBOhFQBOhFBoACQBBABAnAJQA6AMAhAgQAnAkAZA0QAZA1AEA0QADA3gMA4QgOBAgeAmIjwjDICODgQhDAqhJAAQgYAAgZgEg");
        var mask_2_graphics_170 = new cjs.Graphics().p("AgyEHQhqgPhBhUQhBhUAJhoQALhqBPhFQBQhGBrAEQBAADApALQA4APAiAiQAlAmAXA3QAXA3ABA1QAAA4gQA3QgSA/giAkIjejRICYDaQhFAxhPAAQgVAAgWgEg");
        var mask_2_graphics_171 = new cjs.Graphics().p("AguEIQhrgMhEhTQhFhTAJhpQAJhrBQhIQBQhHBrAEQBBADAoAKQA5APAhAiQAnApAbA6QAcA+gBAyQAAA/gNA3QgRBDgiAkIjrjlIChDUQhIA2hUAAQgRAAgSgCg");
        var mask_2_graphics_172 = new cjs.Graphics().p("AgjEJQhsgMhFhTQhGhTAIhrQAIhsBShIQBShGBqAFQBAADArANQA4ARAiAlQAkAoAVA4QAUA3gCA0QgFCig9A6IjbjkIClDQQhJA6hYAAQgPAAgPgBg");
        var mask_2_graphics_173 = new cjs.Graphics().p("AgjEJQhugJhHhUQhHhUAJhsQAJhtBShIQBThHBsAHQBCAFAqANQA4ASAhAlQAmArAVA4QAXA7gEA0QgDA5gYA3QgZA5goAkIjHjfICqDMQhLA+hcAAIgagBg");
        var mask_2_graphics_174 = new cjs.Graphics().p("AgaEJQhugHhJhSQhIhTAHhsQAHhuBThJQBRhIBtAGQBAAEAsAOQA3ASAiAlQAkApATA4QATA3gCA1QgFBOgKAsQgRBIgkAgIiti/ICDCYQhKBBhgAAIgVgBg");

        this.timeline.addTween(cjs.Tween.get(mask_2).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(154).to({graphics: mask_2_graphics_154, x: 0.1, y: -11.6}).wait(1).to({
            graphics: mask_2_graphics_155,
            x: -4.1,
            y: -13.5
        }).wait(1).to({graphics: mask_2_graphics_156, x: -2.4, y: -13.7}).wait(1).to({
            graphics: mask_2_graphics_157,
            x: 1.1,
            y: -11.3
        }).wait(1).to({graphics: mask_2_graphics_158, x: 5.3, y: -7.5}).wait(1).to({
            graphics: mask_2_graphics_159,
            x: 7.9,
            y: -5.4
        }).wait(1).to({graphics: mask_2_graphics_160, x: 9.8, y: -3.1}).wait(1).to({
            graphics: mask_2_graphics_161,
            x: 9.8,
            y: -1.5
        }).wait(1).to({graphics: mask_2_graphics_162, x: 10, y: -0.9}).wait(1).to({
            graphics: mask_2_graphics_163,
            x: 10,
            y: -0.7
        }).wait(1).to({graphics: mask_2_graphics_164, x: 9.5, y: -1.1}).wait(1).to({
            graphics: mask_2_graphics_165,
            x: 10.3,
            y: -1.5
        }).wait(1).to({graphics: mask_2_graphics_166, x: 8.7, y: -0.7}).wait(1).to({
            graphics: mask_2_graphics_167,
            x: 9.4,
            y: -0.7
        }).wait(1).to({graphics: mask_2_graphics_168, x: 9.2, y: -0.7}).wait(1).to({
            graphics: mask_2_graphics_169,
            x: 8.8,
            y: -0.7
        }).wait(1).to({graphics: mask_2_graphics_170, x: 8.8, y: -0.8}).wait(1).to({
            graphics: mask_2_graphics_171,
            x: 9.2,
            y: -0.8
        }).wait(1).to({graphics: mask_2_graphics_172, x: 8.5, y: -0.8}).wait(1).to({
            graphics: mask_2_graphics_173,
            x: 8.9,
            y: -0.7
        }).wait(1).to({graphics: mask_2_graphics_174, x: 8.4, y: -0.8}).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(14));

        // Layer 19
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#000000").s().p("AhoDtQgwgTglgjQgkgjgVgvQgUgwAAg1QAAgtAMgmQALgjAYggQAlgyA6gdQA7gcBBAAQA4AAAzAUQAyAUAlAjQAjAkATAvQATAwAAAzQABA1gVAxQgUAuglAjQgkAkgxASQgyAVg3gBQg3AAgxgUgAhYhZQgjAiAAA3QAAA2AjAjQAiAhA2AAQA3AAAighQAigjAAg2QAAg3gigiQgigig3AAQg2AAgiAig");
        this.shape_10.setTransform(7.9, -0.6);
        this.shape_10._off = true;

        this.shape_10.mask = mask_2;

        this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(154).to({_off: false}, 0).wait(35));

        // Layer 9 (mask)
        var mask_3 = new cjs.Shape();
        mask_3._off = true;
        var mask_3_graphics_150 = new cjs.Graphics().p("AhHhwIAEgDICLDgg");
        var mask_3_graphics_151 = new cjs.Graphics().p("AhvgKQAQgbAWgVQAWgWAagQQAZgQAdgJQAdgKAfgDIAXEIg");
        var mask_3_graphics_152 = new cjs.Graphics().p("AinBgQAEgmAQgjQAPgiAZgdQAYgdAhgWQAZgQAZgKQAagLAdgEQAcgEAdABQAcACAcAIIhJD+g");
        var mask_3_graphics_153 = new cjs.Graphics().p("AjHCgQgGggABggQABgfAIgeQAIgeAPgZQAPgbAVgYQAVgXAbgSQAbgSAdgLQAegLAcgEQAfgEAfADQAfADAeAKQAdALAbARIiRDeg");
        var mask_3_graphics_154 = new cjs.Graphics().p("AjFDFQgRgdgIggQgIgggBggQAAggAHgfQAHgdAOgcQAOgdAVgZQAVgZAcgUQAcgUAegLQAfgMAegEQAfgEAgADQAfAEAfALQAeAKAbATQAbASAXAZIjGCwg");
        var mask_3_graphics_155 = new cjs.Graphics().p("AivDhQg2g6gOhLQgPhKAchIQAOgkAXgeQAXgeAegWQAfgWAjgNQAjgNAngDQAlgDAlAJQAlAIAhASQAhASAaAaQAbAbATAiIjpB/g");
        var mask_3_graphics_156 = new cjs.Graphics().p("AiID1QglgYgbghQgbghgPgoQgPgogCgqQgCgpAMgrQAKgiASgeQARgdAYgYQAZgXAdgRQAdgRAhgKQAhgJAiAAQAjAAAiAIQAhAJAeAQQAdARAZAXQAYAXATAdQASAdAKAiIj/BMg");
        var mask_3_graphics_157 = new cjs.Graphics().p("AhhEAQgtgSgjggQgigfgWgpQgVgogHguQgHguAKguQAIgmASghQASghAagaQAZgbAggSQAggTAkgJQAkgJAlABQAnABAkAMQAjAMAeAVQAfAUAYAcQAXAcAQAiQAPAjAGAmIkIAjg");
        var mask_3_graphics_158 = new cjs.Graphics().p("Ag0EHQg0gLgqgcQgqgcgcgoQgdgpgMgxQgNgwAIgzQAGgqARgkQASglAbgdQAbgdAigUQAigUAogJQAngKAoADQArAEAlAPQAmAQAeAZQAfAZAWAhQAWAhAMAnQAMAmgBApIkKgFg");
        var mask_3_graphics_159 = new cjs.Graphics().p("AgJEKQhUgEhBgxQhBgwgchQQgLgfgCggQgDgeAFggQAFgfAMgdQAMgeATgaQATgaAagVQAZgVAdgOQAdgOAfgHQAfgHAeABQAgABAfAIQAfAJAdAQQAdAQAXAWQAYAWARAaQASAbALAeQAKAeAEAgQADAegFAhIkHglg");
        var mask_3_graphics_160 = new cjs.Graphics().p("AAbEJQgqAEgqgJQgpgKgkgVQgkgVgdggQgcgggRgpQgOgggEgiQgFgiAEgfQADgiAMgfQAMgfAUgcQATgcAbgXQAbgWAfgPQAfgOAhgGQAhgHAgADQAhACAhAKQAgALAeATQAdATAXAaQAXAZAQAeQAPAdAIAhQAIAhgBAgQgBAigJAiIkAhJg");
        var mask_3_graphics_161 = new cjs.Graphics().p("AA7EDQgtAKgqgFQgsgFgogSQgogTgggfQgggfgVgpQgQghgHgjQgHgjADghQACgjALghQAMghAUgeQAUgdAcgYQAcgYAggPQAggPAjgGQAjgGAhADQAiADAiAMQAhANAeAVQAeAWAXAcQAWAcAOAgQAOAgAFAjQAFAigEAiQgEAjgNAiIj3hjg");
        var mask_3_graphics_162 = new cjs.Graphics().p("ABQD+QguAOgrgCQgugCgqgRQgqgRgjgeQgigegYgqQgSghgIgkQgIgkABgiQACgkALgiQALgjAVgeQAUgfAdgZQAdgYAigQQAhgPAkgFQAkgFAiAEQAkAEAiAOQAiAOAeAXQAeAYAVAeQAWAeAMAiQAMAiADAkQADAigHAkQgHAkgRAiIjth4g");
        var mask_3_graphics_163 = new cjs.Graphics().p("AB0DvQgtAWgvAEQgtAEgugMQgtgMgngbQgogbgcgpQgSgcgMgeQgLgegDgfQgEgfAEgdQADgfALgeQALgdARgbQASgbAYgWQAZgWAcgQQAcgPAegIQAfgIAfgBQAdgBAfAHQAfAGAcAOQAdANAaAVQAaAVATAaQATAZAMAdQANAdAFAfQAFAfgBAdQgCAfgKAfQgJAegRAdIjkiJg");
        var mask_3_graphics_164 = new cjs.Graphics().p("AB9DrQguAYgwAFQguAGgvgMQgvgLgogcQgpgbgdgqQgTgdgLgeQgLgfgEggQgDgeAEggQAFgfALgeQAMgeATgbQASgbAagWQAagWAegPQAdgOAfgHQAggHAeABQAgABAfAIQAfAIAdAQQAcAQAZAXQAZAYARAbQASAcAKAfQAKAeADAgQADAegFAfQgFAggNAeQgMAfgVAbIjUigg");
        var mask_3_graphics_165 = new cjs.Graphics().p("ACPDgQgsAcgxAJQgxAKgugJQgxgJgqgZQgrgagggqQgVgbgNgfQgMgfgFggQgFghADgeQADghALgfQALgeATgcQASgcAagXQAagXAegQQAdgPAggHQAggIAfABQAgAAAgAJQAgAIAdAQQAdARAZAYQAaAYARAcQASAcAKAgQAJAfACAgQADAfgGAgQgGAggOAfQgOAegVAbIjPing");
        var mask_3_graphics_166 = new cjs.Graphics().p("ACYDaQgrAegyALQgxAMgwgIQgxgHgsgZQgsgZghgqQgWgcgOggQgNgfgFghQgFghADgfQADghAMgfQALggATgcQATgcAbgYQAagXAfgPQAfgPAggHQAhgGAfABQAhACAgAJQAgAKAdARQAdASAZAZQAZAaAQAeQARAdAIAhQAJAgAAAhQAAAfgIAhQgHAggQAeQgQAegZAaIjCi1g");
        var mask_3_graphics_167 = new cjs.Graphics().p("AChDUQgrAggyANQgxANgwgGQgygGgugYQgtgYgigpQgXgcgOgfQgOgggGghQgGghADgfQACgiALgfQALggATgdQATgdAagYQAbgYAfgPQAfgPAhgHQAhgHAfABQAiABAgAKQAgAKAdARQAeASAZAaQAZAaAQAeQARAeAIAhQAIAgAAAgQAAAhgIAhQgJAhgQAeQgRAegZAaIi/i5g");
        var mask_3_graphics_168 = new cjs.Graphics().p("AClDQQgqAigyAOQgyAOgwgFQgzgFgugYQgugYgjgqQgXgbgPggQgOgggGghQgGghADggQACgiALggQALggATgdQAUgdAbgYQAbgYAfgPQAfgPAigHQAhgGAgABQAhACAhAKQAgAKAeATQAdASAZAbQAYAbAQAfQAQAeAHAhQAIAigBAfQgBAigJAhQgKAggSAeQgRAegaAZIi5i/g");
        var mask_3_graphics_169 = new cjs.Graphics().p("ACqDMQgrAjgyAPQgxAPgygEQgzgEgugYQgvgXgkgqQgXgcgPggQgPgggGghQgGgiADggQACgiALggQAMghATgdQATgdAcgYQAcgYAfgPQAggPAigGQAhgHAgADQAiACAhALQAgAKAeAUQAdATAYAbQAZAcAPAfQAPAgAHAhQAHAigCAgQgCAigLAgQgKAhgTAdQgTAegbAZIiyjGg");
        var mask_3_graphics_170 = new cjs.Graphics().p("ACuDJQgqAkgxAQQgyAQgygEQgzgDgvgXQgvgWglgqQgYgbgPggQgQgggGgiQgHghACggQADgiAKghQALghATgdQATgeAcgYQAcgYAfgQQAggPAhgHQAigHAgACQAiACAhALQAhALAdATQAeATAYAbQAZAcAPAfQAQAgAHAhQAHAigCAgQgCAigLAhQgKAhgTAdQgTAegbAZIiyjGg");

        this.timeline.addTween(cjs.Tween.get(mask_3).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(150).to({graphics: mask_3_graphics_150, x: 0.1, y: -11.6}).wait(1).to({
            graphics: mask_3_graphics_151,
            x: -4.1,
            y: -13.5
        }).wait(1).to({graphics: mask_3_graphics_152, x: -2.4, y: -13.7}).wait(1).to({
            graphics: mask_3_graphics_153,
            x: 1.1,
            y: -11.3
        }).wait(1).to({graphics: mask_3_graphics_154, x: 3.8, y: -7.5}).wait(1).to({
            graphics: mask_3_graphics_155,
            x: 5.7,
            y: -4.8
        }).wait(1).to({graphics: mask_3_graphics_156, x: 6.6, y: -2.7}).wait(1).to({
            graphics: mask_3_graphics_157,
            x: 7.1,
            y: -1.4
        }).wait(1).to({graphics: mask_3_graphics_158, x: 7.3, y: -0.9}).wait(1).to({
            graphics: mask_3_graphics_159,
            x: 7.2,
            y: -0.6
        }).wait(1).to({graphics: mask_3_graphics_160, x: 7.4, y: -0.4}).wait(1).to({
            graphics: mask_3_graphics_161,
            x: 7.4,
            y: -0.6
        }).wait(1).to({graphics: mask_3_graphics_162, x: 7.3, y: -0.7}).wait(1).to({
            graphics: mask_3_graphics_163,
            x: 7.7,
            y: -0.6
        }).wait(1).to({graphics: mask_3_graphics_164, x: 7.3, y: -0.7}).wait(1).to({
            graphics: mask_3_graphics_165,
            x: 7.3,
            y: -0.8
        }).wait(1).to({graphics: mask_3_graphics_166, x: 7.4, y: -0.9}).wait(1).to({
            graphics: mask_3_graphics_167,
            x: 7.3,
            y: -0.8
        }).wait(1).to({graphics: mask_3_graphics_168, x: 7.8, y: -0.8}).wait(1).to({
            graphics: mask_3_graphics_169,
            x: 7.7,
            y: -0.7
        }).wait(1).to({graphics: mask_3_graphics_170, x: 7.4, y: -0.6}).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(18));

        // Layer 8
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#F25F26").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_11.setTransform(8, -0.6);
        this.shape_11._off = true;

        this.shape_11.mask = mask_3;

        this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(150).to({_off: false}, 0).wait(39));

        // Layer 5 (mask)
        var mask_4 = new cjs.Shape();
        mask_4._off = true;
        var mask_4_graphics_4 = new cjs.Graphics().p("AhHhwIAEgDICLDgg");
        var mask_4_graphics_5 = new cjs.Graphics().p("AhvgKQAQgbAWgVQAWgWAagQQAZgQAdgJQAdgKAfgDIAXEIg");
        var mask_4_graphics_6 = new cjs.Graphics().p("AinBgQAEgmAQgjQAPgiAZgdQAYgdAhgWQAZgQAZgKQAagLAdgEQAcgEAdABQAcACAcAIIhJD+g");
        var mask_4_graphics_7 = new cjs.Graphics().p("AjHCgQgGggABggQABgfAIgeQAIgeAPgZQAPgbAVgYQAVgXAbgSQAbgSAdgLQAegLAcgEQAfgEAfADQAfADAeAKQAdALAbARIiRDeg");
        var mask_4_graphics_8 = new cjs.Graphics().p("AjFDFQgRgdgIggQgIgggBggQAAggAHgfQAHgdAOgcQAOgdAVgZQAVgZAcgUQAcgUAegLQAfgMAegEQAfgEAgADQAfAEAfALQAeAKAbATQAbASAXAZIjGCwg");
        var mask_4_graphics_9 = new cjs.Graphics().p("AivDhQg2g6gOhLQgPhKAchIQAOgkAXgeQAXgeAegWQAfgWAjgNQAjgNAngDQAlgDAlAJQAlAIAhASQAhASAaAaQAbAbATAiIjpB/g");
        var mask_4_graphics_10 = new cjs.Graphics().p("AiID1QglgYgbghQgbghgPgoQgPgogCgqQgCgpAMgrQAKgiASgeQARgdAYgYQAZgXAdgRQAdgRAhgKQAhgJAiAAQAjAAAiAIQAhAJAeAQQAdARAZAXQAYAXATAdQASAdAKAiIj/BMg");
        var mask_4_graphics_11 = new cjs.Graphics().p("AhhEAQgtgSgjggQgigfgWgpQgVgogHguQgHguAKguQAIgmASghQASghAagaQAZgbAggSQAggTAkgJQAkgJAlABQAnABAkAMQAjAMAeAVQAfAUAYAcQAXAcAQAiQAPAjAGAmIkIAjg");
        var mask_4_graphics_12 = new cjs.Graphics().p("Ag0EHQg0gLgqgcQgqgcgcgoQgdgpgMgxQgNgwAIgzQAGgqARgkQASglAbgdQAbgdAigUQAigUAogJQAngKAoADQArAEAlAPQAmAQAeAZQAfAZAWAhQAWAhAMAnQAMAmgBApIkKgFg");
        var mask_4_graphics_13 = new cjs.Graphics().p("AgJEKQhUgEhBgxQhBgwgchQQgLgfgCggQgDgeAFggQAFgfAMgdQAMgeATgaQATgaAagVQAZgVAdgOQAdgOAfgHQAfgHAeABQAgABAfAIQAfAJAdAQQAdAQAXAWQAYAWARAaQASAbALAeQAKAeAEAgQADAegFAhIkHglg");
        var mask_4_graphics_14 = new cjs.Graphics().p("AAbEJQgqAEgqgJQgpgKgkgVQgkgVgdggQgcgggRgpQgOgggEgiQgFgiAEgfQADgiAMgfQAMgfAUgcQATgcAbgXQAbgWAfgPQAfgOAhgGQAhgHAgADQAhACAhAKQAgALAeATQAdATAXAaQAXAZAQAeQAPAdAIAhQAIAhgBAgQgBAigJAiIkAhJg");
        var mask_4_graphics_15 = new cjs.Graphics().p("AA7EDQgtAKgqgFQgsgFgogSQgogTgggfQgggfgVgpQgQghgHgjQgHgjADghQACgjALghQAMghAUgeQAUgdAcgYQAcgYAggPQAggPAjgGQAjgGAhADQAiADAiAMQAhANAeAVQAeAWAXAcQAWAcAOAgQAOAgAFAjQAFAigEAiQgEAjgNAiIj3hjg");
        var mask_4_graphics_16 = new cjs.Graphics().p("ABQD+QguAOgrgCQgugCgqgRQgqgRgjgeQgigegYgqQgSghgIgkQgIgkABgiQACgkALgiQALgjAVgeQAUgfAdgZQAdgYAigQQAhgPAkgFQAkgFAiAEQAkAEAiAOQAiAOAeAXQAeAYAVAeQAWAeAMAiQAMAiADAkQADAigHAkQgHAkgRAiIjth4g");
        var mask_4_graphics_17 = new cjs.Graphics().p("AB0DvQgtAWgvAEQgtAEgugMQgtgMgngbQgogbgcgpQgSgcgMgeQgLgegDgfQgEgfAEgdQADgfALgeQALgdARgbQASgbAYgWQAZgWAcgQQAcgPAegIQAfgIAfgBQAdgBAfAHQAfAGAcAOQAdANAaAVQAaAVATAaQATAZAMAdQANAdAFAfQAFAfgBAdQgCAfgKAfQgJAegRAdIjkiJg");
        var mask_4_graphics_18 = new cjs.Graphics().p("AB9DrQguAYgwAFQguAGgvgMQgvgLgogcQgpgbgdgqQgTgdgLgeQgLgfgEggQgDgeAEggQAFgfALgeQAMgeATgbQASgbAagWQAagWAegPQAdgOAfgHQAggHAeABQAgABAfAIQAfAIAdAQQAcAQAZAXQAZAYARAbQASAcAKAfQAKAeADAgQADAegFAfQgFAggNAeQgMAfgVAbIjUigg");
        var mask_4_graphics_19 = new cjs.Graphics().p("ACPDgQgsAcgxAJQgxAKgugJQgxgJgqgZQgrgagggqQgVgbgNgfQgMgfgFggQgFghADgeQADghALgfQALgeATgcQASgcAagXQAagXAegQQAdgPAggHQAggIAfABQAgAAAgAJQAgAIAdAQQAdARAZAYQAaAYARAcQASAcAKAgQAJAfACAgQADAfgGAgQgGAggOAfQgOAegVAbIjPing");
        var mask_4_graphics_20 = new cjs.Graphics().p("ACYDaQgrAegyALQgxAMgwgIQgxgHgsgZQgsgZghgqQgWgcgOggQgNgfgFghQgFghADgfQADghAMgfQALggATgcQATgcAbgYQAagXAfgPQAfgPAggHQAhgGAfABQAhACAgAJQAgAKAdARQAdASAZAZQAZAaAQAeQARAdAIAhQAJAgAAAhQAAAfgIAhQgHAggQAeQgQAegZAaIjCi1g");
        var mask_4_graphics_21 = new cjs.Graphics().p("AChDUQgrAggyANQgxANgwgGQgygGgugYQgtgYgigpQgXgcgOgfQgOgggGghQgGghADgfQACgiALgfQALggATgdQATgdAagYQAbgYAfgPQAfgPAhgHQAhgHAfABQAiABAgAKQAgAKAdARQAeASAZAaQAZAaAQAeQARAeAIAhQAIAgAAAgQAAAhgIAhQgJAhgQAeQgRAegZAaIi/i5g");
        var mask_4_graphics_22 = new cjs.Graphics().p("AClDQQgqAigyAOQgyAOgwgFQgzgFgugYQgugYgjgqQgXgbgPggQgOgggGghQgGghADggQACgiALggQALggATgdQAUgdAbgYQAbgYAfgPQAfgPAigHQAhgGAgABQAhACAhAKQAgAKAeATQAdASAZAbQAYAbAQAfQAQAeAHAhQAIAigBAfQgBAigJAhQgKAggSAeQgRAegaAZIi5i/g");
        var mask_4_graphics_23 = new cjs.Graphics().p("ACqDMQgrAjgyAPQgxAPgygEQgzgEgugYQgvgXgkgqQgXgcgPggQgPgggGghQgGgiADggQACgiALggQAMghATgdQATgdAcgYQAcgYAfgPQAggPAigGQAhgHAgADQAiACAhALQAgAKAeAUQAdATAYAbQAZAcAPAfQAPAgAHAhQAHAigCAgQgCAigLAgQgKAhgTAdQgTAegbAZIiyjGg");
        var mask_4_graphics_24 = new cjs.Graphics().p("ACuDJQgqAkgxAQQgyAQgygEQgzgDgvgXQgvgWglgqQgYgbgPggQgQgggGgiQgHghACggQADgiAKghQALghATgdQATgeAcgYQAcgYAfgQQAggPAhgHQAigHAgACQAiACAhALQAhALAdATQAeATAYAbQAZAcAPAfQAQAgAHAhQAHAigCAgQgCAigLAhQgKAhgTAdQgTAegbAZIiyjGg");

        this.timeline.addTween(cjs.Tween.get(mask_4).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({graphics: mask_4_graphics_4, x: 0.1, y: -11.6}).wait(1).to({
            graphics: mask_4_graphics_5,
            x: -4.1,
            y: -13.5
        }).wait(1).to({graphics: mask_4_graphics_6, x: -2.4, y: -13.7}).wait(1).to({
            graphics: mask_4_graphics_7,
            x: 1.1,
            y: -11.3
        }).wait(1).to({graphics: mask_4_graphics_8, x: 3.8, y: -7.5}).wait(1).to({
            graphics: mask_4_graphics_9,
            x: 5.7,
            y: -4.8
        }).wait(1).to({graphics: mask_4_graphics_10, x: 6.6, y: -2.7}).wait(1).to({
            graphics: mask_4_graphics_11,
            x: 7.1,
            y: -1.4
        }).wait(1).to({graphics: mask_4_graphics_12, x: 7.3, y: -0.9}).wait(1).to({
            graphics: mask_4_graphics_13,
            x: 7.2,
            y: -0.6
        }).wait(1).to({graphics: mask_4_graphics_14, x: 7.2, y: -0.6}).wait(1).to({
            graphics: mask_4_graphics_15,
            x: 7.2,
            y: -0.6
        }).wait(1).to({graphics: mask_4_graphics_16, x: 7.2, y: -0.7}).wait(1).to({
            graphics: mask_4_graphics_17,
            x: 7.2,
            y: -0.6
        }).wait(1).to({graphics: mask_4_graphics_18, x: 7.2, y: -0.9}).wait(1).to({
            graphics: mask_4_graphics_19,
            x: 7.2,
            y: -0.8
        }).wait(1).to({graphics: mask_4_graphics_20, x: 7.2, y: -0.9}).wait(1).to({
            graphics: mask_4_graphics_21,
            x: 7.1,
            y: -0.8
        }).wait(1).to({graphics: mask_4_graphics_22, x: 7.3, y: -0.8}).wait(1).to({
            graphics: mask_4_graphics_23,
            x: 7.2,
            y: -0.7
        }).wait(1).to({graphics: mask_4_graphics_24, x: 7.2, y: -0.8}).wait(1).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(164));

        // Layer 3
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#FFFFFF").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_12.setTransform(8, -0.6);
        this.shape_12._off = true;

        this.shape_12.mask = mask_4;

        this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off: false}, 0).wait(185));

        // Layer 15 (mask)
        var mask_5 = new cjs.Shape();
        mask_5._off = true;
        var mask_5_graphics_0 = new cjs.Graphics().p("AhHhwIAEgDICLDgg");
        var mask_5_graphics_1 = new cjs.Graphics().p("AhvgKQAQgbAWgVQAWgWAagQQAZgQAdgJQAdgKAfgDIAXEIg");
        var mask_5_graphics_2 = new cjs.Graphics().p("AinBgQAEgmAQgjQAPgiAZgdQAYgdAhgWQAZgQAZgKQAagLAdgEQAcgEAdABQAcACAcAIIhJD+g");
        var mask_5_graphics_3 = new cjs.Graphics().p("AjHCgQgGggABggQABgfAIgeQAIgeAPgZQAPgbAVgYQAVgXAbgSQAbgSAdgLQAegLAcgEQAfgEAfADQAfADAeAKQAdALAbARIiRDeg");
        var mask_5_graphics_4 = new cjs.Graphics().p("AjFDFQgRgdgIggQgIgggBggQAAggAHgfQAHgdAOgcQAOgdAVgZQAVgZAcgUQAcgUAegLQAfgMAegEQAfgEAgADQAfAEAfALQAeAKAbATQAbASAXAZIjGCwg");
        var mask_5_graphics_5 = new cjs.Graphics().p("AivDhQg2g6gOhLQgPhKAchIQAOgkAXgeQAXgeAegWQAfgWAjgNQAjgNAngDQAlgDAlAJQAlAIAhASQAhASAaAaQAbAbATAiIjpB/g");
        var mask_5_graphics_6 = new cjs.Graphics().p("AiID1QglgYgbghQgbghgPgoQgPgogCgqQgCgpAMgrQAKgiASgeQARgdAYgYQAZgXAdgRQAdgRAhgKQAhgJAiAAQAjAAAiAIQAhAJAeAQQAdARAZAXQAYAXATAdQASAdAKAiIj/BMg");
        var mask_5_graphics_7 = new cjs.Graphics().p("AhhEAQgtgSgjggQgigfgWgpQgVgogHguQgHguAKguQAIgmASghQASghAagaQAZgbAggSQAggTAkgJQAkgJAlABQAnABAkAMQAjAMAeAVQAfAUAYAcQAXAcAQAiQAPAjAGAmIkIAjg");
        var mask_5_graphics_8 = new cjs.Graphics().p("Ag0EHQg0gLgqgcQgqgcgcgoQgdgpgMgxQgNgwAIgzQAGgqARgkQASglAbgdQAbgdAigUQAigUAogJQAngKAoADQArAEAlAPQAmAQAeAZQAfAZAWAhQAWAhAMAnQAMAmgBApIkKgFg");
        var mask_5_graphics_9 = new cjs.Graphics().p("AgJEKQhUgEhBgxQhBgwgchQQgLgfgCggQgDgeAFggQAFgfAMgdQAMgeATgaQATgaAagVQAZgVAdgOQAdgOAfgHQAfgHAeABQAgABAfAIQAfAJAdAQQAdAQAXAWQAYAWARAaQASAbALAeQAKAeAEAgQADAegFAhIkHglg");
        var mask_5_graphics_10 = new cjs.Graphics().p("AAbEJQgqAEgqgJQgpgKgkgVQgkgVgdggQgcgggRgpQgOgggEgiQgFgiAEgfQADgiAMgfQAMgfAUgcQATgcAbgXQAbgWAfgPQAfgOAhgGQAhgHAgADQAhACAhAKQAgALAeATQAdATAXAaQAXAZAQAeQAPAdAIAhQAIAhgBAgQgBAigJAiIkAhJg");
        var mask_5_graphics_11 = new cjs.Graphics().p("AA7EDQgtAKgqgFQgsgFgogSQgogTgggfQgggfgVgpQgQghgHgjQgHgjADghQACgjALghQAMghAUgeQAUgdAcgYQAcgYAggPQAggPAjgGQAjgGAhADQAiADAiAMQAhANAeAVQAeAWAXAcQAWAcAOAgQAOAgAFAjQAFAigEAiQgEAjgNAiIj3hjg");
        var mask_5_graphics_12 = new cjs.Graphics().p("ABQD+QguAOgrgCQgugCgqgRQgqgRgjgeQgigegYgqQgSghgIgkQgIgkABgiQACgkALgiQALgjAVgeQAUgfAdgZQAdgYAigQQAhgPAkgFQAkgFAiAEQAkAEAiAOQAiAOAeAXQAeAYAVAeQAWAeAMAiQAMAiADAkQADAigHAkQgHAkgRAiIjth4g");
        var mask_5_graphics_13 = new cjs.Graphics().p("AB0DvQgtAWgvAEQgtAEgugMQgtgMgngbQgogbgcgpQgSgcgMgeQgLgegDgfQgEgfAEgdQADgfALgeQALgdARgbQASgbAYgWQAZgWAcgQQAcgPAegIQAfgIAfgBQAdgBAfAHQAfAGAcAOQAdANAaAVQAaAVATAaQATAZAMAdQANAdAFAfQAFAfgBAdQgCAfgKAfQgJAegRAdIjkiJg");
        var mask_5_graphics_14 = new cjs.Graphics().p("AB9DrQguAYgwAFQguAGgvgMQgvgLgogcQgpgbgdgqQgTgdgLgeQgLgfgEggQgDgeAEggQAFgfALgeQAMgeATgbQASgbAagWQAagWAegPQAdgOAfgHQAggHAeABQAgABAfAIQAfAIAdAQQAcAQAZAXQAZAYARAbQASAcAKAfQAKAeADAgQADAegFAfQgFAggNAeQgMAfgVAbIjUigg");
        var mask_5_graphics_15 = new cjs.Graphics().p("ACPDgQgsAcgxAJQgxAKgugJQgxgJgqgZQgrgagggqQgVgbgNgfQgMgfgFggQgFghADgeQADghALgfQALgeATgcQASgcAagXQAagXAegQQAdgPAggHQAggIAfABQAgAAAgAJQAgAIAdAQQAdARAZAYQAaAYARAcQASAcAKAgQAJAfACAgQADAfgGAgQgGAggOAfQgOAegVAbIjPing");
        var mask_5_graphics_16 = new cjs.Graphics().p("ACYDaQgrAegyALQgxAMgwgIQgxgHgsgZQgsgZghgqQgWgcgOggQgNgfgFghQgFghADgfQADghAMgfQALggATgcQATgcAbgYQAagXAfgPQAfgPAggHQAhgGAfABQAhACAgAJQAgAKAdARQAdASAZAZQAZAaAQAeQARAdAIAhQAJAgAAAhQAAAfgIAhQgHAggQAeQgQAegZAaIjCi1g");
        var mask_5_graphics_17 = new cjs.Graphics().p("AChDUQgrAggyANQgxANgwgGQgygGgugYQgtgYgigpQgXgcgOgfQgOgggGghQgGghADgfQACgiALgfQALggATgdQATgdAagYQAbgYAfgPQAfgPAhgHQAhgHAfABQAiABAgAKQAgAKAdARQAeASAZAaQAZAaAQAeQARAeAIAhQAIAgAAAgQAAAhgIAhQgJAhgQAeQgRAegZAaIi/i5g");
        var mask_5_graphics_18 = new cjs.Graphics().p("AClDQQgqAigyAOQgyAOgwgFQgzgFgugYQgugYgjgqQgXgbgPggQgOgggGghQgGghADggQACgiALggQALggATgdQAUgdAbgYQAbgYAfgPQAfgPAigHQAhgGAgABQAhACAhAKQAgAKAeATQAdASAZAbQAYAbAQAfQAQAeAHAhQAIAigBAfQgBAigJAhQgKAggSAeQgRAegaAZIi5i/g");
        var mask_5_graphics_19 = new cjs.Graphics().p("ACqDMQgrAjgyAPQgxAPgygEQgzgEgugYQgvgXgkgqQgXgcgPggQgPgggGghQgGgiADggQACgiALggQAMghATgdQATgdAcgYQAcgYAfgPQAggPAigGQAhgHAgADQAiACAhALQAgAKAeAUQAdATAYAbQAZAcAPAfQAPAgAHAhQAHAigCAgQgCAigLAgQgKAhgTAdQgTAegbAZIiyjGg");
        var mask_5_graphics_20 = new cjs.Graphics().p("ACuDJQgqAkgxAQQgyAQgygEQgzgDgvgXQgvgWglgqQgYgbgPggQgQgggGgiQgHghACggQADgiAKghQALghATgdQATgeAcgYQAcgYAfgQQAggPAhgHQAigHAgACQAiACAhALQAhALAdATQAeATAYAbQAZAcAPAfQAQAgAHAhQAHAigCAgQgCAigLAhQgKAhgTAdQgTAegbAZIiyjGg");

        this.timeline.addTween(cjs.Tween.get(mask_5).to({
            graphics: mask_5_graphics_0,
            x: 0.1,
            y: -11.6
        }).wait(1).to({graphics: mask_5_graphics_1, x: -4.1, y: -13.5}).wait(1).to({
            graphics: mask_5_graphics_2,
            x: -2.4,
            y: -13.7
        }).wait(1).to({graphics: mask_5_graphics_3, x: 1.1, y: -11.3}).wait(1).to({
            graphics: mask_5_graphics_4,
            x: 3.8,
            y: -7.5
        }).wait(1).to({graphics: mask_5_graphics_5, x: 5.7, y: -4.8}).wait(1).to({
            graphics: mask_5_graphics_6,
            x: 6.6,
            y: -2.7
        }).wait(1).to({graphics: mask_5_graphics_7, x: 7.1, y: -1.4}).wait(1).to({
            graphics: mask_5_graphics_8,
            x: 7.3,
            y: -0.9
        }).wait(1).to({graphics: mask_5_graphics_9, x: 7.2, y: -0.6}).wait(1).to({
            graphics: mask_5_graphics_10,
            x: 7.2,
            y: -0.6
        }).wait(1).to({graphics: mask_5_graphics_11, x: 7.2, y: -0.6}).wait(1).to({
            graphics: mask_5_graphics_12,
            x: 7.2,
            y: -0.7
        }).wait(1).to({graphics: mask_5_graphics_13, x: 7.2, y: -0.6}).wait(1).to({
            graphics: mask_5_graphics_14,
            x: 7.2,
            y: -0.9
        }).wait(1).to({graphics: mask_5_graphics_15, x: 7.2, y: -0.8}).wait(1).to({
            graphics: mask_5_graphics_16,
            x: 7.2,
            y: -0.9
        }).wait(1).to({graphics: mask_5_graphics_17, x: 7.3, y: -0.8}).wait(1).to({
            graphics: mask_5_graphics_18,
            x: 7.3,
            y: -0.8
        }).wait(1).to({graphics: mask_5_graphics_19, x: 7.2, y: -0.7}).wait(1).to({
            graphics: mask_5_graphics_20,
            x: 7.2,
            y: -0.8
        }).wait(1).to({graphics: null, x: 0, y: 0}).wait(168));

        // Layer 14
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#F25F26").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_13.setTransform(8, -0.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#DF5823").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_14.setTransform(8, -0.6);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#CD5020").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_15.setTransform(8, -0.6);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#BA491D").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_16.setTransform(8, -0.6);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#A8421A").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_17.setTransform(8, -0.6);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#953A17").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_18.setTransform(8, -0.6);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#823314").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_19.setTransform(8, -0.6);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#702C12").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_20.setTransform(8, -0.6);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#5D250F").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_21.setTransform(8, -0.6);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#4A1D0C").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_22.setTransform(8, -0.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#381609").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_23.setTransform(8, -0.6);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#250F06").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_24.setTransform(8, -0.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#130703").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_25.setTransform(8, -0.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AhmDmQgugSgkgiQgjgigUgtQgUgwAAgzQAAgsAMgkQALgjAXgfQAkgwA4gcQA5gbBAAAQA2AAAxATQAxATAkAjQAiAiASAuQATAuAAAyQABA0gUAvQgUAtgkAjQgjAigwASQgwATg1AAQg1AAgxgUgAgyh3QgXAKgSASQgSASgKAXQgKAYAAAaQAAAaAKAXQAKAYASASQASASAXAKQAYAKAaAAQAZAAAYgKQAYgKASgSQASgSAKgYQAKgXAAgaQAAgagKgYQgKgXgSgSQgSgSgYgKQgYgKgZAAQgaAAgYAKg");
        this.shape_26.setTransform(8, -0.6);

        this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = mask_5;

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_13}]}).to({state: [{t: this.shape_13}]}, 21).to({state: [{t: this.shape_14}]}, 1).to({state: [{t: this.shape_15}]}, 1).to({state: [{t: this.shape_16}]}, 1).to({state: [{t: this.shape_17}]}, 1).to({state: [{t: this.shape_18}]}, 1).to({state: [{t: this.shape_19}]}, 1).to({state: [{t: this.shape_20}]}, 1).to({state: [{t: this.shape_21}]}, 1).to({state: [{t: this.shape_22}]}, 1).to({state: [{t: this.shape_23}]}, 1).to({state: [{t: this.shape_24}]}, 1).to({state: [{t: this.shape_25}]}, 1).to({state: [{t: this.shape_26}]}, 1).to({state: []}, 1).wait(154));

        // Layer 7
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#000000").s().p("AhZADIAAgFICzAAIAAAFg");
        this.shape_27.setTransform(-29.5, 22.5);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#000000").s().p("AhZAEIAAgHICzAAIAAAHg");
        this.shape_28.setTransform(-29.5, 22.4);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#000000").s().p("AhZAHIAAgNICzAAIAAANg");
        this.shape_29.setTransform(-29.5, 22.2);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#000000").s().p("AhZAMIAAgXICzAAIAAAXg");
        this.shape_30.setTransform(-29.5, 21.8);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#000000").s().p("AhZATIAAglICyAAIAAAlg");
        this.shape_31.setTransform(-29.5, 21.3);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#000000").s().p("AhZAcIAAg3ICyAAIAAA3g");
        this.shape_32.setTransform(-29.5, 20.5);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#000000").s().p("AhZAnIAAhNICyAAIAABNg");
        this.shape_33.setTransform(-29.5, 19.6);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#000000").s().p("AhYA1IAAhoICxAAIAABog");
        this.shape_34.setTransform(-29.5, 18.6);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#000000").s().p("AhYBEIAAiHICwAAIAACHg");
        this.shape_35.setTransform(-29.5, 17.4);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#000000").s().p("AhYBVIAAipICwAAIAACpg");
        this.shape_36.setTransform(-29.5, 16);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#000000").s().p("AhXBoIAAjPICvAAIAADPg");
        this.shape_37.setTransform(-29.5, 14.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#000000").s().p("AhXB9IAAj6ICuAAIAAD6g");
        this.shape_38.setTransform(-29.5, 12.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#000000").s().p("AhWCVIAAkpICtAAIAAEpg");
        this.shape_39.setTransform(-29.5, 11);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#000000").s().p("AhVCuIAAlbICsAAIAAFbg");
        this.shape_40.setTransform(-29.5, 9);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#000000").s().p("AhVDKIAAmTICrAAIAAGTg");
        this.shape_41.setTransform(-29.5, 6.8);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#000000").s().p("AhUDnIAAnNICqAAIAAHNg");
        this.shape_42.setTransform(-29.5, 4.5);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#000000").s().p("AhTEGIAAoLICoAAIAAILg");
        this.shape_43.setTransform(-29.5, 2);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#000000").s().p("AhTEoIAApPICnAAIAAJPg");
        this.shape_44.setTransform(-29.5, -0.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_27}]}, 157).to({state: [{t: this.shape_28}]}, 1).to({state: [{t: this.shape_29}]}, 1).to({state: [{t: this.shape_30}]}, 1).to({state: [{t: this.shape_31}]}, 1).to({state: [{t: this.shape_32}]}, 1).to({state: [{t: this.shape_33}]}, 1).to({state: [{t: this.shape_34}]}, 1).to({state: [{t: this.shape_35}]}, 1).to({state: [{t: this.shape_36}]}, 1).to({state: [{t: this.shape_37}]}, 1).to({state: [{t: this.shape_38}]}, 1).to({state: [{t: this.shape_39}]}, 1).to({state: [{t: this.shape_40}]}, 1).to({state: [{t: this.shape_41}]}, 1).to({state: [{t: this.shape_42}]}, 1).to({state: [{t: this.shape_43}]}, 1).to({state: [{t: this.shape_44}]}, 1).wait(15));

        // Layer 6
        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#F25F26").s().p("Ag8ADIAAgFIB5AAIAAAFg");
        this.shape_45.setTransform(-29.5, 22.5);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#F25F26").s().p("Ag8AEIAAgHIB5AAIAAAHg");
        this.shape_46.setTransform(-29.5, 22.5);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#F25F26").s().p("Ag8AGIAAgLIB5AAIAAALg");
        this.shape_47.setTransform(-29.5, 22.2);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#F25F26").s().p("Ag8AKIAAgTIB5AAIAAATg");
        this.shape_48.setTransform(-29.5, 21.8);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#F25F26").s().p("Ag8AQIAAgfIB5AAIAAAfg");
        this.shape_49.setTransform(-29.5, 21.3);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#F25F26").s().p("Ag8AXIAAgtIB5AAIAAAtg");
        this.shape_50.setTransform(-29.5, 20.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#F25F26").s().p("Ag8AgIAAg+IB5AAIAAA+g");
        this.shape_51.setTransform(-29.5, 19.7);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#F25F26").s().p("Ag8AqIAAhTIB5AAIAABTg");
        this.shape_52.setTransform(-29.5, 18.6);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#F25F26").s().p("Ag8A2IAAhrIB5AAIAABrg");
        this.shape_53.setTransform(-29.5, 17.4);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#F25F26").s().p("Ag8BEIAAiHIB5AAIAACHg");
        this.shape_54.setTransform(-29.5, 16);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#F25F26").s().p("Ag8BTIAAilIB5AAIAAClg");
        this.shape_55.setTransform(-29.5, 14.5);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#F25F26").s().p("Ag8BkIAAjHIB5AAIAADHg");
        this.shape_56.setTransform(-29.5, 12.8);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#F25F26").s().p("Ag8B2IAAjrIB5AAIAADrg");
        this.shape_57.setTransform(-29.5, 11);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#F25F26").s().p("Ag8CKIAAkTIB5AAIAAETg");
        this.shape_58.setTransform(-29.5, 9);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#F25F26").s().p("Ag8CgIAAk/IB5AAIAAE/g");
        this.shape_59.setTransform(-29.5, 6.8);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#F25F26").s().p("Ag8C3IAAltIB5AAIAAFtg");
        this.shape_60.setTransform(-29.5, 4.5);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#F25F26").s().p("Ag8DQIAAmfIB5AAIAAGfg");
        this.shape_61.setTransform(-29.5, 2);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#F25F26").s().p("Ag8DrIAAnUIB5AAIAAHUg");
        this.shape_62.setTransform(-29.5, -0.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_45}]}, 150).to({state: [{t: this.shape_46}]}, 1).to({state: [{t: this.shape_47}]}, 1).to({state: [{t: this.shape_48}]}, 1).to({state: [{t: this.shape_49}]}, 1).to({state: [{t: this.shape_50}]}, 1).to({state: [{t: this.shape_51}]}, 1).to({state: [{t: this.shape_52}]}, 1).to({state: [{t: this.shape_53}]}, 1).to({state: [{t: this.shape_54}]}, 1).to({state: [{t: this.shape_55}]}, 1).to({state: [{t: this.shape_56}]}, 1).to({state: [{t: this.shape_57}]}, 1).to({state: [{t: this.shape_58}]}, 1).to({state: [{t: this.shape_59}]}, 1).to({state: [{t: this.shape_60}]}, 1).to({state: [{t: this.shape_61}]}, 1).to({state: [{t: this.shape_62}]}, 1).wait(22));

        // Layer 4
        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#FFFFFF").s().p("Ag8ADIAAgFIB5AAIAAAFg");
        this.shape_63.setTransform(-29.5, 22.5);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#FFFFFF").s().p("Ag8AZIAAgxIB5AAIAAAxg");
        this.shape_64.setTransform(-29.5, 20.3);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#FFFFFF").s().p("Ag8AvIAAhdIB5AAIAABdg");
        this.shape_65.setTransform(-29.5, 18.1);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#FFFFFF").s().p("Ag8BDIAAiFIB5AAIAACFg");
        this.shape_66.setTransform(-29.5, 16.1);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#FFFFFF").s().p("Ag8BWIAAirIB5AAIAACrg");
        this.shape_67.setTransform(-29.5, 14.2);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#FFFFFF").s().p("Ag8BoIAAjPIB5AAIAADPg");
        this.shape_68.setTransform(-29.5, 12.4);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#FFFFFF").s().p("Ag8B5IAAjxIB5AAIAADxg");
        this.shape_69.setTransform(-29.5, 10.7);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#FFFFFF").s().p("Ag8CJIAAkRIB5AAIAAERg");
        this.shape_70.setTransform(-29.5, 9.2);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#FFFFFF").s().p("Ag8CXIAAktIB5AAIAAEtg");
        this.shape_71.setTransform(-29.5, 7.7);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#FFFFFF").s().p("Ag8ClIAAlJIB5AAIAAFJg");
        this.shape_72.setTransform(-29.5, 6.4);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#FFFFFF").s().p("Ag8CxIAAlgIB5AAIAAFgg");
        this.shape_73.setTransform(-29.5, 5.2);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#FFFFFF").s().p("Ag8C8IAAl3IB5AAIAAF3g");
        this.shape_74.setTransform(-29.5, 4.1);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#FFFFFF").s().p("Ag8DGIAAmKIB5AAIAAGKg");
        this.shape_75.setTransform(-29.5, 3.1);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#FFFFFF").s().p("Ag8DOIAAmbIB5AAIAAGbg");
        this.shape_76.setTransform(-29.5, 2.2);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#FFFFFF").s().p("Ag8DWIAAmrIB5AAIAAGrg");
        this.shape_77.setTransform(-29.5, 1.4);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#FFFFFF").s().p("Ag8DcIAAm3IB5AAIAAG3g");
        this.shape_78.setTransform(-29.5, 0.8);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#FFFFFF").s().p("Ag8DhIAAnBIB5AAIAAHBg");
        this.shape_79.setTransform(-29.5, 0.3);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#FFFFFF").s().p("Ag8DlIAAnJIB5AAIAAHJg");
        this.shape_80.setTransform(-29.5, -0.1);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#FFFFFF").s().p("Ag8DoIAAnPIB5AAIAAHPg");
        this.shape_81.setTransform(-29.5, -0.4);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#FFFFFF").s().p("Ag8DqIAAnTIB5AAIAAHTg");
        this.shape_82.setTransform(-29.5, -0.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#FFFFFF").s().p("Ag8DrIAAnUIB5AAIAAHUg");
        this.shape_83.setTransform(-29.5, -0.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [{t: this.shape_63}]}, 9).to({state: [{t: this.shape_64}]}, 1).to({state: [{t: this.shape_65}]}, 1).to({state: [{t: this.shape_66}]}, 1).to({state: [{t: this.shape_67}]}, 1).to({state: [{t: this.shape_68}]}, 1).to({state: [{t: this.shape_69}]}, 1).to({state: [{t: this.shape_70}]}, 1).to({state: [{t: this.shape_71}]}, 1).to({state: [{t: this.shape_72}]}, 1).to({state: [{t: this.shape_73}]}, 1).to({state: [{t: this.shape_74}]}, 1).to({state: [{t: this.shape_75}]}, 1).to({state: [{t: this.shape_76}]}, 1).to({state: [{t: this.shape_77}]}, 1).to({state: [{t: this.shape_78}]}, 1).to({state: [{t: this.shape_79}]}, 1).to({state: [{t: this.shape_80}]}, 1).to({state: [{t: this.shape_81}]}, 1).to({state: [{t: this.shape_82}]}, 1).to({state: [{t: this.shape_83}]}, 1).wait(160));

        // Layer 13
        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#F25F26").s().p("Ag8ADIAAgFIB5AAIAAAFg");
        this.shape_84.setTransform(-29.5, 22.5);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#F25F26").s().p("Ag8AZIAAgxIB5AAIAAAxg");
        this.shape_85.setTransform(-29.5, 20.3);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#F25F26").s().p("Ag8AvIAAhdIB5AAIAABdg");
        this.shape_86.setTransform(-29.5, 18.1);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#F25F26").s().p("Ag8BDIAAiFIB5AAIAACFg");
        this.shape_87.setTransform(-29.5, 16.1);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#F25F26").s().p("Ag8BWIAAirIB5AAIAACrg");
        this.shape_88.setTransform(-29.5, 14.2);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#F25F26").s().p("Ag8BoIAAjPIB5AAIAADPg");
        this.shape_89.setTransform(-29.5, 12.4);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#F25F26").s().p("Ag8B5IAAjxIB5AAIAADxg");
        this.shape_90.setTransform(-29.5, 10.7);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#F25F26").s().p("Ag8CJIAAkRIB5AAIAAERg");
        this.shape_91.setTransform(-29.5, 9.2);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#F25F26").s().p("Ag8CXIAAktIB5AAIAAEtg");
        this.shape_92.setTransform(-29.5, 7.7);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#F25F26").s().p("Ag8ClIAAlJIB5AAIAAFJg");
        this.shape_93.setTransform(-29.5, 6.4);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#F25F26").s().p("Ag8CxIAAlgIB5AAIAAFgg");
        this.shape_94.setTransform(-29.5, 5.2);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#F25F26").s().p("Ag8C8IAAl3IB5AAIAAF3g");
        this.shape_95.setTransform(-29.5, 4.1);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#F25F26").s().p("Ag8DGIAAmKIB5AAIAAGKg");
        this.shape_96.setTransform(-29.5, 3.1);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#F25F26").s().p("Ag8DOIAAmbIB5AAIAAGbg");
        this.shape_97.setTransform(-29.5, 2.2);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#F25F26").s().p("Ag8DWIAAmrIB5AAIAAGrg");
        this.shape_98.setTransform(-29.5, 1.4);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#F25F26").s().p("Ag8DcIAAm3IB5AAIAAG3g");
        this.shape_99.setTransform(-29.5, 0.8);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#F25F26").s().p("Ag8DhIAAnBIB5AAIAAHBg");
        this.shape_100.setTransform(-29.5, 0.3);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#F25F26").s().p("Ag8DlIAAnJIB5AAIAAHJg");
        this.shape_101.setTransform(-29.5, -0.1);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#F25F26").s().p("Ag8DoIAAnPIB5AAIAAHPg");
        this.shape_102.setTransform(-29.5, -0.4);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#F25F26").s().p("Ag8DqIAAnTIB5AAIAAHTg");
        this.shape_103.setTransform(-29.5, -0.6);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#F25F26").s().p("Ag8DrIAAnUIB5AAIAAHUg");
        this.shape_104.setTransform(-29.5, -0.6);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_84}]}).to({state: [{t: this.shape_85}]}, 1).to({state: [{t: this.shape_86}]}, 1).to({state: [{t: this.shape_87}]}, 1).to({state: [{t: this.shape_88}]}, 1).to({state: [{t: this.shape_89}]}, 1).to({state: [{t: this.shape_90}]}, 1).to({state: [{t: this.shape_91}]}, 1).to({state: [{t: this.shape_92}]}, 1).to({state: [{t: this.shape_93}]}, 1).to({state: [{t: this.shape_94}]}, 1).to({state: [{t: this.shape_95}]}, 1).to({state: [{t: this.shape_96}]}, 1).to({state: [{t: this.shape_97}]}, 1).to({state: [{t: this.shape_98}]}, 1).to({state: [{t: this.shape_99}]}, 1).to({state: [{t: this.shape_100}]}, 1).to({state: [{t: this.shape_101}]}, 1).to({state: [{t: this.shape_102}]}, 1).to({state: [{t: this.shape_103}]}, 1).to({state: [{t: this.shape_104}]}, 1).wait(169));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-35.7, -23.2, 43.1, 46.1);


    (lib.iq_text_final = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // iq final
        this.instance = new lib.IQwhite("synched", 0, false);
        this.instance.setTransform(-11.7, -86.9, 1.654, 1.654, 0, 0, 0, -0.8, -0.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 190).wait(1));

        // БИТВА
        this.instance_1 = new lib.text8_mc("synched", 0, false);
        this.instance_1.setTransform(115.6, -134, 0.96, 0.96, 0, 0, 0, 43.8, -198.8);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off: false}, 0).wait(167));

        // c Анатолием ВАССЕРМАНОМ
        this.instance_2 = new lib.text_iq("synched", 0, false);
        this.instance_2.setTransform(113.8, -43, 1, 1, 0, 0, 0, 40.6, -12.5);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off: false}, 0).wait(161));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-69.4, -124.4, 71.3, 76.3);


    (lib.first_text = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // ВАССЕРМАН
        this.instance = new lib.text1();
        this.instance.setTransform(43.2, -6.8);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y: -4.5, alpha: 0.139}, 0).wait(1).to({
            y: -2.4,
            alpha: 0.262
        }, 0).wait(1).to({y: -0.6, alpha: 0.369}, 0).wait(1).to({y: 1, alpha: 0.464}, 0).wait(1).to({
            y: 2.4,
            alpha: 0.547
        }, 0).wait(1).to({y: 3.7, alpha: 0.62}, 0).wait(1).to({y: 4.8, alpha: 0.683}, 0).wait(1).to({
            y: 5.7,
            alpha: 0.738
        }, 0).wait(1).to({y: 6.5, alpha: 0.786}, 0).wait(1).to({y: 7.2, alpha: 0.828}, 0).wait(1).to({
            y: 7.8,
            alpha: 0.863
        }, 0).wait(1).to({y: 8.3, alpha: 0.893}, 0).wait(1).to({y: 8.8, alpha: 0.919}, 0).wait(1).to({
            y: 9.1,
            alpha: 0.94
        }, 0).wait(1).to({y: 9.4, alpha: 0.958}, 0).wait(1).to({y: 9.7, alpha: 0.972}, 0).wait(1).to({
            y: 9.9,
            alpha: 0.982
        }, 0).wait(1).to({y: 10, alpha: 0.99}, 0).wait(1).to({
            y: 10.1,
            alpha: 0.996
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({y: 10.2, alpha: 1}, 0).wait(37).to({
            y: 10.1,
            alpha: 0.999
        }, 0).wait(1).to({alpha: 0.995}, 0).wait(1).to({y: 10, alpha: 0.989}, 0).wait(1).to({
            y: 9.8,
            alpha: 0.981
        }, 0).wait(1).to({y: 9.6, alpha: 0.969}, 0).wait(1).to({y: 9.4, alpha: 0.955}, 0).wait(1).to({
            y: 9.1,
            alpha: 0.937
        }, 0).wait(1).to({y: 8.7, alpha: 0.916}, 0).wait(1).to({y: 8.3, alpha: 0.891}, 0).wait(1).to({
            y: 7.8,
            alpha: 0.862
        }, 0).wait(1).to({y: 7.2, alpha: 0.828}, 0).wait(1).to({y: 6.6, alpha: 0.788}, 0).wait(1).to({
            y: 5.8,
            alpha: 0.744
        }, 0).wait(1).to({y: 4.9, alpha: 0.692}, 0).wait(1).to({y: 3.9, alpha: 0.633}, 0).wait(1).to({
            y: 2.8,
            alpha: 0.566
        }, 0).wait(1).to({y: 1.4, alpha: 0.487}, 0).wait(1).to({y: -0.1, alpha: 0.396}, 0).wait(1).to({
            y: -1.9,
            alpha: 0.289
        }, 0).wait(1).to({y: -4.1, alpha: 0.16}, 0).wait(1).to({y: -6.8, alpha: 0}, 0).to({_off: true}, 1).wait(3));

        // БРОСАЕТ ВЫЗОВ ТЕБЕ
        this.instance_1 = new lib.text2();
        this.instance_1.setTransform(43.8, 66.7);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off: false}, 0).wait(1).to({
            regX: 1.1,
            regY: -12.1,
            x: 44.9,
            y: 51.8,
            alpha: 0.139
        }, 0).wait(1).to({y: 49.3, alpha: 0.262}, 0).wait(1).to({y: 47.2, alpha: 0.369}, 0).wait(1).to({
            y: 45.3,
            alpha: 0.464
        }, 0).wait(1).to({y: 43.6, alpha: 0.547}, 0).wait(1).to({y: 42.2, alpha: 0.62}, 0).wait(1).to({
            y: 40.9,
            alpha: 0.683
        }, 0).wait(1).to({y: 39.8, alpha: 0.738}, 0).wait(1).to({y: 38.8, alpha: 0.786}, 0).wait(1).to({
            y: 38,
            alpha: 0.828
        }, 0).wait(1).to({y: 37.3, alpha: 0.863}, 0).wait(1).to({y: 36.7, alpha: 0.893}, 0).wait(1).to({
            y: 36.2,
            alpha: 0.919
        }, 0).wait(1).to({y: 35.7, alpha: 0.94}, 0).wait(1).to({y: 35.4, alpha: 0.958}, 0).wait(1).to({
            y: 35.1,
            alpha: 0.972
        }, 0).wait(1).to({y: 34.9, alpha: 0.982}, 0).wait(1).to({y: 34.7, alpha: 0.99}, 0).wait(1).to({
            y: 34.6,
            alpha: 0.996
        }, 0).wait(1).to({alpha: 0.999}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 43.8,
            y: 46.7,
            alpha: 1
        }, 0).wait(34).to({
            regX: 1.1,
            regY: -12.1,
            x: 44.9,
            y: 34.6,
            alpha: 0.999
        }, 0).wait(1).to({alpha: 0.995}, 0).wait(1).to({y: 34.8, alpha: 0.989}, 0).wait(1).to({
            y: 34.9,
            alpha: 0.981
        }, 0).wait(1).to({y: 35.2, alpha: 0.969}, 0).wait(1).to({y: 35.5, alpha: 0.955}, 0).wait(1).to({
            y: 35.8,
            alpha: 0.937
        }, 0).wait(1).to({y: 36.2, alpha: 0.916}, 0).wait(1).to({y: 36.7, alpha: 0.891}, 0).wait(1).to({
            y: 37.3,
            alpha: 0.862
        }, 0).wait(1).to({y: 38, alpha: 0.828}, 0).wait(1).to({y: 38.8, alpha: 0.788}, 0).wait(1).to({
            y: 39.7,
            alpha: 0.744
        }, 0).wait(1).to({y: 40.7, alpha: 0.692}, 0).wait(1).to({y: 41.9, alpha: 0.633}, 0).wait(1).to({
            y: 43.2,
            alpha: 0.566
        }, 0).wait(1).to({y: 44.8, alpha: 0.487}, 0).wait(1).to({y: 46.6, alpha: 0.396}, 0).wait(1).to({
            y: 48.8,
            alpha: 0.289
        }, 0).wait(1).to({y: 51.3, alpha: 0.16}, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 43.8,
            y: 66.7,
            alpha: 0
        }, 0).to({_off: true}, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17.2, -15.5, 120.9, 17.4);


    (lib.wassermanMc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // wasserman
        this.instance = new lib.wasserman_1();
        this.instance.setTransform(0, -71.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(257));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-120, -238.5, 240, 334);


    (lib.questions_text = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // question
        this.instance = new lib.question("synched", 0, false);
        this.instance.setTransform(105.5, 39.3, 0.15, 0.15);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off: false}, 0).wait(59));

        // ты
        this.instance_1 = new lib.text5();
        this.instance_1.setTransform(43.8, 61);
        this.instance_1.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            y: 57.4,
            alpha: 0.171
        }, 0).wait(1).to({y: 54.2, alpha: 0.319}, 0).wait(1).to({y: 51.6, alpha: 0.448}, 0).wait(1).to({
            y: 49.2,
            alpha: 0.558
        }, 0).wait(1).to({y: 47.2, alpha: 0.653}, 0).wait(1).to({y: 45.5, alpha: 0.734}, 0).wait(1).to({
            y: 44.1,
            alpha: 0.802
        }, 0).wait(1).to({y: 42.9, alpha: 0.859}, 0).wait(1).to({y: 42, alpha: 0.904}, 0).wait(1).to({
            y: 41.2,
            alpha: 0.94
        }, 0).wait(1).to({y: 40.6, alpha: 0.967}, 0).wait(1).to({y: 40.2, alpha: 0.986}, 0).wait(1).to({
            y: 40,
            alpha: 0.997
        }, 0).wait(1).to({alpha: 1}, 0).wait(2).to({x: 43.6}, 0).wait(1).to({x: 43.2}, 0).wait(1).to({x: 42.5}, 0).wait(1).to({x: 41.4}, 0).wait(1).to({x: 40}, 0).wait(1).to({x: 38.2}, 0).wait(1).to({x: 36}, 0).wait(1).to({x: 33.7}, 0).wait(1).to({x: 31.3}, 0).wait(1).to({x: 29.1}, 0).wait(1).to({x: 27.2}, 0).wait(1).to({x: 25.8}, 0).wait(1).to({x: 24.9}, 0).wait(1).to({x: 24.3}, 0).wait(1).to({x: 24.2}, 0).wait(2).to({x: 23.9}, 0).wait(1).to({x: 23.1}, 0).wait(1).to({x: 21.6}, 0).wait(1).to({x: 19.5}, 0).wait(1).to({x: 16.8}, 0).wait(1).to({x: 13.5}, 0).wait(1).to({x: 9.9}, 0).wait(1).to({x: 6.1}, 0).wait(1).to({x: 2.6}, 0).wait(1).to({x: -0.5}, 0).wait(1).to({x: -3.1}, 0).wait(1).to({x: -5}, 0).wait(1).to({x: -6.3}, 0).wait(1).to({x: -7}, 0).wait(1).to({x: -7.2}, 0).wait(55));

        // или
        this.instance_2 = new lib.text6();
        this.instance_2.setTransform(89, 40.1);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off: false}, 0).wait(1).to({
            x: 88.9,
            alpha: 0.006
        }, 0).wait(1).to({x: 88.5, alpha: 0.027}, 0).wait(1).to({x: 87.7, alpha: 0.064}, 0).wait(1).to({
            x: 86.6,
            alpha: 0.118
        }, 0).wait(1).to({x: 85.2, alpha: 0.192}, 0).wait(1).to({x: 83.3, alpha: 0.285}, 0).wait(1).to({
            x: 81.1,
            alpha: 0.395
        }, 0).wait(1).to({x: 78.7, alpha: 0.515}, 0).wait(1).to({x: 76.3, alpha: 0.637}, 0).wait(1).to({
            x: 74,
            alpha: 0.748
        }, 0).wait(1).to({x: 72.2, alpha: 0.842}, 0).wait(1).to({x: 70.7, alpha: 0.914}, 0).wait(1).to({
            x: 69.7,
            alpha: 0.963
        }, 0).wait(1).to({x: 69.2, alpha: 0.991}, 0).wait(1).to({
            x: 69,
            alpha: 1
        }, 0).wait(2).to({x: 68.7}, 0).wait(1).to({x: 67.9}, 0).wait(1).to({x: 66.5}, 0).wait(1).to({x: 64.4}, 0).wait(1).to({x: 61.7}, 0).wait(1).to({x: 58.4}, 0).wait(1).to({x: 54.7}, 0).wait(1).to({x: 51}, 0).wait(1).to({x: 47.4}, 0).wait(1).to({x: 44.3}, 0).wait(1).to({x: 41.8}, 0).wait(1).to({x: 39.9}, 0).wait(1).to({x: 38.6}, 0).wait(1).to({x: 37.8}, 0).wait(1).to({x: 37.6}, 0).wait(55));

        // он
        this.instance_3 = new lib.text7();
        this.instance_3.setTransform(112.2, 39.9);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off: false}, 0).wait(1).to({
            x: 111.9,
            alpha: 0.008
        }, 0).wait(1).to({x: 111.1, alpha: 0.034}, 0).wait(1).to({x: 109.7, alpha: 0.08}, 0).wait(1).to({
            x: 107.6,
            alpha: 0.147
        }, 0).wait(1).to({x: 104.9, alpha: 0.234}, 0).wait(1).to({x: 101.6, alpha: 0.339}, 0).wait(1).to({
            x: 97.9,
            alpha: 0.455
        }, 0).wait(1).to({x: 94.2, alpha: 0.575}, 0).wait(1).to({x: 90.6, alpha: 0.687}, 0).wait(1).to({
            x: 87.5,
            alpha: 0.786
        }, 0).wait(1).to({x: 85, alpha: 0.867}, 0).wait(1).to({x: 83.1, alpha: 0.928}, 0).wait(1).to({
            x: 81.8,
            alpha: 0.969
        }, 0).wait(1).to({x: 81, alpha: 0.993}, 0).wait(1).to({x: 80.8, alpha: 1}, 0).wait(55));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(28.1, 52.6, 31.3, 16.8);


    (lib.mondi_logo_mc = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // LOGO
        this.instance = new lib.logo("synched", 0, false);
        this.instance.setTransform(-69.9, 414.8, 1.34, 1.34);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(201).to({startPosition: 82}, 0).to({alpha: 0}, 15).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.1, 393.7, 23, 42.4);


// stage content:


    (lib._300x250_iq_smartest = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // LOGO
        this.instance = new lib.mondi_logo_mc("synched", 0, false);
        this.instance.setTransform(131.2, 220, 0.86, 0.86, 0, 0, 0, -87.5, 414.9);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(321).to({_off: false}, 0).wait(217));

        // border
        this.shape = new cjs.Shape();
        this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("A3ZzfMAuzAAAMAAAAm/MguzAAAg");
        this.shape.setTransform(149.8, 124.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(538));

        // пусть победит умнейший
        this.instance_1 = new lib.text_final("synched", 0, false);
        this.instance_1.setTransform(152.4, 89, 1.06, 1.06, 0, 0, 0, 40.7, -152.5);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(442).to({_off: false}, 0).wait(96));

        // text final
        this.instance_2 = new lib.iq_text_final("synched", 0, false);
        this.instance_2.setTransform(148.9, 87.1, 1, 1, 0, 0, 0, 45.1, -106.4);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off: false}, 0).wait(269));

        // black mask
        this.instance_3 = new lib.bg();
        this.instance_3.setTransform(120, 200);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(255).to({_off: false}, 0).to({alpha: 1}, 17).to({_off: true}, 1).wait(265));

        // ты или он
        this.instance_4 = new lib.questions_text("synched", 0, false);
        this.instance_4.setTransform(156, 239, 0.9, 0.9, 0, 0, 0, 43.7, 61);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(172).to({_off: false}, 0).to({_off: true}, 101).wait(265));

        // question
        this.instance_5 = new lib.question("synched", 0, false);
        this.instance_5.setTransform(153.5, 86, 0.88, 0.88);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off: false}, 0).to({_off: true}, 115).wait(265));

        // ПОБЕДИТ УМНЕЙШИЙ
        this.instance_6 = new lib.second_text("synched", 0, false);
        this.instance_6.setTransform(164.9, 142.8, 0.87, 0.87, 0, 0, 0, 41.3, 52.2);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(79).to({_off: false}, 0).to({_off: true}, 194).wait(265));

        // ВАССЕРМАН БРОСАЕТ ВЫЗОВ ТЕБЕ
        this.instance_7 = new lib.first_text("synched", 0, false);
        this.instance_7.setTransform(148.4, 190, 0.87, 0.87, 0, 0, 0, 43.1, -6.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off: true}, 273).wait(265));

        // silhouette
        this.instance_8 = new lib.silhouette_mc("synched", 0, false);
        this.instance_8.setTransform(288, 112.6, 0.71, 0.71, 0, 0, 0, 170.1, -126.5);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95).to({_off: false}, 0).to({_off: true}, 178).wait(265));

        // wasserman
        this.instance_9 = new lib.wassermanMc("synched", 0, false);
        this.instance_9.setTransform(148, 103, 0.71, 0.71, 0, 0, 0, 0, -71.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(62).to({startPosition: 0}, 0).wait(1).to({
            x: 147.8,
            startPosition: 1
        }, 0).wait(1).to({x: 147.3, startPosition: 2}, 0).wait(1).to({
            x: 146.4,
            startPosition: 3
        }, 0).wait(1).to({x: 145.1, startPosition: 4}, 0).wait(1).to({
            x: 143.4,
            startPosition: 5
        }, 0).wait(1).to({x: 141.2, startPosition: 6}, 0).wait(1).to({
            x: 138.5,
            startPosition: 7
        }, 0).wait(1).to({x: 135.3, startPosition: 8}, 0).wait(1).to({
            x: 131.6,
            startPosition: 9
        }, 0).wait(1).to({x: 127.4, startPosition: 10}, 0).wait(1).to({
            x: 122.6,
            startPosition: 11
        }, 0).wait(1).to({x: 117.3, startPosition: 12}, 0).wait(1).to({
            x: 111.4,
            startPosition: 13
        }, 0).wait(1).to({x: 105.2, startPosition: 14}, 0).wait(1).to({
            x: 98.5,
            startPosition: 15
        }, 0).wait(1).to({x: 91.6, startPosition: 16}, 0).wait(1).to({
            x: 84.6,
            startPosition: 17
        }, 0).wait(1).to({x: 77.6, startPosition: 18}, 0).wait(1).to({
            x: 70.7,
            startPosition: 19
        }, 0).wait(1).to({x: 64.1, startPosition: 20}, 0).wait(1).to({
            x: 57.8,
            startPosition: 21
        }, 0).wait(1).to({x: 52.1, startPosition: 22}, 0).wait(1).to({
            x: 46.8,
            startPosition: 23
        }, 0).wait(1).to({x: 42.2, startPosition: 24}, 0).wait(1).to({
            x: 38.1,
            startPosition: 25
        }, 0).wait(1).to({x: 34.5, startPosition: 26}, 0).wait(1).to({
            x: 31.6,
            startPosition: 27
        }, 0).wait(1).to({x: 29.1, startPosition: 28}, 0).wait(1).to({
            x: 27.2,
            startPosition: 29
        }, 0).wait(1).to({x: 25.8, startPosition: 30}, 0).wait(1).to({
            x: 24.8,
            startPosition: 31
        }, 0).wait(1).to({x: 24.2, startPosition: 32}, 0).wait(1).to({
            x: 24,
            startPosition: 0
        }, 0).wait(48).to({startPosition: 0}, 0).wait(1).to({x: 23.8, startPosition: 1}, 0).wait(1).to({
            x: 23,
            startPosition: 2
        }, 0).wait(1).to({x: 21.7, startPosition: 3}, 0).wait(1).to({x: 19.8, startPosition: 4}, 0).wait(1).to({
            x: 17.2,
            startPosition: 5
        }, 0).wait(1).to({x: 13.8, startPosition: 6}, 0).wait(1).to({x: 9.6, startPosition: 7}, 0).wait(1).to({
            x: 4.5,
            startPosition: 8
        }, 0).wait(1).to({x: -1.6, startPosition: 9}, 0).wait(1).to({
            x: -8.8,
            startPosition: 10
        }, 0).wait(1).to({x: -16.9, startPosition: 11}, 0).wait(1).to({
            x: -25.8,
            startPosition: 12
        }, 0).wait(1).to({x: -35.3, startPosition: 13}, 0).wait(1).to({
            x: -44.8,
            startPosition: 14
        }, 0).wait(1).to({x: -54, startPosition: 15}, 0).wait(1).to({
            x: -62.4,
            startPosition: 16
        }, 0).wait(1).to({x: -69.8, startPosition: 17}, 0).wait(1).to({
            x: -75.9,
            startPosition: 18
        }, 0).wait(1).to({x: -80.9, startPosition: 19}, 0).wait(1).to({
            x: -84.8,
            startPosition: 20
        }, 0).wait(1).to({x: -87.6, startPosition: 21}, 0).wait(1).to({
            x: -89.5,
            startPosition: 22
        }, 0).wait(1).to({x: -90.6, startPosition: 23}, 0).wait(1).to({
            x: -90.9,
            startPosition: 0
        }, 0).to({_off: true}, 95).wait(249).to({_off: false, x: 398}, 0).wait(1).to({
            x: 367.2,
            startPosition: 1
        }, 0).wait(1).to({x: 339, startPosition: 2}, 0).wait(1).to({
            x: 313.3,
            startPosition: 3
        }, 0).wait(1).to({x: 290.3, startPosition: 4}, 0).wait(1).to({
            x: 269.8,
            startPosition: 5
        }, 0).wait(1).to({x: 251.7, startPosition: 6}, 0).wait(1).to({
            x: 235.8,
            startPosition: 7
        }, 0).wait(1).to({x: 221.9, startPosition: 8}, 0).wait(1).to({
            x: 209.9,
            startPosition: 9
        }, 0).wait(1).to({x: 199.4, startPosition: 10}, 0).wait(1).to({
            x: 190.4,
            startPosition: 11
        }, 0).wait(1).to({x: 182.7, startPosition: 12}, 0).wait(1).to({
            x: 176.1,
            startPosition: 13
        }, 0).wait(1).to({x: 170.5, startPosition: 14}, 0).wait(1).to({
            x: 165.7,
            startPosition: 15
        }, 0).wait(1).to({x: 161.7, startPosition: 16}, 0).wait(1).to({
            x: 158.3,
            startPosition: 17
        }, 0).wait(1).to({x: 155.5, startPosition: 18}, 0).wait(1).to({
            x: 153.3,
            startPosition: 19
        }, 0).wait(1).to({x: 151.5, startPosition: 20}, 0).wait(1).to({
            x: 150.2,
            startPosition: 21
        }, 0).wait(1).to({x: 149.2, startPosition: 22}, 0).wait(1).to({
            x: 148.5,
            startPosition: 23
        }, 0).wait(1).to({x: 148.1, startPosition: 24}, 0).wait(1).to({x: 148, startPosition: 0}, 0).wait(2));

        // bg
        this.instance_10 = new lib.bg();
        this.instance_10.setTransform(120, 200);

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(538));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(149, 109.5, 301.6, 266.2);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;