const emailEl = document.getElementById("email")
const passEl = document.getElementById("password");
const profileList = document.getElementById("profile-list");

function loginUser()
{
profileList.classList.remove("d-none");
console.log(emailEl.value, passEl.value);
}



