export const toraModalCall = (title, msg, btn) => {

    const modal = document.getElementById('tora-modal');

    // Show the modal
    document.getElementById('tora-alert-type').onclick = function() {
        document.getElementById('tora-modal-title').textContent = title;
        document.getElementById('tora-modal-text').textContent = msg;
        document.getElementById('tora-modal-button').textContent = btn;
        modal.style.display = 'block';
    };

    // close the modal
    function closeModal() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    document.getElementById('tora-modal-button').onclick = closeModal;
};
