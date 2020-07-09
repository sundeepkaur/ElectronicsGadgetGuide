
var $ = function (id) {
    return document.getElementById(id);
};
function validate() {
    document.getElementById("form").style.width = "700px";
    document.getElementById("email").style.marginleft = "0px";
    document.getElementById("passwd").style.paddingleft = "0px";
    
    var email = document.getElementById('email').value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isvalid = true;
    if (email === "") {
        isvalid = false;
        $('erroremail').innerHTML = "Please Enter Email";
    } else if (!re.test(email)) {
        isvalid = false;
        $('erroremail').innerHTML = "Please Enter valid Email address";
    } else {
        $('erroremail').innerHTML = "";
    }
   
    var passwd = document.getElementById('passwd').value;
    var pattern1 = pattern = /(?=.*[a-z]).{8,}/;
    var isvalid = true;
    if (passwd === "") {
        isvalid = false;
        $('errorpasswd').innerHTML = "Please Enter password";
    } else if (!pattern1.test(passwd)) {
        isvalid = false;
        $('errorpasswd').innerHTML = "Password should be size 8 ";
    } else {
        $('errorpasswd').innerHTML = "";
    }
    if(isvalid===true){
        window.open("guide.html","_self");
    }
    }