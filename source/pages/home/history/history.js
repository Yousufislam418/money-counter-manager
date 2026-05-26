
function setHistoryDisplay(datas) {
  document.getElementById('last-change').innerHTML = 'Last Change : '+ datas.status;
  document.getElementById('amount').innerHTML = 'Amount : '+ datas.amount;
  document.getElementById('date-time').innerHTML = datas.date +' ~ '+ datas.time;
}

const history = `
  <section class="mt-80">
   <div class="center-x">
    <div class="w-80-pr bg-base-2 p-20 radius-3 shadow-1 bold navy text-center">
     <div class="bg-gray-2 radius-3 p-12">
      <p id="last-change">...</p>
     </div>
     <div class="bg-gray-2 radius-3 p-12 my-8">
      <p id="amount">...</p>
     </div>
     <div class="bg-gray-2 radius-3 p-12">
      <p id="date-time">...</p>
     </div>
    </div>
   </div>
  </section>`; 

slys(history);