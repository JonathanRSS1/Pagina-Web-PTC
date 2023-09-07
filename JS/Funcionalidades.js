const links = document.querySelectorAll('.main-menu a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const imgSrc = link.getAttribute('data-img');
                const description = link.getAttribute('data-description');
                const title = link.getAttribute('data-title');

                Swal.fire({
                    title: title,
                    text: description,
                    imageUrl: imgSrc,
                    imageAlt: title,
                    confirmButtonText: 'Cerrar'
                });
            });
        });