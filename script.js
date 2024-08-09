function setActiveSection(selectedId) {  
    // Lấy tất cả các phần tử section  
    const sections = document.querySelectorAll('.section');  
    const navItems = document.querySelectorAll('.header-top-r li');  

    sections.forEach(section => {  
        if (section.id === selectedId) {  
            section.classList.add('active'); // Thêm lớp active vào section đã chọn  
        } else {  
            section.classList.remove('active'); // Loại bỏ lớp active khỏi các section khác  
        }  
    });  

    navItems.forEach(item => {  
        if (item.id === selectedId) {  
            item.classList.add('active'); // Thêm lớp active vào mục danh sách đã chọn  
        } else {  
            item.classList.remove('active'); // Loại bỏ lớp active khỏi các mục khác  
        }  
    });  
}  

// Thêm sự kiện click cho từng mục trong menu  
document.addEventListener('DOMContentLoaded', () => {  
    const navItems = document.querySelectorAll('.header-top-r li');  
    navItems.forEach(item => {  
        item.addEventListener('click', () => {  
            setActiveSection(item.id.toLowerCase()); // Chuyển đổi id thành chữ thường để khớp với section  
        });  
    });  
});

let currentSlideIndex = 0;  

function showSlide(index) {  
    const slides = document.querySelectorAll('.slide');  
    const dots = document.querySelectorAll('.dot');  

    if (index >= slides.length) currentSlideIndex = 0; // Loop back to start  
    else if (index < 0) currentSlideIndex = slides.length - 1; // Loop to the end  

    slides.forEach((slide, i) => {  
        slide.classList.remove('active');  
        dots[i].classList.remove('active');  

        if (i === currentSlideIndex) {  
            slide.classList.add('active');  
            dots[i].classList.add('active');  
        }  
    });  

    document.querySelector('.slider-container').style.transform = 'translateX(-' + (currentSlideIndex * 100) + '%)';  
}  

function currentSlide(index) {  
    currentSlideIndex = index;   
    showSlide(currentSlideIndex);  
}  

function moveToSlide(index) {  
    currentSlide(index);  
}  

function moveSlide(step) {  
    currentSlideIndex += step;  
    showSlide(currentSlideIndex);  
}  

// Initialize the first slide  
showSlide(currentSlideIndex);