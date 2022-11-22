function getCategoriesData() {
    return fetch(
        "http://54.64.173.185:3000/api/categories"
    ).then((response) => response.json());
  }

function getCategoriesData(page) {
return fetch(
    `http://54.64.173.185:3000/api/attractions?page=${page}`
).then((response) => response.json());
}

function createIndexView(req=getCategoriesData(page=0)){
    req.then(data=>{
        let el = document.querySelectorAll(".viewGridContainer")[0];
        let num = 12;
        for(let i=0;i<12;i++){

            let newGridItemDiv = document.createElement("div");
            newGridItemDiv.className = "gridItem";

            // view image
            let newImg = document.createElement("img");
            let str=data["data"][i]["images"][0]
            newImg.src = "https://"+str;

            // view tittle
            let title =data["data"][i]["name"]
            let newTitleDiv= document.createElement("div");
            let newA = document.createElement("a");
            let newContent = document.createTextNode(title);
            newA.appendChild(newContent);
            newTitleDiv.appendChild(newA)
            newTitleDiv.className="gridItemTitle";


            // view info
            let newGridInfoDiv = document.createElement("div");
            newGridInfoDiv.className="gridItemInfo"
            // mrt
            let mrt =data["data"][i]["mrt"]
            let newGridInfoMrtDiv = document.createElement("div");
            newGridInfoMrtDiv.className = "mrtName";
            let newMrtA = document.createElement("a");
            let newMrtContent = document.createTextNode(mrt);
            newMrtA.appendChild(newMrtContent);
            newGridInfoMrtDiv.appendChild(newMrtA);
            // category
            let category =data["data"][i]["category"]
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
    })
}

createIndexView();
