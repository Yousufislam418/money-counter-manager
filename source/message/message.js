function message(txt = '...', clr = 'black-8') {
const msg = `
 <section class="absolute w-100-pr bottom-15"> 
  <div>
   <div class="text-center bold">
    <p class="${clr}">${txt}</p>
   </div>
  </div>
 </section>`;

 slys(msg);
}
