function myFunction() {
    document.getElementById("demo").innerHTML = "Hello! My name is TDL2627";
  }


// function addition(){
//     let  a1 = parseInt(prompt("enter your first number"));
//     let a2 = parseInt(prompt("enter your second number"));
//     let result= parseInt(a1)+parseInt(a2);
//     document.write(result);
//     document.getElementById("ans").innerHTML=result;
// }
function addie(){
    let a1 = parseInt(document.getElementById("in1").value);
    let a2 = parseInt(document.getElementById("in2").value);
    let result= a1+a2;
    document.getElementById("ans").value=result;
}
function minnie(){
    let a1 = parseInt(document.getElementById("in1").value);
    let a2 = parseInt(document.getElementById("in2").value);
    let result= a1-a2;
    document.getElementById("ans").value=result;
}
function timmie(){
    let a1 = parseInt(document.getElementById("in1").value);
    let a2 = parseInt(document.getElementById("in2").value);
    let result= a1*a2;
    document.getElementById("ans").value=result;
}
function divvie(){
    let a1 = parseInt(document.getElementById("in1").value);
    let a2 = parseInt(document.getElementById("in2").value);
    let result= a1/a2;
    document.getElementById("ans").value=result;
}