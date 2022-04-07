
var uName = document.getElementById("uName");
var pwd = document.getElementById("pwd");
var error = document.getElementById("error");

function validate(callback){
    if(uName.value=="admin" && pwd.value==12345){
        callback();
        return true;


    }
    else{
        error.style.visibility="visible"
        return false;

    }
}

function redirect(){
    document.getElementById("form").action="things.html";
}

// starting of the thingsToDo page API section


