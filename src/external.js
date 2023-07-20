import * as createjs from 'createjs-module';

export const extCont = new createjs.Container();

var shape = new createjs.Shape();
shape.graphics.beginFill('red').drawRect(20, 20, 120, 120);
extCont.addChild(shape);