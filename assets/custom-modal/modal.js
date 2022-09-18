const modalBtn = document.querySelector('.modalBtn');
const aboutTeam = document.querySelector('.about-team-section .about-team-wrapper .about-team');

function showModal(id) {
    const element = document.getElementById(id);
    element.classList.remove('skl-modal-toggle');
    element.addEventListener('click', function (e) {
        if (e.target.tagName == 'BUTTON') {
          element.classList.add('skl-modal-toggle')
      }
    })
}