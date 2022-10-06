function reverse(a){
    a = a+""
    return a .split("") .reverse() .join("")
}

console.log(reverse(12345))


function func1(){
}

console.log(func1.name)



function func2(){
    console.log(arguments.callee.name);
}

func2()