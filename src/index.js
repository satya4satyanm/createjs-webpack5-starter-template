import * as createjs from 'createjs-module';
import './style.scss';
import {
    extCont
} from './external.js';
import {config} from './data/data';


var stage = new createjs.Stage("myCanvas");

console.log(config);
var w = stage.canvas.width;
var h = stage.canvas.height;
var bg = new createjs.Shape();
bg.graphics.beginRadialGradientFill(["#000000", "#006ec6"], [1, 0], (w / 2), h / 2, 10, (w / 2) + 10, (h / 2) + 10, h / 1.25).drawCircle(w >> 1, h >> 1, h * 2);
bg.cache(0, 0, stage.canvas.width, stage.canvas.height);


stage.addChild(bg);
var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 10;
circle.y = 10;
stage.addChild(circle);


var text = new createjs.Text("From external.js", "20px Arial", "#ff7700");
text.x = 10;
text.y = 150;

stage.addChild(text);

var text1 = new createjs.Text("Blue circle tween in root file", "20px Arial", "DeepSkyBlue");
text1.x = 150;
text1.y = 250;

stage.addChild(text1);


var text2 = new createjs.Text("Webpack5 CreateJs Starter", "40px Arial", "white");
text2.x = 50;
text2.y = 350;

stage.addChild(text2);

// below object is imported from external.js
stage.addChild(extCont);

stage.update();

createjs.Tween.get(circle, {
        loop: true
    })
    .to({
        x: 400
    }, 1000, createjs.Ease.getPowInOut(4))
    .to({
        alpha: 0,
        y: 175
    }, 500, createjs.Ease.getPowInOut(2))
    .to({
        alpha: 0,
        y: 225
    }, 100)
    .to({
        alpha: 1,
        y: 200
    }, 500, createjs.Ease.getPowInOut(2))
    .to({
        x: 100
    }, 800, createjs.Ease.getPowInOut(2));

createjs.Ticker.addEventListener("tick", stage);