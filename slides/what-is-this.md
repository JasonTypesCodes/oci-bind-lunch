## What Is _this_ Anyway?

_this_ is determined within every function (Except in ES6)

What it is set to changes:

+ When in a method on an object
  + Instance of the object
+ When called as a constructor
  + A new empty object
+ Otherwise
  + The *global* object (Seriously)
    + Never count on this
  + _undefined_ in strict mode
