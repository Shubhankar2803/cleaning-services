// Enhanced counter animation function
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = Date.now();
    
    function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        element.textContent = target === 5000 ? current.toLocaleString() + '+' : 
                             target === 100 ? current + '%' : 
                             current + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    updateCounter();
}

// Initialize counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        counters.forEach(counter => observer.observe(counter));
    } else {
        // Fallback for browsers without IntersectionObserver
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            animateCounter(counter, target);
        });
    }
}

// Smooth scroll for scroll indicator
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('#services-preview');
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Mock data for testing (fallback when JSON fails to load)
const mockData = {
    services: [
        {
            id: 1,
            title: "Residential Cleaning",
            description: "Complete home cleaning service including all rooms, bathrooms, and kitchen areas.",
            price: "$80-150",
            duration: "2-4 hours",
            icon: "fas fa-home"
        },
        {
            id: 2,
            title: "Commercial Cleaning", 
            description: "Professional office and commercial space cleaning with flexible scheduling.",
            price: "$120-300",
            duration: "3-6 hours", 
            icon: "fas fa-building"
        },
        {
            id: 3,
            title: "Deep Cleaning",
            description: "Intensive cleaning service that covers every corner and detail of your space.",
            price: "$200-400",
            duration: "4-8 hours",
            icon: "fas fa-broom"
        },
        {
            id: 4,
            title: "Move-in/Move-out",
            description: "Comprehensive cleaning for property transitions and new residents.",
            price: "$150-350", 
            duration: "3-7 hours",
            icon: "fas fa-truck-moving"
        },
        {
            id: 5,
            title: "Post-Construction Cleanup",
            description: "Specialized cleaning after renovation or construction work.",
            price: "$250-500",
            duration: "4-10 hours", 
            icon: "fas fa-hard-hat"
        },
        {
            id: 6,
            title: "Carpet & Upholstery Cleaning",
            description: "Professional carpet and upholstery cleaning with advanced equipment.",
            price: "$100-250",
            duration: "2-4 hours",
            icon: "fas fa-couch"
        }
    ],
    testimonials: [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "Homeowner", 
            rating: 5,
            text: "SparkleClean Pro transformed my home! Their attention to detail is incredible and the team is so professional."
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Office Manager",
            rating: 5, 
            text: "Our office has never looked better! The commercial cleaning service is top-notch and they work around our schedule."
        },
        {
            id: 3,
            name: "Emily Rodriguez", 
            position: "Property Manager",
            rating: 5,
            text: "I manage multiple properties and SparkleClean Pro is my go-to cleaning service. Reliable, thorough, and competitive pricing."
        },
        {
            id: 4,
            name: "David Wilson",
            position: "Restaurant Owner",
            rating: 5,
            text: "Running a restaurant requires the highest cleaning standards. SparkleClean Pro delivers exceptional service every time."
        }
    ]
};

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

