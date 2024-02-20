//https://zjotvcbadfuutmuazywg.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA

fetch("https://zjotvcbadfuutmuazywg.supabase.co/rest/v1/wildfood", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA",
  },
})
  .then((res) => res.json())
  .then(showItems);

function showItems(items) {
  items.forEach(showItem);
}

function showItem(item) {
  console.log(item);
  const template = document.querySelector("#productlistTemplate").content;

  const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = item.Name;
    copy.querySelector("img").src = item.prof_img;
    
/*     copy.querySelector("p").textContent = item.Description;  */

copy.querySelector(".read_more").setAttribute("href",`product.html?id=${item.id}`);

  document.querySelector("main").appendChild(copy);

}


