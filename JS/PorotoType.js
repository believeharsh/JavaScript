// why we get the prototypes when we print any object or arrays in console, so javascript shows this in order to give a context to the user that what object can do apart from theri own keys; 
// so we get access of methods liks the map, foreach, and any ohter object properties too, that is called the prototype inheritence because javaScript uses the prototype inheritencce not classical inheritence 

// here's what happens behind the scene when the new keyword is used  : 

// A new object is created : The new keyword initiates the creation of new javaScript object 

// A protoType is Linked : the newly created object get's linked to the protoype property of the constructor function. this means it has access the propeties and meothods defined the constructor prototype 

// The Constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, javaScript assumes that this is the newly created object, intended to be a return value ; 




