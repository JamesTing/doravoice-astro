document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll("#feature-list #tab > div");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        items[i].addEventListener("mouseenter", function () {
            var tab_id = this.getAttribute("data-target");

            var activedItems = document.querySelectorAll(
                "#feature-list #tab > div.bg-neutral-100",
            );
            for (var j = 0; j < activedItems.length; j++) {
                activedItems[j].classList.remove("bg-neutral-100");
            }

            var activedContents = document.querySelectorAll(
                "#feature-list #content > div.block",
            );
            for (var j = 0; j < activedContents.length; j++) {
                activedContents[j].classList.remove("block");
                activedContents[j].classList.add("hidden");
            }

            this.classList.add("bg-neutral-100");
            console.log( document.querySelector(tab_id));
            document.querySelector(tab_id).classList.remove("hidden");
            document.querySelector(tab_id).classList.add("block");

            return false;
        });
    }

    var userLang = navigator.language || navigator.userlanguage;
    if (userLang.startsWith("zh")) {
        var languageSwitch = document.querySelector(
            "#language-switch",
        );
        if (languageSwitch) {
            languageSwitch.style.display = "block";
        }
    }
});