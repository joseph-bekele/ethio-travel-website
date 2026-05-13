// ===================================
// DESTINATION DETAILS DATABASE
// ===================================
const destinationDetails = {
    'Lalibela': {
        title: 'Lalibela - Sacred Rock Churches',
        description: 'Lalibela is famous for its 11 rock-hewn churches, a wonder of medieval Ethiopian architecture and UNESCO World Heritage site. These churches were built in the 12th century during the reign of King Lalibela.',
        highlights: [
            'St. George\'s Church (Bet Giyorgis) - The most famous church',
            'Ancient pilgrimage destination',
            'Year-round religious ceremonies',
            'Historic Kingdom of Lalibela sites',
            'Traditional Ethiopian coffee ceremonies'
        ],
        bestTime: 'October to February',
        activities: 'Church tours, Photography, Hiking, Cultural immersion',
        accommodation: 'Heritage Lalibela Resort'
    },
    'Simien Mountains': {
        title: 'Simien Mountains - Roof of Africa',
        description: 'The Simien Mountains are a dramatic mountain range offering some of the most spectacular trekking experiences in Africa. Home to rare endemic wildlife and breathtaking escarpments.',
        highlights: [
            'Ras Dashen - Second highest peak in Ethiopia',
            'Unique wildlife: Ethiopian wolf, Gelada baboons',
            'Stunning scenic views and photography',
            'Multi-day trekking routes',
            'Remote mountain communities'
        ],
        bestTime: 'October to February',
        activities: 'Trekking, Wildlife viewing, Photography, Hiking',
        accommodation: 'Luxury Mountain Lodge'
    },
    'Axum': {
        title: 'Axum - Ancient Empire',
        description: 'Axum was once the capital of the powerful Aksumite Empire, one of the ancient world\'s four great empires. Today it showcases incredible historical monuments and artifacts.',
        highlights: [
            'Ancient stone stelae (obelisks)',
            'Church of St. Mary of Zion',
            'Archaeological museum with ancient coins',
            'Royal palaces ruins',
            'Ancient market sites'
        ],
        bestTime: 'October to February',
        activities: 'Historical tours, Museum visits, Photography, Cultural exploration',
        accommodation: 'Axum Historical Inn'
    },
    'Danakil Depression': {
        title: 'Danakil Depression - Alien Landscape',
        description: 'The Danakil Depression is one of the hottest, lowest, and most inhospitable places on Earth. Its otherworldly landscapes include colorful geothermal features and salt flats.',
        highlights: [
            'Erta Ale volcano - Active lava lake',
            'Dallol geothermal field - Rainbow colors',
            'Salt mining traditions',
            'Sulfur springs and geysers',
            'Unique geological formations'
        ],
        bestTime: 'November to February',
        activities: 'Adventure trekking, Geology exploration, Photography, Volcano viewing',
        accommodation: 'Danakil Adventure Camp'
    },
    'Awash National Park': {
        title: 'Awash National Park - Wildlife Safari',
        description: 'Awash National Park is a diverse ecosystem featuring varied wildlife, scenic waterfalls, and volcanic landscapes. Perfect for safari enthusiasts.',
        highlights: [
            'Awash Waterfall',
            'Lion, giraffe, and antelope sightings',
            'Volcanic landscapes',
            'Game drives and nature walks',
            'Birdwatching opportunities'
        ],
        bestTime: 'October to February',
        activities: 'Safari, Game drives, Birdwatching, Nature photography',
        accommodation: 'Awash Safari Lodge'
    },
    'Lake Tana': {
        title: 'Lake Tana - Island Monasteries',
        description: 'Lake Tana is Ethiopia\'s largest lake with numerous islands containing ancient monasteries. The Blue Nile originates from this lake.',
        highlights: [
            'Island monastery tours by boat',
            'Blue Nile Falls (Tis Issat)',
            'Traditional fishing villages',
            'Scenic boat cruises',
            'Ancient religious manuscripts'
        ],
        bestTime: 'October to February',
        activities: 'Boat tours, Monastery visits, Photography, Relaxation',
        accommodation: 'Tana Island Monastery Resort'
    }
};

