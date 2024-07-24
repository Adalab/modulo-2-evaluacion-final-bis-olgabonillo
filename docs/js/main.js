let t=[];const i=document.querySelector(".js-save-data"),c=document.querySelector(".js-recover-data"),r=document.querySelector(".js-list-users");fetch("https://randomuser.me/api/?results=10").then(function(s){return s.json()}).then(function(s){for(const e of s.results)t.push({nombre:e.name.first+" "+e.name.last,ciudad:e.location.city,foto:e.picture.large,usuario:e.login.username,id:e.login.uuid,isFriend:!1});o()});function a(s){s.preventDefault();const e=s.currentTarget.id;for(const n of t)n.id===e&&(n.isFriend="True");r.innerHTML="",o()}function d(){for(const s of t)s.isFriend==="True"&&document.getElementById(`${s.id}`).classList.add("friends")}function o(){for(const e of t){const n=document.createElement("li");n.innerHTML=`
      <div class="profile js-profile" id="${e.id}">
      <div class="photo"><img src="${e.foto}" /></div>
      <div class="name"><h2>${e.nombre}</h2></div>
      <div class="city"><span>${e.ciudad}</span></div>
      <div class="username"><span>${e.usuario}</span></div>
      </div>`,r.appendChild(n)}const s=document.querySelectorAll(".js-profile");for(const e of s)e.addEventListener("click",a);d()}function u(){localStorage.setItem("users",JSON.stringify(t))}function l(){t=JSON.parse(localStorage.getItem("users")),r.innerHTML="",o()}i.addEventListener("click",u);c.addEventListener("click",l);
//# sourceMappingURL=main.js.map
