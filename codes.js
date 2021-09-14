let selfCoder = document.getElementById("fName");
let selfLang = document.getElementById("proLang");
let searchBtn = document.getElementById("btn-find");
let youAre = document.getElementById("you");
let coderImage = document.getElementById("code-avatar");
let coderName = document.getElementById("code-name");
let coderCountry = document.getElementById("code-country");
let coderMail = document.getElementById("code-mail");
let premium = document.querySelector(".premium");
let proLang = document.getElementById("lang");
// languages array for random lang
let programmingLangs = [
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "HTML",
  "ERLANG",
  "ML",
  "TCL",
  "SELF",
  "DBASE",
  "CAML",
  "CLOJURE",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "ANGULAR",
  "VUE",
  "PHP",
  "F#",
  "C#",
  "C++",
  "PYTHON",
  "DJANGO",
  "FLUTTER",
  "JAVA",
  "ASSEMBLY",
  "HACK",
  "TYPESCRIPT",
  "AQL",
  "GROOVY",
  "CLASSIC VISUAL BASIC",
  "RUBY",
  "R",
  "WSIFT",
  "GO",
  "PROLOG",
  "PERL",
  "MATLAB",
  "DART",
  "RUST",
  "VBA",
  "SCALA",
  "ADA",
  "LUA",
  "COBOL",
  "PASCAL",
  "DELPHI",
  "JULIA",
  "HASKELL",
  "ABAP",
  "APS.NET",
  "REACT NATIVE",
  "XAMARIN",
  "OBJECTIVE C",
  "NODE.JS",
  "FLASK",
  "TENSORFLOW",
  "PYTORCH",
  "NUMPY",
  "SCIPY",
  "PANDAS",
  "NUMPY",
];

premium.addEventListener("click", () => {
  alert(
    "برای هم کد شدن با محسن مدحج نیاز به حساب ویژه دارید، باتوسعه دهنده هماهنگ کنید"
  );
});

const eventHandlers = () => {
  getUserData();
};
const getUserData = () => {
  if (selfCoder.vlaue !== "" && selfLang.value !== "") {
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `شما ${selfCoder.value}  هستید  ${selfLang.value} کد میزنید`
      )
    );
    youAre.appendChild(li);
    document.querySelector(".you-are").classList.remove("hide");
    document.querySelector(".codemate-card").classList.remove("hider");
    selfCoder.value = "";
    selfLang.value = "";
    findCoders();
  } else {
    alert("مقادیر را مثل آدم بنویس");
    return false;
  }
};

const findCoders = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      let userData = data.results[0];
      let imgSrc = `<img src="${userData.picture.medium}">`;
      let cardImage = document.querySelector(".img");
      cardImage.innerHTML = imgSrc;
    });

  let fakeName = faker.name.findName();
  coderName.innerHTML = `نام : ${fakeName}`;

  const fakeCountry = faker.address.country();
  coderCountry.innerHTML = `کشور : ${fakeCountry}`;

  const fakeMail = faker.phone.phoneNumber();
  coderMail.innerHTML = `شماره : ${fakeMail}`;
  let rand =
    programmingLangs[Math.floor(Math.random() * programmingLangs.length) - 1];
  proLang.innerHTML = `زبان :${rand}`;
};
