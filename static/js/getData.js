function sticky() {
  let navbar = document.querySelectorAll(".gridNav")[0];
  let navbarHeight = navbar.offsetHeight;
  if (window.pageYOffset >= navbarHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function getCategoriesData() {
  return fetch("http://54.64.173.185:3000/api/categories").then((response) =>
    response.json()
  );
}

function getAttractionsData(page = 0, keyword = "") {
  loadingFlag=true;
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
  req.then((data) => {
    if (data["data"].length != 0) {
      nextPage = data["nextPage"];
      let el = document.querySelectorAll(".viewGridContainer")[0];
      for (let i = 0; i < data["data"].length; i++) {
        let newGridItemDiv = document.createElement("div");
        newGridItemDiv.className = "gridItem";

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
  }).then(()=>{loadingFlag=false;});
}
function loadHomePage() {

  createIndexView();

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
          if(loadingFlag===false)
          {
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
          createIndexView(
            (req = getAttractionsData((page = nextPage), (keyword = keyword)))
          );
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

function debounce(func,time) {
  var timeout;
  return ()=>{
    //清除定时器
    clearTimeout(timeout);
    timeout = setTimeout(func,time);
  };
}

function clickSearchKey(){
  let debouncesearchKeyword=debounce(searchKeyword(),500);
  document.addEventListener('scroll', function() {
    //停止滚动之后开始计算
    debouncesearchKeyword();
  });
}
let nextPage = null;
let loadingFlag=false;
let observer;
let callback;
let options;


window.onload = ()=>{
  loadHomePage();
  categoriesList()
}
window.onscroll = function () {
  sticky();
};


document.addEventListener("click", (e) => {
  if (e.target.className != "viewSearch") {
    let categoriesListBlock = document.querySelectorAll(".categoriesList")[0];
    categoriesListBlock.style.display = "none";
  }
});
