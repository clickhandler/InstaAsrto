//   Gender
let selectfieldG = document.getElementById("selectfieldG");
let selecttextG = document.getElementById("selecttextG");
let optionG = document.getElementsByClassName("optionG");
let listG = document.getElementById("listG");
let arrowIconG = document.getElementById("arrow");

selectfieldG.onclick = function () {
  listG.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
for (optionG of optionG) {
  optionG.onclick = function () {
    selecttextG.innerHTML = this.textContent;
    listG.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

// Gender

// Date
let selectfield = document.getElementById("selectfield");
let selecttext = document.getElementById("selecttext");
let option = document.getElementsByClassName("option ");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrow");

selectfield.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
for (option of option) {
  option.onclick = function () {
    selecttext.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

// Date
//   month

let selectfield1 = document.getElementById("selectfield1");
let selecttext1 = document.getElementById("selecttext1");
let option1 = document.getElementsByClassName("option1");
let list1 = document.getElementById("list1");
let arrowIcon1 = document.getElementById("arrow");

selectfield1.onclick = function () {
  list1.classList.toggle("hide");
  arrowIcon1.classList.toggle("rotate");
};
for (option1 of option1) {
  option1.onclick = function () {
    selecttext1.innerHTML = this.textContent;
    list1.classList.toggle("hide");
    arrowIcon1.classList.toggle("rotate");
  };
}

//    Year

let selectfieldY = document.getElementById("selectfieldY");
let selecttextY = document.getElementById("selecttextY");
let optionY = document.getElementsByClassName("optionY");
let listY = document.getElementById("listY");
let arrowIconY = document.getElementById("arrow");

selectfieldY.onclick = function () {
  listY.classList.toggle("hide");
  arrowIconY.classList.toggle("rotate");
};
for (optionY of optionY) {
  optionY.onclick = function () {
    selecttextY.innerHTML = this.textContent;
    listY.classList.toggle("hide");
    arrowIconY.classList.toggle("rotate");
  };
}

// Year

function popFun() {
  let Result = Math.floor(Math.random() * 100);

  let p = document.getElementById("pTag");
  p.innerText = `The Result of Your Love is Lies in Number.The Percentage is: ${Result}% `;
  console.log(Result);
}

function popFun1() {
  let p = document.getElementById("pTag");
  p.innerText = "";
}
