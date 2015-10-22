
function add(x, y){
  return x + y;
}

function addAll(){
  var result = 0;
  for(var x = 0; x < arguments.length; x++){
    result += arguments[x];
  }
  
  return result;
}

String.prototype.sayHello = function sayHello(){
  return 'Hello ' + this;
};

function Car(make, model, color){
  this.make = make;
  this.model = model;
  this.color = color;
}

Car.prototype.paint = function paint(newColor){
  this.color = newColor;
};

function argTattler(){
  return arguments;
}