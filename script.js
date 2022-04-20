let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

  
  function validation(){
    var user=document.getElementById('name').value;
    var em=document.getElementById('email').value;
    var nu=document.getElementById('number').value;
    var fn=document.getElementById('foodname').value;
    var ad=document.getElementById('address').value;
    if(user==""){
      document.getElementById('n').innerHTML="**Please fill name";
      return false;
    }
    if((user.length <2) || (user.length>35)){
      document.getElementById('n').innerHTML="**Please fill name between 2 to 35 letters";
      return false;


    }
    if(!isNaN(user)){
      document.getElementById('n').innerHTML="**Only characters are allowed";
      return false;


    }
    if(em==""){
      document.getElementById('e').innerHTML="**Please fill email";
      return false;
    }
    if(em.indexOf('@')<=0){
      document.getElementById('e').innerHTML="**Please enter valid email";
      return false;
    }
    if((em.charAt(em.length-4)!=".")&& (em.charAt(em.length-3)!=".")){
      document.getElementById('e').innerHTML="**Please enter valid email";
      return false;
    }
    if(mnu==""){
      document.getElementById('mn').innerHTML="**Please fill Mobile Number";
      return false;
    }
    if(isNaN(mnu)){
      document.getElementById('mn').innerHTML="**Please enter digits only in mobile number";
      return false;
    }
    if(mnu.length!=10){
      document.getElementById('mn').innerHTML="**Please enter valid mobile number";
      return false;
    }
    if(nu==0){
      document.getElementById('num').innerHTML="**Please fill quantity";
      return false;
    }
    if(fn==""){
      document.getElementById('f').innerHTML="**Please fill food name";
      return false;
    }
    if(ad==""){
      document.getElementById('a').innerHTML="**Please fill address field";
      return false;
    }

  }

// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
//   }
  
//   function fadeOut(){
//     setInterval(loader, 3000);
//   }
// function btndisplay(){
//   var a=document.getElementById('a').value;
//   document.getElementById('a').innerHTML="Added to cart"
//   return false;
// }
  
  // window.onload = fadeOut();