var choices = ["General question or comment ?" , "Electronic gadgets enquiry ?" , "Suggestions, how can we improve ?"];

// Populate list with options:
for(var i = 0 ; i < choices.length ; i++) {
    var ddl = document.getElementById('userOption');
    var option = document.createElement("OPTION");
    option.innerHTML = choices[i];
    ddl.options.add(option);
}

var $ = function(id){
    return document.getElementById(id);
}
window.onload = function(){
    $('submitButton').onclick = validate;
    $('resetButton').onclick = resetAll;
}
function validate(){
    var isvalid = true;
    var fname = $('userName').value;
    var e_mail = $('userEmail').value;
    var phno = $('userPhNo').value;
    var selectOption = $('userOption').value;
    var message = $('userText').value;
    var emailpattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var namepattern =  /^[a-zA-Z ]{2,30}$/;
    var phpattern =    /^[0-9]{10}$/;
    var textpattern =  /^[A-Za-z0-9 .'?!,@$#-_]{2,77}$/;

    if(fname == ""){
        isvalid  = false;
        $('errfname').innerHTML = 'Please enter first name';
    }else if(!namepattern.test(fname)){
        isvalid = false;
        $('errfname').innerHTML = 'Please enter first name with letters only';
    }else{
        $('errfname').innerHTML = '';
    }
    if(e_mail == ""){
        isvalid  = false;
        $('erremail').innerHTML = 'Please enter email';
    }else if(!emailpattern.test(e_mail)){
        isvalid = false;
        $('erremail').innerHTML = 'Please enter email in correct format';
    }else{
        $('erremail').innerHTML = '';
    }
    if(phno == ""){
        isvalid  = false;
        $('errphno').innerHTML = 'Please enter phone number';
    }else if(!phpattern.test(phno)){
        isvalid = false;
        $('errphno').innerHTML = 'Please enter phone number in correct format';
    }else{
        $('errphno').innerHTML = '';
    }
    if(selectOption == "Select an option"){
        isvalid  = false;
        $('erroption').innerHTML = 'Please select option';
    }else{
        $('erroption').innerHTML = '';
    }
    if(message == ""){
        isvalid  = false;
        $('errtexttarea').innerHTML = 'Please enter Message';
    }else if(!textpattern.test(message)){
        isvalid = false;
        $('errtexttarea').innerHTML = 'Please enter message in correct format';
    }else{
        $('errtexttarea').innerHTML = '';
    }
    if(isvalid){
        var users = $('userName').value;
        localStorage.setItem('user2', users);
        localStorage.setItem('firstname',fname);
        $('contactF').submit();
    }
}

function resetAll(){
    var fname = $('userName').value;
    var e_mail = $('userEmail').value;
    var phno = $('userPhNo').value;
    var selectOption = $('userOption').value;
    var message = $('userText').value;

    if(fname == ""){
        $('errfname').innerHTML = '';
    }
    if(e_mail == ""){
        $('erremail').innerHTML = '';
    }
    if(phno == ""){
        $('errphno').innerHTML = '';
    }
    if(selectOption == "Select an option"){
        $('erroption').innerHTML = '';
    }
    if(message == ""){
        $('errtexttarea').innerHTML = '';
    }
}