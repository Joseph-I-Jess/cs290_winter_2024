// JavaScript functions
function showAlert() {
    alert('Hello, this is an alert!')
}

function multiply(a, b) {
    return a * b;
}
function changeText() {
    let variable = "some stuff<br>more text<ol><li>one</li><li>two</li><li>three</li></ol>"; const pi = 3.14;
    let fun = () => {return 42;};
    var outputDiv = document.getElementById('output')
    outputDiv.innerHTML = fun()
    alert("You just clicked that button, didn't you?!?")
    console.log("You just clicked that button...")

    let arr = [1, , , 4]
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }


    if (true) {
        console.log(`functionVar: ${functionVar}`) // show off hoisting a variable declaration
        
        
        var functionVar = 'I am function-scoped'
        let blockVar = 'I am block-scoped'
    }
    console.log(functionVar); // Accessible
    // console.log(blockVar); // Error: blockVar is not defined here

    console.log(multiply)

    let person2 = {name: "Joseph", age: 37};
    console.log(person2.name);
    console.log(person2.age);
    console.log(person2);
}

