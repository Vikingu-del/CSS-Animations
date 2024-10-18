document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        const img =this.closest("li").querySelector("img").cloneNode(true);
        img.classList.add("zoom");
        document.body.appendChild(img);
        setTimeout(() => {
            document.querySelector(".zoom").remove();
        }, 1000); 
    });
});