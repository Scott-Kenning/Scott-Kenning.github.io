const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index)=> {
            (link.style.animation) ? link.style.animation = "" : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .2}s`;
        })

        burger.classList.toggle('burger-toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', ()=> {
            if(nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');
                burger.classList.toggle('burger-toggle');
                navLinks.forEach((link,index)=> {
                    (link.style.animation) ? link.style.animation = "" : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .2}s`;
                })
            }
        })
    })
}

const aboutTab = () => {
    const btns = document.querySelectorAll('.tab-btn');
    const about = document.querySelector('.about');
    const articles = document.querySelectorAll('.content');

    about.addEventListener('click',function(e) {
        const id = e.target.dataset.id;
        if(id) {
            btns.forEach(function(btn) {
                btn.classList.remove('active');
                e.target.classList.add('active');
            });
            articles.forEach(function(article) {
                article.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
            console.log(id)
        }
    });
}

navSlide();
aboutTab();