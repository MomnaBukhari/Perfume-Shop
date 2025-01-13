import gsap from "gsap";

const initializeCursor = () => {
  /* Variables Defining*/
  const cursor = document.querySelector("#cursor");
  const miniBox = document.querySelector(".center-mini-box");
  const products_listing = document.querySelector(".products-listing");
  const see_more = document.querySelector(".see-more");

  /*Handeling NOTFOUND condition*/
  if (!cursor || !miniBox || !products_listing ||!see_more) return;

  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    gsap.set(cursor, {
      x: cursorX,
      y: cursorY,
      opacity: 1,
    });

    requestAnimationFrame(animateCursor);
  };

  miniBox.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      width: "100px",
      height: "100px",
      backgroundColor: "#e6c7da",
      duration: 0.3,
    });
  });

  miniBox.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      width: 40,
      height: 40,
      backgroundColor: "#f44b9b",
      duration: 0.3,
    });
  });

  miniBox.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.offsetWidth / 2,
      y: e.clientY - cursor.offsetHeight / 2,
      duration: 0.1,
    });
  });

  products_listing.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      width: "300px",
      height:"300px",
      backgroundColor: "#e6c7da",
      duration: 0.3,
    });
    products_listing.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.1,
      });
    });

    products_listing.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        width: 0,
        height: 0,
        backgroundColor: "#f44b9b",
        duration: 0.3,
      });
    });




    see_more.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        width: "0",
        height: "0",
        backgroundColor: "#e6c7da",
        duration: 0.3,
      });
    });
  
    see_more.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        width: 40,
        height: 40,
        backgroundColor: "#f44b9b",
        duration: 0.3,
      });
    });
  
    see_more.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 0.1,
      });
    });




    
  });



  
  animateCursor();
};

export default initializeCursor;
