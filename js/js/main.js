document.addEventListener('DOMContentLoaded', () => {
    // 1. Khởi tạo bộ theo dõi phần tử để kích hoạt hiệu ứng Fade-In khi cuộn
    const observerElements = document.querySelectorAll('.fade-in');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.15 });
    
    observerElements.forEach(el => scrollObserver.observe(el));

    // 2. Bộ điều khiển điều hướng đóng/mở Cửa sổ chi tiết (Modals)
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const overlays = document.querySelectorAll('.modal-overlay');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            if (targetModal) targetModal.classList.add('active');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal-overlay').classList.remove('active');
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    // 3. Xử lý logic Form gửi gói tin liên hệ (Mô phỏng hạ tầng đẩy dữ liệu)
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('client-name').value;
            const email = document.getElementById('client-email').value;
            const msg = document.getElementById('client-msg').value;

            if (!name || !email || !msg) {
                alert('Trường dữ liệu trống! Vui lòng hoàn thiện cấu trúc gói tin trước khi gửi.');
                return;
            }

            // Ghi nhận log mô phỏng kết nối thành công
            console.log(`[SYSTEM LOG]: Đã nhận yêu cầu kết nối từ ${name} (${email})`);
            alert(`Yêu cầu của đối tác [${name}] đã được đẩy lên hệ thống hàng đợi thành công!`);
            
            // Clear dữ liệu form
            document.getElementById('client-name').value = '';
            document.getElementById('client-email').value = '';
            document.getElementById('client-msg').value = '';
        });
    }

    // In thông báo ngầu trong Console của trình duyệt (F12)
    console.log('%c System Core Initiated. Absolute Precision Guaranteed. ', 'background: #161b22; color: #58a6ff; font-size: 12px; font-weight: bold;');
});
