const $ = (id) => document.getElementById(id);

function setTemplate() {
  $('resume').className = $('template').value;
  $('resume').dataset.color = $('color').value;
}

function generateResume() {
  $('r-name').textContent = $('name').value || 'Your Name';

  const contact = [$('email').value, $('phone').value].filter(Boolean).join(' | ');
  $('r-contact').textContent = contact || 'Email | Phone';
  $('r-address').textContent = $('address').value || 'Address';

  ['objective', 'education', 'skills', 'projects', 'certifications'].forEach((key) => {
    $('r-' + key).textContent = $(key).value || $('r-' + key).textContent;
  });

  setTemplate();
}

$('generate').addEventListener('click', generateResume);
$('template').addEventListener('change', setTemplate);
$('color').addEventListener('change', setTemplate);
$('print').addEventListener('click', () => window.print());
