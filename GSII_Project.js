
function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Get the modal
var modal = document.getElementById('id01');




// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Class Room Buttons 
window.requestAnimationFrame(hideAll);
var butt = -1;
function hideAll() {

    if(butt = -1) {
        //document.getElementById("teamsLay").style.visibility = "hidden";
        document.getElementById("chatLay").style.visibility = "hidden";
    }
}
hideAll();
function myFunction() {
    
          document.getElementById("chatLay").style.visibility = "hidden";
        document.getElementById("teamsLay").style.visibility = "visible";
        butt = 1;

    
}
function myFunction1() {
    
        document.getElementById("teamsLay").style.visibility = "hidden";
        document.getElementById("chatLay").style.visibility = "visible";
        butt = 2;
    
}


// Get the container element
var btnContainer = document.getElementById("teamsLay");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("t-img");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current.className = current.className.replace(" active", "");
    this.className += " active";
  });
} 



// ############### Subjects Page ######################## //

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show3')) {
        openDropdown.classList.remove('show3');
      }
    }
  }
}



function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdownss = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show2')) {
        openDropdown.classList.remove('show2');
      }
    }
  }
}





/*

var lay = document.getElementById('teams-lay');
window.onclick = function(t){
    if(t.target == open){
        teamsLay.display = "none"
    }
} */


/*
var main = document.getElementById("teams-i");
var teams-i = header.getElementsByClassName("t-img");
for (var i = 0; i < btns.length; i++) {
  teams-i[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
*/
