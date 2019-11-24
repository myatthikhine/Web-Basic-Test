function validateForm(){
 
    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var regName = /^[a-zA-Z]*$/;
    var FirstNm =document.getElementById("FrNm").value;
    var LastNm=document.getElementById("LtNm").value;
    var Email=document.getElementById("Eml").value;
      if( FirstNm != "" && FirstNm.search(regName) == -1 || LastNm != "" && LastNm.search(regName) == -1 )
      {
        alert("Please Enter a valid Name!!"); 
        return;
       
      }
      if ( Email != "" && Email.search(emailRegEx) == -1) {
        alert("Enter a valid Email!!");
        return;

      }    
    }

