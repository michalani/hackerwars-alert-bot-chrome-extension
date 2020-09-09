webhook = "https://discordapp.com/api/webhooks/751237573900238858/bBrgEZYgluPCUvkAerJtiUUPKZR0hNTzJlVKlJVXT9UrQsVQJINmkrL1XYSWPRPh6rGQ"
discordid = "<@688250974053203970>"

console.log("hacker notif loaded!")
data = document.getElementsByClassName('logarea')[0].value 
let re = /\[\b(?:\d{1,3}\.){3}\d{1,3}\b\] logged in as root/;
function sendMessage(msgHere) {
    var request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      username: "HACKER ALERT",
      avatar_url: "",
      content: discordid+" "+msgHere
    }
    request.send(JSON.stringify(params));
  }

function checkMsg() {
    if(data != ""){
        if(data.match(re) != ""){
            if(data.match(re) != null){
                dataa = data.match(re).toString()
                console.log(dataa)
                sendMessage(dataa)
            }
        }   
    }
}

checkMsg()

window.setInterval(function(){
    location.reload(true)
  }, 2000);
