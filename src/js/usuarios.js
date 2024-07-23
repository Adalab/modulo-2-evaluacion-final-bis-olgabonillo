"use strict";

//Creo el array vacío
let users = [];

//Creo el fetch para hacer la llamada al servidor
fetch("https://randomuser.me/api/?results=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (const result of data.results) {
      users.push({
        "nombre": result.name.first + " " + result.name.last,
        "ciudad": result.location.city,
        "foto": result.picture.large,
        "usuario": result.login.username,
        "isFriend": false
      });
    }
    const listUsers = document.querySelector(".js-list-users"); 
    for (const user of users) {

      const liElement = document.createElement("li");
      liElement.innerHTML = `
        <div class="profile">
        <div class="photo"><img src="${user.foto}" /></div>
        <div class="name"><h2>${user.nombre}</h2></div>
        <div class="city"><span>${user.ciudad}</span></div>
        <div class="username"><span>${user.usuario}</span></div>
        </div>`;
    
      listUsers.appendChild(liElement);
    }
  });

console.log(users);

