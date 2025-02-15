let arr1 = ["str", "hello", "string", "red", "blue"]
let arr2 = ["hi", "world", "hello", "red"];

function f(array1, array2){
    let arr3 = [];
    let k = 0;
    let flag = false;
    
    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                flag = true;
            }
        }
        if(!flag){
            arr3[k] = array1[i];
            k++;
        }
        flag = false;
    }
    return arr3;
}

alert(f(arr1, arr2))