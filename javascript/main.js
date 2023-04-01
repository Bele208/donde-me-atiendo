const showMoreBtn = document.getElementById('show-more');
const items = document.querySelectorAll('.item');
let isExpanded = false;

showMoreBtn.addEventListener('click', function() {
  for (let i = 6; i < items.length; i++) {
    items[i].style.display = 'block';
  }
  
  if (!isExpanded) {
    showMoreBtn.textContent = 'Ver menos';
  } else {
    showMoreBtn.textContent = 'Ver más';
    
    for (let i = 6; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  }
  isExpanded = !isExpanded;
});
