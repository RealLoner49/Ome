const gallery = document.getElementById('gallery');
const pagination = document.getElementById('pagination');

const totalImages = 30; // You can increase this number
const imagesPerPage = 4;
const totalPages = Math.ceil(totalImages / imagesPerPage);

// Generate dummy image URLs
const images = [
    '/IMG/ac.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/ac.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/cylinder.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/fridge.jpeg',
    '/IMG/ac2.jpeg',
    '/IMG/chandelier4.jpeg',
    '/IMG/cylinder.jpeg',
    '/IMG/damn.jpeg',
    '/IMG/fan.jpeg',
    '/IMG/cylinder.jpeg',
    '/IMG/ac2.jpeg',
    '/IMG/chandelier.jpeg',
    '/IMG/ac1.jpeg',
    '/IMG/chandelier4.jpeg',
    '/IMG/blue.jpeg',
    '/IMG/ac2.jpeg',
    '/IMG/chandelier2.jpeg',
    '/IMG/fridge.jpeg',
    '/IMG/IMG 3.jpg',
    '/IMG/NN.jpeg',
    '/IMG/User pic.jpg',
    '/IMG/blue.jpeg',
    '/IMG/ac.jpeg',
    '/IMG/ac.jpeg',
    '/IMG/chandelier.jpeg',
]

function displayImages(page) {
    gallery.innerHTML = "";
    const start = (page - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const imagesToShow = images.slice(start, end);

    imagesToShow.forEach(src => {
        const img = document.createElement('img');
        img.alt = "Image";
        img.className = "gallery-image";
        img.src = src;
        gallery.appendChild(img);
    });

    updatePagination(page);
}

function updatePagination(activePage) {
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if (i === activePage) btn.classList.add('active');
        btn.addEventListener('click', () => displayImages(i));
        pagination.appendChild(btn);
    }
}

displayImages(1); // Initial load
