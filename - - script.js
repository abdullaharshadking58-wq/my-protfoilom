// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// ===============================
// Contact Button
// ===============================

const contactButton = document.querySelector('.contact .btn');

if (contactButton) {

    contactButton.addEventListener('click', function () {

        console.log('Thanks for contacting Muhammad!');

    });

}


// ===============================
// Scroll Animation
// ===============================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {

    section.classList.add('hidden');

    observer.observe(section);

});