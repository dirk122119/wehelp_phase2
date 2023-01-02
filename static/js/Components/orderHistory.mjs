import { jwtCheck } from "./myNav.mjs";

class orderHistoryCard extends HTMLElement {
  static style = `
  .titleContainer{
    display:flex;
    justify-content:center;
    flex-direction: column;
}
    .orderTitleContainer{
        display:flex;
        justify-content:center;
        margin-bottom:10px
    }
    .orderTitle{
        padding-left:10px;
        width:1000px;
        height:30px;
        background-color:var(--Secondary_Color_50);
        color: var(--Additional_Color_White);
        font-family: var(--Button_Bold_Typeface);
        font-weight: var(--Button_Bold_Weight);
        font-size: var(--Button_Bold_Size);
        line-height: var(--Button_Bold_Line_Height);
        display:flex;
        align-items: center; 
    }
    .cardContainer{
        display:flex;
        justify-content:center;
		margin-bottom:40px
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
    this.render();
    this.styling();
  }
  async getOrderHistory() {
    this.userInfo = await jwtCheck();
    const res = await fetch(`api/historyOrders/${this.userInfo[0]}`)
      .then((response) => response.json())
      .then((response) => {
        response["data"]["orderList"].forEach((element,index) => {
          this.orderNumberTitle(element["orderNumber"], element["trip"],index);
        });
      });
  }
  orderNumberTitle(orderNumber, trip,index) {
    this.titleContainer = document.createElement("div");
    this.titleContainer.className = "titleContainer";
    this.orderTitleContainer= document.createElement("div");
    this.orderTitleContainer.className = "orderTitleContainer";
    
    this.orderTitle = document.createElement("div");
    this.orderTitle.className = "orderTitle";
    this.orderTitle.textContent = `訂單編號：${orderNumber}`;
    this.tripCard = document.createElement("div");
    this.tripCard.id=`${index}`
    this.tripCard.setAttribute("open","true")
    this.orderTitleContainer.appendChild(this.orderTitle)
    this.titleContainer.appendChild(this.orderTitleContainer);
    this.titleContainer.appendChild(this.tripCard)
    
    trip.forEach((view) => {
      this.orderCard(
        `https:${view["attraction"]["image"]}`,
        view["attraction"]["name"],
        view["date"],
        view["time"],
        view["time"] === "morning" ? 2000 : 2500,
        view["attraction"]["address"],
        view["attraction"]["id"]
      );
      this.tripCard.appendChild(this.cardContainer);
    });
    this.shadowRoot.appendChild(this.titleContainer);
  }
  orderCard(src, view, date, period, price, address, viewId) {
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
    this.infoContainer.setAttribute("viewId", viewId);

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

    this.infoContainer.appendChild(this.tripInfo);
    this.infoContainer.appendChild(this.tripDate);
    this.infoContainer.appendChild(this.tripPeriod);
    this.infoContainer.appendChild(this.tripPrice);
    this.infoContainer.appendChild(this.tripAddress);

    this.card.appendChild(this.imagContainer);
    this.card.appendChild(this.infoContainer);
    this.cardContainer.appendChild(this.card);

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
  styling() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.textContent = orderHistoryCard.style;
    this.shadowRoot.appendChild(this.stylesheet);
  }
  async render() {
    await this.getOrderHistory();
  }
}

export { orderHistoryCard };
