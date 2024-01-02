var SiteNameInput = document.getElementById("SiteName");
var SiteURLInput = document.getElementById("SiteURL");
var alertMessage = document.getElementById("alertMessage");

var productList = [];

if (localStorage.getItem("products") != null) {
  productList = JSON.parse(localStorage.getItem("products"));
  display();
}

function addProduct() {
  if (rejexName() && rejexUrl()) {
    var product = {
      siteName: SiteURLInput.value,
      SiteURL: SiteURLInput.value,
    };
    productList.push(product);
    localStorage.setItem("products", JSON.stringify(productList));

    clear();
    display();
  } else {
    alertMessage.classList.remove("d-none");
  }
}

function clear() {
  SiteNameInput.value = "";
  SiteURLInput.value = "";
}

function display() {
  var displayList = "";
  for (var i = 0; i < productList.length; i++) {
    displayList += `<tr>
<td>${[i]}</td>
<td>  ${productList[i].siteName}</td>
<td><button class="btn btn-warning">  <a href="${
      productList[i].SiteURL
    }"><i class="fa-solid fa-eye col"></i> Visit </a</button></td>
<td> <button  onclick="deletItem(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> Delete </button></td>
</tr>`;
  }
  document.getElementById("tableContent").innerHTML = displayList;
}

function deletItem(index) {
  productList.splice(index, 1);
  display();
}

function rejexName() {
  var text = SiteNameInput.value;
  var rejex = /^[A-Z][a-z]{3,8}$/;

  if (rejex.test(text)) {
    SiteNameInput.classList.add("is-valid");
    SiteNameInput.classList.remove("is-invalid");
  } else {
    SiteNameInput.classList.add("is-invalid");
    SiteNameInput.classList.remove("is-valid");
  }
}

function rejexUrl() {
  var text = SiteURLInput.value;
  var rejex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (rejex.test(text)) {
    SiteURLInput.classList.add("is-valid");
    SiteURLInput.classList.remove("is-invalid");
  } else {
    SiteURLInput.classList.add("is-invalid");
    SiteURLInput.classList.remove("is-valid");
  }
}

function removeDnone() {
  alertMessage.classList.add("d-none");
}
