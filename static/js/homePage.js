
function getCategoriesData() {
  return fetch("http://54.64.173.185:3000/api/categories").then((response) =>
    response.json()
  );
}

function getAttractionsData(page = 0, keyword = "") {
  loadingFlag = true;
  const loading = document.querySelectorAll("my-loading")[0]
  loading.setAttribute("display","yes")
  if (keyword == "") {
    return fetch(`http://54.64.173.185:3000/api/attractions?page=${page}`).then(
      (response) => response.json()
    );
  } else {
    return fetch(
      `http://54.64.173.185:3000/api/attractions?page=${page}&keyword=${keyword}`
    ).then((response) => response.json());
  }
}

function createIndexView(req = getAttractionsData()) {
  const loading = document.querySelectorAll("my-loading")[0]
  
  req
    .then((data) => {
      if (data["data"].length != 0) {
        loading.setAttribute("display","no")
        nextPage = data["nextPage"];
        let el = document.querySelectorAll(".viewGridContainer")[0];
        for (let i = 0; i < data["data"].length; i++) {
          let newGridItemDiv = document.createElement("div");
          newGridItemDiv.className = "gridItem";
          let id = data["data"][i]["id"];
          newGridItemDiv.onclick = () => {
            window.location.assign(
              window.location.href + "attraction/" + id.toString()
            );
          };
          // view image
          let newImg = document.createElement("img");
          let str = data["data"][i]["images"][0];
          newImg.src = "https://" + str;

          // view tittle
          let title = data["data"][i]["name"];
          let newTitleDiv = document.createElement("div");
          let newA = document.createElement("a");
          let newContent = document.createTextNode(title);
          newA.appendChild(newContent);
          newTitleDiv.appendChild(newA);
          newTitleDiv.className = "gridItemTitle";

          // view info
          let newGridInfoDiv = document.createElement("div");
          newGridInfoDiv.className = "gridItemInfo";
          // mrt
          let mrt = data["data"][i]["mrt"];
          let newGridInfoMrtDiv = document.createElement("div");
          newGridInfoMrtDiv.className = "mrtName";
          let newMrtA = document.createElement("a");
          let newMrtContent = document.createTextNode(mrt);
          newMrtA.appendChild(newMrtContent);
          newGridInfoMrtDiv.appendChild(newMrtA);
          // category
          let category = data["data"][i]["category"];
          let newGridInfoCategorytDiv = document.createElement("div");
          newGridInfoCategorytDiv.className = "categoryName";
          let newCategorytA = document.createElement("a");
          let newCategorytContent = document.createTextNode(category);
          newCategorytA.appendChild(newCategorytContent);
          newGridInfoCategorytDiv.appendChild(newCategorytA);

          newGridInfoDiv.appendChild(newGridInfoMrtDiv);
          newGridInfoDiv.appendChild(newGridInfoCategorytDiv);

          newGridItemDiv.appendChild(newImg);
          newGridItemDiv.appendChild(newTitleDiv);
          newGridItemDiv.appendChild(newGridInfoDiv);
          el.appendChild(newGridItemDiv);
        }
      } else {
        let el = document.querySelectorAll(".viewGridContainer")[0];
        let newA = document.createElement("a");
        let newContent = document.createTextNode("沒有結果");
        newA.id = "nonfound";
        newA.appendChild(newContent);
        el.appendChild(newA);
      }
    })
    .then(() => {
      loadingFlag = false;
      detectFooter();
    });
}
function loadHomePage() {
  createIndexView();
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  callback = (entries, observer) => {
    let thirdLi = document.querySelectorAll(".gridItem");
    entries.forEach((entry) => {
      if (entry.isIntersecting === true && thirdLi.length != 0) {
        if (nextPage === null) {
        } else {
          if (loadingFlag === false) {
            createIndexView(
              (req = getAttractionsData((page = nextPage), (keyword = "")))
            );
          }
        }
      }
    });
  };
  observer = new IntersectionObserver(callback, options);
  let target = document.querySelectorAll(".footer")[0];
  observer.observe(target);
}

function searchKeyword() {
  observer.disconnect();
  const nonfoundNode = document.querySelectorAll("#nonfound");
  nonfoundNode.forEach((item) => {
    item.remove();
  });
  const elements = document.querySelectorAll(".gridItem");
  elements.forEach((item) => {
    item.remove();
  });
  keyword = document.querySelectorAll("#searchInput")[0].value;

  createIndexView((req = getAttractionsData((page = 0), (keyword = keyword))));

  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.0,
  };

  callback = (entries, observer) => {
    let thirdLi = document.querySelectorAll(".gridItem");
    entries.forEach((entry) => {
      if (entry.isIntersecting === true && thirdLi.length != 0) {
        if (nextPage === null) {
        } else {
          if (loadingFlag === false) {
            createIndexView(
              (req = getAttractionsData((page = nextPage), (keyword = keyword)))
            );
          }
        }
      }
    });
  };

  observer = new IntersectionObserver(callback, options);
  let target = document.querySelectorAll(".footer")[0];
  observer.observe(target);
}

function categoriesList(req = getCategoriesData()) {
  let categoriesListBlock = document.querySelectorAll(".categoriesList")[0];
  let categoriesListGridContainer = document.createElement("div");
  categoriesListGridContainer.className = "categoriesListGridContainer";
  let searchKeyword = document.querySelectorAll(".viewSearch")[0];
  req.then((data) => {
    for (let i = 0; i < data["data"].length; i++) {
      let category = data["data"][i];
      let newCategoryDiv = document.createElement("div");
      let newA = document.createElement("a");
      let newContent = document.createTextNode(category);
      newCategoryDiv.onclick = (e) => {
        searchKeyword.value = e.target.innerText;
        categoriesListBlock.style.display = "none";
      };
      newA.appendChild(newContent);
      newCategoryDiv.appendChild(newA);
      newCategoryDiv.className = "gridCategoryTitle";
      categoriesListGridContainer.appendChild(newCategoryDiv);
    }
    categoriesListBlock.appendChild(categoriesListGridContainer);
  });
}

function showList() {
  let categoriesListBlock = document.querySelectorAll(".categoriesList")[0];
  categoriesListBlock.style.display = "flex";
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
    let tops = windowHeight - footerHeight;
    footer.style.top = `${tops}px`;
  } else {
    footer.style.position = "relative";
    footer.style.top = "120px";
  }
}

let nextPage = null;
let loadingFlag = false;
let observer;
let callback;
let options;

window.onload = () => {
  loadHomePage();
  categoriesList();
};
window.onscroll = function () {
  sticky();
  detectFooter();
};
document.addEventListener("click", (e) => {
  if (e.target.className != "viewSearch") {
    let categoriesListBlock = document.querySelectorAll(".categoriesList")[0];
    categoriesListBlock.style.display = "none";
  }
});

