/* const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
?name.eq." + id,
 */
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =`https://zjotvcbadfuutmuazywg.supabase.co/rest/v1/wildfood?id=eq.` + id;

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA",
  },
})
  .then(response => response.json())
  .then((data) => {
    showProdut(data)
  });
  


function showProdut(product) {
    console.log(product);

    const template = document.querySelector("#produkt").content;
    const copy = template.cloneNode(true);

    copy.querySelector("p").textContent = product[0].Description;
    copy.querySelector("h1").textContent = product[0].Name;
    copy.querySelector(".info_cirkel1 p").textContent = product[0].Where_to_find;
    copy.querySelector(".info_cirkel2 p").textContent = product[0].how_to_pick;
    copy.querySelector(".info_cirkel3 p").textContent = product[0].how_to_spot;
    copy.querySelector("img").src = product[0].prof_img; 

    document.querySelector("main").appendChild(copy);
}

 
  