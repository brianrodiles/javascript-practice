if(0 == false && 1 == true){
    console.log("Comparing using general equals comparison.");
}
if(0 === false && 1 === true){
    console.log("Comparing using strict comparison");
}
if(false != false && true != true){
    console.log("Comparing using general not");
}
if(true !== false && false !== true){
    console.log("Comparing using strict not");
}
// The debugger; is only used when wanting to stop the flow of a program
// for debugging purposes.
// debugger;
if(1 != false && 0 != true){
    console.log("Comparing using general not");
}

// What can be compared with a false:
// false, empty String, 0, null, NaN, undefined