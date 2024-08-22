// let username;
// username = window.prompt("whats your username?")
// console.log(username)
 let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`
}
// let age = window.prompt('how old are you')
// age = Number(age)
// age+=1
// console.log(age)