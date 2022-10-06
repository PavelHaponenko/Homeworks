let obj1 = {
    name: 'Dima',
    age: 20,
    hair: 'white',
    habitats:{
        isSmoking:false,
        isDrinking:true,
        isGay:true,
        isLearning:true,
    }
}

let obj2 = {
    name: 'Dima',
    age: 20,
    hair: 'white',
    habitats:{
        isSmoking:false,
        isDrinking:true,
        isGay:true,
        isLearning:true,
    }
}
function compare(obj1,obj2){
    if(Object.keys(obj1).length == Object.keys(obj2).length){
        console.log('compare')
    }
    else{
        console.log('not compare')
    }
}
compare(obj1,obj2)
console.log(obj1 === obj2)