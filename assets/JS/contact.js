function validateform()
{
     const name = document.getElementById("name").value;
     const number = document.getElementById("number").value;
 const email = document.getElementById("email").value;
 const subject = document.getElementById("subject").value;
 const message = document.getElementById("message").value;

 const nameError = document.getElementById("name-error");
 const numberError = document.getElementById("number-error");
 const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
 const messageError = document.getElementById("message-error");


 nameError.textContent = "";
 numberError.textContent = "";
 emailError.textContent = "";
 subjectError.textContent = "";
 messageError.textContent = "";

 
 let isValid = true;
 
 if(name === "" || /\d/.test(name))
 {
    nameError.textContent = "  Please Enter Your User name";
    isValid = false;
 }
   
 if(email === "" || !email.includes("@"))
    {
       emailError.textContent = "  Please Enter a Valid E-mail";
       isValid = false;
    }
    if(number === "" || /\d/.number(number))
        {
           numberError.textContent = "  Please Enter Correct Number";
           isValid = false;
        }
        if(subject === "" || /\d/.test(subject))
            {
               subjectError.textContent = "  Please Enter Your subject";
               isValid = false;
            }
            if(message === "" || /\d/.test(message))
                {
                   messageError.textContent = "  Please Enter Your message";
                   isValid = false;
                }      

    return isValid;

}
