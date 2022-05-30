// Add the coffee to local storage with key "coffee"

const url="https://masai-mock-api.herokuapp.com/coffee/menu";


async function getData() {
    try {
      let res = await fetch(url);
      let products = await res.json(); 
      append(products.menu.data);
      console.log(products.menu.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  getData();


  function append(Data) {
    let container = document.getElementById("menu");
    Data.forEach(function (elem) {
      let img = document.createElement("img");
      img.src = elem.image;
      img.style.width="100%"
  
      let h5 = document.createElement("h5");
      h5.innerText = elem.title;
  
      let p = document.createElement("p");
      p.innerText = elem.price;
  
      let div = document.createElement("div");
      div.setAttribute("id","innerdiv")
      div.style.height="200px";
      div.style.width="70%";
      div.style.border="1px solid red"
      

      div.append( p);
  
      container.append(div);
    });
  }
  
