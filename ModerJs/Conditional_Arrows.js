/*Problem 1:*/

const exampleFunction = (param) => {
    return param === "hello" ? "hello!!!" : "bye bye!"
}
console.log(exampleFunction("hello")) //Output : hello!!!
console.log(exampleFunction("not hello"))

/*Problem 2:*/
const age =(age) =>{
    age>18?`You are good to go`:`You must be 18 or older`
}

/*Problem 3:*/

const numb = (numb) => {
    number%2==0?`Thats an even number`:`thats an odd number`
}


const compare =(number_one, number_two)=>{
    number_one>number_two? number_one+`is grater than`+number_two:number_two+`is grater than`+number_one
}