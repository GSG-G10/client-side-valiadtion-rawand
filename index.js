const form = document.querySelector('#registerForm');
const email =document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword =document.querySelector('#confirmPassword');
const errorMsg = document.querySelector('.error')


 form.addEventListener('submit',()=>{
     const emailValue = email.value;
  const passwordValue = password.value;
 const pawsswordConfirm = confirmPassword.value;

 if(emailValue === ''){
   errorMsg.textContent='please enter email';
  
}
  else if(!isEmail(emailValue)){
      errorMsg.textContent ='Please enter an valid email address'
  }

 if(pawsswordConfirm === ''){
    errorMsg.textContent ='Please enter password'
 } else {
    errorMsg.textContent ='sucess password'
 }
 if(pawsswordConfirm === '') {
 errorMsg.textContent ='confirmPassword cannot be empty'
 } else if(passwordValue !== pawsswordConfirm) {
 errorMsg.textContent ='Passwords does not match'
 } else{
    errorMsg.textContent ='sucess password confirm'
 }
})

