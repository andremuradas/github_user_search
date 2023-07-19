let modeBtn = document.querySelector('header .right');

// Get the root element
let r = document.querySelector(':root');
let rs = getComputedStyle(r);
  
let bgColorLight1 = rs.getPropertyValue('--ligth-background-1');
let bgColorDark1 = rs.getPropertyValue('--dark-background-1');
let bgColorLight2 = rs.getPropertyValue('--ligth-background-2');
let bgColorDark2 = rs.getPropertyValue('--dark-background-2');
let ColorLight1 = rs.getPropertyValue('--ligth-color-1');
let ColorLight2 = rs.getPropertyValue('--ligth-color-2');
let ColorLight3 = rs.getPropertyValue('--ligth-color-3');
let ColorLight4 = rs.getPropertyValue('--ligth-color-4');
let ColorDark = rs.getPropertyValue('--dark-color');

function darkTheme() {

  r.style.setProperty('--ligth-background-1', bgColorDark1);
  r.style.setProperty('--ligth-background-2', bgColorDark2);
  r.style.setProperty('--ligth-color-1', ColorDark);
  r.style.setProperty('--ligth-color-2', ColorDark);
  r.style.setProperty('--ligth-color-3', ColorDark);
  r.style.setProperty('--ligth-color-4', ColorDark);
}

function lightTheme() {

  r.style.setProperty('--ligth-background-1', bgColorLight1);
  r.style.setProperty('--ligth-background-2', bgColorLight2);
  r.style.setProperty('--ligth-color-1', ColorLight1);
  r.style.setProperty('--ligth-color-2', ColorLight2);
  r.style.setProperty('--ligth-color-3', ColorLight3);
  r.style.setProperty('--ligth-color-4', ColorLight4);
}

function svgDarkTheme()
{
  let svgImg = document.querySelectorAll('svg path');
  for(var i = 0; i < svgImg.length; i++){
    svgImg[i].setAttribute('class','fillDark');
  }
}

function svgLightkTheme()
{
  let svgImg = document.querySelectorAll('svg path');
  for(var i = 0; i < svgImg.length; i++){
    svgImg[i].removeAttribute('class');
  }
}


modeBtn.addEventListener('click', () => {
  if(modeBtn.children[0].innerText == 'DARK'){
    darkTheme();
    svgDarkTheme()
    modeBtn.children[0].innerText = "LIGHT";
    modeBtn.children[1].innerHTML = ""
    modeBtn.children[1].innerHTML = `
      <g fill="#FFF" fill-rule="nonzero">
      <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/>
      </g>
  `


  }else if(modeBtn.children[0].innerText == 'LIGHT'){
    lightTheme();
    svgLightkTheme()
    modeBtn.children[0].innerText = "DARK";
    modeBtn.children[1].innerHTML = ""
    modeBtn.children[1].innerHTML = `
      <path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/>
  `
  }
});

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'short' });
}


function load(){
  fetch('https://api.github.com/users/'+searchInput.value)
      .then(function(resultado){
          return resultado.json();
      })
      .then(function(json){
          console.log(json);
          avatar.setAttribute('src',json.avatar_url);
          userName.innerHTML = json.name;
          login.innerHTML ="@"+json.login;

          let created = json.created_at;
          let day = created.split("-")[2].slice(0, 2);
          let month = getMonthName(created.split("-")[1]);
          let year = created.split("-")[0];
          createdAt.innerHTML = "Joined "+day+" "+month+" "+year;

          if(json.bio !== null){
            bio.innerHTML = json.bio;
            
          } else {
            bio.innerHTML = "This profile has no bio";
          }

          reposNumber.innerHTML = json.public_repos;
          followersNumber.innerHTML = json.followers;
          followingNumber.innerHTML = json.following;

          if(json.location !== null){
            userLocation.innerHTML = json.location;
          } else {
            userLocation.innerHTML = "Not Available";
          }

          if(json.blog !== ""){
            userWebsite.innerHTML = json.blog;
          } else {
            userWebsite.innerHTML = "Not Available";
          }

          if(json.twitter_username !== null){
            userTwitter.innerHTML = json.twitter_username;
          } else {
            userTwitter.innerHTML = "Not Available";
          }

          if(json.company !== null){
            userCompany.innerHTML = json.company;
          } else {
            userCompany.innerHTML = "Not Available";
          }
          
      })
      .catch(function(error){
          console.log("No results");
      })
}
let searchForm = document.querySelector('#search');
let searchBtn = document.querySelector('#searchBtn');
let searchInput = document.querySelector('#userName');
let avatar = document.querySelector('#avatar');
let userName = document.querySelector('#name');
let login = document.querySelector('#login');
let createdAt = document.querySelector('#createdAt');
let bio = document.querySelector('#bio');
let reposNumber = document.querySelector('#reposNumber');
let followersNumber = document.querySelector('#followersNumber');
let followingNumber = document.querySelector('#followingNumber');
let userLocation = document.querySelector('#userLocation');
let userWebsite = document.querySelector('#userWebsite');
let userTwitter = document.querySelector('#userTwitter');
let userCompany = document.querySelector('#userCompany');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  load()
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  load();
});

