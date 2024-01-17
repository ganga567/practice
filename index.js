// function alert(){
//   document.getElementById("popup").style.display = "Thankyou for submission"
// }
//     function changepage() {
//         document.getElementById("signup-page").style.display = "none";
//         document.getElementById("signin-page").style.display = "block";
//     }

//     function changepageup() {
//         document.getElementById("signin-page").style.display = "none";
//         document.getElementById("signup-page").style.display = "block";
//     }

//     function closePopup() {
//         document.getElementById("signup-success-popup").style.display = "login sucessfull";
//         document.getElementById("overlay").style.display = "login successfull";
//     }

//     function changeValue(select) {

//     }

const registrationForm = document.getElementById('registrationForm');
const registrationPopup = document.getElementById('registrationPopup');
const closePopupButton = document.getElementById('closePopup');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Redirect to sign-in page immediately after successful registration
    window.location.href = 'signin-page';
});

// Optional: If you still want the popup functionality on the sign-in page
closePopupButton.addEventListener('click', () => {
    registrationPopup.style.display = 'none';
});

    

