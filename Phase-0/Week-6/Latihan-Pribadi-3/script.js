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

// ================ Div Content Head ====================
// Buat tag div content-head dengan id = "content-head" di dalam div content
var divContentHead = document.createElement("div");
divContentHead.setAttribute("id", "content-head");
divContent.appendChild(divContentHead);

// Buat tag h1 di dalam div content head
var divContentHeadH1 = document.createElement("h1");
divContentHeadH1.setAttribute("id", "form-title");
var divContentHeadH1Text = document.createTextNode("Registration Form");
divContentHeadH1.appendChild(divContentHeadH1Text);
divContentHead.appendChild(divContentHeadH1);
var divContentHeadStyle = document.getElementById("form-title");
divContentHeadStyle.style.color = "red";
divContentHeadStyle.style.textAlign = "center";

// ================ Div Content Form ====================
// Buat tag div content-form dengan id = "content-form" di dalam div content
var divContentForm = document.createElement("div");
divContentForm.setAttribute("id", "content-form");
divContent.appendChild(divContentForm);
// Buat tag form dengan id = "regis-form" di dalam div content-form
var divContentFormRegis = document.createElement("form");
divContentFormRegis.setAttribute("id", "regis-form");
divContentFormRegis.setAttribute("action", "#");
divContentForm.appendChild(divContentFormRegis);
var divContentFormRegisStyle = document.getElementById("content-form");
divContentFormRegisStyle.style.background = "pink";
divContentFormRegisStyle.style.borderRadius = "20px";
divContentFormRegisStyle.style.margin = "auto 30%";
divContentFormRegisStyle.style.padding = "20px";

// ======================================================
// Buat tag label di dalam div content-form untuk input text username
var divContentFormLabel1 = document.createElement("label");
var divContentFormLabel1Text = document.createTextNode("Username : ");
divContentFormLabel1.setAttribute("for", "username");
divContentFormLabel1.setAttribute("class", "label-input");
divContentFormLabel1.appendChild(divContentFormLabel1Text);
divContentFormRegis.appendChild(divContentFormLabel1);
var divContentFormLabel1BR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormLabel1BR);

// Buat input text untuk username di dalam div content-form
var divContentFormUsername = document.createElement("input");
divContentFormUsername.setAttribute("id", "username");
divContentFormUsername.setAttribute("type", "text");
divContentFormUsername.setAttribute("class", "text-input");
divContentFormRegis.appendChild(divContentFormUsername);
var divContentFormUsernameBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormUsernameBR);

// ======================================================
// Buat tag label di dalam div content-form untuk input text password
var divContentFormLabel2 = document.createElement("label");
var divContentFormLabel2Text = document.createTextNode("Password : ");
divContentFormLabel2.setAttribute("for", "password");
divContentFormLabel2.setAttribute("class", "label-input");
divContentFormLabel2.appendChild(divContentFormLabel2Text);
divContentFormRegis.appendChild(divContentFormLabel2);
var divContentFormLabel2BR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormLabel2BR);
// Buat input text untuk password di dalam div content-form
var divContentFormPassword = document.createElement("input");
divContentFormPassword.setAttribute("id", "password");
divContentFormPassword.setAttribute("type", "password");
divContentFormPassword.setAttribute("class", "text-input");
divContentFormRegis.appendChild(divContentFormPassword);
var divContentFormPasswordBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormPasswordBR);

// ======================================================
// Buat tag label di dalam div content-form untuk input text confirm password
var divContentFormLabel3 = document.createElement("label");
var divContentFormLabel3Text = document.createTextNode("Confirm Password : ");
divContentFormLabel3.setAttribute("for", "confirm-password");
divContentFormLabel3.setAttribute("class", "label-input");
divContentFormLabel3.appendChild(divContentFormLabel3Text);
divContentFormRegis.appendChild(divContentFormLabel3);
var divContentFormLabel3BR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormLabel3BR);
// Buat input text untuk confirm password di dalam div content-form
var divContentFormConfirmPassword = document.createElement("input");
divContentFormConfirmPassword.setAttribute("id", "confirm-password");
divContentFormConfirmPassword.setAttribute("type", "password");
divContentFormConfirmPassword.setAttribute("class", "text-input");
divContentFormRegis.appendChild(divContentFormConfirmPassword);
var divContentFormConfirmPasswordBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormConfirmPasswordBR);

