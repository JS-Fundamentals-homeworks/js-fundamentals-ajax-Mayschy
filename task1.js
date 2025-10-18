const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

const usersListElement = document.querySelector(".usersList");

function fetchAndDisplayUserNames() {
  fetch(USERS_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      const listItemsHtml = users
        .map((user) => {
          return `<li>${user.name}</li>`;
        })
        .join("");

      usersListElement.innerHTML = listItemsHtml;
    })
    .catch((error) => {
      console.error("Error fetching", error);
      usersListElement.innerHTML = `<li>Data loading error: ${error.message}</li>`;
    });
}

fetchAndDisplayUserNames();
