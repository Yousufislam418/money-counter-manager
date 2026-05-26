
function setBalanceDisplay(datas) {
   document.getElementById('main-balance').innerHTML = datas.balance.toFixed(2);
}

const display = `
 <section class="mt-30">
  <div>
   <div class="center-x">
    <div class="w-90-pr h-200 center bg-color-0 radius-10 border-2 -whites shadow-15">
     <h1 id="main-balance" class="white bold fs-70">0</h1>
    <div>
   </div>
  </div>
 </section>`;

slys(display);
