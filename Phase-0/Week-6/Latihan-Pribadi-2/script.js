// Pertama ambil tag body
var body = document.body;

// Ambil children dari tag body dengan nilai id
var divContainer = document.getElementById("container");

// Ambil children dari div container dengan nilai id
var h1Container = document.getElementById("fill-me");
h1Container.innerHTML = "HALO!";

// Ambil children dari div container dengan nilai class
var classParagraph = document.getElementsByClassName("change-all-of-me");
for (var i = 0; i < classParagraph.length; i++) {
    classParagraph[i].innerHTML = "HALO JUGA!";
}

// Ambil children dari div container dengan nilai tag
var h2Container = document.getElementsByTagName("h2");
h2Container[0].innerHTML = "Apa Kabar!";