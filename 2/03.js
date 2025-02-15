function f(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}

let arr = [2, 5, 7, 3]

alert(f(arr))






