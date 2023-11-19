var screen=document.getElementById('screen');

function btnclick(value){
    screen.value+=value;

}
function clearclick(){
    screen.value=" ";
}
function findresult(){
    var result=eval(screen.value);
    screen.value=result;
}
function oneclear(){
    screen.value=screen.value.slice(0,-1);
}