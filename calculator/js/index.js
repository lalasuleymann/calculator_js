function myFunction() {
    var x;
    var y;
    var z;
    var operation;
    x= prompt("Enter first number")
    y= prompt("Enter second number")
    operation=prompt("Enter the operation")
    if (operation=="Sum") {
        z= Number(x)+Number(y);
    } 
    else if(operation=="Substraction")
    {
        z= Number(x)-Number(y);   
    }
    else if(operation=="Multiplication")
    {
        z= Number(x)*Number(y);
    }
    else if(operation=="Division")
    {
        z= Number(x)/Number(y);
    }
    return z;
}
document.getElementById("calculate").innerHTML =myFunction();