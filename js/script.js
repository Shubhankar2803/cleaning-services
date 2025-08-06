

let siteData = null;

// Load data from JSON file
async function loadData() {
    try {
        const response = await fetch('data/cleaning-services.json');
        if (!response.ok) {
            throw new Error('Failed to load data');
        }
        siteData = await response.json();
        console.log('Data loaded successfully');
        return siteData;
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}

// Display testimonials on home page
function displayTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    // Show first 3 testimonials
    const testimonials = siteData.testimonials.slice(0, 3);
    
    testimonials.forEach(testimonial => {
        const stars = '★'.repeat(testimonial.rating);
        const testimonialHTML = `
            <div class="col-lg-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h6 class="fw-bold">${testimonial.name}</h6>
                        <small class="text-muted">${testimonial.position}</small>
                        <div class="my-2">
                            <span class="text-warning">${stars}</span>
                        </div>
                        <p>"${testimonial.text}"</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += testimonialHTML;
    });
}

// Display services on services page
function displayServices() {
    const container = document.getElementById('all-services-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.services.forEach(service => {
        const serviceHTML = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <div class="card-body text-center">
                        <i class="${service.icon} fa-3x text-primary mb-3"></i>
                        <h5>${service.title}</h5>
                        <p>${service.description}</p>
                        <p class="h5 text-primary">${service.price}</p>
                        <a href="contact.html" class="btn btn-primary">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async function() {
    await loadData();
    
    if (siteData) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'index.html') {
            displayTestimonials();
        } else if (currentPage === 'services.html') {
            displayServices();
        }
    }
});
