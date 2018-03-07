var No = document.getElementById("no") ;
No = 0;
var newArray = [];

function init(){
      if (localStorage.rowRecord){
          newArray = JSON.parse(localStorage.rowRecord);
          for (var i=0 ; i<newArray.length ; i++){
                  var firstName = newArray[i].firstname;
                  var lastName =  newArray[i].lastname;
                  var Age =  newArray[i].age;
                  var Phone =  newArray[i].phone;
                  var Address = newArray[i].address;
                  addCell(firstName,lastName,Age,Phone,Address);
          }
      }
}

function onRegister(){

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var Age = document.getElementById("age").value;
    var Phone = document.getElementById("tele").value;
    var Address = document.getElementById("address").value;
    
    
    if( firstName === "" || lastName==="" || Age === "" || Phone==="" || Address===""){
          alert("Please fill the missing data");
        }
      
    else{
        var newObj = {no:No,firstname:firstName,lastname:lastName,age:Age,phone:Phone,address:Address};
        newArray.push(newObj);
        
        localStorage.rowRecord = JSON.stringify(newArray);
        addCell(firstName,lastName,Age,Phone,Address);
             
       document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "" ;
        document.getElementById("age").value = "";
        document.getElementById("tele").value = "";
        document.getElementById("address").value ="";
        
    }
}

      function addCell(firstName,lastName,Age,Phone,Address){
             var table = document.getElementById("regtable");
        var row = table.insertRow(); 
         
        if (row){
            No = No + 1;
        }
          var rowNum = row.insertCell(0);
          rowNum.innerHTML =  No;
            
        var firstNameCell = row.insertCell(1);
        var lastNameCell = row.insertCell(2);
        var ageCell = row.insertCell(3);
        var phoneCell = row.insertCell(4);
        var addressCell = row.insertCell(5);
        
        
        firstNameCell.innerHTML = firstName;
        lastNameCell.innerHTML = lastName;
        ageCell.innerHTML = Age;
        phoneCell.innerHTML = Phone;
        addressCell.innerHTML = Address;
 
      }


