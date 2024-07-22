"use strict";

let users = [];

//Creo el fetch para hacer la llamada al servidor
fetch("https://randomuser.me/api/?results=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //Creo el array vacío

    //Creo el bucle para recorrer el array
    for (const result of data.results) {
     // console.log(result);
      users.push({
        nombre: result.name.first + " " + result.name.last,
        ciudad: result.location.city,
        foto: result.picture.large,
        usuario: result.login.username,
      });
    }
    //console.log("users es igual a: ", users);
    const listUsers = document.querySelector(".js-list-users"); 
    for (const user of users) {

      const liElement = document.createElement("li");
      liElement.innerHTML = `
        <div class="foto"><img src="${user.foto}" /></div>
        <div class="nombre"><h2>${user.nombre}</h2></div>
        <div class="ciudad"><span>${user.ciudad}</span></div>
        <div class="username"><span>${user.usuario}</span></div>`;
    
      listUsers.appendChild(liElement);
    }
  });

console.log(users);

