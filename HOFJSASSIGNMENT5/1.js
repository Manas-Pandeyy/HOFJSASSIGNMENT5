let input = "PW skills";

function reverseString(inputString){
    return inputString.split("").reverse().join("");
}

function reverseWithDelay(inputString){
   setTimeout(function(){
    let reversed = reverseString(inputString);
    console.log("Reversed String: " + reversed);
   },2000) 
}

reverseWithDelay(input)