function createHeader() {
    return '<nav class="navbar navbar-expand-lg navbar-custom sticky-top">' +
           '<div class="container">' +
           '<a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">' +
           '<span class="d-inline-flex align-items-center justify-content-center me-2" style="width:42px;height:42px;background:var(--gradient-primary);border-radius:12px;">' +
           '<img src="images/logo.svg" alt="SparkleClean Pro" style="width:26px;height:26px;">' +
           '</span>' +
           '<span>Sparkle<span class="brand-accent">Clean</span> Pro</span>' +
           '</a>' +
           '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
           '<span class="navbar-toggler-icon"></span>' +
           '</button>' +
           '<div class="collapse navbar-collapse" id="navbarNav">' +
           '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">' +
           '<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
           '<li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>' +
           '<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>' +
           '<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
           '</ul>' +
           '<a href="contact.html" class="btn btn-gradient-primary ms-lg-3 btn-rounded-pill px-4 py-2">' +
           '<i class="fas fa-calendar-check me-2"></i>Book Now</a>' +
           '</div>' +
           '</div>' +
           '</nav>';
}

function createFooter() {
    return '<footer class="text-white py-5 mt-5" style="background: var(--gradient-primary);">' +
           '<div class="container">' +
           '<div class="row">' +
           '<div class="col-lg-4 mb-4">' +
           '<div class="d-flex align-items-center mb-3">' +
           '<div class="p-2 rounded-circle me-3" style="background: rgba(255,255,255,0.2);">' +
           '<i class="fas fa-sparkles text-warning fs-4"></i>' +
           '</div>' +
           '<h5 class="fw-bold mb-0">SparkleClean Pro</h5>' +
           '</div>' +
           '<p class="opacity-75 mb-4">Professional cleaning services with over 12 years of experience. Your trusted partner for a spotless home and office environment.</p>' +
           '<div class="d-flex gap-3">' +
           '<a href="#" class="text-white-50 fs-5"><i class="fab fa-facebook"></i></a>' +
           '<a href="#" class="text-white-50 fs-5"><i class="fab fa-twitter"></i></a>' +
           '<a href="#" class="text-white-50 fs-5"><i class="fab fa-instagram"></i></a>' +
           '<a href="#" class="text-white-50 fs-5"><i class="fab fa-linkedin"></i></a>' +
           '</div>' +
           '</div>' +
           '<div class="col-lg-2 col-md-6 mb-4">' +
           '<h6 class="fw-bold mb-3">Quick Links</h6>' +
           '<ul class="list-unstyled">' +
           '<li class="mb-2"><a href="index.html" class="text-white-50 text-decoration-none">Home</a></li>' +
           '<li class="mb-2"><a href="services.html" class="text-white-50 text-decoration-none">Services</a></li>' +
           '<li class="mb-2"><a href="about.html" class="text-white-50 text-decoration-none">About Us</a></li>' +
           '<li class="mb-2"><a href="contact.html" class="text-white-50 text-decoration-none">Contact</a></li>' +
           '</ul>' +
           '</div>' +
           '<div class="col-lg-3 col-md-6 mb-4">' +
           '<h6 class="fw-bold mb-3">Our Services</h6>' +
           '<ul class="list-unstyled">' +
           '<li class="mb-2"><i class="fas fa-home me-2 text-warning"></i>Residential Cleaning</li>' +
           '<li class="mb-2"><i class="fas fa-building me-2 text-warning"></i>Commercial Cleaning</li>' +
           '<li class="mb-2"><i class="fas fa-broom me-2 text-warning"></i>Deep Cleaning</li>' +
           '<li class="mb-2"><i class="fas fa-truck-moving me-2 text-warning"></i>Move-in/Move-out</li>' +
           '</ul>' +
           '</div>' +
           '<div class="col-lg-3 col-md-6 mb-4">' +
           '<h6 class="fw-bold mb-3">Contact Info</h6>' +
           '<div class="mb-3">' +
           '<i class="fas fa-phone me-2 text-warning"></i>' +
           '<span>+1 (555) 123-4567</span>' +
           '</div>' +
           '<div class="mb-3">' +
           '<i class="fas fa-envelope me-2 text-warning"></i>' +
           '<span>info@sparklecleanpro.com</span>' +
           '</div>' +
           '<div class="mb-3">' +
           '<i class="fas fa-map-marker-alt me-2 text-warning"></i>' +
           '<span>123 Clean Street, City 12345</span>' +
           '</div>' +
           '<div class="mb-3">' +
           '<i class="fas fa-clock me-2 text-warning"></i>' +
           '<span>Mon-Fri: 8AM-6PM</span>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '<hr class="my-4 opacity-25">' +
           '<div class="row align-items-center">' +
           '<div class="col-md-6">' +
           '<p class="mb-0 opacity-75">&copy; 2024 SparkleClean Pro. All rights reserved.</p>' +
           '</div>' +
           '<div class="col-md-6 text-md-end">' +
           '<span class="badge bg-success bg-opacity-75 me-2 px-3 py-2">' +
           '<i class="fas fa-shield-alt me-1"></i>Licensed & Insured' +
           '</span>' +
           '<span class="badge bg-success bg-opacity-75 px-3 py-2">' +
           '<i class="fas fa-leaf me-1"></i>Eco-Certified' +
           '</span>' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</footer>';
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Header-Footer Script: DOM loaded');
    
    // Create and insert header
    var headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        console.log('Header-Footer Script: Header container found, inserting header');
        headerContainer.innerHTML = createHeader();
        
        // Add active state to current page navigation
        setTimeout(() => {
            const currentPage = document.body.getAttribute('data-page');
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                let isActive = false;
                
                if (currentPage === 'home' && (href === 'index.html' || href === '/')) {
                    isActive = true;
                } else if (currentPage === 'services' && href === 'services.html') {
                    isActive = true;
                } else if (currentPage === 'about' && href === 'about.html') {
                    isActive = true;
                } else if (currentPage === 'contact' && href === 'contact.html') {
                    isActive = true;
                }
                
                if (isActive) {
                    link.classList.add('active');
                }
            });
        }, 100);
    } else {
        console.log('Header-Footer Script: Header container NOT found');
    }

    // Create and insert footer
    var footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        console.log('Header-Footer Script: Footer container found, inserting footer');
        footerContainer.innerHTML = createFooter();
    } else {
        console.log('Header-Footer Script: Footer container NOT found');
    }
});