// ======================================================
// Buat tag label di dalam div content-form untuk input text email
var divContentFormLabel4 = document.createElement("label");
var divContentFormLabel4Text = document.createTextNode("Email : ");
divContentFormLabel4.setAttribute("for", "email");
divContentFormLabel4.setAttribute("class", "label-input");
divContentFormLabel4.appendChild(divContentFormLabel4Text);
divContentFormRegis.appendChild(divContentFormLabel4);
var divContentFormLabel4BR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormLabel4BR);
// Buat input text untuk email di dalam div content-form
var divContentFormEmail = document.createElement("input");
divContentFormEmail.setAttribute("id", "email");
divContentFormEmail.setAttribute("type", "text");
divContentFormEmail.setAttribute("class", "text-input");
divContentFormRegis.appendChild(divContentFormEmail);
var divContentFormEmailBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormEmailBR);

// ======================================================
// Buat tag label di dalam div content-form untuk input text confirm email
var divContentFormLabel5 = document.createElement("label");
var divContentFormLabel5Text = document.createTextNode("Confirm Email : ");
divContentFormLabel5.setAttribute("for", "confirm-email");
divContentFormLabel5.setAttribute("class", "label-input");
divContentFormLabel5.appendChild(divContentFormLabel5Text);
divContentFormRegis.appendChild(divContentFormLabel5);
var divContentFormLabel5BR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormLabel5BR);
// Buat input text untuk confirm email di dalam div content-form
var divContentFormConfirmEmail = document.createElement("input");
divContentFormConfirmEmail.setAttribute("id", "confirm-email");
divContentFormConfirmEmail.setAttribute("type", "text");
divContentFormConfirmEmail.setAttribute("class", "text-input");
divContentFormRegis.appendChild(divContentFormConfirmEmail);
var divContentFormConfirmEmailBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormConfirmEmailBR);

// ======================================================
// Buat tag button di dalam div content-form untuk submit form
var divContentFormSubmitBR = document.createElement("br");
divContentFormRegis.appendChild(divContentFormSubmitBR);
var divContentFormSubmit = document.createElement("input");
var divContentFormSubmitText = document.createTextNode("Submit");
divContentFormSubmit.setAttribute("id", "submit-button");
divContentFormSubmit.setAttribute("type", "submit");
divContentFormSubmit.appendChild(divContentFormSubmitText);
divContentFormSubmit.addEventListener("click", function () {
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
    var inputConfirmPassword = document.getElementById("confirm-password").value;
    var inputEmail = document.getElementById("email").value;
    var inputConfirmEmail = document.getElementById("confirm-email").value;
    if (inputUsername === "") {
        alert("Username Tidak Boleh Kosong!");
    } else if (inputPassword === "") {
        alert("Password Tidak Boleh Kosong!");
    } else if (inputConfirmPassword === "") {
        alert("Password Confirmation Tidak Boleh Kosong!");
    } else if (inputEmail === "") {
        alert("Email Tidak Boleh Kosong!");
    } else if (inputConfirmEmail === "") {
        alert("Email Confirmation Tidak Boleh Kosong!");
    } else if (inputPassword !== inputConfirmPassword) {
        alert("Password Tidak Sama!");
    } else if (inputEmail !== inputConfirmEmail) {
        alert("Email Tidak Sama!");
    } else if (inputUsername.length < 6) {
        alert("Username minimal 6 karakter!");
    } else {
        document.getElementById("regis-form").submit();
        document.getElementById("regis-form").reset();
    }
});
divContentFormRegis.appendChild(divContentFormSubmit);
var divContentFormSubmitStyle = document.getElementById("submit-button");
divContentFormSubmitStyle.style.background = "red";
divContentFormSubmitStyle.style.color = "white";
divContentFormSubmitStyle.style.fontSize = "15px";
divContentFormSubmitStyle.style.borderRadius = "20px";
divContentFormSubmitStyle.style.width = "100px";
divContentFormSubmitStyle.style.margin = "auto 40%";

// ======================================================
// Buat styling label input
var divContentFormLabelStyle = document.getElementsByClassName("label-input");
for (var i = 0; i < divContentFormLabelStyle.length; i++) {
    divContentFormLabelStyle[i].style.fontWeight = "bold";
    divContentFormLabelStyle[i].style.color = "maroon";
}
// Buat styling text input
var divContentFormTextStyle = document.getElementsByClassName("text-input");
for (var i = 0; i < divContentFormTextStyle.length; i++) {
    divContentFormTextStyle[i].style.width = "100%";
}