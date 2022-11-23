export function ob() {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.0,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entries);
    });
    alert("ttest");
  };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector(".footer");
  observer.observe(target);
}
