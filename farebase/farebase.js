import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, set, ref, get, update } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvsq1s-HtuZvP-xiQim_dBSqxWLDeuO7E",
  authDomain: "yousuf-islam-sonia.firebaseapp.com",
  databaseURL: "https://yousuf-islam-sonia-default-rtdb.firebaseio.com",
  projectId: "yousuf-islam-sonia",
  storageBucket: "yousuf-islam-sonia.firebasestorage.app",
  messagingSenderId: "18123974488",
  appId: "1:18123974488:web:a0e137892c3b65968d272d"
};
  const app = initializeApp(firebaseConfig);
  const data = getDatabase(app);

// Get data farebase
function getDataFirebaseDatabase() {
  get(ref(data,'money-counter-manager/'+'money-saver-data')).then((snapshot) => {
   if(snapshot.exists()) {
    const datas = snapshot.val().datas;

    setBalanceDisplay(datas);
    setHistoryDisplay(datas);
    addDataHandler(datas);
    minDataHandler(datas);
    }
  });
}
getDataFirebaseDatabase(); 

// Database Update Data Store ----------------------------------------------->
function updateDataFirebaseDatabase(updateData) {
  set(ref(data,'money-counter-manager/'+'money-saver-data'),{
   datas : updateData
  }).then(() => {
  message('Data Update Successfully...','blue');  
  getDataFirebaseDatabase();
  hideElementById('add-min-form-section'); 
  });
}


// Add button Handler ----------------------------------------------> 
function addDataHandler(datas){
const addBtnId = document.getElementById('add-btn-id');
 addBtnId.onclick = () => {
  addMinFormManage('Add');
  const dataSaveBtn = document.getElementById('data-save-btn');
  dataSaveBtn.onclick = (even) => { 
    even.preventDefault();
  const addMinInput = document.getElementById('add-min-input').value;
  const totalBalance = (parseFloat(datas.balance) + parseFloat(addMinInput)); 
  const status = 'Add';
  const updateData = {...datas, date, time, status, amount: addMinInput, balance: totalBalance}; 
  updateDataFirebaseDatabase(updateData);
  }
 }
}

// Min button Handler ----------------------------------------------> 
function minDataHandler(datas){
const minBtnId = document.getElementById('min-btn-id');
 minBtnId.onclick = () => { 
  addMinFormManage('Min');
  const dataSaveBtn = document.getElementById('data-save-btn');
  dataSaveBtn.onclick = (even) => { 
    even.preventDefault();
  const addMinInput = document.getElementById('add-min-input').value;
  const totalBalance = (parseFloat(datas.balance) - parseFloat(addMinInput)); 
  const status = 'Min';
  const updateData = {...datas, date, time, status, amount: addMinInput, balance: totalBalance}; 
  updateDataFirebaseDatabase(updateData);
  }
 }
}

