document.addEventListener('DOMContentLoaded', () => {
    // 1. Xử lý logic đóng mở Modal xem code chi tiết
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const overlays = document.querySelectorAll('.modal-overlay');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Chặn cuộn trang khi mở modal
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal-overlay').classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Bấm ra ngoài vùng nội dung modal cũng sẽ tự đóng
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // 2. Hiệu ứng xuất hiện mượt mà khi cuộn chuột (Scroll Animation)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Xuất hiện rồi thì không theo dõi nữa
            }
        });
    }, {
        threshold: 0.15
    });

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });
});
