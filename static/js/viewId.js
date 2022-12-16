function sticky() {
  let navbar = document.querySelectorAll(".navbar")[0];
  let navbarHeight = navbar.offsetHeight;
  if (window.pageYOffset >= navbarHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function getViewIdData() {
  const url = window.location.href;
  const strCopy = url.split("/");
  const id = strCopy[strCopy.length - 1];
  return fetch(`http://54.64.173.185:3000/api/attraction/${id}`).then(
    (response) => response.json()
  );
}

function loadVieInfo(getViewIdData) {
  req = getViewIdData;
  req.then((data) => {
    if (data["data"].length != 0) {
      createSlide(data["data"]["images"]);
      createInfo(data["data"]);
      showSlides(slideIndex);
    } else {
      alert("id error");
    }
  });
}
function createSlide(urlList) {
  let el = document.querySelectorAll(".slideshowContainer")[0];
  let newdotContainer = document.createElement("div");
  newdotContainer.className = "dotContainer";
  urlList.forEach((element, index) => {
    // insert image
    let newSlides = document.createElement("div");
    newSlides.className = "Slides fade ";
    newSlides.style.display = "none";
    let newImg = document.createElement("img");
    let imageStr = element;
    newImg.src = "https://" + imageStr;
    newSlides.appendChild(newImg);
    el.appendChild(newSlides);
    //insert dot
    let newDot = document.createElement("span");
    newDot.className = "dot";
    newDot.onclick = () => {
      currentSlide(index + 1);
    };
    newdotContainer.appendChild(newDot);
  });
  el.appendChild(newdotContainer);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".Slides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function createInfo(data) {
  let el = document.querySelectorAll("#tittle")[0];
  el.innerText = data["name"];
  el = document.querySelectorAll("#categoryAndMrt")[0];
  el.innerText = `${data["category"]} at ${data["mrt"]}`;
  let costEl = document.querySelectorAll("#cost")[0];
  costEl.innerText = "導覽費用：新台幣2000元";
  let radioEl = document.querySelectorAll("#morning")[0];
  radioEl.onclick = () => {
    costEl.innerText = "導覽費用：新台幣2000元";
  };
  radioEl = document.querySelectorAll("#afternoon")[0];
  radioEl.onclick = () => {
    costEl.innerText = "導覽費用：新台幣2500元";
  };
  el = document.querySelectorAll("#description")[0];
  el.innerText = data["description"];
  el = document.querySelectorAll("#adressContent")[0];
  el.innerText = data["address"];
  el = document.querySelectorAll("#transportContent")[0];
  el.innerText = data["transport"];
  detectFooter();
}

function formOffsetTop() {
  let formElement = document.querySelectorAll("form")[0];
  let formOffSetTop = formElement.offsetTop;
  let gridContainer = document.querySelectorAll(".slideshowContainer")[0]
    .clientHeight;
  let height = gridContainer - formOffSetTop;
  formElement.style.height = `${height}px`;
}

function detectFooter() {
  let windowHeight = document.documentElement.scrollHeight;
  let lastContentElement = document.querySelectorAll(".content")[0];
  let lastContentElementOffSet = lastContentElement.offsetTop;
  let lastContentElementheight = lastContentElement.clientHeight;
  let footer = document.querySelectorAll(".footer")[0];
  let footerOffSet = footer.offsetTop;
  let footerHeight = footer.clientHeight;
  if (
    windowHeight >
    lastContentElementOffSet + lastContentElementheight + footerHeight + 120
  ) {
    footer.style.position = "absolute";
    footer.style.top = "";
  } else {
    footer.style.position = "relative";
    footer.style.top = "120px";
  }
}

function bookingTrip() {
  const url = window.location.href;
  const strCopy = url.split("/");
  const attractionId = strCopy[strCopy.length - 1];
  const date = document.querySelectorAll("#formDate input")[0].value;
  const period = document.querySelectorAll(
    "#formPeriod input[name='period']:checked"
  )[0].value;
  const price = period === "morning" ? 2000 : 2500;

  const myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      attractionId: attractionId,
      date: date,
      time: period,
      price: price,
    }),
  };
  const res = fetch("/api/booking", requestOptions)
    .then(async (response) => {
      if (!response.ok) {
        let data = await response.json();
        let err = new Error("HTTP status code: " + response.status);
        err.response = data;
        err.status = response.status;
        throw err;
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
    }).catch((error)=>{switch (error.status) {
      case 403:
        const loginModal = document.querySelectorAll("my-loginmodal")[0];
        loginModal.setAttribute("display", "yes");
        break;
     }});
}

window.onload = () => {
  loadVieInfo(getViewIdData());
  formOffsetTop();
};
window.onscroll = function () {
  sticky();
};
addEventListener("resize", (event) => {
  if (document.documentElement.scrollWidth > 600) {
    formOffsetTop();
    detectFooter();
  } else {
    detectFooter();
  }
});

let slideIndex = 1;
let loadFinishFlag = false;
