const userNameInput = document.querySelector("#userNameInput");
const getUserButton = document.querySelector("#getUserButton");
const userCitySpan = document.querySelector("#userCity");

function getCityByName() {
  const searchName = userNameInput.value.trim();

  if (!searchName) {
    userCitySpan.textContent = "Enter user name.";
    return;
  }

  userCitySpan.textContent = "Loading...";

  fetch(USERS_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      const foundUser = users.find(
        (user) => user.name.toLowerCase() === searchName.toLowerCase()
      );

      if (foundUser) {
        userCitySpan.textContent = foundUser.address.city;
      } else {
        userCitySpan.textContent = `"${searchName}" not found.`;
      }
    })
    .catch((error) => {
      console.error("Error fetching", error);
      userCitySpan.textContent = `Error: ${error.message}`;
    });
}

getUserButton.addEventListener("click", getCityByName);
