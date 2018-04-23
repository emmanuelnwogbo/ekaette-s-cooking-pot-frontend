const contact_btn = document.getElementById('navigation__item_contact');
const pop_up = document.getElementById('pop_up');
const contact_form = document.getElementById('contact__form');
const about_btn = document.getElementById('navigation__item_about');
const navi_toggle = document.getElementById('navi-toggle');
const header_btn_discover = document.getElementById('header__min-1__welcome-btn')
const footer_contact_btn = document.getElementById('footer_contact');
const footer_menu_btn = document.getElementById('footer_menu');

header_btn_discover.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.container__header').scrollIntoView({
    behavior: 'smooth'
  });
});

contact_btn.addEventListener('click', () => {
  contactFormToggle();
});

pop_up.addEventListener('click', () => {
  contactFormToggle();
});

about_btn.addEventListener('click', (e) => {
  scrollToAbout(e);
})

footer_menu_btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.container__header').scrollIntoView({
    behavior: 'smooth'
  });
})

/*function popUpTextToggle() {

}*/

function contactFormToggle() {
  if (pop_up.style.visibility !== 'visible' && contact_form.style.visibility !== 'visible') {
    return (pop_up.style.visibility = 'visible',
      contact_form.style.visibility = 'visible',
      navi_toggle.checked = false
    );
  }

  pop_up.style.visibility = 'hidden'
  contact_form.style.visibility = 'hidden';
}

function scrollToAbout(e) {
  e.preventDefault();
  navi_toggle.checked = false;
  document.querySelector('.footer').scrollIntoView({
    behavior: 'smooth'
  });
}