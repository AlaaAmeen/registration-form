$(document).ready(function(){
    $("form").animate({top:'150px'},2200);
    $("form").animate({height:'210px'},800);
    $("form").animate({width:'400px',borderRadius:'20px'},800);
    $("h2").fadeIn(7000);
    $(".name").fadeIn(6000);
    $(".pass").fadeIn(6000);
    $("button").fadeIn(6000);
});

var Go =  document.getElementById('go');

Go.onclick =function(e){
    
    var userName =document.getElementById('username').value,
    passWord = document.getElementById('password').value,
    messege1 = document.getElementById('messege'),
    form = document.getElementById('login'),
    validity =form.checkValidity();
    
    if(validity === true){
		 if( userName === 'alaa' && passWord === '123456'){
          e.preventDefault();
          messege1.innerHTML = 'Thank you ' + ' ' + userName.toUpperCase() + '  ' + 'for your login';
	      setTimeout(function(){window.location.href='table.html';},1500);
       }
       else if (userName !== 'alaa' && passWord !== '123456'){
        messege1.innerHTML = 'your username and password are not correct';
        document.getElementById("username").value = "";
       document.getElementById("password").value = "";
       }
       else if (userName !== 'alaa'){
         messege1.innerHTML = 'your username is not correct';
         document.getElementById("username").value = "";
       }
       else if (passWord !== '123456'){
         messege1.innerHTML = 'your password is not correct';
         document.getElementById("password").value = "";
       }
       
    }
};
