
Function.prototype.es6Bind = function(thisArg, ...defaultArgs) {
  return (...providedArgs) => {
  	return this.apply(thisArg, defaultArgs.concat(providedArgs));  
  };
};
