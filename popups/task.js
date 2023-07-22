const notVisible = 'modal';
const visible = 'modal modal_active';
closeQuery = document.getElementsByClassName('modal__close')
const popupMain = document.getElementById('modal_main')
const popupSuccess = document.getElementById('modal_success')
popupMain.className = visible;

function closeClick(event) {
  if (popupMain.className === visible) {
    popupMain.className = notVisible;
    popupSuccess.className = visible;
  }
  if (event.target.className === 'modal__close modal__close_times') {
    popupSuccess.className = notVisible;
  }
}

for (let elem of closeQuery) {
  elem.addEventListener('click', closeClick);
}



