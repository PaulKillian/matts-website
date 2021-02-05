const parallax = document.querySelector("#contact"),
    s1 = document.querySelector("#s1"),
    s1A = document.querySelector("#s1-a"),
    s1B = document.querySelector("#s1-b"),
    s1C = document.querySelector("#s1-c"),
    contact = document.querySelector("#contact-text"),
    about = document.querySelector("#about"),
    copy = document.getElementById("copy-right"),
    y = window.matchMedia("(max-width: 376px)");
    mainBg = document.getElementById("s1");
    x = window.matchMedia("(max-width: 769px)");
    mobile = document.createElement("div");
    z = window.matchMedia("(min-width: 1488px)");

function iPhone(e) {
    document.querySelector("#slides");
    const t = document.querySelector("#s1-left"),
        c = document.querySelector("#bottom-p-1"),
        a = document.querySelector("#s1-text"),
        o = document.querySelector("#bottom-p");
    e.matches &&
    (copy.classList.add("pt-5"),
        contact.classList.add("ml-2"),
        (parallax.style.filter = "brightness(0.3)"),
        a.classList.add("small-font"),
        s1A.classList.remove("display-1"),
        s1B.classList.remove("display-2"),
        s1C.classList.remove("display-2"),
        t.classList.remove("pt-4", "mt-5"),
        c.classList.remove("s1-text-size"),
        (c.textContent = "Catering small to medium size businesses with a focus on independent freelancers. We offer solutions for optimal IT performance."),
        (o.textContent = "")),
        (mainBg.remove);
        mainBg.appendChild(mobile);
        mobile.className = "section tinted-image main-hero";
}
iPhone(y), y.addListener(iPhone);

function iPad(e) {
    const t = document.querySelector("#contact-text");
    e.matches &&
    ((parallax.style.filter = "brightness(0.3)"),
        (parallax.style.height = "1177px"),
        (s1.style.filter = "brightness(0.6)"),
        t.classList.remove("text-left"),
        t.classList.add("text-center", "pt-3"),
        about.classList.remove("text-right"),
        about.classList.add("text-center", "pl-5", "pt-2"));
}
iPad(x), x.addListener(iPad);

function full(e) {
    e.matches && (copy.classList.remove("text-center"), s1A.classList.add("display-1"), s1B.classList.add("display-2"), s1C.classList.add("display-2"));
}
full(z), z.addListener(full);

const sections = document.querySelectorAll('div.section');
const config = {
    rootMargin: '-50px 0px -55%'
};

let observer = new IntersectionObserver(function (entries, self) {}, config);

sections.forEach(section => {
    observer.observe(section);
});

