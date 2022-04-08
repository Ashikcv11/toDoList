
function thingsToDo(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var x = document.getElementById("myCheck");
            // var checkbox = document.getElementById("myCheck");
            var response = JSON.parse(this.responseText);
            var output ="";
            for(var i=0;i<response.length;i++){
                output += "<li>"+ response[i].title+ `<input type="checkbox" onclick="checkAddress();" id="myCheck">`;

            }
            document.getElementById("demo").innerHTML=output;
        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos" , true);
    xhttp.send();
 
}


// promise starting...
var count = 0;
function checkAddress()
{
    var chkBox = document.getElementById('myCheck');
    if (chkBox.checked){
        count = count + 1;
        var promise = new Promise((resolve, reject)=> {
            if(count == 5){
                resolve("you have successfully completed 5 tasks")
                count = 0;
            }
            else{
                reject("not completed 5 tasks")
            }
        })
        
        promise
        .then(function(s){
            alert(s);
        })
        .catch(function(e){
            console.log(e);
        })
        
        // this.promise.new Promise();
        // promise(resolve)
        // Promise(count);
        // if(count == 5){
        //     alert("helloo")
        //     count = 0;

        // }
    }
    else{
        console.log("error occuerd");
    }
}

// var promise = new Promise((resolve, reject)=> {
//     if(count == 5){
//         resolve("you have successfully completed 5 tasks")
//     }
//     else{
//         reject("not completed 5 tasks")
//     }
// })

// promise
// .then(function(s){
//     alert(s);
// })
// .catch(function(e){
//     console.log(e);
// })
