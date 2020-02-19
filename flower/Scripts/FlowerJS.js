function validateCardNumber() {
      var regex = /^4[0-9]{12}$|4[0-9]{15}$/;
      var x=document.getElementById("numCard").value;
       if (!regex.test(x)) {
        document.getElementById("lblValidateCardNumber").style.display = "block";
       
    }
    else {
        document.getElementById("lblValidateCardNumber").style.display = "none";
    }
}
function validateSecurityCode() {
    var x = document.getElementById("numCode");
    var regex = /[0-9]{8}/;
    if (!x.value.match(regex)) {
          document.getElementById("lblValidateSecurityCode").style.display="block";
    
    } else
    {
            document.getElementById("lblValidateSecurityCode").style.display="none";
    }
}
function validateExpiryMonth() {
    var x = document.getElementById("myExpiryDateList");

    if (x.tabIndex === null) {
  document.getElementById("lblValidateDateYear").style.display="inline";
    } else
    {
            document.getElementById("lblValidateDateYear").style.display="none";
    }
}
function validateExpiryYear()
{
    var y = document.getElementById("yearList").selectedIndex;
    if (y === "") alert("Expiry Year is invalid!");
    return false;
}
function validateName() {
    var x = document.getElementById("idCarHolderName");
    var regex = /^[A-Za-z]+$/;
    if (!x.value.match(regex)) {
       document.getElementById("lblValidateName").style.display="inline";
        return false;
    }
    else
    {
            document.getElementById("lblValidateName").style.display="none";
    }

}

function validateAddress() {                                                 //Address Validation
    
    var regex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    var x=document.getElementById("address").value;
    if(regex.test(x))
    {
        document.getElementById("ValidateAddress").style.display="block";
    }
    else if(x=="")
    {
           document.getElementById("ValidateAddress").style.display="block";
    }
    else
    {

        document.getElementById("ValidateAddress").style.display="none";
    }
}

function validateTown() 
{
   
    var x = document.getElementById("town");
    var regex = /^[A-Za-z]+$/;
    if (!x.value.match(regex)) {
       document.getElementById("lblValidateTown").style.display="block";
        return false;
    }
    else
    {
            document.getElementById("lblValidateTown").style.display="none";
    }

}
function validateRegion()
{
      var x = document.getElementById("txtRegion");
    var regex = /^[A-Za-z]+$/;
    if (!x.value.match(regex)) {
       document.getElementById("lblValidateRegion").style.display="block";
        return false;
    }
    else
    {
            document.getElementById("lblValidateRegion").style.display="none";
    }

}
   



function validateZipCode() {
    var x = document.getElementById("Zipcode");
    var regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (!x.value.match(regex)) {
         document.getElementById("lblValidateCode").style.display="block";
    }
    else{
         document.getElementById("lblValidateCode").style.display="none";
    }
}

function validateCountry() {
    var x = document.getElementById("country").selectedIndex;
    if (x === 0) {
      document.getElementById("lblValidateCountry").style.display="block";
    }
    else{
         document.getElementById("lblValidateCountry").style.display="none";
    }
}

function validatePhoneNo() {
    var x = document.getElementById("phoneNo");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.value.match(regex)) {
        document.getElementById("ValidatePhoneNumber").style.display="block";

    }else{
         document.getElementById("ValidatePhoneNumber").style.display="none";
    }
}
function validateFax() {
    var x = document.getElementById("fax");
    var regex = /^\+?[0-9]{7,}$/;
    if (!x.value.match(regex)) {
        document.getElementById("lblValidateFaxNumber").style.display="block";
    }
    else{
         document.getElementById("lblValidateFaxNumber").style.display="none";
    }
}
function validateEmail() {
    var x = document.getElementById("email");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (!x.value.match(regex)) {
      document.getElementById("lblValidateEmail").style.display="block";
      
    }else
    {
            document.getElementById("lblValidateEmail").style.display="none";
    }
  

}

function ValidateForm()
{
    validateCardNumber();
    validateSecurityCode();
    validateName();
validateAddress();
    validateTown();
    validateRegion();
    validateZipCode();
    validatePhoneNo();
    validateFax();
    validateEmail();



}


