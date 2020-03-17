document.querySelector('#tip-form').onchange = function(){

    const bill = Number(document.getElementById('billTotal').value);
    const tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = `${tip}%`;
    let tipValue = bill * (tip/100);
    let finalBill = bill + tipValue;
  console.log(finalBill);
  const tipAmount = document.querySelector('#tipAmount');
  const totalBillWithTip = document.querySelector('#totalBillWithTip');
  
  tipAmount.value = tipValue.toFixed(2);
   totalBillWithTip.value =finalBill.toFixed(2);
  
   //Show Results
  
    document.getElementById('results').style.display='block'
  }