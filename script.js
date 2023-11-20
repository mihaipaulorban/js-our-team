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

// Creiamo un div con la classe row per contenere le card dei membri del team
let row = document.createElement("div");
row.classList.add("row");

teamMembers.forEach(member => {
  // Generiamo un div per ogni membro e aggiungiamo le classi col e col-md-4 di Bootstrap
  let memberDiv = document.createElement("div");
  memberDiv.classList.add("col", "col-md-4", "mb-4");

  // Aggiungiamo la classe card di Bootstrap per creare la card
  let card = document.createElement("div");
  card.classList.add("card");

  // Aggiungiamo un div per il corpo della card e la classe card-body di Bootstrap
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Aggiungiamo un elemento immagine <img> per la foto e le classi di Bootstrap
  let imgElement = document.createElement("img");
  imgElement.src = member.foto;
  imgElement.alt = member.nome;
  imgElement.classList.add("card-img-top", "img-fluid");

  // Generiamo elementi <p> per il nome e il ruolo
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = member.nome;
  nameParagraph.classList.add("card-text", "fw-bold", "text-center", "text-truncate", "mt-3", "fs-4");

  let roleParagraph = document.createElement("p");
  roleParagraph.textContent = member.ruolo;
  roleParagraph.classList.add("card-text", "text-center", "text-truncate");

  // Aggiungiamo l'immagine, il nome e il ruolo al corpo della card
  cardBody.appendChild(imgElement);
  cardBody.appendChild(nameParagraph);
  cardBody.appendChild(roleParagraph);

  // Aggiungiamo il corpo della card al div della card
  card.appendChild(cardBody);

  // Aggiungiamo la card al div del membro
  memberDiv.appendChild(card);

  // Aggiungiamo il div del membro al div row
  row.appendChild(memberDiv);
});

// Aggiungiamo il div row al contenitore del team
teamContainer.appendChild(row);
