document.querySelectorAll('.hover-box').forEach(box => {
  const content = box.querySelector('.hover-content');
  let hideTimeout;

  box.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    content.classList.add('opacity-100', 'pointer-events-auto');
  });

  box.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      content.classList.remove('opacity-100', 'pointer-events-auto');
    }, 5000); // reste affichée 5 secondes
  });

  // Empêche la fermeture quand la souris est dans la popup elle-même
  content.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  content.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      content.classList.remove('opacity-100', 'pointer-events-auto');
    }, 5000);
  });
});
