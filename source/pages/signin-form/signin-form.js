function signInForm() {
 const signin_form = `
   <section class="mt-80">
    <div>
     <div> 
      <form class="w-80-pr p-50 bg-red-5 shadow-5 radius-10 mx-auto">
       <div class="text-center mb-30">
        <h1 class="fs-25 yellow">Signin Form</h1>
       </div>
       <div class="text-center mb-10">
        <input id="signin-email" class="input text-center none" type="email" placeholder="Email">
       </div>
       <div class="text-center">
        <input id="signin-password" class="input text-center" type="number" placeholder="Password">
       </div>
       <div class="text-center mt-50">
        <input id="signin-btn-id" class="input bg-red border-none white pointer w-50-pr" type="button" value="Login">
       </div>
      </form>
     </div>
    </div>
   </section>`;

 slys(signin_form);
}

signInForm();