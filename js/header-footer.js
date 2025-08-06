function createHeader() {
    return '<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #1e3d59;">' +
           '<div class="container">' +
           '<a class="navbar-brand text-white fw-bold fs-4" href="index.html">' +
           '<i class="fas fa-sparkles me-2"></i>SparkleClean Pro' +
           '</a>' +
           '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
           '<span class="navbar-toggler-icon"></span>' +
           '</button>' +
           '<div class="collapse navbar-collapse" id="navbarNav">' +
           '<ul class="navbar-nav ms-auto">' +
           '<li class="nav-item"><a class="nav-link text-white fw-semibold" href="index.html">Home</a></li>' +
           '<li class="nav-item"><a class="nav-link text-white fw-semibold" href="services.html">Services</a></li>' +
           '<li class="nav-item"><a class="nav-link text-white fw-semibold" href="about.html">About</a></li>' +
           '<li class="nav-item"><a class="nav-link text-white fw-semibold" href="contact.html">Contact</a></li>' +
           '</ul>' +
           '</div>' +
           '</div>' +
           '</nav>';
}

function createFooter() {
    return '<footer class="text-white py-5" style="background-color: #1e3d59;">' +
           '<div class="container">' +
           '<div class="row">' +
           '<div class="col-lg-4 mb-4">' +
           '<h5 class="fw-bold">SparkleClean Pro</h5>' +
           '<p class="mb-3">Professional cleaning services for your home and office.</p>' +
           '</div>' +
           '<div class="col-lg-2 col-md-6 mb-4">' +
           '<h6 class="fw-bold">Quick Links</h6>' +
           '<ul class="list-unstyled">' +
           '<li><a href="index.html" class="text-white-50 text-decoration-none">Home</a></li>' +
           '<li><a href="services.html" class="text-white-50 text-decoration-none">Services</a></li>' +
           '<li><a href="about.html" class="text-white-50 text-decoration-none">About Us</a></li>' +
           '<li><a href="contact.html" class="text-white-50 text-decoration-none">Contact</a></li>' +
           '</ul>' +
           '</div>' +
           '<div class="col-lg-3 col-md-6 mb-4">' +
           '<h6 class="fw-bold">Contact Info</h6>' +
           '<p class="mb-2"><i class="fas fa-phone me-2"></i>+1 (555) 123-4567</p>' +
           '<p class="mb-2"><i class="fas fa-envelope me-2"></i>info@sparklecleanpro.com</p>' +
           '</div>' +
           '</div>' +
           '<hr class="my-4">' +
           '<div class="text-center">' +
           '<p class="mb-0">&copy; 2024 SparkleClean Pro. All rights reserved.</p>' +
           '</div>' +
           '</div>' +
           '</footer>';
}

document.addEventListener('DOMContentLoaded', function() {
    var headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }

    var footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
});
