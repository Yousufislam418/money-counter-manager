
function addMinFormManage(status) {
const addMinForm = `
 <section id="add-min-form-section" class="absolute w-100-pr h-100-pr top-0 bg-gray-2">
  <div class=""> 
   <div>
    <form class="w-80-pr p-30 bg-red-3 radius-3 shadow-3 mx-auto mt-100">
     <div class="text-center mb-30">
      <h1 class="orange-5 fs-28">Money Saver</h1>
     </div>
     <div class="center">
      <input id="add-min-input" class="input text-center" type="number" placeholder="${status} Amount">
     </div>
     <div class="text-center mt-30 pb-10">
      <button id="data-save-btn" class="w-50-pr bg-red border-none pointer white py-10 fs-20 text-shadow-2 radius-3">Save</button>
     </div>
    </form>
   </div>
  </div>
 </section>`;

 slys(addMinForm); 
} 
