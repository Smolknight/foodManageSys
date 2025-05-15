let user
let useDisplay=document.getElementById("user")
greeter()
function greeter(){
    let user=prompt("Enter Username")
    console.log(user)
    if(user==""||user==' '){
        alert('Please enter username')
        greeter()
    }else{
        useDisplay.innerText=` ${user}`
    }
}
