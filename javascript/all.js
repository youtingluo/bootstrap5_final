let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
const send = document.querySelector('.submit');
const form = document.querySelector('.sponsor-form');
send.addEventListener('click', function () {
  form.classList.add('was-validated');
});

const caseBar = document.querySelector('.case-bar');
const caseBtn = document.querySelector('.sponsor-btn');
window.addEventListener('scroll', _.debounce(navSticky, 100));
function navSticky() {
  const barTop = caseBar.offsetTop - 0.994;
  if (window.scrollY > barTop) {
    console.log('觸發', window.scrollY, barTop);
    caseBtn.classList.add('stick');
  }
  if (window.scrollY < barTop) {
    console.log('取消', window.scrollY, barTop);
    caseBtn.classList.remove('stick');
  }
}
