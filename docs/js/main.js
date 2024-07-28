let r=[];const o=document.querySelector(".js-save-data"),c=document.querySelector(".js-recover-data"),t=document.querySelector(".js-list-users");fetch("https://randomuser.me/api/?results=10").then(function(s){return s.json()}).then(function(s){for(const e of s.results)r.push({nombre:e.name.first+" "+e.name.last,ciudad:e.location.city,foto:e.picture.large,usuario:e.login.username,id:e.login.uuid,isFriend:!1});i()});function a(s){s.preventDefault();const e=s.currentTarget.id;for(const n of r)n.id===e&&(n.isFriend==="True"?n.isFriend="False":n.isFriend="True");t.innerHTML="",i()}function d(){for(const s of r){const e=document.getElementById(`${s.id}`);s.isFriend==="True"?e.classList.add("friends"):e.classList.remove("friends")}}function i(){for(const e of r){const n=document.createElement("li");n.innerHTML=`
      <div class="profile js-profile" id="${e.id}">
      <div class="photo"><img src="${e.foto}" /></div>
      <div class="name"><h2>${e.nombre}</h2></div>
      <div class="city"><span>${e.ciudad}</span></div>
      <div class="username"><span>${e.usuario}</span></div>
      </div>`,t.appendChild(n)}const s=document.querySelectorAll(".js-profile");for(const e of s)e.addEventListener("click",a);d()}function l(){localStorage.setItem("users",JSON.stringify(r))}function u(){r=JSON.parse(localStorage.getItem("users")),t.innerHTML="",i()}o.addEventListener("click",l);c.addEventListener("click",u);
//# sourceMappingURL=main.js.map
