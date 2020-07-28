 // for Random 6 digit number
 document.querySelector(".generate-btn").addEventListener("click", function () {
     var randDigit = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
     document.querySelector(".pin-gen").value = randDigit;
 })


 //all btn value set
 function setvalue(btnNo) {
     document.querySelector(".btn-" + btnNo + "").addEventListener("click", function () {
         var oldvalue = document.querySelector(".pin-input").value;
         document.querySelector(".pin-input").value = oldvalue + btnNo;
     })
 }

//call set value 9 time 
 for (i = 0; i <= 9; i++) {
     setvalue(i);
 }


 //for clear input  box  
 document.querySelector(".btn-c").addEventListener("click", function () {
     document.querySelector(".pin-input").value = "";
 })


 // for delete Button 
 document.querySelector(".btn-back").addEventListener("click", function () {
     var get_out_put = document.querySelector(".pin-input").value;
     var new_out_put = get_out_put.slice(0, -1);
     document.querySelector(".pin-input").value = new_out_put;

 })
 
 //pin check 
 document.querySelector(".submit-btn").addEventListener("click", function () {
     var pinGen = document.querySelector(".pin-gen").value;
     var pinInput = document.querySelector(".pin-input").value;
     if (pinInput=='') {
        document.querySelector(".wrong").style.display = "block";
        document.querySelector(".wrong span").innerText = "Fill must not be empty !";
        document.querySelector(".right").style.display = "none";
     } else if (pinGen == pinInput) {
         document.querySelector(".right").style.display = "block";
         document.querySelector(".wrong").style.display = "none";
         document.querySelector(".submit-btn").disabled = true;
         document.querySelector(".action-left ").innerText = '';
         document.querySelector(".submit-btn").style.background = '#5a67b3';
         document.querySelector(".submit-btn").style.color = ' #a8adc5';
     } else {
         document.querySelector(".wrong").style.display = "block";
         document.querySelector(".wrong span").innerText ="Pin Didn't Match, Please try again";
         document.querySelector(".right").style.display = "none";
     }
 });


 //try no  check 
 document.querySelector(".submit-btn").addEventListener("click", function () {
     var no = document.querySelector(".timeCount").innerText;
     no = parseInt(no);
     no = document.querySelector(".timeCount").innerText = no - 1;
     if (no == 2) {
         document.querySelector(".timeCount").innerText = 2;
     } else if (no == 1) {
         document.querySelector(".timeCount").innerText = 1;
     } else {
         document.querySelector(".submit-btn").disabled = true;
         document.querySelector(".action-left ").innerText = '';
         document.querySelector(".submit-btn").style.background = '#5a67b3';
         document.querySelector(".submit-btn").style.color = ' #a8adc5';
     }
 })