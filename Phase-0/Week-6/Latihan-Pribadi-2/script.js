// Pertama ambil tag body
var body = document.body;

// Ambil children dari tag body dengan nilai id
var divEldestParent = document.getElementById("eldest-parent");

// Ambil children dari div eldest parent dengan method children
var divPertama = divEldestParent.children;
divPertama[0].innerHTML = "Diakses Melalui Eldest Parent";

// Ambil children dari tag body dengan nilai id
var divAChild = document.getElementById("a-child");

// Ambil previousSibling dari div achild
var divPrevSibling = divAChild.previousElementSibling;
divPrevSibling.innerHTML = "Diakses Melalui a Child";

// Ambil nextSibling dari div achild
var divNextSibling = divAChild.nextElementSibling;
divNextSibling.innerHTML = "Diakses Melalui a Child";

// Ambil nextSibling dari div achild
var divNextSibling = divAChild.nextElementSibling;
divNextSibling.innerHTML = "Diakses Melalui a Child";

// Ambil parentNode dua kali ke atas dan nextSibling dari div achild
var divParentNode = divAChild.parentNode.parentNode.nextElementSibling;
divParentNode.innerHTML = "Diakses Melalui a Child";
