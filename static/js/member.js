function clickLogin() {
  let loginModal = document.querySelectorAll("#loginModal")[0];
  let registerModal = document.querySelectorAll("#registModal")[0];
  loginModal.style.display = "inline-block";
  registerModal.style.display = "none";
  document.getElementById("loginEmail").value="";
  document.getElementById("loginPassword").value="";
  document.getElementById("registUsername").value="";
  document.getElementById("registEmail").value="";
  document.getElementById("registPassword").value="";
}
function clickRegist() {
  let loginModal = document.querySelectorAll("#loginModal")[0];
  let registerModal = document.querySelectorAll("#registModal")[0];
  loginModal.style.display = "none";
  registerModal.style.display = "inline-block";
  document.getElementById("loginEmail").value="";
  document.getElementById("loginPassword").value="";
  document.getElementById("registUsername").value="";
  document.getElementById("registEmail").value="";
  document.getElementById("registPassword").value="";
}

function closeBtn() {
  let loginModal = document.querySelectorAll("#loginModal")[0];
  let registerModal = document.querySelectorAll("#registModal")[0];
  const messageLogin = document.querySelectorAll(
    "#loginModal .modal-content .message"
  )[0];
  if (messageLogin) {
    messageLogin.remove();
    const switchLogin = document.querySelectorAll(
      "#loginModal .modal-content .switchRegist"
    )[0];
    const form = document.querySelectorAll("#loginModal .modal-content ")[0];

    form.style.height = `${form.clientHeight - 30}px`;
    switchLogin.style.top = `${switchLogin.offsetTop - 30}px`;
  }
  const messageRegister = document.querySelectorAll(
    "#registModal .modal-content .message"
  )[0];
  if (messageRegister) {
    messageRegister.remove();
    const switchRegist = document.querySelectorAll(
      "#registModal .modal-content .switchLogin"
    )[0];
    const form = document.querySelectorAll("#registModal .modal-content ")[0];

    form.style.height = `${form.clientHeight - 30}px`;
    switchRegist.style.top = `${switchRegist.offsetTop - 30}px`;
  }
  loginModal.style.display = "none";
  registerModal.style.display = "none";
  document.getElementById("loginEmail").value="";
  document.getElementById("loginPassword").value="";
  document.getElementById("registUsername").value="";
  document.getElementById("registEmail").value="";
  document.getElementById("registPassword").value="";
}

function loginAPIBtn() {
  const email = document.querySelectorAll("#loginEmail")[0].value;
  const password = document.querySelectorAll("#loginPassword")[0].value;
  const message = document.querySelectorAll(
    "#loginModal .modal-content .message"
  )[0];
  if (message) {
    message.remove();
    const switchLogin = document.querySelectorAll(
      "#loginModal .modal-content .switchRegist"
    )[0];
    console.log(switchLogin)
    const form = document.querySelectorAll("#loginModal .modal-content ")[0];

    form.style.height = `${form.clientHeight - 30}px`;
    switchLogin.style.top = `${switchLogin.offsetTop - 30}px`;
  }
  const res = fetch("http://54.64.173.185:3000/api/user/auth", {
    method: "PUT",
    body: JSON.stringify({ email: email, password: password }),
    headers: { "content-type": "application/json"}
  })
    .then(async (response) => {
      if (!response.ok) {
        data = await response.json();
        let err = new Error("HTTP status code: " + response.status);
        err.response = data;
        err.status = response.status;
        throw err;
      }
      return response.json();
    })
    .then((data) => {
      createMessage("登入成功", 200, "login");
      window.setTimeout(()=>{window.location.reload(),3000})
    }).catch((error) => {
      switch (error.status) {
        case 400:
          createMessage(error.response["message"], error.status, "login");
          break;
        case 500:
          createMessage(error.response["message"], error.status, "login");
          break;
      }
    });
}

function registerAPIBtn() {
  const name = document.querySelectorAll("#registUsername")[0].value;
  const email = document.querySelectorAll("#registEmail")[0].value;
  const password = document.querySelectorAll("#registPassword")[0].value;
  const message = document.querySelectorAll(
    "#registModal .modal-content .message"
  )[0];
  if (message) {
    message.remove();
    const switchRegist = document.querySelectorAll(
      "#registModal .modal-content .switchLogin"
    )[0];
    const form = document.querySelectorAll("#registModal .modal-content ")[0];

    form.style.height = `${form.clientHeight - 30}px`;
    switchRegist.style.top = `${switchRegist.offsetTop - 30}px`;
  }
  const res = fetch("http://54.64.173.185:3000/api/user", {
    method: "POST",
    body: JSON.stringify({ name: name, email: email, password: password }),
    headers: { "content-type": "application/json" }
  })
    .then(async (response) => {
      if (!response.ok) {
        data = await response.json();
        let err = new Error("HTTP status code: " + response.status);
        err.response = data;
        err.status = response.status;
        throw err;
      }
      return response.json();
    })
    .then((response) => {
      createMessage("註冊成功", 200, "regist");
    })
    .catch((error) => {
      switch (error.status) {
        case 400:
          createMessage(error.response["message"], error.status, "regist");
          break;
        case 500:
          createMessage(error.response["message"], error.status, "regist");
          break;
      }
    });
}
function createMessage(message, status, mode) {
  let newDiv = document.createElement("div");
  newDiv.className = "message";
  if (status === 200) {
    newDiv.style.color = "green";
  } else {
    newDiv.style.color = "red";
  }
  if (mode === "regist") {
    let newSpan = document.createElement("span");
    newSpan.id = "registMessage";
    let newContent = document.createTextNode(message);
    newSpan.appendChild(newContent);
    newDiv.appendChild(newSpan);
    const parentNode = document.querySelectorAll(
      "#registModal .modal-content"
    )[0];
    const switchLogin = document.querySelectorAll(
      "#registModal .modal-content .switchLogin"
    )[0];
    parentNode.insertBefore(newDiv, switchLogin);
    const form = document.querySelectorAll("#registModal .modal-content ")[0];

    form.style.height = `${form.clientHeight + 30}px`;
    switchLogin.style.top = `${switchLogin.offsetTop + 30}px`;
  } else if (mode === "login") {
    let newSpan = document.createElement("span");
    let newContent = document.createTextNode(message);
    newSpan.id = "loginMessage";
    newSpan.appendChild(newContent);
    newDiv.appendChild(newSpan);
    const parentNode = document.querySelectorAll(
      "#loginModal .modal-content"
    )[0];
    const switchRegist = document.querySelectorAll(
      "#loginModal .modal-content .switchRegist"
    )[0];
    parentNode.insertBefore(newDiv, switchRegist);
    const form = document.querySelectorAll("#loginModal .modal-content ")[0];
    form.style.height = `${form.clientHeight + 30}px`;
    switchRegist.style.top = `${switchRegist.offsetTop + 30}px`;
  }
}

function jwtCheck() {
  const res = fetch("http://54.64.173.185:3000/api/user/auth", {
    method: "GET"
  }).then((response) => response.json());
  return res;
}
function logout() {
  const res = fetch("http://54.64.173.185:3000/api/user/auth", {
    method: "DELETE",
    headers: { "content-type": "application/json" }
  }).then(window.location.reload());
}
