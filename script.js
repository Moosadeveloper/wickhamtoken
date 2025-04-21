
  window.onload = function() {
    const element = document.querySelector('#your-element');
    if (element) {
      element.attachShadow({ mode: 'open' });
    }
  };