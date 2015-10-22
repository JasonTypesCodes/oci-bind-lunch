Function.prototype.myBind = function myBind(){
  var self = this;
  
  var defaultArgs = Array.prototype.slice.call(arguments);
  var thisArg = defaultArgs.shift();
  
  return function(){
    var myArgs = Array.prototype.slice.call(arguments);
    return self.apply(thisArg, defaultArgs.concat(myArgs));
  };
};
