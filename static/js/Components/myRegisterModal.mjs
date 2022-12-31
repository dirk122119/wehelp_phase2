class myRegisterModal extends HTMLElement {
  static style = `
  .modal{
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0,0.4); /* Fallback color */
    }
  #registerModal .modal-content {
    background-color: var( --Additional_Color_White);
    /* border-image: var(--Additional_Color_Dark_Cyan_Gradient_0deg) 1; */
    display: flex;
    justify-content: center;
    width: 340px;
    height: 332px;
    border-radius: 10px;
    position: relative; 
    top:80px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  #registerModal .modal-content::after{
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: calc(100% - 10px);
      left: 0;
      z-index: -1;
      margin: 0px;
      border-radius: 6px 6px 0 0;
      background-image: var( --Additional_Color_Dark_Cyan_Gradient_0deg);
  }
  #registerModal .modal-content .tittle{
      position: absolute;
      display: flex;
      top:25px;
      left:15px;
      width: 310px;
      height: 27px;
      color:var(--Secondary_Color_70);
      font-family:var(--Header_3_Bold_Typeface);
      font-weight:var(--Header_3_Bold_Weight);
      font-size:var(--Header_3_Bold_Size);
      line-height:var(--Header_3_Bold_Height);
      justify-content: center;
  }
  #registerModal .modal-content .close{
      all: unset;
      background-image:url("../static/image/icon_close.png");
      position: absolute;
      width: 16px;
      height: 16px;
      top:2px;
      right:2px;
  }
  #registerModal .modal-content .close:hovor{
      cursor: pointer;
  }
  #registerModal .modal-content .inputUsername{
      position: absolute;
      width: 310px;
      height: 47px;
      top:67px;
      left:15px;
  }
  #registerModal .modal-content .inputUsername input{
      position: relative;
      width: 280px;
      height: 20px;
      border:1px solid #CCCCCC;
      border-radius: 5px;
      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
      justify-content: center;
      padding: 15px;
  }
  #registerModal .modal-content .inputUsername input::placeholder{
      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
  }
  #registerModal .modal-content .inputEmail{
      position: absolute;
      width: 310px;
      height: 47px;
      top:124px;
      left:15px;
  }
  #registerModal .modal-content .inputEmail input{
      position: relative;
      width: 280px;
      height: 20px;
      border:1px solid #CCCCCC;
      border-radius: 5px;
      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
      justify-content: center;
      padding: 15px;
  }
  #registerModal .modal-content .inputEmail input::placeholder{
      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
  }
  #registerModal .modal-content .inputPassword{
      position: absolute;
      width: 310px;
      height: 47px;
      top:181px;
      left:15px;
  }
  #registerModal .modal-content .inputPassword input{
      position: relative;
      width: 280px;
      height: 20px;
      border:1px solid #CCCCCC;
      border-radius: 5px;
      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
      padding: 15px;
  }
  #registerModal .modal-content .inputPassword input::placeholder{

      color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
  }

  #registerModal .modal-content .inputSubmit{
      position: absolute;
      width: 310px;
      height: 47px;
      top:238px;
      left:15px;
  }
  #registerModal .modal-content .inputSubmit button{
      background-color: var( --Primary_Color_70);
      width: 310px;
      height: 47px;
      top:181px;
      left:15px;
      border:none;
      border-radius: 5px;
  }
  #registerModal .modal-content .inputSubmit button:hover{
      cursor: pointer;
  }
  #registerModal .modal-content .inputSubmit button span{
      width: 270px;
      height: 27px;
      color:var(--Additional_Color_White);
      font-family:var(--Body_Reg_Typeface);
      font-weight:var(--Body_Reg_Weight);
      font-size:var(--Body_Reg_Size);
      line-height:var(--Body_Reg_Height);
  }
  #registerModal .modal-content #registMessage{
      position:absolute;
      display: flex;
      width: 310px;
      height: 22px;
      top:295px;
      left:15px;
      justify-content: center;
  }
  #registerModal .modal-content .switchLogin{
      position:absolute;
      display: flex;
      width: 310px;
      height: 22px;
      top:295px;
      left:15px;
      justify-content: center;
  }
  #registerModal .modal-content .switchLogin span{
      color:var(--Secondary_Color_70);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Height);
  }
  #registerModal .modal-content .switchLogin span a:hover{
      cursor: pointer;
  }
  `;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this.styling();
  }
  static get observedAttributes() {
    return ["display"];
  }

  attributeChangedCallback(name, oldvalue, newvalue) {
    if (name === "display") {
      this.render();
    }
  }
  validateUserName() {
    const validityState = this.usernameInput.validity;
    if (validityState.valueMissing) {
      this.usernameInput.setCustomValidity("欄位不能空白");
    } else {
      this.usernameInput.setCustomValidity("");
    }

    this.usernameInput.reportValidity();
    return validityState.valid
  }

  validateEmail() {
    const validityState = this.emailInput.validity;
    if (validityState.valueMissing) {
      this.emailInput.setCustomValidity("欄位不能空白");
    }else if(validityState.patternMismatch){
      this.emailInput.setCustomValidity("請填寫正確信箱");
    } 
    else {
      this.emailInput.setCustomValidity("");
    }

    this.emailInput.reportValidity();
    return validityState.valid
  }
  validatePassword(){
    const validityState = this.passwordInput.validity;
    console.log(validityState)
    if (validityState.valueMissing) {
      this.passwordInput.setCustomValidity("欄位不能空白");
    }else if(validityState.patternMismatch){
      this.passwordInput.setCustomValidity("密碼至少需要一個大寫英文字母和一個小寫英文字母與數字，且長度大於6");
    } 
    else {
      this.passwordInput.setCustomValidity("");
    }

    this.passwordInput.reportValidity();
    return validityState.valid
  }

  closeBtn() {
    const registerModal = document.querySelectorAll("my-registermodal")[0];
    registerModal.setAttribute("display", "no");
  }
  registerBtn() {
    // check input
    const validatePassword=this.validatePassword();
    const validUserName=this.validateUserName();
    const validEmail=this.validateEmail();
    console.log(this.validatePassword.validity);
    if (validatePassword && validUserName && validEmail) {
      // post api
      const myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          name: this.usernameInput.value,
          email: this.emailInput.value,
          password: this.passwordInput.value,
        }),
      };
      const res = fetch("/api/user", requestOptions)
        .then(async (response) => {
          console.log(response);
          if (!response.ok) {
            let data = await response.json();
            let err = new Error("HTTP status code: " + response.status);
            err.response = data;
            err.status = response.status;
            throw err;
          }
          return response.json();
        })
        .then((data) => {
          this.render("註冊成功", 200);
        })
        .catch((error) => {
          switch (error.status) {
            case 400:
              this.render(error.response["message"], error.status);
              break;
            case 500:
              this.render(error.response["message"], error.status);
              break;
          }
        });
    }
  }
  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = myRegisterModal.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  render(message = "", status = "") {
    if (this.registerModal) {
      this.registerModal.remove();
    }
    this.registerModal = document.createElement("div");
    this.registerModal.id = "registerModal";
    this.registerModal.className = "modal";
    if (this.getAttribute("display") === "yes") {
      this.registerModal.style.display = "block";
    }
    if (this.getAttribute("display") === "no") {
      this.registerModal.style.display = "none";
    }
    this.modalContent = document.createElement("div");
    this.modalContent.className = "modal-content";

    this.titleDiv = document.createElement("div");
    this.titleDiv.className = "tittle";
    this.titleSpan = document.createElement("span");
    this.titleSpan.textContent = "註冊會員帳號";
    this.titleButton = document.createElement("button");
    this.titleButton.className = "close";
    this.titleButton.onclick = () => {
      this.closeBtn();
    };
    this.titleDiv.appendChild(this.titleSpan);
    this.titleDiv.appendChild(this.titleButton);

    this.username = document.createElement("div");
    this.username.className = "inputUsername";
    this.usernameInput = document.createElement("input");
    this.usernameInput.id = "registUsername";
    this.usernameInput.type = "text";
    this.usernameInput.setAttribute("required", "");
    this.usernameInput.placeholder = "輸入姓名";
    this.usernameInput.onkeyup=()=>{
      this.validateUserName();
    }
    this.username.appendChild(this.usernameInput);

    this.email = document.createElement("div");
    this.email.className = "inputEmail";
    this.emailInput = document.createElement("input");
    this.emailInput.id = "registEmail";
    this.emailInput.type = "email";
    this.emailInput.setAttribute("required", "");
    this.emailInput.setAttribute("pattern","^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
    this.emailInput.placeholder = "輸入電子信箱";
    this.emailInput.onkeyup=()=>{
      this.validateEmail();
    }
    this.email.appendChild(this.emailInput);

    this.password = document.createElement("div");
    this.password.className = "inputPassword";
    this.passwordInput = document.createElement("input");
    this.passwordInput.id = "registPassword";
    this.passwordInput.type = "password";
    this.passwordInput.setAttribute("required", "");
    this.passwordInput.setAttribute("pattern","^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$")
    this.passwordInput.placeholder = "輸入密碼";
    this.passwordInput.onkeyup=()=>{
     this.validatePassword();
    }
    this.password.appendChild(this.passwordInput);

    this.submit = document.createElement("div");
    this.submit.className = "inputSubmit";
    this.submitButton = document.createElement("button");
    this.submitButton.type = "button";
    this.submitButton.onclick = () => {
      this.registerBtn();
    };
    this.submitSpan = document.createElement("span");
    this.submitSpan.textContent = "登入帳戶";
    this.submitButton.appendChild(this.submitSpan);
    this.submit.appendChild(this.submitButton);

    this.switchLogin = document.createElement("div");
    this.switchLogin.className = "switchLogin";
    this.switchLoginSpan = document.createElement("span");
    this.switchLoginSpan.textContent = "已經有帳戶了?";
    this.switchLoginA = document.createElement("a");
    this.switchLoginA.textContent = "點此登入";
    this.switchLoginA.onclick = () => {
      const loginModal = document.querySelectorAll("my-loginmodal")[0];
      const registerModal = document.querySelectorAll("my-registermodal")[0];

      registerModal.setAttribute("display", "no");
      loginModal.setAttribute("display", "yes");
    };
    this.switchLoginSpan.appendChild(this.switchLoginA);
    this.switchLogin.appendChild(this.switchLoginSpan);

    this.modalContent.appendChild(this.titleDiv);
    this.modalContent.appendChild(this.username);
    this.modalContent.appendChild(this.email);
    this.modalContent.appendChild(this.password);
    this.modalContent.appendChild(this.submit);
    this.modalContent.appendChild(this.switchLogin);
    this.registerModal.appendChild(this.modalContent);
    this.shadowRoot.appendChild(this.registerModal);

    if (message) {
      this.message = document.createElement("div");
      if (status === 200) {
        this.message.style.color = "green";
      } else {
        this.message.style.color = "red";
      }
      this.messageSpan = document.createElement("span");
      this.messageContent = document.createTextNode(message);
      this.messageSpan.id = "registMessage";
      this.messageSpan.appendChild(this.messageContent);
      this.message.appendChild(this.messageSpan);
      this.modalContent.insertBefore(this.message, this.submit);
      this.modalContent.style.height = `${
        this.modalContent.clientHeight + 30
      }px`;
      this.switchLogin.style.top = `${this.switchLogin.offsetTop + 30}px`;
    }
  }
}

export { myRegisterModal };