// Display services on home page (first 3 services) - Flexbox Layout
function displayServices() {
    const container = document.getElementById('services-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    // Show first 3 services in a responsive flexbox layout
    const services = siteData.services.slice(0, 3);
    
    const bgColors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    ];
    
    services.forEach((service, index) => {
        const cardBg = bgColors[index % bgColors.length];
        
        const serviceHTML = `
            <div class="service-card-wrapper">
                <div class="service-card animate-on-scroll h-100 text-white position-relative overflow-hidden" 
                     style="animation-delay: ${index * 0.2}s; border-radius: 20px; background: ${cardBg}; 
                            box-shadow: 0 15px 35px rgba(0,0,0,0.15); 
                            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" 
                     onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 25px 50px rgba(0,0,0,0.25)'" 
                     onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.15)'">
                    
                    <!-- Top Section: Price and Icon -->
                    <div class="card-header border-0 text-center pt-4 pb-2" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="badge bg-light text-dark px-3 py-2 rounded-pill fw-bold">${service.price}</div>
                            <div class="bg-white bg-opacity-20 rounded-circle p-2" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
                                <i class="${service.icon} text-white fs-4"></i>
                            </div>
                        </div>
                        <h4 class="fw-bold mb-0" style="font-size: 1.4rem;">${service.title}</h4>
                    </div>
                    
                    <!-- Middle Section: Description -->
                    <div class="card-body d-flex flex-column px-4 py-3">
                        <p class="text-white text-opacity-90 mb-4 flex-grow-1" style="font-size: 0.9rem; line-height: 1.5;">${service.description}</p>
                        
                        <!-- Features in horizontal layout -->
                        <div class="d-flex justify-content-around mb-4 py-3 rounded-3" style="background: rgba(255,255,255,0.1);">
                            <div class="text-center">
                                <i class="fas fa-clock text-white mb-1 d-block" style="font-size: 1.1rem;"></i>
                                <small class="text-white text-opacity-80 fw-medium">${service.duration || '2-3 hrs'}</small>
                            </div>
                            <div class="text-center">
                                <i class="fas fa-shield-alt text-white mb-1 d-block" style="font-size: 1.1rem;"></i>
                                <small class="text-white text-opacity-80 fw-medium">Insured</small>
                            </div>
                            <div class="text-center">
                                <i class="fas fa-leaf text-white mb-1 d-block" style="font-size: 1.1rem;"></i>
                                <small class="text-white text-opacity-80 fw-medium">Eco-friendly</small>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bottom Section: CTA Button -->
                    <div class="card-footer border-0 px-4 pb-4" style="background: transparent;">
                        <a href="contact.html" class="btn btn-light w-100 py-3 fw-bold text-uppercase position-relative overflow-hidden" 
                           style="border-radius: 15px; letter-spacing: 0.5px; background: rgba(255,255,255,0.95); color: #333; 
                                  transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(0,0,0,0.1);"
                           onmouseover="this.style.background='white'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'"
                           onmouseout="this.style.background='rgba(255,255,255,0.95)'; this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)'">
                            <i class="fas fa-calendar-plus me-2"></i>Book This Service
                        </a>
                    </div>
                    
                    <!-- Decorative elements -->
                    <div class="position-absolute" style="top: -20px; right: -20px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; z-index: 0;"></div>
                    <div class="position-absolute" style="bottom: -30px; left: -30px; width: 100px; height: 100px; background: rgba(255,255,255,0.05); border-radius: 50%; z-index: 0;"></div>
                </div>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
    
    // Trigger animations
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
            if (!el.classList.contains('animated')) {
                el.classList.add('animated');
            }
        });
    }, 100);
}

// Display testimonials on home page - Flexbox Layout
function initAdvancedTestimonials(){
  if(!siteData || !siteData.testimonials) return;
  const data = siteData.testimonials;
  const track = document.getElementById('testimonial-track');
  if(!track) return; // Not on page
  const filtersWrap = document.getElementById('testimonial-filters');
  const dotsWrap = document.getElementById('testimonial-dots');
  const categories = ['All', ...Array.from(new Set(data.map(t=>t.serviceUsed))).filter(Boolean)];
  let activeFilter = 'All';
  let currentIndex = 0; // slide group index
  const perViewDesktop = 3;
  function filtered(){ return activeFilter==='All' ? data : data.filter(t=>t.serviceUsed===activeFilter); }
  function buildFilters(){
    if(!filtersWrap) return; filtersWrap.innerHTML = categories.map(cat=>`<button class="testimonial-filter ${cat===activeFilter?'active':''}" data-filter="${cat}">${cat}</button>`).join('');
    filtersWrap.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{ activeFilter=btn.dataset.filter; currentIndex=0; buildFilters(); render(); }));
  }
  function starIcons(r){ return Array.from({length:5},(_,i)=>`<i class='fas fa-star${i<r?'':' text-muted opacity-25'}'></i>`).join(''); }
  function render(){
    const list = filtered();
    track.innerHTML = list.map(t=>`<article class="testimonial-card-adv">
        <span class="quote-icon"><i class="fas fa-quote-right"></i></span>
        <div class="d-flex align-items-center gap-3 mb-3">
          <img src="${t.avatar}" alt="${t.name}" class="avatar">
          <div>
            <div class="testimonial-name mb-0">${t.name}</div>
            <div class="testimonial-role">${t.position}</div>
          </div>
        </div>
        <div class="rating mb-2">${starIcons(t.rating)}</div>
        <p class="short-text">${t.text.length>160 ? t.text.slice(0,160)+'…' : t.text}</p>
        <div class="meta mb-3">${t.serviceUsed || ''} • ${t.location || ''}</div>
        <div class="testimonial-actions">
          <button class="btn btn-link-small p-0 more-link" data-id="${t.id}">Read Full</button>
          ${t.verified?'<i class="fas fa-badge-check text-success ms-auto" title="Verified"></i>':''}
        </div>
      </article>`).join('');
    buildDots(list.length);
    applyTransform();
    // Attach modal triggers
    track.querySelectorAll('.more-link').forEach(btn=>btn.addEventListener('click',()=>openModal(btn.dataset.id)));
  }
  function buildDots(len){
    if(!dotsWrap) return; const groups = Math.ceil(len / getPerView());
    dotsWrap.innerHTML = Array.from({length:groups},(_,i)=>`<button data-idx='${i}' class='${i===currentIndex?'active':''}'></button>`).join('');
    dotsWrap.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{ currentIndex=parseInt(b.dataset.idx); applyTransform(); updateDots(); }));
  }
  function updateDots(){ if(!dotsWrap) return; dotsWrap.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===currentIndex)); }
  function getPerView(){ return window.innerWidth<576?1: (window.innerWidth<992?2:3); }
  function applyTransform(){ const pv = getPerView(); const cardWidthPercent = 100 / pv; const offset = currentIndex * (100); track.style.transform = `translateX(-${offset}%)`; track.style.width = `${(filtered().length / pv)*100}%`; track.querySelectorAll('.testimonial-card-adv').forEach(card=>card.style.flex=`0 0 ${cardWidthPercent}%`); updateDots(); }
  // Prev/Next
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  function clampIndex(){ const totalGroups = Math.ceil(filtered().length / getPerView()) -1; currentIndex = Math.min(Math.max(0,currentIndex), totalGroups); }
  prevBtn && prevBtn.addEventListener('click',()=>{ currentIndex--; clampIndex(); applyTransform(); });
  nextBtn && nextBtn.addEventListener('click',()=>{ currentIndex++; clampIndex(); applyTransform(); });
  window.addEventListener('resize', ()=>{ clampIndex(); applyTransform(); });

  // Modal for full testimonial
  function ensureModal(){ let m = document.getElementById('testimonialModal'); if(m) return m; const div = document.createElement('div'); div.innerHTML = `
    <div class="modal fade testimonial-modal" id="testimonialModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0"><h5 class="modal-title fw-bold" id="testimonialModalLabel">Testimonial</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div class="modal-body"></div>
        </div>
      </div>
    </div>`; document.body.appendChild(div.firstElementChild); return document.getElementById('testimonialModal'); }
  const bootstrapModal = () => window.bootstrap && window.bootstrap.Modal;
  function openModal(id){ const modalEl = ensureModal(); const item = siteData.testimonials.find(t=>t.id==id); if(!item) return; modalEl.querySelector('.modal-body').innerHTML = `
      <div class="d-flex gap-3 mb-3">
        <img src='${item.avatar}' alt='${item.name}' class='avatar' style='width:64px;height:64px;border-radius:50%;object-fit:cover;'>
        <div><h5 class='mb-1'>${item.name}</h5><div class='small text-muted'>${item.position} • ${item.location || ''}</div></div>
      </div>
      <div class='mb-3 text-warning'>${starIcons(item.rating)}</div>
      <p class='mb-0'>${item.text}</p>`; if(bootstrapModal()){ new bootstrap.Modal(modalEl).show(); }
  }

  buildFilters();
  render();
}

function renderStaticTestimonials(){
  const row = document.getElementById('testimonial-static-row');
  if(!row || !siteData) return; row.innerHTML='';
  const list = siteData.testimonials.slice(0,6); // first six
  list.forEach(t=>{ row.innerHTML += `<div class="testimonial-card-adv mb-4">
      <span class="quote-icon"><i class="fas fa-quote-right"></i></span>
      <div class="d-flex align-items-center gap-3 mb-3">
        <img src='${t.avatar}' alt='${t.name}' class='avatar'>
        <div><div class='testimonial-name mb-0'>${t.name}</div><div class='testimonial-role'>${t.position}</div></div>
      </div>
      <div class='rating mb-2'>${Array.from({length:5},(_,i)=>`<i class='fas fa-star${i<t.rating?"":" text-muted opacity-25"}'></i>`).join('')}</div>
      <p class='short-text mb-2'>${t.text.length>150? t.text.slice(0,150)+'…': t.text}</p>
      <div class='meta mb-0'>${t.serviceUsed || ''} • ${t.location || ''}</div>
    </div>`; });
}

function triggerHeroAnimations(){
  const hero = document.querySelector('.hero'); if(!hero) return;
  const reveal = () => hero.classList.add('anim-ready');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){ reveal(); io.disconnect(); } }); }, { threshold:.3 });
    io.observe(hero);
  } else { setTimeout(reveal, 200); }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM loaded, initializing...');
    
    // Check if containers exist
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');
    const servicesContainer = document.getElementById('services-container');
    const testimonialsContainer = document.getElementById('testimonials-container');
    
    console.log('Containers found:', {
        header: !!headerContainer,
        footer: !!footerContainer,
        services: !!servicesContainer,
        testimonials: !!testimonialsContainer
    });
    
    // Load data
    await loadData();
    
    // Initialize enhanced features
    initCounters();
    initScrollIndicator();
    
    if (siteData) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html' || currentPage === '') {
            displayServices();
            renderStaticTestimonials();
            triggerHeroAnimations();
        } else if (currentPage === 'services.html') {
            // Enhanced services page handled by inline script (filters + search). Do nothing here to avoid overwriting styles.
        }
    } else {
        console.error('Failed to load data');
    }
});
