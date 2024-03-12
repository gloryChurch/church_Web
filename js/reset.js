const parentMenus = document.getElementsByClassName("parent-menu1");

// Loop through each parent menu
for (const parentMenu of parentMenus) {
    // Add a click event listener to each parent menu
    parentMenu.addEventListener("click", function () {
        // Find the corresponding sub-menu1 of the clicked parent menu
        const subMenu = this.querySelector(".sub-menu1");

        // Toggle the "show" class on the sub-menu1
        if (subMenu) {
            subMenu.classList.toggle("show");
        }
    });
}s