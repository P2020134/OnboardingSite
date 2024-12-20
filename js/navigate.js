function navigateTo(page) {
  window.location.href = page;
}

window.onload = function () {
  document.querySelector('.home').addEventListener('click', function () {
      navigateTo('index.html');
  });

  document.querySelector('.features').addEventListener('click', function () {
      navigateTo('features.html');
  });

  document.querySelector('.purpose').addEventListener('click', function () {
      navigateTo('purpose.html');
  });

  document.querySelector('.contact').addEventListener('click', function () {
      navigateTo('contact.html');
  });

  document.querySelector('.logo-link').addEventListener('click', function () {
    navigateTo('index.html');
  });

  document.querySelector('.credits').addEventListener('click', function () {
    navigateTo('credits.html');
    });
  
};
