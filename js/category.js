const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://zjotvcbadfuutmuazywg.supabase.co/rest/v1/wildfood"

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqb3R2Y2JhZGZ1dXRtdWF6eXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk0NDIsImV4cCI6MjAyMzY1NTQ0Mn0.XEUaGYH4dOSjy_IarpkViFPDTlNJ4jiOwej4MMS8KkA",
  },
})
  .then((res) => res.json())
  .then(showCategories);

  function showCategories (cat){
    const template = document.querySelector("template").content;
    const addedCategories = new Set ();

    cat.forEach((oneCat) => {
        const catName = oneCat.Cat;

        if (!addedCategories.has(catName)) {
            console.log("Adding cat:", catName);

            const clone = template.cloneNode(true);
            clone.querySelector("a").textContent=catName;
            clone.querySelector("a").href = `productlist.html?category=${catName}`;
            clone.querySelector("main").appendChild(clone);

            addedCategories.add(catName);
        }
    });
} 


function showCategory(cat){

    const template = document.querySelector("template").content;

    const clone = template.cloneNode(true);

    clone.querySelector("a").textContent=cat.season;
    clone.querySelector("a").href=`productlist.html?category=${cat.category}`;

    document.querySelector(".category ol").appendChild(clone);

}

