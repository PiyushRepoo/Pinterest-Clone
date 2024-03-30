const accessKey = "t1cpVcMtLKz51ZIXYHY4e-dtQyuNYJRAnzkTJANZsOU";

const apiKey = "cObNu90NGETWRWHjrcu4XVZQTU7YiLhPLrwLxEASHLAyguhQlXsKcvQc";

const inputBox = document.getElementById("inputBox");
const mainBox = document.querySelector(".mainBox");
const main = document.querySelector("main");
const img = document.querySelector("img");

let keyword = "";
let page = 1;
// async function searchImages() {
//   keyword = inputBox.value;
//   // keyword.replace(/\s/g, "");
//   console.log(keyword);
//   const url = `https://api.unsplash.com/search/users?page=${page}&query=${keyword}&client_id=${accessKey}`;
//   console.log(url);
//   const res = await fetch(url);
//   const data = await res.json();

//   const results = data.results;

//   results.map((result) => {
//     let link = result.photos[0].urls.regular;
//     console.log(link);

//     let div = document.createElement("div");
//     div.classList.add("image");

//     let img = document.createElement("img");
//     img.classList.add("img");
//     img.src = link;

//     div.append(img);
//     main.prepend(div);
//   });
// }

let per_page = 15;
let current_page = 1;

async function getImages() {
  console.log("Run");

  keyword = inputBox.value;
  const url = `https://api.pexels.com/v1/search?query=${keyword}$page=${current_page}&per_page=${per_page}`;

  let results = await fetch(url, {
    headers: { Authorization: apiKey },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.photos;
    });
  // console.log(results);

  results.map((result) => {
    let link = result.src.original;

    let div = document.createElement("div");
    div.classList.add("image");

    let img = document.createElement("img");
    img.classList.add("img");
    img.src = link;

    div.append(img);
    mainBox.prepend(div);
  });
}

document.addEventListener("keypress", (e) => {
  // console.log(e.code);

  if (e.code == "KeyB") {
    inputBox.focus();
  }
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=> {
  mainBox.innerHTML = '';
  getImages();
  inputBox.value = "";
  //document.body.style.backgroundColor = "red";
});

inputBox.addEventListener("keypress", (e) => {
  // e.preventDefault();
  // page = 1;
  // current_page = 1;

  if (e.code == "Enter") {
    // searchImages();
    // main.firstElementChild.remove();
    mainBox.innerHTML = '';
    getImages();
    inputBox.value = "";
  }
});
