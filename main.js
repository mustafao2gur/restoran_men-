const click = document.querySelector(".btn-group");
click.addEventListener("click", (e)=>{

fetch("products.json") // burada promis dönüyor bize
    .then((data) => {
      return data.json();
    })
    .then((res) => menu(res));


   const menu=(menuJ)=>{
    console.log(menuJ);
  const userArticle = document.querySelector(".users");
  menuJ.forEach((x) => {
    if(x.type === e.target.id){
userArticle.innerHTML = `
    <div class="col">
        <div class="card">
          <img src="${x.img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${x.name} <span>${x.price}</span></h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>`;
    };

   });

   }


});



//!fonskiyon
// function getJSON(){
// fetch("products.json")
// .then((response)=>{
// console.log((response).json());
// })
// }