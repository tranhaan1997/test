function validateForm() {
    // Required to fill section page 2
    var sid = document.forms["Form"]["sid"].value;
    var pwd1 = document.forms["Form"]["pwd1"].value;
    var pwd2 = document.forms["Form"]["pwd2"].value;
    var username = document.forms["Form"]["username"].value;
    if (sid == null || sid == "" && pwd1 == null || pwd1 == "" && pwd2 == null || pwd2 == "", username == null || username == "")
    {
        alert("Please Fill All Required Field");
        return false;
    }
// Password required
    if(pwd1.length < 8) {  
        document.getElementById("pwd1")
        alert("Password length must be atleast 8 characters")
        return false;  
     }  

    var password = document.getElementById("pwd1").value;
    var confirmPassword = document.getElementById("pwd2").value;
    if (password != confirmPassword) {
         alert("Passwords do not match.");
         return false;
     }
     return true;
}
// Required to fill page 3
function validatePass() {
    var deli = $("form input#Delivery").val();
    if ($('.showdeli').is(":visible")) {
      if (x==null || x=="")
      {
        alert("Text box be filled out");
      }
    }
    var ba = document.forms["Form"]["ba"].value;
    var cn = document.forms["Form"]["cn"].value;
    var digit = document.forms["Form"]["digit"].value;
    var efr = document.forms["Form"]["efr"].value;
    if (pick == null || pick =="" && ba == null || ba == "" && cn == null || cn == "" && digit == null || digit == "", efr == null || efr == "")
    {
        alert("Please Fill All Required Field");
        return false;
    }

// Email address required
        var email = document.getElementById('efr');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email.value)) {
        alert('Plese use your correct email address');
        email.focus;
        return false;
     }
    //  Required Contact number adn filling number
     var cn = document.getElementById("cn");

cn.addEventListener('input', () => {
cn.setCustomValidity('');
cn.checkValidity();
});

cn.addEventListener('invalid', () => {
  if(cn.value === '') {
    cn.setCustomValidity('Enter phone number!');
  } else {
    cn.setCustomValidity('Enter phone number in this format: 123-456-7890');
  }
});
}

$(function () {
  $('#description').change(function () {
      $('.showother').hide();
      $('#' + $(this).val()).show();
  });
  });
    
$(document).ready(function(){
  $('#choose').change(function() {
    if ($(this).val() == "Delivery") {
      $('.showdeli').show();
    } else {
      $('.showdeli').hide();
    }
  });
});

