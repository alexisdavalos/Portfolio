const LoaderToggle = () => {
    //selects loader to toggle hidden class
    const loader = document.querySelector(".loaderWrapper");
    //select HTML body to toggle Y-Axis Overflow
    const HTMLbody = document.querySelector('html');
    //toggles Y-Axis Overflow
    HTMLbody.style.overflowY = "hidden";
    //declares 1 second timer
    const timer = setTimeout(() => {
        loader.classList.toggle("hidden")
        HTMLbody.style.overflowY = "visible"
    }, 1000)

    // cleaup function - removes timer reference from memory
    return () => {
        clearTimeout(timer);
    }
}

export default LoaderToggle;