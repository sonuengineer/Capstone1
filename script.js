// Mobile menu set up //

// locate the open menu and the class action to work in the open/close states //
const mobile = document.querySelector('.mobileMenu');
const icons = document.querySelectorAll('.action');

// Function to assign the class that will display the menu //
function togg() {
  mobile.classList.toggle('hiThere');
}

// For each to enable/disable the 'hiThere' class //
icons.forEach((n) => {
  n.addEventListener('click', () => {
    togg();
  });
});

// Locate the list inside de mobile menu //
const lin = document.querySelectorAll('.mobileLi');

// forEach arrow function to react when the links are pressed //
lin.forEach((l) => {
  l.addEventListener('click', () => {
    togg();
  });
});

// array with objects that contains the information to fill the singers and location section //

const singers = [{
  image: ['images/singers/shankar.jpg', 'shankar mahadevan at mumbai'],
  name: 'Shankar mahadevan',
  role: 'singer, writer, and composer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/lata.jpg'],
  name: 'Lata Mangeshakar',
  role: 'Songwriter and lead singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/arjit.jpg'],
  name: 'Arjit singh',
  role: 'Songwriter ,composer and  singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/sonu.jpg'],
  name: 'sonu nigam',
  role: 'Songwriter and  singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/kher.jpg'],
  name: 'kelash kher',
  role: 'Songwriter and singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/mumbai.jpg'],
  name: 'Mumbai arban',
  role: 'Location',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
}];

// locate where to place the tags in the HTML //
const sec = document.querySelector('.information');

const musicCont = document.createElement('div');
musicCont.classList.add('musicCont');
sec.appendChild(musicCont);

// function to set up - cards information //
function band(artist) {
  const divCard = document.createElement('div');
  divCard.classList.add('divCard');
  musicCont.appendChild(divCard);
  // div that holds the image and img tag creation //
  const divImg = document.createElement('div');
  divImg.classList.add('divImg');
  divCard.appendChild(divImg);
  const contImg = document.createElement('div');
  contImg.classList.add('contImg');
  divImg.appendChild(contImg);
  const img = document.createElement('img');
  img.setAttribute('src', artist.image[0]);
  img.setAttribute('alt', artist.image[1]);
  contImg.appendChild(img);
  // div that holds the details //
  const divInfo = document.createElement('div');
  divInfo.classList.add('divInfo');
  divCard.appendChild(divInfo);
  const infoTitle = document.createElement('h3');
  infoTitle.textContent = artist.name;
  divInfo.appendChild(infoTitle);
  const infoRole = document.createElement('h4');
  infoRole.textContent = artist.role;
  divInfo.appendChild(infoRole);
  const separate = document.createElement('div');
  separate.classList.add('separate');
  divInfo.appendChild(separate);
  const infoP = document.createElement('p');
  infoP.textContent = artist.info;
  divInfo.appendChild(infoP);
}

// ForEach loop to apply the function band in the array singers elements //
singers.forEach((e) => {
  band(e);
});

// Array that holds the company images //

const company = [{
  name: ['images/png/firefox.png', 'Firefox logo, '],
},
{
  name: ['images/png/google.png', 'Google logo '],
},
{
  name: ['images/png/naver.png', 'Naver logo '],
},
{
  name: ['images/png/daun.png', 'Daun logo '],
},
{
  name: ['images/png/airbnb.png', 'Airbnb logo '],
}];

const sponsor = document.querySelector('footer');

// div to hold all the images //
const sponsorCont = document.createElement('div');
sponsorCont.classList.add('sponsorCont');
sponsor.appendChild(sponsorCont);

function footer(brand) {
  // Div to contain each image //
  const sponsorDiv = document.createElement('div');
  sponsorDiv.classList.add('sponsorDiv');
  sponsorCont.appendChild(sponsorDiv);
  // Image src and atl attribute //
  const sponsorImg = document.createElement('img');
  sponsorImg.classList.add('sponsorImg');
  sponsorImg.setAttribute('src', brand.name[0]);
  sponsorImg.setAttribute('alt', brand.name[1]);
  sponsorDiv.appendChild(sponsorImg);
}

company.forEach((value) => {
  footer(value);
});

// Last footer part //
const last = document.createElement('div');
last.classList.add('last');
sponsor.appendChild(last);

const logContainer = document.createElement('div');
logContainer.classList.add('logContainer');
last.appendChild(logContainer);

const aLogo = document.createElement('a');
aLogo.classList.add('aLogo');
aLogo.setAttribute('href', '#');
logContainer.appendChild(aLogo);

const lastLogo = document.createElement('img');
lastLogo.setAttribute('src', 'images/png/logo1.png');
lastLogo.setAttribute('alt', 'Sony logo icon');
lastLogo.setAttribute('height', '70px');
aLogo.appendChild(lastLogo);

const infoDiv = document.createElement('div');
infoDiv.classList.add('infoDiv');
last.appendChild(infoDiv);

const infoDivH = document.createElement('h3');
infoDivH.textContent = '2023 Sony Music Festival';
infoDiv.appendChild(infoDivH);

const infoDivP = document.createElement('p');
infoDivP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere.';
infoDiv.appendChild(infoDivP);
