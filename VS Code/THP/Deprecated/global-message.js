// Global deprecated alert 
  const alertKey = 'alertShown';
  if (!localStorage.getItem(alertKey)) {
    alert('This page is deprecated. It is old work that has either been replaced by something else or decided that it will not (for now) be a feature on my website. Please visit https://thehtmlproject.com for the main site. Thanks!');
    localStorage.setItem(alertKey, 'true');
  }