let a = [54,23,11,32,45,97,64,77,72,5,66,83,94,22,17,9,69,90,50,33]
function min(a){
    let b = 100
    for(let i = 0; i < a.length; i++){
        if(b > a[i]){
            b = a[i]
        }
    }
    console.log(b)
}

min(a)

function max(a){
    let c = 0
    for(let i = 0; i < a.length; i++){
        if(c < a[i]){
            c = a[i]
        }
    }
    console.log(c)
}

max(a)