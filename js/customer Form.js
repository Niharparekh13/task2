function validateForm() {
  event.preventDefault();
  console.log("entered")
  let fname = document.getElementById("firstname");
  let lname = document.getElementById("lastname");
  let address = document.getElementById("staddress");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let zipcode = document.getElementById("zipcode");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let feedback = document.getElementById("feedback");
  let suggestion = document.getElementById("suggestion");

  let name_pattern = "[a-zA-Z]{2,30}$";
    if(!fname.value.match(name_pattern)){
        let text;
        text = 'Please enter First Name'
        document.getElementById("OP1").innerHTML = text; 

    }

    let lname_pattern = "[a-zA-Z]{2,30}$";
    if (!lname.value.match(name_pattern)) {
        let text;
        text = 'Please enter Last Name'
        document.getElementById("OP2").innerHTML = text;    
    }

    let add_pattern = "[a-zA-Z0-9]{3,600}$"

    if (!address.value.match(add_pattern)){
        let text;
        text = 'Invalid Address'
        document.getElementById("OP3").innerHTML = text;
    }

    let city_pattern = "[a-zA-Z]{3,30}$"

    if (!city.value.match(city_pattern)){
        let text;
        text = 'Please enter your City'
        document.getElementById("OP4").innerHTML = text;
    }

    if (!state.value.match(city_pattern)){
        let text;
        text = 'Please enter your State'
        document.getElementById("OP5").innerHTML = text;
    }

    let zip_pattern = "^[0-9]{6}$"

    if (!zipcode.value.match(zip_pattern)){
        let text;
        text = 'Zipcode must contain numbers only'
        document.getElementById("OP6").innerHTML = text;
    }

     let phone_pattern = "/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/"
     debugger
     if (!phone.value.match(phone_pattern)){
         let text;
         text = 'Please enter vaild Contact Number'
         document.getElementById("OP7").innerHTML = text;
    }

    let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"

    if (!email.value.match(email_pattern)){
        let text;
        text = 'Email is invalid'
        document.getElementById("OP8").innerHTML = text;
    }
    
    let feedback_pattern = "[a-zA-Z]{3,30}$"
    if(!feedback.value.match(feedback_pattern)){
    let text;
    text = "Please entert feedback"
    document.getElementById("OP9").innerHTML = text;
    }
    let suggestion_pattern = "[a-zA-Z]{3,30}$"
    if(!suggestion.value.match(suggestion_pattern)){
    let text;
    text = "Please entert your suggestions"
    document.getElementById("OP10").innerHTML = text;
    }
}