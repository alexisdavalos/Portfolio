const LoaderToggle = async (e) => {
  console.log("toggling loader");
  //selects loader to toggle hidden class
  const loader = document.querySelector(".loaderWrapper");
  //if client event toggles Loader, avoids loader getting stuck inside of timer()
  if (e) {
    loader.classList.toggle("hidden");
  }
  //select HTML body to toggle Y-Axis Overflow
  const HTMLbody = document.querySelector("html");
  //toggles Y-Axis Overflow
  HTMLbody.style.overflowY = "hidden";
  //declares 3 second timer
  const timer = setTimeout(() => {
    loader.classList.toggle("hidden");
    HTMLbody.style.overflowY = "visible";
  }, 2000);

  // cleaup function - removes timer reference from memory
  return () => {
    clearTimeout(timer);
  };
};

export default LoaderToggle;
