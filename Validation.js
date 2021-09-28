let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");
function validate(){
    spanNode1.innerHTML='';
    let fname=fnameNode.value;
    if(fname==''){
        spanNode1.innerHTML="This field is required";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML="No spaces allowed";
        fnameNode.style.border="2px solid red";
        return false;
    }
    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}
let lnameNode=document.getElementById("lname");
let spanNode2=document.getElementById("error2");
function validate1(){
    spanNode2.innerHTML='';
    let lname=lnameNode.value;
    if(lname==''){
        spanNode2.innerHTML="This field is required";
        lnameNode.style.border="2px solid red";
        return false;
    }
    else if(lname.includes(' ')){
        spanNode2.innerHTML="No spaces allowed";
        lnameNode.style.border="2px solid red";
        return false;
    }
    else{
        lnameNode.style.border="2px solid green";
        return true;
    }
}

let passNode=document.getElementById("pass");
let spanNode3=document.getElementById("error3");

function validate2(){
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    spanNode3.innerHTML='';
    let pass=passNode.value;
    if(pass==''){
        spanNode3.innerHTML="This field is required";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(pass.length<4 || pass.length>8){
        spanNode3.innerHTML="password should be 4 to 8 characters long";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(regExp.test(pass)==false){
        spanNode3.innerHTML="password should contain alphanumeric and special simbol";
        passNode.style.border="2px solid red";
        return false;

    }
    else{
        passNode.style.border="2px solid green";
        return true;
    }
   


}

let cpassNode=document.getElementById("cpass");
let spanNode4=document.getElementById("error4");

function validate3(){
    
    spanNode4.innerHTML='';
    let pass=passNode.value;
    let cpass=cpassNode.value;
    if(cpass==''){
        spanNode4.innerHTML="This field is required";
        cpassNode.style.border="2px solid red";
        return false;
    }
    else if(cpass!=pass){
        spanNode4.innerHTML="password should match";
        cpassNode.style.border="2px solid red";
        return false;
    }
    

    
    else{
        cpassNode.style.border="2px solid green";
        return true;
    }
   


}
let emNode=document.getElementById("emailid");
let spanNode5=document.getElementById("error5");

function validate4(){
    
    spanNode5.innerHTML='';
    
    let email=emNode.value;
    let subs=email.substring(email.indexOf('@')+1);
    if(email==''){
        spanNode5.innerHTML="This field is required";
        emNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || subs==''){
        spanNode5.innerHTML="Invalid email id";
        emNode.style.border="2px solid red";
        return false;
    }
    

    
    else{
        emNode.style.border="2px solid green";
        return true;
    }
   


}

let ageNode=document.getElementById("age");
let spanNode6=document.getElementById("error6");

function validate5(){
    
    spanNode6.innerHTML='';
    
    let age=ageNode.value;
    
    if(age==''){
        spanNode6.innerHTML="This field is required";
        ageNode.style.border="2px solid red";
        return false;
    }
    else if(age<0){
        spanNode6.innerHTML="age should be positive";
        ageNode.style.border="2px solid red";
        return false;
    }
    

    
    else{
        ageNode.style.border="2px solid green";
        return true;
    }
   


}
let telNode=document.getElementById("tel");
let spanNode7=document.getElementById("error7");

function validate6(){
    
    spanNode7.innerHTML='';
    
    let tel=telNode.value;
    let var1=parseInt('tel');
    
    if(tel==''){
        spanNode7.innerHTML="This field is required";
        telNode.style.border="2px solid red";
        return false;
    }
    else if(isNaN(tel)){
        spanNode7.innerHTML="Mobile no should be numeric";
        telNode.style.border="2px solid red";
        return false;
    }
    else if(tel.length!=10 ){
        spanNode7.innerHTML="mobile number should have ten digits";
        telNode.style.border="2px solid red";
        return false;
    }
    else{
        telNode.style.border="2px solid green";
        return true;
    }
   


}

function validateForm(){
    let v=validate();
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
   
  return (v&&v1&&v2&&v3&&v4&&v5&&v6);
}
$(function(){
    let checkNode=$('#check');
    checkNode.change(function(){
        if(checkNode.prop('checked')==true){
            $('#pass').attr('type','text');
            
        }
        else{
            $('#pass').attr('type','password');
        }
    });
    
});