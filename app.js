const menu = [
 {
    name: "Biftek",
    price: "5$",
    img: "https://www.tarifinisevdim.com/uploads/recipe-photos/1920x1280/evde-lezzetli-biftek-pisirmenin-7-puf-noktasi-e69c6e.Jpeg",
    text: "Dana Biftek",
    type: "Dinner",
  },
  {
    name: "Serpme Kahvalti",
    price: "3$",
    img: "https://i.pinimg.com/originals/7e/2c/32/7e2c3247152411ad7459fee0c0f2dc49.jpg",
    text: "Van Kahvaltısı",
    type: "Breakfast",
  },
  {
    name: "Spagetti",
    price: "4$",
    img: "https://i.lezzet.com.tr/images-xxlarge/domates-soslu-spagetti-6183f20b-f88d-4e19-99d5-f337c8cedb4e",
    text: "tortelli",
    type: "Lunch",
  },
  {
    name: "Chocolate ice cream",
    price: "1$",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKEJsTWEQjdlEG95d6kZ0rc_Ueo_AZM6g7g&usqp=CAU",
    text: "cheesecake",
    type: "Shakes",
  },
];


let createElement = (typ) => {
  menu.forEach((obj) => {
    let { name, price, img, text, type } = obj;
    if (typ === type || typ=="All") {
      let createItemMenu = document.createElement("menu");
  
      createItemMenu.className = "row row-cols-1 row-cols-md-2 g-4";
      console.log(createItemMenu);
      document.body.appendChild(createItemMenu);

      let craeteItemArticle = document.createElement("article");
      craeteItemArticle.className = "col";
      createItemMenu.appendChild(craeteItemArticle);

      let createItemCard = document.createElement("div");
      createItemCard.className = "card";
      craeteItemArticle.appendChild(createItemCard);

      let createItemImg = document.createElement("img");
      createItemImg.className = "card-img-top";
      createItemCard.appendChild(createItemImg);
      createItemImg.src = img;

      let craeteItemSection = document.createElement("section");
      craeteItemSection.className = "card-body";
      createItemCard.appendChild(craeteItemSection);

      let craeteItemh5 = document.createElement("h5");
      craeteItemh5.className = "card-title";
      craeteItemh5.innerText = name;
      let createItemPrice = document.createElement("span");
      createItemPrice.id = "price";
      craeteItemh5.appendChild(createItemPrice);
      createItemPrice.innerText = price;

      craeteItemSection.appendChild(craeteItemh5);
      let createItemP = document.createElement("p");
      createItemP.className = "card-explain";
      createItemP.innerText = text;

      craeteItemSection.appendChild(createItemP);

  

      console.log(createItemMenu);
    }

  });
};


window.addEventListener("load",createElement("All"))

menu.filter(function (x) {
  x.type
  console.log(x.type);
});



const click = document.querySelector(".btn-group");
click.addEventListener("click", (e) => {

const click = document.querySelector(".btn-group");
click.addEventListener("click", (e) => {
  console.log(e.target.innerText);

  let newMenu = menu.filter((x) => x.type == e.target.innerText);

  newMenu.forEach((x) => {
    let { name, price, text, type, img } = x;
    createElement(name, price, text, type, img);
  });

  console.log(newMenu);
});v
    
});