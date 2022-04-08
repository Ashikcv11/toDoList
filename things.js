
function thingsToDo(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var x = document.getElementById("myCheck");
            var checkbox = document.getElementById("myCheck");
            var response = JSON.parse(this.responseText);
            var output ="";
            for(var i=0;i<response.length;i++){
                output += "<li>"+ response[i].title+ `<input type="checkbox" id="myCheck" onclick="count();">`;

            }
            document.getElementById("demo").innerHTML=output;
        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos" , true);
    xhttp.send();
 
}


// promise starting...
document.getElementById("myCheck").addEventListener("click", count);
var selection = 0;
function count(){
    selection = selection + 1 ;
    if(selection==5){
        alert("you have successfully completed 5 tasks");
    }
}


var promise = new promise(function(resolve,reject){

    if(selection === 5){
        alert("helloo")
        resolve("you have successfully completed 5 tasks")
    }
    else{
        reject("not completed 5 tasks")
    }


});

promise
.then(function(s){
    console.log(s);
})
.catch(function(e){
    console.log(e);
})
