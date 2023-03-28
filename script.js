const correctPassword = "myPassword1!"
const secret = "My favourite color is #000080!"

function guess(){
    for (i=0; i<3; i++){
        let guess = prompt("Please enter the password!")
        if (guess === correctPassword){
            return alert(secret)
        }else if (i === 2){            
        alert("Sorry! That was your last try. This website will now self destruct.")
        }else{
          alert(`That's wrong! Try again. You have ${3-(i+1)} attempts left`)
        }
    }
}

guess()