<script>
const tiles = document.querySelectorAll(".tile img");
const overlay = document.getElementById("overlay");
const fullImage = document.getElementById("fullImage");
const close = document.getElementById("close");

tiles.forEach(img => {
    img.addEventListener("click", function () {
        fullImage.src = this.src;
        overlay.classList.add("active");
    });
});

close.addEventListener("click", function () {
    overlay.classList.remove("active");
});

overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});
</script>
