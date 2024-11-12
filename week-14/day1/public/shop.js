console.log("Hello client");

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3001/products/api/all");
    const data = await res.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};
getProducts();

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div style="display:inline-block; 
                        border: 1px solid; 
                        margin:20px; 
                        padding:20px;"
            >
         <h2>${item.name}</h2>
         <h3>${item.price}</h3>
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

function formsubmit(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const price = e.target.price.value;
  console.log(name, price);
  fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  })
    .then((res) => {
      console.log(res);
      if(res.status === 201){
        getProducts()
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
