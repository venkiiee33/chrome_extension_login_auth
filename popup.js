window.onload=function(){
  var mb = document.getElementById("login");
  
  mb.addEventListener("click", fetchData)
 }
 
     async function fetchData() {


        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
  
          const response = await fetch('https://62d791b749c87ff2af3868fb.mockapi.io/login');

          const data = await response.json();

         
          data.forEach(obj => {
              Object.entries(obj).forEach(([key, value]) => {

                // var user_email = obj.email;
                // var user_pass = obj.password;
           
              });
           
              if(obj.email == email && obj.password == password)
              {
                alert('Login Successfully');
                throw BreakError;
                
              }
              else{
                alert('Invalid Username or Password');
                throw BreakError;
              }
          });

          

          }

   