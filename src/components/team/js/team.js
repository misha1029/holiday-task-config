'use strict';
import '../scss/teams.scss';

const teams = document.getElementById('teams');

async function Employees() {
  try {
    const response = await fetch('./data/employees.json');
    const json = await response.json();
    json.forEach(person => {
      createMemberTeam(person)
    });
  } catch (e) {
    console.error("Error: " + e);
  }
}

Employees();


const createMemberTeam = person => {
  const personItem = document.createElement('div');
  personItem.classList.add('person');

  personItem.appendChild(createPersonPhoto(person));
  personItem.appendChild(createPersonName(person.name));
  personItem.appendChild(createPersonRole(person.role));
  personItem.appendChild(createPersonDescription(person.description));
  personItem.appendChild(createPersonLink(person.contacts));

  teams.appendChild(personItem);
};

const createPersonPhoto = person => {
  const img = new Image();
  img.src = person.profilePicture;
  img.alt = person.name;
  return img;
};

const createPersonName = name => {
  const nameElement = document.createElement('h4');
  nameElement.innerText = name;
  return nameElement;
};

const createPersonRole = role => {
  const roleElement = document.createElement('h5');
  roleElement.innerText = role;
  return roleElement;

};

const createPersonDescription = description => {
  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = description;

  return descriptionElement;
};

const createPersonLink = linkArray => {
  const iconsDifferentSocial = ['fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-google-plus-g', 'fa-dribbble'];
  let num = 0;

  const linkBlock = document.createElement('ul');
  linkBlock.classList.add('socialIconsContainer');
  linkArray.forEach(oneLink => {


    const linkItem = document.createElement("li");
    linkItem.classList.add('socialIconsItem');

    const link = document.createElement('a');
    link.setAttribute('href', oneLink);

    const linkIcon = document.createElement('i');
    linkIcon.classList.add("fab");
    linkIcon.classList.add(iconsDifferentSocial[num++]);


    link.appendChild(linkIcon);
    linkItem.appendChild(link);

    linkBlock.appendChild(linkItem);
  });
  return linkBlock;
};
