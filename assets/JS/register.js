function validateform()
{
     const name = document.getElementById("name").value;
     const number = document.getElementById("number").value;
     const password = document.getElementById("password").value;
//  const email = document.getElementById("email").value;

 const nameError = document.getElementById("name-error");
 const numberError = document.getElementById("number-error");
 const passwordError = document.getElementById("password-error");
//  const emailError = document.getElementById("email-error");

 nameError.textContent = "";
 numberError.textContent = "";
 passwordError.textContent = "";
//  emailError.textContent = "";
 
 let isValid = true;
 
 if(name === "" || /\d/.test(name))
 {
    nameError.textContent = "  Please Enter Your User name";
    isValid = false;
 }
 if(number === "" || /\d/.number(number))
   {
      numberError.textContent = "  Please Enter Correct Number";
      isValid = false;
   }
   if(password === "")
      {
         passwordError.textContent = "  Please Enter your password";
         isValid = false;
      }
//  if(email === "" || !email.includes("@"))
//     {
//        emailError.textContent = "  Please Enter a Valid E-mail";
//        isValid = false;
//     }


    return isValid;

}
