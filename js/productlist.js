//https://zjotvcbadfuutmuazywg.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA

fetch("https://zjotvcbadfuutmuazywg.supabase.co/rest/v1/wildfood", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA",
  },
})
  .then(res => res.json())
  .then(data => showData(data))

function showData(items) {
  items.forEach(item => {
    showItem(item);
  });
}

function showItem(item) {
 /*  console.log(item); */
  const template = document.querySelector("#productlistTemplate").content;

  const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = item.Name;
/*   copy.querySelector("p").textContent = item.Description; */

  document.querySelector("main").appendChild(copy);

}


