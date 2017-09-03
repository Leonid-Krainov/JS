function runOnButton1() {
    var name = "Leonid";
    var time = "21:30";
    var place = "home";
    var events = prompt("Enter event","party");
    if (typeof events === "string" && events !== "") {
        var result = name + " invites all at " + time + " in the " + place + " for the " + events;
        console.log(result);    
    } else {
        alert ("Write correct event!");    
    }
}
function runOnButton2() {
    var euro = prompt("Enter sum of euro","0")
    var grnEu = euro * 30.65
    var dollar = prompt("Enter sum of dollars","0")
    var grnDol = dollar * 25.44
    if (!isNaN(euro) && euro !== "" && !isNaN(dollar) && dollar !== "") {
    //if (!euro.match(/\D/g) && !dollar.match(/\D/g)) {
        var calculation = euro + " euros are equal " + grnEu.toFixed(2) + " grns, " + dollar + " dollars are equal " + grnDol.toFixed(2) + " grns, 1 euro is equal " + (30.65/25.44).toFixed(2) + " dollars"
        alert(calculation) 
    } else {
        alert ("Write correct amount of money!");
    }
}
