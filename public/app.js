function foo(num){
    var calll = document.getElementById("calll");
   calll.value += num;
}
function clearr(){
    var result = document.getElementById("calll");
    result.value = ""
}
function getResult(){
    var final = document.getElementById("calll");
    final.value = eval(final.value);

} 
function Allclearr(){
    var remove = document.getElementById("calll");
    remove.value = remove.value.slice(0,-1);
}