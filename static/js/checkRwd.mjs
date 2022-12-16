function checkRwd() {
   
    if (window.innerWidth >= 1200) {
      return "desktop"
    } else if (window.innerWidth > 600 && window.innerWidth < 1200) {
      return "table"
    } else {
      return "phone"
    }
  }

  export{checkRwd}