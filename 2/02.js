function f(n){
  

    if(n == 0){
        return 0;
    }
    else{
        return (n ** 3) + f(n - 1);
    }
}

let number = prompt("Число", 0)
alert(f(number));