// Hotel pricing
const hotelPrices = {
    'Luxury Mountain Lodge': 180,
    'Heritage Lalibela Resort': 150,
    'Axum Historical Inn': 120,
    'Danakil Adventure Camp': 200,
    'Awash Safari Lodge': 160,
    'Tana Island Monastery Resort': 175
};

// Package pricing
const packagePrices = {
    'Standard': 1200,
    'Premium': 2500,
    'Luxury': 4500
};

// ===================================
// DESTINATION MODAL FUNCTIONS
// ===================================
function openDestinationModal(button) {
    const card = button.closest('.destination-card');
    const title = card.querySelector('h3').textContent;
    const details = destinationDetails[title];
    
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${details.title}</h2>
        <p style="color: #718096; margin: 1rem 0; line-height: 1.6;">${details.description}</p>
        
        <div style="margin: 1.5rem 0;">
            <h3 style="color: #667eea; margin-bottom: 0.8rem;">Highlights</h3>
            <ul style="list-style: none; color: #2d3748;">
                ${details.highlights.map(h => `<li style="padding: 0.5rem 0;"><span style="color: #667eea; font-weight: bold;">✓</span> ${h}</li>`).join('')}
            </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
            <div style="background: #f7fafc; padding: 1rem; border-radius: 10px; border-left: 4px solid #667eea;">
                <strong style="color: #667eea;">Best Time to Visit</strong>
                <p style="color: #718096; margin-top: 0.5rem;">${details.bestTime}</p>
            </div>
            <div style="background: #f7fafc; padding: 1rem; border-radius: 10px; border-left: 4px solid #667eea;">
                <strong style="color: #667eea;">Activities</strong>
                <p style="color: #718096; margin-top: 0.5rem; font-size: 0.9rem;">${details.activities}</p>
            </div>
        </div>
        
        <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08)); padding: 1rem; border-radius: 10px; margin: 1.5rem 0;">
            <strong style="color: #667eea;">Recommended Accommodation</strong>
            <p style="color: #2d3748; margin-top: 0.5rem;">${details.accommodation}</p>
        </div>
    `;
    
    document.getElementById('destinationModal').style.display = 'block';
}

function closeDestinationModal() {
    document.getElementById('destinationModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('destinationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ===================================
// HOTEL SELECTION
// ===================================
function selectHotel(button) {
    const hotelCard = button.closest('.hotel-card');
    const hotelName = hotelCard.querySelector('h3').textContent;
    const hotelSelect = document.getElementById('hotel');
    
    // Set the hotel name in the select dropdown
    const option = Array.from(hotelSelect.options).find(opt => opt.textContent.includes(hotelName));
    if (option) {
        hotelSelect.value = hotelName;
        calculateTotalPrice();
    }
    
    // Smooth scroll to booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// ===================================
// FORM INTERACTIONS
// ===================================
const bookingForm = document.getElementById('bookingForm');
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');
const guestsInput = document.getElementById('guests');
const packageTypeSelect = document.getElementById('packageType');

// Event listeners for form inputs
checkInInput.addEventListener('change', calculateTotalPrice);
checkOutInput.addEventListener('change', calculateTotalPrice);
guestsInput.addEventListener('input', calculateTotalPrice);
packageTypeSelect.addEventListener('change', calculateTotalPrice);

// ===================================
// PRICE CALCULATION
// ===================================
function calculateTotalPrice() {
    const checkIn = new Date(checkInInput.value);
    const checkOut = new Date(checkOutInput.value);
    
    if (!checkInInput.value || !checkOutInput.value) {
        return;
    }
    
    // Calculate nights
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    
    if (nights < 1) {
        return;
    }
    
    const guests = parseInt(guestsInput.value) || 1;
    const hotelName = document.getElementById('hotel').value;
    const packageType = document.getElementById('packageType').value;
    
    let totalPrice = 0;
    
    // Hotel price
    if (hotelName) {
        const hotelNightlyPrice = hotelPrices[hotelName] || 0;
        totalPrice += hotelNightlyPrice * nights * guests;
    }
    
    // Package price
    if (packageType) {
        const packagePrice = packagePrices[packageType] || 0;
        totalPrice += packagePrice * guests;
    }
    
    // Update display
    document.getElementById('nightsCount').textContent = nights;
    document.getElementById('guestsCount').textContent = guests;
    document.getElementById('totalPrice').textContent = `$${totalPrice.toLocaleString()}`;
}

// ===================================
// FORM SUBMISSION
// ===================================
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        nationality: document.getElementById('nationality').value,
        destination: document.getElementById('destination').value,
        hotel: document.getElementById('hotel').value,
        checkIn: document.getElementById('checkIn').value,
        checkOut: document.getElementById('checkOut').value,
        guests: document.getElementById('guests').value,
        packageType: document.getElementById('packageType').value,
        specialRequests: document.getElementById('specialRequests').value,
        totalPrice: document.getElementById('totalPrice').textContent
    };
    
    // Validate form data
    if (!formData.destination || !formData.hotel || !formData.packageType) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Create booking confirmation
    createBookingConfirmation(formData);
});

// ===================================
// BOOKING CONFIRMATION
// ===================================
function createBookingConfirmation(formData) {
    const confirmation = `
    ╔════════════════════════════════════════════════════════╗
    ║           BOOKING CONFIRMATION - ETHIOPIAN WONDERS     ║
    ╚════════════════════════════════════════════════════════╝
    
    Booking Reference: BK-${Date.now()}
    
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    TRAVELER INFORMATION
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Name: ${formData.fullName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Nationality: ${formData.nationality}
    
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    TRIP DETAILS
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Destination: ${formData.destination}
    Hotel: ${formData.hotel}
    Check-in: ${formData.checkIn}
    Check-out: ${formData.checkOut}
    Number of Guests: ${formData.guests}
    Package Type: ${formData.packageType}
    
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    SPECIAL REQUESTS
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ${formData.specialRequests || 'None'}
    
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    TOTAL AMOUNT: ${formData.totalPrice}
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    A confirmation email has been sent to: ${formData.email}
    Payment instructions will be provided via email.
    
    Questions? Contact us at info@ethiopianwonders.com
    Phone: +251 11 234 5678
    `;
    
    // Show confirmation alert
    alert(confirmation);
    
    // Log booking data
    console.log('Booking Data:', formData);
    
    // Optional: Reset form
    resetForm();
}

// ===================================
// FORM RESET
// ===================================
function resetForm() {
    bookingForm.reset();
    document.getElementById('nightsCount').textContent = '0';
    document.getElementById('guestsCount').textContent = '1';
    document.getElementById('totalPrice').textContent = '$0';
}

// ===================================
// SET MINIMUM DATES
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    checkInInput.setAttribute('min', today);
    checkOutInput.setAttribute('min', today);
    
    // Update check-out min date when check-in is selected
    checkInInput.addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        checkInDate.setDate(checkInDate.getDate() + 1);
        const minCheckOut = checkInDate.toISOString().split('T')[0];
        checkOutInput.setAttribute('min', minCheckOut);
    });
});

// ===================================
// SMOOTH SCROLL FUNCTIONALITY
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.destination-card, .hotel-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// ===================================
// ACTIVE NAVBAR LINK INDICATOR
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#667eea';
        } else {
            link.style.color = '';
        }
    });
});

console.log('✈️ Ethiopian Wonders Travel Website Loaded Successfully!');
console.log('📍 Features: Destinations, Hotels, Interactive Booking, Maps, and More');
