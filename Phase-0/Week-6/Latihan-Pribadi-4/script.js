// Pertama ambil tag body
var body = document.body;

// Ambil children dari tag body dengan nilai id = main
var divMain = document.getElementById("main");

// ==================== Div Content ====================
// Buat tag div dengan id = "content" di dalam div main
var divContent = document.createElement("div");
var divContentId = document.createAttribute("id");
divContentId.value = "content";
divContent.setAttributeNode(divContentId);
divMain.appendChild(divContent);

// ================ Div Content Post 1 ====================
// Buat tag div content-post dengan id = "content-post" di dalam div content
var divContentPost1 = document.createElement("div");
divContentPost1.setAttribute("id", "content-post");
divContent.appendChild(divContentPost1);

// Buat tag h1 di dalam div content post 1
var divContentPost1h1 = document.createElement("h1");
var divContentPost1h1Text = document.createTextNode("Judul Post");
divContentPost1h1.appendChild(divContentPost1h1Text);
divContentPost1.appendChild(divContentPost1h1);

// Buat tag span di dalam div content post 1
var divContentPost1Span = document.createElement("span");
var divContentPost1SpanText = document.createTextNode("Published on 12 May 2016");
divContentPost1Span.appendChild(divContentPost1SpanText);
divContentPost1.appendChild(divContentPost1Span);

// Buat tag p di dalam div content post 1
var divContentPost1P = document.createElement("p");
var divContentPost1PText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
divContentPost1P.appendChild(divContentPost1PText);
divContentPost1.appendChild(divContentPost1P);

// Buat tag button di dalam div content post 1
var divContentPost1Button = document.createElement("button");
var divContentPost1ButtonText = document.createTextNode("Share this Post");
divContentPost1Button.setAttribute("class", "share-post-btn");
divContentPost1Button.appendChild(divContentPost1ButtonText);
divContentPost1Button.addEventListener("click", function () {
    alert("You have shared this post!");
});
divContentPost1.appendChild(divContentPost1Button);

// ================ Div Content Post 2 ====================
// Buat tag div content-post dengan id = "content-post" di dalam div content
var divContentPost2 = document.createElement("div");
divContentPost2.setAttribute("id", "content-post");
divContent.appendChild(divContentPost2);

// Buat tag h1 di dalam div content post 2
var divContentPost2h1 = document.createElement("h1");
var divContentPost2h1Text = document.createTextNode("Judul Post 2");
divContentPost2h1.appendChild(divContentPost2h1Text);
divContentPost2.appendChild(divContentPost2h1);

// Buat tag span di dalam div content post 2
var divContentPost2Span = document.createElement("span");
var divContentPost2SpanText = document.createTextNode("Published on 13 May 2016");
divContentPost2Span.appendChild(divContentPost2SpanText);
divContentPost2.appendChild(divContentPost2Span);

// Buat tag p di dalam div content post 2
var divContentPost2P = document.createElement("p");
var divContentPost2PText = document.createTextNode("Lorem Ipsum Dolor Sit Amet");
divContentPost2P.appendChild(divContentPost2PText);
divContentPost2.appendChild(divContentPost2P);

// Buat tag button di dalam div content post 2
var divContentPost2Button = document.createElement("button");
var divContentPost2ButtonText = document.createTextNode("Share this Post");
divContentPost2Button.setAttribute("class", "share-post-btn");
divContentPost2Button.appendChild(divContentPost2ButtonText);
divContentPost2Button.addEventListener("click", function () {
    alert("You have shared this post!");
});
divContentPost2.appendChild(divContentPost2Button);
