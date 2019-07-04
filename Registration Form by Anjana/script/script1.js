// Registration Form Validation Starts
$("span").hide();

$name = $("#name");
$email = $("#email");
$button = $("#button");

function validateName(){
	if($name.val() !== ""){
		$name.next().hide();
		return true;
	}else{
		$name.next().show();
	}
}

function validateEmail(){
	var emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	if(emailRegExp.test($email.val())){
		$email.next().hide();
		return true;
	}else{
		$email.next().show();
	}
}


function enableButton(){
	if(validateName() && validateEmail()) {
		$button.prop("disabled",false);
	}else{
		$button.prop("disabled",true);
}
}
//code for Alert starts
window.onload = function(){
   document.getElementById('button').onclick = function(e){
       alert("Thank you for your registration.");
       return false;
   }
}
//code for Alert ends
$name.focus(validateName).keyup(validateName).keyup(enableButton);
$email.focus(validateEmail).keyup(validateEmail).keyup(enableButton);

//Registration Form Validation Ends