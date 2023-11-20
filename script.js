'use strict'

// Arrey dei membri
const teamMembers = [];

// Oggetti per ogni membro del team che poi vengono agginti all'array

//Membro 1
let member1 = {
    nome: "Wayne Bernet",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
}

teamMembers.push(member1);

//Membro 2
let member2 = {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
}

teamMembers.push(member2);

//Membro 3
let member3 = {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
}

teamMembers.push(member3);

//Membro 4
let member4 = {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
}

teamMembers.push(member4);

//Membro 5
let member5 = {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
}

teamMembers.push(member5);

//Membro 6
let member6 = {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
}

teamMembers.push(member6);

console.log (teamMembers)

let teamContainer = document.getElementById("team-container");

// Per ogni membro del team nell'array teamMembers:
teamMembers.forEach(member => {
  // Genera un div per ogni membro
  let memberDiv = document.createElement("div");
  memberDiv.classList.add("card");

  // Genera elementi <p> per nome e ruolo
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Nome: ${member.nome}`;

  let roleParagraph = document.createElement("p");
  roleParagraph.textContent = `Ruolo: ${member.ruolo}`;

  // Genera un elemento immagine <img> per la foto
  let imgElement = document.createElement("img");
  imgElement.src = member.foto;
  imgElement.alt = member.nome; // Assumendo che il nome possa essere usato come testo alternativo

  // Aggiunge i <p> e l'<img> al div del membro
  memberDiv.appendChild(nameParagraph);
  memberDiv.appendChild(roleParagraph);
  memberDiv.appendChild(imgElement);

  // Aggiunge il div del membro al contenitore del team
  teamContainer.appendChild(memberDiv);
});