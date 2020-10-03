
exports.min = function min (array=[]) {
  if (array.length == 0){
    return 0;
    } else
       return Math.min.apply( null , array);
     
}


exports.max = function max (array=[]) {
  if (array.length == 0) {
    return 0;
  }else 
  return Math.max.apply(null , array);
}

exports.avg = function avg (array=[]) {
  if (array.length == 0){
    return 0;
}
var sum = 0;
    for (var i = 0, j = array.length; i < j; i++) {
        sum += array[i];
    }
    return sum / array.length;
}