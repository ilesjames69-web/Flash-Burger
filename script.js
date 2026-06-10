const modal = document.getElementById('property-modal');
const modalContent = modal.querySelector('.transform');
const closeModalBtn = document.getElementById('close-modal');

const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mLocation = document.getElementById('modal-location');
const mPrice = document.getElementById('modal-price');
const mDesc = document.getElementById('modal-desc');
const mSpecs = document.getElementById('modal-specs');

document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', () => {

        const title = card.getAttribute('data-title');
        const location = card.getAttribute('data-location');
        const price = card.getAttribute('data-price');
        const img = card.getAttribute('data-img');
        const desc = card.getAttribute('data-desc');
        const beds = card.getAttribute('data-beds');
        const baths = card.getAttribute('data-baths');
        const sqm = card.getAttribute('data-sqm');

        mImg.src = img;
        mTitle.innerText = title;
        mLocation.innerHTML = `<i class="fa-solid fa-location-dot text-gold mr-2"></i>${location}`;
        mPrice.innerText = price;
        mDesc.innerText = desc;
        mSpecs.innerHTML = `
            <span><i class="fa-solid fa-bed text-gold mr-1"></i> ${beds}</span>
            <span><i class="fa-solid fa-bath text-gold mr-1"></i> ${baths}</span>
            <span><i class="fa-solid fa-ruler-combined text-gold mr-1"></i> ${sqm}</span>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        gsap.to(modal, { opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(modalContent, { scale: 1, duration: 0.5, ease: "back.out(1.2)" });
        
        document.body.style.overflow = 'hidden';
    });
});

const hideModal = () => {
    gsap.to(modal, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }});
    gsap.to(modalContent, { scale: 0.9, duration: 0.3, ease: "power2.in" });
    
    document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
});
const modal = document.getElementById('property-modal');
const modalContent = modal.querySelector('.transform');
const closeModalBtn = document.getElementById('close-modal');

const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mLocation = document.getElementById('modal-location');
const mPrice = document.getElementById('modal-price');
const mDesc = document.getElementById('modal-desc');
const mSpecs = document.getElementById('modal-specs');

document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', () => {

        const title = card.getAttribute('data-title');
        const location = card.getAttribute('data-location');
        const price = card.getAttribute('data-price');
        const img = card.getAttribute('data-img');
        const desc = card.getAttribute('data-desc');
        const beds = card.getAttribute('data-beds');
        const baths = card.getAttribute('data-baths');
        const sqm = card.getAttribute('data-sqm');

        mImg.src = img;
        mTitle.innerText = title;
        mLocation.innerHTML = `<i class="fa-solid fa-location-dot text-gold mr-2"></i>${location}`;
        mPrice.innerText = price;
        mDesc.innerText = desc;
        mSpecs.innerHTML = `
            <span><i class="fa-solid fa-bed text-gold mr-1"></i> ${beds}</span>
            <span><i class="fa-solid fa-bath text-gold mr-1"></i> ${baths}</span>
            <span><i class="fa-solid fa-ruler-combined text-gold mr-1"></i> ${sqm}</span>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        gsap.to(modal, { opacity: 1, duration: 0.4, ease: "power2.out" });
        gsap.to(modalContent, { scale: 1, duration: 0.5, ease: "back.out(1.2)" });
        
        document.body.style.overflow = 'hidden';
    });
});

const hideModal = () => {
    gsap.to(modal, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }});
    gsap.to(modalContent, { scale: 0.9, duration: 0.3, ease: "power2.in" });
    
    document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', hideModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
});