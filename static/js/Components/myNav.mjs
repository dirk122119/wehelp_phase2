class myNav extends HTMLElement {
  static style = `
      .navbar{
          width:100vw;
          height: 54px;
          display: flex;
          justify-content:center;
          background-color: var(--Additional_Color_White);
          opacity:1;
          z-index:1;
      }
      .navbar .navbarContainer{
          width:1200px;
          display: flex;
          justify-content: space-between
      }

      .LOGO{
          margin: 10px 0 10px 0;
      }
      .LOGO a{
          text-decoration:none;
          color:var(--Primary_Color_70);
          font-family:var(--Header_2_Bold_Typeface);
          font-weight:var(--Header_2_Bold_Weight);
          font-size:var(--Header_2_Bold_Size);
          line-height:var(--Header_2_Bold_Line_Height);
      }

      .navlink{
          display: flex;
      }
      .navlink div{
          margin: 20px 0 20px 0;
      }
      .navlink #book{
          margin: 20px 20px 20px 0;
      }
      .navlink a:hover{
          cursor: pointer;
      }

      .navlink a{
          text-decoration:none;
          color:var(--Secondary_Color_70);
          font-family:var(--Body_Med_Typeface);
          font-weight:var(--Body_Med_Weight);
          font-size:var(--Body_Med_Size);
          line-height:var(--Body_Med_Height);
      }
      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
      #member ul{
        all: unset;
        position: relative;
        display: none;
        z-index: 10;
        flex-direction: column;
        list-style-type: none;
        background-color:var(--Additional_Color_White);
        border: 1px solid var(--Secondary_Color_20);
        border-radius: 5px;
      }
      #member ul li{
       
        
      }
      #member ul li:hover{
        background-color:var(--Primary_Color_20);
      }
      #member ul li a{
        padding:10px;
        font-family:var(--Category_List_Typeface);
        font-weight:var(--Category_List_Weight);
        font-size:var(--Category_List_Size);
        line-height:var(--Category_List_Height);
      }`;
  static get observedAttributes() {
    return ["rwd", "sticky", "jwt","display"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.styling();
    this.render();
  }
  attributeChangedCallback(name, oldvalue, newvalue) {
    if (name === "sticky") {
      if (oldvalue === "no" && newvalue === "yes") {
        this.render();
      } else if (oldvalue === "yes" && newvalue === "no") {
        this.render();
      }
    }
    if (name === "rwd") {
      this.render();
    }
    if (name === "jwt") {
      this.render();
    }
    if(name === "display"){
      this.render();
    }
  }
  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = myNav.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  render() {
    if (this.navbar) {
      this.navbar.remove();
    }
    this.navbar = document.createElement("nav");
    if (this.getAttribute("sticky") === "yes") {
      this.navbar.className = "navbar sticky";
    } else {
      this.navbar.className = "navbar";
    }
    this.navbarContainer = document.createElement("div");
    this.navbarContainer.className = "navbarContainer";

    this.logo = document.createElement("div");
    this.logo.className = "LOGO";
    this.logoA = document.createElement("a");
    this.logoA.href = "/";
    this.logoA.textContent = "台北一日遊";
    this.logo.appendChild(this.logoA);

    this.navlink = document.createElement("div");
    this.navlink.className = "navlink";

    this.book = document.createElement("div");
    this.book.id = "book";
    this.bookA = document.createElement("a");
    this.bookA.textContent = "預定行程";
    this.bookA.onclick = () => {
      if (this.getAttribute("jwt") === "no") {
        const loginModal = document.querySelectorAll("my-loginmodal")[0];
        loginModal.setAttribute("display", "yes");
      } else {
        window.location.href = "/booking";
      }
    };
    this.book.appendChild(this.bookA);
    this.navlink.appendChild(this.book);

    if (this.getAttribute("jwt") === "no") {
      this.login = document.createElement("div");
      this.login.id = "login";
      this.loginA = document.createElement("a");
      this.loginA.textContent = "登入";
      this.loginA.onclick = () => {
        const loginModal = document.querySelectorAll("my-loginmodal")[0];
        loginModal.setAttribute("display", "yes");
      };
      this.login.appendChild(this.loginA);

      this.slash = document.createElement("div");
      this.slash.id = "slash";
      this.slashA = document.createElement("a");
      this.slashA.textContent = "/";
      this.slash.appendChild(this.slashA);

      this.register = document.createElement("div");
      this.register.id = "register";
      this.registerA = document.createElement("a");
      this.registerA.textContent = "註冊";
      this.registerA.onclick = () => {
        const registermodal = document.querySelectorAll("my-registermodal")[0];
        registermodal.setAttribute("display", "yes");
      };
      this.register.appendChild(this.registerA);
      this.navlink.appendChild(this.login);
      this.navlink.appendChild(this.slash);
      this.navlink.appendChild(this.register);
    } else if (this.getAttribute("jwt") === "yes") {
      // navbar text
      this.member = document.createElement("div");
      this.member.id = "member";
      this.memberA = document.createElement("a");
      this.memberA.textContent = "會員中心";
      const nav = document.querySelectorAll("my-nav")[0];

      this.member.onclick = () => {
        if (nav.getAttribute("display")==="true") {
          nav.setAttribute("display","false")
        } else {
          nav.setAttribute("display","true")
        }
      };
      this.member.appendChild(this.memberA);
      //ul list
      this.menuList = document.createElement("ul");

      if (nav.getAttribute("display")==="true") {
        this.menuList.style.display="flex"
      } else {
        this.menuList.style.display="none"
      }

      this.memberInfo = document.createElement("li");
      this.memberInfoA = document.createElement("a");
      this.memberInfoA.textContent = "會員資料";
      this.memberInfo.onmouseover=()=>{
        this.memberInfo.style.backgroundColor="#E8E8E8"
        this.memberInfo.style.color="white"
        this.memberInfoA.textContent = "comming soon";

      }
      this.memberInfo.onmouseout=()=>{
        this.memberInfo.style.backgroundColor="white"
        this.memberInfo.style.color="#666666"
        this.memberInfoA.textContent = "會員資料";

      }
      this.memberInfo.appendChild(this.memberInfoA);

      this.orderHistory = document.createElement("li");
      this.orderHistoryA = document.createElement("a");
      this.orderHistoryA.textContent = "歷史訂單";
      this.orderHistoryA.onclick=()=>{
        window.location.href = "/orderHistory";
      }
      this.orderHistory.appendChild(this.orderHistoryA);

      this.logout = document.createElement("li");
      this.logout.id = "logout";
      this.logoutA = document.createElement("a");
      this.logoutA.textContent = "登出";
      this.logoutA.onclick = () => {
        logout();
      };
      this.logout.appendChild(this.logoutA);

      this.menuList.appendChild(this.memberInfo);
      this.menuList.appendChild(this.orderHistory);
      this.menuList.appendChild(this.logout);
      this.navlink.appendChild(this.member);
      this.member.appendChild(this.menuList);
    }

    if (this.getAttribute("rwd") !== "desktop") {
      this.navbarContainer.style.width = "100vw";
      this.logo.style.paddingLeft = "10px";
      this.navlink.style.paddingRight = "10px";
    }

    this.navbarContainer.appendChild(this.logo);
    this.navbarContainer.appendChild(this.navlink);
    this.navbar.appendChild(this.navbarContainer);
    this.shadowRoot.appendChild(this.navbar);
  }
}

function sticky() {
  let navbar = document.querySelectorAll("my-nav")[0];
  let navbarHeight = navbar.offsetHeight;
  if (window.pageYOffset > navbarHeight) {
    navbar.setAttribute("sticky", "yes");
  } else {
    navbar.setAttribute("sticky", "no");
  }
}

function jwtCheck() {
  const res = fetch("/api/user/auth")
    .then((response) => response.json())
    .then((response) => {
      const navbar = document.querySelectorAll("my-nav")[0];
      if (response["data"] === null) {
        navbar.setAttribute("jwt", "no");
        return null;
      } else {
        navbar.setAttribute("jwt", "yes");
        return [response["data"]["name"], response["data"]["email"]];
      }
    });
  return res;
}
function logout() {
  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };
  const res = fetch("/api/user/auth", requestOptions).then((data) => {
    window.location.reload();
  });
}
export { myNav, sticky, jwtCheck, logout };
