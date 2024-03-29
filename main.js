// returning a function inside a function
function higher(){
    return function(n){
        return n * n;
    }
}
higher() 
//  output is 
// ƒ (n){
//     return n * n;
// }
higher()()
// output is NaN
higher()(2)
// output is 4
var calling = higher()
calling 
// value of calling is function that returned by  higher()
// ƒ (n){
//     return n * n;
// }
calling(8)
// output is 64
calling()
// output is NaN


// passing function as parameter
function paraf(cbf){
    return cbf + 2;
}

paraf(function (){return 3});
// // output is 
// "function (){return 3}2"

paraf(function (){return 3}());
// output is 5

// writing above whole function in other format
function cbf (){
    return 3;
    }
    
    function paraf(cbf){
        return cbf + 2;
    }
    paraf(cbf())
 // output is 5


// passing a function as parameter and returning function * function
function cbf (){
    return 3;
    }
    
    function paraf(cbf){
        return cbf + cbf;
    }
    paraf(cbf)
    // output is 
    // "function cbf (){
    //     return 3;
    //     }function cbf (){
    //     return 3;
    //     }"

    paraf(cbf())
    // output is 6
 
// what if you are passing three funtions inside a functions
function moref(){
    return function gogo(){
             return function(){
                 return 5;
             }
    }
 }

 moref()
//  output is 
// ƒ gogo(){
//     return function(){
//         return 5;
//     }
// }

moref()()
// output is 
// ƒ (){
//     return 5;
// }

moref()()()
// output is 5

// what if we are passing a parameter along with returning 3 functions
function moref(param){
    return function gogo(){
             return function(){
                 return p+5;
             }
    }
 }
 moref(3)()()
//  output is 8

// passing function as parameter and returns fucntion * function by callback
function xyz(abc){
    return abc() * abc();
    }
xyz(function(){return 5})
// output is 25

// writing function which returns fucntion as that return function has if statement
function bigger(){
    return function(n){
        if(n>5){
            return "n is bigger";
    }
    }
    }
bigger()(7)    
// output is "n is bigger"


// passing ternary operator (if else)
function bigger(n){
    return (n > 5) ? "n is greater than 5" : "n is smaller than 5";
}
bigger(8)
// output is "n is greater than 5"
