function toggleMenu() {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

// 👉 menu item click hone ke baad auto close
let menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("show");
  });
});




// SEARCH FUNCTION
function searchCourse() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let courses = document.getElementsByClassName("course");

  for (let i = 0; i < courses.length; i++) {
    let title = courses[i].innerText.toLowerCase();

    if (title.includes(input)) {
      courses[i].style.display = "";
    } else {
      courses[i].style.display = "none";
    }
  }
}


// LOGIN ALERT
function login() {
  alert("Login feature coming soon!");
}


// LOGIN BOX (optional future use)
function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}




document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;

  if(name && email && phone && course) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({name, email, phone, course});

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("successMsg").style.display = "block";

    document.getElementById("regForm").reset();
  }
});

function openCourse(courseName) {

  // form me course select ho jayega
  document.getElementById("course").value = courseName;

  // page scroll ho jayega registration pe
  document.getElementById("registration").scrollIntoView({
    behavior: "smooth"
  });

}



function login() {
  let password = prompt("Enter Admin Password:");

  if (password === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful ✅");
  } else {
    alert("Wrong Password ❌");
  }
}








let gender = document.querySelector('input[name="gender"]:checked').value;
console.log(gender);




function payRazor() {
  var options = {
    "key": "rzp_test_XXXXXXXX", // 👉 apni Razorpay key yaha daalo
    "amount": 50000, // ₹500 (paise me)
    "currency": "INR",
    "name": "Ujala Computer Center",
    "description": "Course Fee",

    "handler": function (response){
        alert("Payment Successful ✅");

        // 👉 payment ke baad user ko paid mark karo
        localStorage.setItem("paid", "yes");
    }
  };

  var rzp1 = new Razorpay(options);
  rzp1.open();
}


// Paid Student Only Access


function accessCourse(course) {
  let paid = localStorage.getItem("paid");

  if(paid === "yes") {
    alert("Welcome to " + course);
  } else {
    alert("Pehle payment karo!");
  }
}

/* OPEN LOGIN */
function login(){
  document.getElementById("loginPopup").style.display = "flex";
}

/* CLOSE LOGIN */
function closeLogin(){
  document.getElementById("loginPopup").style.display = "none";
}

/* PASSWORD SHOW HIDE */
function togglePassword(){

  let password =
  document.getElementById("password");

  if(password.type === "password"){
    password.type = "text";
  }

  else{
    password.type = "password";
  }

}

/* CLOSE ON OUTSIDE CLICK */

window.onclick = function(e){

  let popup =
  document.getElementById("loginPopup");

  if(e.target == popup){
    popup.style.display = "none";
  }

}