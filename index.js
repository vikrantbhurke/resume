const toggler = document.getElementById("toggler--slider--circle")
toggler.addEventListener("click", function(e) {
    console.log("clicked")
    document.body.classList.toggle("dark")

})