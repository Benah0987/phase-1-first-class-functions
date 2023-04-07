//takes a callback funtion exercise as an argument
function receivesAFunction(exercise){
    exercise();
    //call the callback function

}
//define the function returnsANamedFunction
function returnsANamedFunction() {
    //passed a named function
    function exercise() {
      console.log("i should exercise today");
    }
    return exercise
    //return a named function
}
function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    }
  }
//return an anonymous function