/**
 * FUNCTIONS
 **/

/**
 *  Functions create closures; variables defined
 *  inside of them are accessible inside the
 *  function, and to any functions that were
 *  defined within the same scope.
 **/

$(document).ready(function() {

  var sayItOutside = (function(){

    var myVar = 'hello world',

        sayIt = function() {
          console.log(myVar);
        };

    myVar = 'a new value';

    return sayIt;

  }());

  // sayItOutside(); // 'a new value'
  // console.log(myVar);

});


/**
 *  Functions are first class objects; we can move
 *  them around just like we do with other types
 *  of objects.
 **/

$(document).ready(function() {

  $('#myDiv').click(function(e) {
    // console.log(e.target);
  });

  var repeater = function(fn, repeat) {
    while (repeat--) { fn(); }
  };

  // repeater(function() { console.log('hello'); }, 5);

});


/**
 *  Functions can create other functions.
 **/

$(document).ready(function() {

  var makeRepeater = function(fn, repeat) {
    return function() {
      while (repeat--) {
        fn();
      }
    };
  };

  var newFunction = makeRepeater(function() { console.log('hello'); }, 5);
  newFunction();
});

/**
 *  Inside a function, you have access to 'arguments',
 *  an array-like object that contains a list of the
 *  arguments passed to the function.
 **/

$(document).ready(function() {

  $('#myDiv').one('click', function() {
    // console.log(arguments);
  });

});



/**
 *  OBJECTS
 **/


/**
 *  Objects can have properties and methods.
 **/

$(document).ready(function() {

  var myObj = {
    paul : 'Google',
    adam : 'Bocoup',
    alex : 'BazaarVoice',
    sayHi : function() {
      console.log('hello');
    }
  };

});


/**
 *  Inside an object method, 'this' refers to
 *  the object that owns the method by default.
 **/

$(document).ready(function() {

  var myObj = {
    paul : 'Google',
    adam : 'Bocoup',
    alex : 'BazaarVoice',

    sayHi : function(person) {
      var company = this[person] || 'no one';
      console.log(
        'Hello,',
        person,
        ', you work for',
        company,
        '.'
      );
    }
  };

  // myObj.sayHi('paul');

});

/**
 *  The module pattern is the goodness of closures
 *  combined with the goodness of objects.
 **/

$(document).ready(function() {

  var myModule = (function(){

    // set up all the variables you'll need for
    // the module's functionality
    var privateVar = 'secret',
        publicVar = 'not secret',
        tellSecret = function() {
          console.log(privateVar);
        },
        setSecret = function(str) {
          if (str.length < 6) {
            console.log('not secret enough!');
            return;
          }
          privateVar = str;
        };

    // decide what to expose as a public API
    // to the module.
    return {
      tellSecret : tellSecret,
      setSecret : setSecret,
      publicVar : publicVar
    };

  }());

  // myModule.setSecret('new');

});

/**
 *  Objects can share functionality by sharing
 *  a "prototype" -- in fact, jQuery.fn is just
 *  shorthand for jQuery.prototype, which allows
 *  all of the methods available on jQuery objects
 *  to be shared across objects.
 */

$(document).ready(function() {

  var Person = function(first, last) {
    /**
     *  Setting instance properties
     **/
    this.firstName = first;
    this.lastName = last;
    return this;
  };

  Person.prototype = {
    sayFirstName : function() {
      console.log(this.firstName);
    }
  };

  /**
   *  Creating "instances" of Person
   **/
  var adam = new Person('adam', 'sontag'),
      rebecca = new Person('rebecca', 'murphey');

  // adam.sayFirstName();
  // rebecca.sayFirstName();
});


/**
 *  Methods can be changed on individual instances
 *  without affecting other instances.
 **/
$(document).ready(function() {

  var Person = function(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  };

  Person.prototype = {
    sayFirstName : function() {
      console.log(this.firstName);
    }
  };

  var adam = new Person('adam', 'sontag'),
      rebecca = new Person('rebecca', 'murphey');

  /**
   *  Changing the definition of an instance method
   **/
  // rebecca.sayFirstName = function() {};

  // rebecca.sayFirstName();
  // adam.sayFirstName();

});


/**
 *  ... Unless you want to affect other instances! In
 *  which case, you should modify the prototype instead.
 **/
$(document).ready(function() {

  var Person = function(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this;
  };

  Person.prototype = {
    sayFirstName : function() {
      console.log(this.firstName);
    }
  };

  var adam = new Person('adam', 'sontag'),
      rebecca = new Person('rebecca', 'murphey');

  /**
   *  Changing the definition of a protype method
   **/
  Person.prototype.sayFirstName = function() {
    console.log('i have no name');
  };

  // rebecca.sayFirstName();
  // adam.sayFirstName();
});

/**
 *  We can also create new objects that share the same
 *  prototype using Object.create, which can be created
 *  where it is not available.
 **/

$(document).ready(function() {

  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      function F() {}
      F.prototype = o;
      return new F();
    };
  }

  var Person = {
    sayName : function() {
      console.log(this.firstName, this.lastName);
    }
  };

  var adam = Object.create(Person);

  $.extend(adam, {
    firstName : 'adam',
    lastName : 'sontag'
  });

  // console.log('adam is', adam);
});



/**
 *  CONTEXT
 **/

/**
 *  We can change the meaning of 'this' inside
 *  of a function. In fact, jQuery does exactly
 *  that in order to have 'this' refer to the
 *  element that triggered an event handler.
 *
 *  To change the context in which a function runs --
 *  that is, to change the meaning of 'this',
 *  we use .call() or .apply().
 **/

$(document).ready(function() {

  var p = {
        firstName : 'paul',
        lastName : 'irish'
      },

      a = {
        firstName : 'alex',
        lastName : 'sexton'
      },

      sayHi = function(greeting, question) {
        console.log(greeting, this.firstName, this.lastName, question);
      };

  /**
   *  .apply takes a scope object and an array of arguments
   *  to pass to the function that is being called. The
   *  arguments in the array will be passed to the function
   *  as individual arguments.
   **/

  // sayHi.apply(p, [ 'Hello', 'How are you today?' ]);

  /**
   *  .call takes a scope object and zero or more additonal
   *  arguments. Additonal arguments will be passed to the
   *  function as individual arguments.
   **/

  // sayHi.call(a, 'Greetings', 'Is it so just cloud?' );

});

/**
 *  jQuery offers the utility method $.proxy, which
 *  lets you pass a function and the scope in which
 *  the function should run.
 *
 *  Be careful, though: the order of the arguments
 *  passed to $.proxy can be confusing.
 *
 *  $.proxy(context, 'methodName');
 *  $.proxy(function() { ... }, context);
 *
 *  This means we can easily change the meaning of this
 *  inside an event handler, where this normally refers
 *  to the element to which the handler was bound.
 **/

$(document).ready(function() {

  var myObj = {
    thingToSay : 'it worked!',
    sayIt : function() {
      console.log('The thing I want to say is', this.thingToSay);
    }
  };

  // myObj.sayIt();
  // $('#myDiv').click(myObj.sayIt);
  // $('#myDiv').click($.proxy(myObj, 'sayIt'));

});
