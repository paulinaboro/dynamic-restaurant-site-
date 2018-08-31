//Collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


const link = "https://kea-alt-del.dk/t5/api/productlist";
const imgbase = "http://kea-alt-del.dk/t5/site/imgs/";
const parent = document.querySelector("main");
const myTemplate = document.querySelector("#myTemplate").content;

fetch(link).then(promise => promise.json()).then(data => show(data));

function show(plist) {
    plist.forEach(product => {
        console.log(product.name);
        const clone = myTemplate.cloneNode(true);
        clone.querySelector(".productImage").src = imgbase + "small/" + product.image + "-sm.jpg";
        clone.querySelector(".title").textContent = product.name;
        clone.querySelector(".price").textContent = product.price;
        clone.querySelector(".shortDescription").textContent = product.shortdescription;
        clone.querySelector(".longDescription").textContent = product.longdescription;
        parent.appendChild(clone);
    })
}
