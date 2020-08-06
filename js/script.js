let burger = document.querySelector(".burger");
let navigationLinks = document.querySelector(".navigation__links");

burger.addEventListener("click", function () {
    navigationLinks.classList.toggle("show-mobile__menu");
})

//scroll
var links = document.querySelectorAll(".navigation__link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        links.forEach((el) => {
            el.classList.remove('link-active')
        });
        links[i].classList.add('link-active');
        var sectionId = links[i].getAttribute('href');
        document.querySelector('' + sectionId).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        navigationLinks.classList.remove("show-mobile__menu");
    })
}