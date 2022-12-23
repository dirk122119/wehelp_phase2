TPDirect.setupSDK(`${APP_ID}`, `${APP_KEY}`, "sandbox");

config = {
  fields: {
    number: {
      // css selector
      element: "#card-number",
      placeholder: "**** **** **** ****",
    },
    expirationDate: {
      // DOM object
      element: "#card-expiration-date",
      placeholder: "MM / YY",
    },
    ccv: {
      element: "#card-ccv",
      placeholder: "ccv",
    },
  },
  styles: {
    // Style all elements
    input: {
      color: "black",
      padding: "10px",
    },
    ".valid": {
      color: "green",
    },
    ".invalid": {
      color: "red",
    },
  },
  isMaskCreditCardNumber: true,
  maskCreditCardNumberRange: {
    beginIndex: 6,
    endIndex: 11,
  },
};
TPDirect.card.setup(config);

TPDirect.card.onUpdate(function (update) {
  const submitButton = document.querySelectorAll(".orderButton")[0];
  submitButton.setAttribute("valid", false);
  if (update.canGetPrime) {
    submitButton.setAttribute("valid", true);
  } else {
    submitButton.setAttribute("valid", false);
  }
});

  
function clickOrder() {
  const submitButton = document.querySelectorAll(".orderButton")[0];

  if (!submitButton.getAttribute("valid")) {
    alert("信用卡資訊錯誤");
  } else {
    const tappayStatus = TPDirect.card.getTappayFieldsStatus();
    if (tappayStatus.canGetPrime === false) {
      alert("can not get prime");
      return;
    }
    TPDirect.card.getPrime((result) => {
      if (result.status !== 0) {
        alert("get prime error " + result.msg);
        return;
      }
      const nodelist = document.querySelectorAll("my-bookingpage")[0];
      const shadowRootChild = Array.apply(null, nodelist.shadowRoot.childNodes);
      const bookingInfo = shadowRootChild.slice(1);
      let totalPrice = 0;
      let bookingList=[];
      bookingInfo.forEach((element) => {
        let price =
          element.childNodes[0].childNodes[1].childNodes[3].childNodes[0]
            .childNodes[1].textContent;
        totalPrice+=parseInt(price)
        let orderId =
          element.childNodes[0].childNodes[1].getAttribute("viewid");
        let orderName =
          element.childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent.split(
            "："
          )[1];
        let orderAddress =
          element.childNodes[0].childNodes[1].childNodes[4].childNodes[0]
            .childNodes[1].textContent;
        let orderImage = element.childNodes[0].childNodes[0].childNodes[0].src;
        let orderDate =
          element.childNodes[0].childNodes[1].childNodes[1].childNodes[0]
            .childNodes[1].textContent;
        let orderTime =
          (element.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].textContent =
            "早" ? "morning" : "afternoon");
        let bookingId = element.childNodes[0].childNodes[1].childNodes[5].getAttribute("bookid")
        let bookingInfo = {
          attraction: {
            id: parseInt(orderId),
            name: orderName,
            address: orderAddress,
            image: orderImage,
            bookingId:bookingId
          },
          date: orderDate,
          time: orderTime,
        };
        bookingList.push(bookingInfo)
      });

      let postToApi={
        "prime":result.card.prime,
        "order":{
            "price":totalPrice,
            "trip":bookingList
        },
        "contact":{
            "name":document.querySelectorAll("#userNameInput")[0].value,
            "email":document.querySelectorAll("#userEmailInput")[0].value,
            "phone":document.querySelectorAll("#userPhoneInput")[0].value
        }
      }
      const myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(postToApi),
      };
      const res = fetch("/api/orders", requestOptions).then((response)=>response.json()).then((response)=>{
        if(response["data"]){
            // 付款成功
            console.log(response)
            window.location.href=`/thankyou?number=${response["data"]["number"]}`
        }
        else{
            // 付款失敗
            console.log(response)
            window.location.href=`/thankyou?number=${response["number"]}`
        }
      })
    });
  }
}
