function showDetail(id) {
    // Hide all details
    const details = document.querySelectorAll('.detail');
    details.forEach(detail => detail.classList.remove('show'));
    
    // Show the selected detail
    const detail = document.getElementById(id);
    detail.classList.add('show');
}
