"use strict";

//Creo el array vacío
let users = [];
const saveDataButton = document.querySelector(".js-save-data");
const recoverDataButton = document.querySelector(".js-recover-data");
const listUsers = document.querySelector(".js-list-users");

//Creo el fetch para hacer la llamada al servidor
fetch("https://randomuser.me/api/?results=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (const result of data.results) {
      users.push({
        nombre: result.name.first + " " + result.name.last,
        ciudad: result.location.city,
        foto: result.picture.large,
        usuario: result.login.username,
        id: result.login.uuid,
        isFriend: false,
      });
    }
    showUsers();
  });

function addFriend(event) {
  event.preventDefault();
  const userId = event.currentTarget.id;

  for (const user of users) {
    if (user.id === userId) {
      const isFriend = user.isFriend;
      if (isFriend === "True") {
        user.isFriend = "False";
      } else {
        user.isFriend = "True";
      }
    }
  }
  listUsers.innerHTML = "";
  showUsers();
}

function addClassFriends() {
  for (const user of users) {
    if (user.isFriend === "True") {
      const friend = document.getElementById(`${user.id}`);
      friend.classList.add("friends");
    } else {
      user.isFriend === "False";
      friend.classList.remove("friends");
    }
  }
}
function showUsers() {
  for (const user of users) {
    const liElement = document.createElement("li");

    liElement.innerHTML = `
      <div class="profile js-profile" id="${user.id}">
      <div class="photo"><img src="${user.foto}" /></div>
      <div class="name"><h2>${user.nombre}</h2></div>
      <div class="city"><span>${user.ciudad}</span></div>
      <div class="username"><span>${user.usuario}</span></div>
      </div>`;

    listUsers.appendChild(liElement);
  }
  const profiles = document.querySelectorAll(".js-profile");
  for (const profile of profiles) {
    profile.addEventListener("click", addFriend);
  }
  addClassFriends();
}

function saveOnLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

function recoverFromLocalStorage() {
  users = JSON.parse(localStorage.getItem("users"));
  listUsers.innerHTML = "";
  showUsers();
}

saveDataButton.addEventListener("click", saveOnLocalStorage);
recoverDataButton.addEventListener("click", recoverFromLocalStorage);
