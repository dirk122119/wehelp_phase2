

class bookingPage2 extends HTMLElement {
  static style = `
    .bookingPageContainer{
        display:flex;
        justify-content:center;
        margin-top:46px;
        margin-bottom:35px;
    }
    .cardContainer{
        display:flex;
        justify-content:center;
				margin-bottom:40px
    }
    .booktitle{
        width:1000px;
        color:var(--Secondary_Color_70);
        font-family:var(--Button_Bold_Typeface);
        font-weight:var(--Button_Bold_Weight);
        font-size:var(--Button_Bold_Size);
        line-height:var(--Button_Bold_Line_Height);
    }
    .bookingcard{
        height:200px;
        width:1000px;
        display: grid;
        gap: 22px;
        grid-template-columns: 270px auto;
    }
    
    .imgContainer{
        position:relative;
        height:200px;
        width:266px;
    }

    .imgContainer img{
        position:absolute;
        left:8px;
        height:200px;
        width:250px;
    }
    .infoContainer{
        position:relative;
    }

    .infoTitle{
        margin-top:10px;
        margin-bottom:30px;
        height:14px;
        color:var(--Primary_Color_70);
        font-family:var(--Body_Bold_Typeface);
        font-weight:var(--Body_Bold_Weight);
        font-size:var(--Body_Bold_Size);
        line-height:var(--Body_Bold_Line_Height);
    }
    .infoContent{
        margin-bottom:20px;
        height:14px;
    }
    .spanHead{
        color:var(--Secondary_Color_70);
        font-family:var(--Body_Bold_Typeface);
        font-weight:var(--Body_Bold_Weight);
        font-size:var(--Body_Bold_Size);
        line-height:var(--Body_Bold_Line_Height);
    }
    .spanContent{
        color:var(--Secondary_Color_70);
        font-family:var(--Body_Med_Typeface);
        font-weight:var(--Body_Med_Weight);
        font-size:var(--Body_Med_Size);
        line-height:var(--Body_Med_Line_Height);
    }
    .deleteButton{
        all: unset;
        background-image:url("/static/image/icon_delete.png");
        position: absolute;
        width: 30px;
        height: 30px;
        top:0px;
        right:10px;
    }
    .deleteButton:hover{
      cursor:pointer;
    }
		.hr{
			width:1197px;

		}
		.userInfoContainer{
			display:flex;
			justify-content:center;
			margin-top:44px;
			margin-bottom:45px;
		}
		.userInfoCard{
			width:1000px;
		}
		.userInfoTitle{
			height:16px;
			color:var(--Secondary_Color_70);
      font-family:var(--Button_Bold_Typeface);
      font-weight:var(--Button_Bold_Weight);
      font-size:var(--Button_Bold_Size);
      line-height:var(--Button_Bold_Line_Height);
			margin-bottom:24px;
		}
		.user{
			height:38px;
			margin-bottom:15px;
		}
		.user label{
			color:var(--Secondary_Color_70);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Line_Height);
		}
		.user input{
			width:180px;
			height: 16px;
    	padding: 0;
    	border: 1px solid var(--Secondary_Color_20);
    	border-radius: 5px;
		}
		.user input:valid{
			padding:10px;
			color:var(--Additional_Color_Black);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Line_Height);
		}
		.userMessage{
			padding-top:5px;
			height:14px;
			color:var(--Secondary_Color_70);
      font-family:var(--Body_Bold_Typeface);
      font-weight:var(--Body_Bold_Weight);
      font-size:var(--Body_Bold_Size);
      line-height:var(--Body_Bold_Line_Height);
		}

		.creditCardInfoContainer{
			display:flex;
			justify-content:center;
			margin-top:44px;
			margin-bottom:40px;
		}
		.creditCardInfoCard{
			width:1000px;
		}
		.creditCardInfoTitle{
			height:16px;
			color:var(--Secondary_Color_70);
      font-family:var(--Button_Bold_Typeface);
      font-weight:var(--Button_Bold_Weight);
      font-size:var(--Button_Bold_Size);
      line-height:var(--Button_Bold_Line_Height);
			margin-bottom:24px;
		}
		.creditCard{
			height:38px;
			margin-bottom:15px;
		}
		.creditCard label{
			color:var(--Secondary_Color_70);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Line_Height);
		}
		.creditCard input{
			width:180px;
			height: 16px;
    	padding: 0;
    	border: 1px solid var(--Secondary_Color_20);
    	border-radius: 5px;
		}
		.creditCard input:valid{
			padding:10px;
			color:var(--Secondary_Color_50);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Line_Height);
		}
    .orderContainer{
 
			display:flex;
			justify-content:center;
			margin-top:44px;
			margin-bottom:40px;
      height:100px;
		}
		.ordercard{
      position:relative;
			width:1000px;
		}
    .orderInfo{
      height:14px;
			color:var(--Secondary_Color_70);
      font-family:var(--Body_Bold_Typeface);
      font-weight:var(--Body_Bold_Weight);
      font-size:var(--Body_Bold_Size);
      line-height:var(--Body_Bold_Line_Height);
      position: absolute;
      right:10px;
    }
    .orderButton{
      width:173px;
      height:36px;
      color:var( --Additional_Color_White);
      background-color:var(--Primary_Color_70);
      border:none;
      position: absolute;
      top:39px;
      right:10px;
    }
    .noBookingContainer{
      height: calc(100vh - 200px);
      display:flex;
      justify-content:center;
      margin-top:46px;
      margin-bottom:35px;
    }
    .noBookingMessage{
      width:1000px;
      height:24px;
      color:var(--Secondary_Color_70);
      font-family:var(--Body_Med_Typeface);
      font-weight:var(--Body_Med_Weight);
      font-size:var(--Body_Med_Size);
      line-height:var(--Body_Med_Line_Height);
  }`;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["username", "email", "rwd"];
  }
  attributeChangedCallback(name, oldvalue, newvalue) {
    if (name === "username") {
     
      if (newvalue === "null") {
        const loginModal = document.querySelectorAll("my-loginmodal")[0];
        loginModal.setAttribute("display", "yes");
      } else {
        this.render();
        this.styling();
        console.log("username render");
      }
    }
    if (name === "rwd" && oldvalue !== null) {
      
      if (oldvalue != newvalue) {
        let parent = this.shadowRoot;
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
       
        this.styling();
        this.render();
        
      }
    }
  }
  async getBookingInfo() {
    const res = await fetch("api/booking")
      .then((response) => response.json())
      .then((response) => {
        this.totalCost = 0;
        response["data"].forEach((item) => {
          this.bookingCard(
            `https://${item["attraction"]["image"]}`,
            item["attraction"]["name"],
            item["date"],
            item["time"],
            item["price"],
            item["attraction"]["address"],
            item["bookingId"]
          );
          this.totalCost = this.totalCost + item["price"];
        });
        const len = response["data"].length;
        return len;
      });
  }
  deleteBooking(id) {
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        bookingId: id,
      }),
    };
    const res = fetch("api/booking", requestOptions).then((data) => {
      window.location.reload();
    });
  }
  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = bookingPage.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  orderFunction() {
    if (this.orderContainer) {
      this.orderContainer.remove();
    }
    this.orderContainer = document.createElement("div");
    this.orderContainer.className = "orderContainer";

    this.order = document.createElement("div");
    this.order.className = "ordercard";

    this.orderSpace = document.createElement("div");
    this.order.appendChild(this.orderSpace);

    this.orderInfo = document.createElement("div");
    this.orderInfo.className = "orderInfo";
    this.orderInfoSpan = document.createElement("span");
    this.orderInfoSpan.textContent = `總價：新台幣${this.totalCost}元`;
    this.orderInfo.appendChild(this.orderInfoSpan);

    this.orderButton = document.createElement("button");
    this.orderButton.className = "orderButton";
    this.orderButton.textContent = "確認訂購與付款";
    this.orderButton.onclick = () => {
      alert("購買");
    };
    this.order.appendChild(this.orderInfo);
    this.order.appendChild(this.orderButton);
    this.orderContainer.appendChild(this.order);
    this.shadowRoot.appendChild(this.orderContainer);
  }
  bookingCard(src, view, date, period, price, address, bookingIndex) {
    this.cardContainer = document.createElement("div");
    this.cardContainer.className = "cardContainer";

    this.card = document.createElement("div");
    this.card.className = "bookingcard";

    this.imagContainer = document.createElement("div");
    this.imagContainer.className = "imgContainer";
    this.img = document.createElement("img");
    this.img.src = `${src}`;
    this.imagContainer.appendChild(this.img);

    this.infoContainer = document.createElement("div");
    this.infoContainer.className = "infoContainer";

    this.tripInfo = document.createElement("div");
    this.tripInfo.className = "infoTitle";
    this.tripInfoSpan = document.createElement("span");
    this.tripInfoSpan.textContent = `台北一日遊：${view}`;
    this.tripInfo.appendChild(this.tripInfoSpan);

    this.tripDate = document.createElement("div");
    this.tripDate.className = "infoContent";
    this.tripDateSpanHead = document.createElement("span");
    this.tripDateSpanHead.className = "spanHead";
    this.tripDateSpanHead.textContent = "日期：";
    this.tripDateSpanContent = document.createElement("span");
    this.tripDateSpanContent.className = "spanContent";
    this.tripDateSpanContent.textContent = `${date}`;
    this.tripDateSpanHead.appendChild(this.tripDateSpanContent);
    this.tripDate.appendChild(this.tripDateSpanHead);

    this.tripPeriod = document.createElement("div");
    this.tripPeriod.className = "infoContent";
    this.tripPeriodSpanHead = document.createElement("span");
    this.tripPeriodSpanHead.className = "spanHead";
    const time = period === "morning" ? "早上9點到下午4點" : "下午2點到下午9點";
    this.tripPeriodSpanHead.textContent = "時間：";
    this.tripPeriodSpanContent = document.createElement("span");
    this.tripPeriodSpanContent.className = "spanContent";
    this.tripPeriodSpanContent.textContent = `${time}`;
    this.tripPeriodSpanHead.appendChild(this.tripPeriodSpanContent);
    this.tripPeriod.appendChild(this.tripPeriodSpanHead);

    this.tripPrice = document.createElement("div");
    this.tripPrice.className = "infoContent";
    this.tripPriceSpanHead = document.createElement("span");
    this.tripPriceSpanHead.className = "spanHead";
    this.tripPriceSpanHead.textContent = "費用：";
    this.tripPriceSpanContent = document.createElement("span");
    this.tripPriceSpanContent.className = "spanContent";
    this.tripPriceSpanContent.textContent = `${price}`;
    this.tripPriceSpanHead.appendChild(this.tripPriceSpanContent);
    this.tripPrice.appendChild(this.tripPriceSpanHead);

    this.tripAddress = document.createElement("div");
    this.tripAddress.className = "infoContent";
    this.tripAddressSpanHead = document.createElement("span");
    this.tripAddressSpanHead.className = "spanHead";
    this.tripAddressSpanHead.textContent = "地點：";
    this.tripAddressSpanContent = document.createElement("span");
    this.tripAddressSpanContent.className = "spanContent";
    this.tripAddressSpanContent.textContent = `${address}`;
    this.tripAddressSpanHead.appendChild(this.tripAddressSpanContent);
    this.tripAddress.appendChild(this.tripAddressSpanHead);

    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteButton";
    this.deleteButton.onclick = () => {
      this.deleteBooking(bookingIndex);
    };

    this.infoContainer.appendChild(this.tripInfo);
    this.infoContainer.appendChild(this.tripDate);
    this.infoContainer.appendChild(this.tripPeriod);
    this.infoContainer.appendChild(this.tripPrice);
    this.infoContainer.appendChild(this.tripAddress);
    this.infoContainer.appendChild(this.deleteButton);

    this.card.appendChild(this.imagContainer);
    this.card.appendChild(this.infoContainer);
    this.cardContainer.appendChild(this.card);
    this.shadowRoot.appendChild(this.cardContainer);

    if (this.getAttribute("rwd") === "phone") {
      this.cardContainer.style.marginBottom = "65px";
      this.card.style.gridTemplateColumns = "auto";
      this.card.style.gap = "35px";
      this.card.style.height = "auto";
      this.card.style.width = "calc(100vw - 20px";
      this.deleteButton.style.top = "calc(100% + 5px)";

      this.img.style.left = "0";
      this.img.style.width = "calc(100vw - 20px)";
      this.img.style.height = "53vw";
      this.img.style.objectFit = "cover";
      this.imagContainer.style.width = "calc(100vw - 20px)";
      this.imagContainer.style.height = "53vw";
    }
  }
  userInfoFunction(username, email) {
    if (this.userInfoContainer) {
      this.userInfoContainer.remove();
    }
    this.userInfoContainer = document.createElement("div");
    this.userInfoContainer.className = "userInfoContainer";

    this.userInfo = document.createElement("div");
    this.userInfo.className = "userInfoCard";

    this.userInfoTitle = document.createElement("div");
    this.userInfoTitle.className = "userInfoTitle";
    this.userInfoTitleSpan = document.createElement("span");
    this.userInfoTitleSpan.textContent = "您的聯絡資訊";
    this.userInfoTitle.appendChild(this.userInfoTitleSpan);

    this.userName = document.createElement("div");
    this.userName.className = "user";
    this.userNameLabel = document.createElement("label");
    this.userNameLabel.className = "label";
    this.userNameLabel.for = "userNameInput";
    this.userNameLabel.textContent = "聯絡姓名：";
    this.userNameInput = document.createElement("input");
    this.userNameInput.id = "userNameInput";
    this.userNameInput.className = "input";
    this.userNameInput.value = `${username}`;
    this.userName.appendChild(this.userNameLabel);
    this.userName.appendChild(this.userNameInput);

    this.userEmail = document.createElement("div");
    this.userEmail.className = "user";
    this.userEmailLabel = document.createElement("label");
    this.userEmailLabel.className = "label";
    this.userEmailLabel.for = "userEmailInput";
    this.userEmailLabel.textContent = "聯絡信箱：";
    this.userEmailInput = document.createElement("input");
    this.userEmailInput.id = "userEmailInput";
    this.userEmailInput.className = "input";
    this.userEmailInput.value = `${email}`;
    this.userEmail.appendChild(this.userEmailLabel);
    this.userEmail.appendChild(this.userEmailInput);

    this.userPhone = document.createElement("div");
    this.userPhone.className = "user";
    this.userPhoneLabel = document.createElement("label");
    this.userPhoneLabel.className = "label";
    this.userPhoneLabel.for = "userPhoneInput";
    this.userPhoneLabel.textContent = "手機號碼：";
    this.userPhoneInput = document.createElement("input");
    this.userPhoneInput.id = "userPhoneInput";
    this.userPhoneInput.className = "input";
    this.userPhone.appendChild(this.userPhoneLabel);
    this.userPhone.appendChild(this.userPhoneInput);

    this.userMessage = document.createElement("div");
    this.userMessage.className = "userMessage";
    this.userMessageSpan = document.createElement("span");
    this.userMessageSpan.textContent =
      "請保持手機暢通，準時到達，導覽人員將用手機與您聯繫，務必留下正確的聯絡方式。";
    this.userMessage.appendChild(this.userMessageSpan);

    this.userInfo.appendChild(this.userInfoTitle);
    this.userInfo.appendChild(this.userName);
    this.userInfo.appendChild(this.userEmail);
    this.userInfo.appendChild(this.userPhone);
    this.userInfo.appendChild(this.userMessage);
    this.userInfoContainer.appendChild(this.userInfo);
    this.shadowRoot.appendChild(this.userInfoContainer);

    if (this.getAttribute("rwd") !== "desktop") {
      this.userInfo.style.paddingLeft = "10px";
      this.userInfo.style.paddingRight = "10px";
      this.userMessageSpan.style.lineHeight = "23px";
    }
  }
  creditCardInfoFunction() {
    if (this.creditCardInfoContainer) {
      this.creditCardInfoContainer.remove();
    }
    this.creditCardInfoContainer = document.createElement("div");
    this.creditCardInfoContainer.className = "creditCardInfoContainer";

    this.creditCardInfo = document.createElement("div");
    this.creditCardInfo.className = "creditCardInfoCard";

    this.creditCardInfoTitle = document.createElement("div");
    this.creditCardInfoTitle.className = "creditCardInfoTitle";
    this.creditCardInfoTitleSpan = document.createElement("span");
    this.creditCardInfoTitleSpan.textContent = "信用卡付款資訊";
    this.creditCardInfoTitle.appendChild(this.creditCardInfoTitleSpan);

    this.cardNumber = document.createElement("div");
    this.cardNumber.className = "tpfield";
    this.cardNumber.id="card-number"

    this.expNumber = document.createElement("div");
    this.expNumber.className = "tpfield";
    this.expNumber.id="card-expiration-date";
    
    

    

    this.cvvNumber = document.createElement("div");
    this.cvvNumber.className = "tpfield";
    this.cvvNumber.id="card-ccv";
    

    this.creditCardInfo.appendChild(this.creditCardInfoTitle);
    this.creditCardInfo.appendChild(this.cardNumber);
    this.creditCardInfo.appendChild(this.expNumber);
    this.creditCardInfo.appendChild(this.cvvNumber);
    this.creditCardInfoContainer.appendChild(this.creditCardInfo);
    this.shadowRoot.appendChild(this.creditCardInfoContainer);

    if (this.getAttribute("rwd") !== "desktop") {
      this.creditCardInfo.style.paddingLeft = "10px";
    }
  }
  async render() {
    if (this.bookingPageContainer) {
      this.bookingPageContainer.remove();
    }

    const mybookingPage = document.querySelectorAll("my-bookingpage")[0];
    this.bookingPageContainer = document.createElement("div");
    this.bookingPageContainer.className = "bookingPageContainer";
    this.booktitle = document.createElement("div");
    this.booktitle.className = "booktitle";
    this.booktitleSpan = document.createElement("span");
    this.booktitleSpan.textContent = `您好，${mybookingPage.getAttribute(
      "username"
    )}，待預定行程如下：`;
    this.booktitle.appendChild(this.booktitleSpan);
    this.bookingPageContainer.appendChild(this.booktitle);
    this.shadowRoot.appendChild(this.bookingPageContainer);

    await this.getBookingInfo();
    if (this.cardContainer) {
      this.hr = document.createElement("hr");
      this.hr.className = "hr";
      this.shadowRoot.appendChild(this.hr);

      this.userInfoFunction(
        mybookingPage.getAttribute("username"),
        mybookingPage.getAttribute("email")
      );

      this.userHr = document.createElement("hr");
      this.userHr.className = "hr";
      this.shadowRoot.appendChild(this.userHr);

      this.creditCardInfoFunction();
      this.creditCardHr = document.createElement("hr");
      this.creditCardHr.className = "hr";

      if (this.getAttribute("rwd") !== "desktop") {
        this.booktitle.style.paddingLeft = "10px";
        this.hr.style.width = "calc(100vw - 20px)";
        this.userHr.style.width = "calc(100vw - 20px)";
        this.creditCardHr.style.width = "calc(100vw - 20px)";
      }

      this.shadowRoot.appendChild(this.creditCardHr);

      this.orderFunction();
    } else {
      this.noBookingContainer = document.createElement("div");
      this.noBookingContainer.className = "noBookingContainer";
      this.noBooking = document.createElement("div");
      this.noBooking.className = "noBookingMessage";
      this.noBookingSpan = document.createElement("span");
      this.noBookingSpan.textContent = "目前沒有任何待預訂的行程。";

      this.noBooking.appendChild(this.noBookingSpan);
      this.noBookingContainer.appendChild(this.noBooking);
      this.shadowRoot.appendChild(this.noBookingContainer);
    }
    
  }
}

export { bookingPage2 };
