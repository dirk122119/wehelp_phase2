class myLoginModal extends HTMLElement {
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

    #loginModal .modal-content {
        background-color: var( --Additional_Color_White);
        display: flex;
        justify-content: center;
        width: 340px;
        height: 275px;
        border-radius: 6px;
        position: relative; 
        top:80px;
        left: 50%;
        transform: translate(-50%,0);
        }
    #loginModal .modal-content:after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: calc(100% - 10px);
        left: 0;
        z-index: -1;
        margin: 0;
        border-radius: 6px 6px 0 0;
        background-image: var( --Additional_Color_Dark_Cyan_Gradient_0deg);
    }
    #loginModal .modal-content .tittle{
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
        line-height:var(--Header_3_Bold_Line_Height);
        justify-content: center;
    }
    #loginModal .modal-content .close{
        all: unset;
        background-image:url("/static/image/icon_close.png");
        position: absolute;
        width: 16px;
        height: 16px;
        top:2px;
        right:2px;
    }

    #loginModal .modal-content .close:hover{
        cursor: pointer;
    }

    #loginModal .modal-content .inputEmail{
        position: absolute;
        width: 310px;
        height: 47px;
        top:67px;
        left:15px;
    }
    #loginModal .modal-content .inputEmail input{
        position: relative;
        width: 280px;
        height: 20px;
        border:1px solid #CCCCCC;
        border-radius: 5px;
        color:var(--Secondary_Color_50);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
        justify-content: center;
        padding: 15px;
    }
    #loginModal .modal-content .inputEmail input::placeholder{
        color:var(--Secondary_Color_50);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
    }
    #loginModal .modal-content .inputPassword{
        position: absolute;
        width: 310px;
        height: 47px;
        top:124px;
        left:15px;
    }
    #loginModal .modal-content .inputPassword input{
        position: relative;
        width: 280px;
        height: 20px;
        border:1px solid #CCCCCC;
        border-radius: 5px;
        color:var(--Secondary_Color_50);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
        padding: 15px;
    }
    #loginModal .modal-content .inputPassword input::placeholder{

        color:var(--Secondary_Color_50);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
    }

    #loginModal .modal-content .inputSubmit{
        position: absolute;
        width: 310px;
        height: 47px;
        top:181px;
        left:15px;
    }
    #loginModal .modal-content .inputSubmit button{
        background-color: var( --Primary_Color_70);
        width: 310px;
        height: 47px;
        top:181px;
        left:15px;
        border:none;
        border-radius: 5px;
    }
    #loginModal .modal-content .inputSubmit button:hover{
        cursor: pointer;
    }
    #loginModal .modal-content .inputSubmit button span{
        width: 270px;
        height: 27px;
        color:var(--Additional_Color_White);
        font-family:var(--Body_Reg_Typeface);
        font-weight:var(--Body_Reg_Weight);
        font-size:var(--Body_Reg_Size);
        line-height:var(--Body_Reg_Line_Height);
    }

    #loginModal .modal-content #loginMessage{
        position:absolute;
        display: flex;
        width: 310px;
        height: 22px;
        top:238px;
        left:15px;
        justify-content: center;
    }

    #loginModal .modal-content .switchRegist{
        position:absolute;
        display: flex;
        width: 310px;
        height: 22px;
        top:238px;
        left:15px;
        justify-content: center;
    }
    #loginModal .modal-content .switchRegist span{
        color:var(--Secondary_Color_70);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
    }
    #loginModal .modal-content .switchRegist span a:hover{
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
  validateEmail() {
    const validityState = this.emailInput.validity;
    if (validityState.valueMissing) {
      this.emailInput.setCustomValidity("欄位不能空白");
    } else if (validityState.patternMismatch) {
      this.emailInput.setCustomValidity("請填寫正確信箱");
    } else {
      this.emailInput.setCustomValidity("");
    }

    this.emailInput.reportValidity();
    return validityState.valid;
  }

  validatePassword() {
    const validityState = this.passwordInput.validity;
    if (validityState.valueMissing) {
      this.passwordInput.setCustomValidity("欄位不能空白");
    } else {
      this.passwordInput.setCustomValidity("");
    }

    this.passwordInput.reportValidity();
    return validityState.valid;
  }

  closeBtn() {
    const loginModal = document.querySelectorAll("my-loginmodal")[0];
    loginModal.setAttribute("display", "no");
  }
  loginBtn() {
    const validatePassword = this.validatePassword();
    const validEmail = this.validateEmail();
    if (validatePassword && validEmail) {
      const myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify({
          email: this.emailInput.value,
          password: this.passwordInput.value,
        }),
      };
      const res = fetch("/api/user/auth", requestOptions)
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
        .then((data) => {
          this.render("登入成功", 200);
          window.setTimeout(() => {
            window.location.reload(), 3000;
          });
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
    this.stylesheet.textContent = myLoginModal.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  render(message = "", status = "") {
    if (this.loginModal) {
      this.loginModal.remove();
    }
    this.loginModal = document.createElement("div");
    this.loginModal.id = "loginModal";
    this.loginModal.className = "modal";
    if (this.getAttribute("display") === "yes") {
      this.loginModal.style.display = "block";
    }
    if (this.getAttribute("display") === "no") {
      this.loginModal.style.display = "none";
    }
    this.modalContent = document.createElement("div");
    this.modalContent.className = "modal-content";

    this.titleDiv = document.createElement("div");
    this.titleDiv.className = "tittle";
    this.titleSpan = document.createElement("span");
    this.titleSpan.textContent = "登入會員帳號";
    this.titleButton = document.createElement("button");
    this.titleButton.className = "close";
    this.titleButton.onclick = () => {
      this.closeBtn();
    };
    this.titleDiv.appendChild(this.titleSpan);
    this.titleDiv.appendChild(this.titleButton);

    this.email = document.createElement("div");
    this.email.className = "inputEmail";
    this.emailInput = document.createElement("input");
    this.emailInput.id = "loginEmail";
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
    this.passwordInput.id = "loginPassword";
    this.passwordInput.type = "password";
    this.passwordInput.setAttribute("required", "");
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
      this.loginBtn();
    };
    this.submitSpan = document.createElement("span");
    this.submitSpan.textContent = "登入帳戶";
    this.submitButton.appendChild(this.submitSpan);
    this.submit.appendChild(this.submitButton);

    this.switchRegister = document.createElement("div");
    this.switchRegister.className = "switchRegist";
    this.switchRegisterSpan = document.createElement("span");
    this.switchRegisterSpan.textContent = "還沒有帳戶?";
    this.switchRegisterA = document.createElement("a");
    this.switchRegisterA.textContent = "點此註冊";
    this.switchRegisterA.onclick = () => {
      const loginModal = document.querySelectorAll("my-loginmodal")[0];
      const registerModal = document.querySelectorAll("my-registermodal")[0];
      loginModal.setAttribute("display", "no");
      registerModal.setAttribute("display", "yes");
    };
    this.switchRegisterSpan.appendChild(this.switchRegisterA);
    this.switchRegister.appendChild(this.switchRegisterSpan);

    this.modalContent.appendChild(this.titleDiv);
    this.modalContent.appendChild(this.email);
    this.modalContent.appendChild(this.password);
    this.modalContent.appendChild(this.submit);
    this.modalContent.appendChild(this.switchRegister);
    this.loginModal.appendChild(this.modalContent);
    this.shadowRoot.appendChild(this.loginModal);

    if (message) {
      this.message = document.createElement("div");
      if (status === 200) {
        this.message.style.color = "green";
      } else {
        this.message.style.color = "red";
      }
      this.messageSpan = document.createElement("span");
      this.messageContent = document.createTextNode(message);
      this.messageSpan.id = "loginMessage";
      this.messageSpan.appendChild(this.messageContent);
      this.message.appendChild(this.messageSpan);
      this.modalContent.insertBefore(this.message, this.submit);
      this.modalContent.style.height = `${
        this.modalContent.clientHeight + 30
      }px`;
      this.switchRegister.style.top = `${this.switchRegister.offsetTop + 30}px`;
    }
  }
}

export { myLoginModal };
