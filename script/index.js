document.addEventListener('DOMContentLoaded', function () {

    
    // Menú desplegable
    const headerBtn = document.querySelector('.Header-btn');
    const headerNav = document.querySelector('.Header-nav');

    headerBtn.addEventListener('click', function () {
        headerNav.classList.toggle('isActive');
        headerNav.classList.toggle('isHidden');
    });



    // Filtros para la galería de proyectos
    const trabajosFilterAll = document.querySelector('.Trabajos-filter--all');
    const trabajoPreviews = document.querySelectorAll('.Trabajo-preview');

    const trabajosFilterUxui = document.querySelector('.Trabajos-filter--uxui');
    const trabajosFilterGrafico = document.querySelector('.Trabajos-filter--grafico');
    const trabajosFilter3d = document.querySelector('.Trabajos-filter--3d');

    trabajosFilterAll.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            preview.classList.add('isActive');
            preview.classList.remove('isHidden');
        });
    });

    trabajosFilterUxui.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-uxui')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });

    trabajosFilterGrafico.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-grafico')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });

    trabajosFilter3d.addEventListener('click', function () {
        trabajoPreviews.forEach(function (preview) {
            if (preview.classList.contains('Trabajo-3d')) {
                preview.classList.add('isActive');
                preview.classList.remove('isHidden');
            } else {
                preview.classList.remove('isActive');
                preview.classList.add('isHidden');
            }
        });
    });
});







    