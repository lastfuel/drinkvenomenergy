const flavors = [
    { name: 'ORIGINAL', image: 'venom-can-o.png', className: 'original', buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N6DP8C' },
    { name: 'FRUIT PUNCH', image: 'venom-can-fp.png', className: 'fruit-punch', buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N3PBJX' },
    { name: 'MANGO', image: 'venom-can-m.png', className: 'mango', buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N4S473' },
    { name: 'VARIETY PACK', image: 'venom-can-o.png', className: 'variety-pack', isVariety: true, buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0BZT46LPL' }
  ];
  
  let currentFlavorIndex = 0;
  
  const flavorElement = document.getElementById('flavor');
  const canImageElement = document.getElementById('can-image');
  const canImageElementFp = document.getElementById('can-image-fp');
  const canImageElementM = document.getElementById('can-image-m');
  const indicatorContainer = document.getElementById('indicator-container');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const buyButton = document.getElementById('buy-button');
  const bodyElement = document.body;
  const popupElement = document.getElementById('popup');
  
  function updateFlavor() {
    flavorElement.textContent = flavors[currentFlavorIndex].name;
    buyButton.href = flavors[currentFlavorIndex].buyLink;
  
    if (flavors[currentFlavorIndex].isVariety) {
      canImageElement.style.display = 'block';
      canImageElementFp.style.display = 'block';
      canImageElementM.style.display = 'block';
      
      canImageElement.classList.remove('fade-in-left');
      canImageElement.classList.remove('fade-in-right');
      canImageElementM.classList.remove('fade-in-left');
  
      canImageElementFp.classList.add('fade-in-right');
      canImageElementFp.style.transform = 'translateX(32px)';
      requestAnimationFrame(() => {
        canImageElementFp.style.opacity = 1;
        canImageElementFp.style.transform = 'translateX(0)';
      });
  
      canImageElement.classList.add('fade-in-left');
      canImageElement.style.transform = 'translateX(-32px)';
      requestAnimationFrame(() => {
        canImageElement.style.opacity = 1;
        canImageElement.style.transform = 'translateX(0)';
      });
  
      canImageElementM.style.opacity = 1;
      canImageElementM.style.transform = 'translateX(0)';
    } else {
      canImageElement.classList.remove('fade-in-left');
      canImageElementFp.classList.remove('fade-in-right');
      canImageElementM.classList.remove('fade-in-left');
  
      canImageElement.style.display = 'block';
      canImageElementFp.style.display = 'none';
      canImageElementM.style.display = 'none';
  
      const newCanImage = new Image();
      newCanImage.src = flavors[currentFlavorIndex].image;
      newCanImage.style.position = 'absolute';
      newCanImage.style.opacity = 0;
      newCanImage.style.transform = 'translateX(-32px)';
      newCanImage.style.transition = 'all 1s ease';
  
      canImageElement.parentNode.appendChild(newCanImage);
  
      requestAnimationFrame(() => {
        newCanImage.style.opacity = 1;
        newCanImage.style.transform = 'translateX(0)';
        canImageElement.style.transform = 'translateX(32px)';
        canImageElement.style.opacity = 0;
  
        setTimeout(() => {
          canImageElement.src = flavors[currentFlavorIndex].image;
          canImageElement.style.opacity = 1;
          canImageElement.style.transform = 'translateX(0)';
          canImageElement.parentNode.removeChild(newCanImage);
        }, 1000);
      });
    }
  
    bodyElement.className = flavors[currentFlavorIndex].className;
    updateIndicator();
  }
  
  function updateIndicator() {
    indicatorContainer.innerHTML = '';
    for (let i = 0; i < flavors.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('indicator-dot');
      if (i === currentFlavorIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        currentFlavorIndex = i;
        updateFlavor();
      });
      indicatorContainer.appendChild(dot);
    }
  }
  
  prevButton.addEventListener('click', () => {
    currentFlavorIndex = (currentFlavorIndex > 0) ? currentFlavorIndex - 1 : flavors.length - 1;
    updateFlavor();
  });
  
  nextButton.addEventListener('click', () => {
    currentFlavorIndex = (currentFlavorIndex < flavors.length - 1) ? currentFlavorIndex + 1 : 0;
    updateFlavor();
  });
  
  updateFlavor();
  
  // Add stars effect
  const createStar = () => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(star);
    setTimeout(() => {
      star.remove();
    }, 8000);
  };
  
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      createStar();
    }
  }, 800);
  
  // Add hover effect for interactive dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('mouseover', (e) => {
      const content = e.target.getAttribute('data-content');
      let popupContent = '';
  
      switch (content) {
        case 'Nutrition Facts':
          popupContent = `
            <table>
              <tr><th>Nutrition Facts</th></tr>
              <tr><td>Calories</td><td>160</td></tr>
              <tr><td>Total Fat</td><td>0g</td></tr>
              <tr><td>Sodium</td><td>180mg</td></tr>
              <tr><td>Total Carbohydrate</td><td>42g</td></tr>
              <tr><td>Sugars</td><td>42g</td></tr>
              <tr><td>Protein</td><td>0g</td></tr>
            </table>`;
          break;
        case 'Ingredients':
          popupContent = `
            <ul>
              <li>Carbonated Water</li>
              <li>High Fructose Corn Syrup</li>
              <li>Citric Acid</li>
              <li>Sodium Benzoate (Preservative)</li>
              <li>Caffeine</li>
            </ul>`;
          break;
        case 'Key Features':
        case 'More Key Features':
        case 'Additional Key Features':
          popupContent = `
            <ul>
              <li>Enhanced Energy Formula</li>
              <li>Rich in B Vitamins</li>
              <li>Delicious Flavors</li>
              <li>Zero Artificial Colors</li>
              <li>Hydration Support</li>
            </ul>`;
          break;
      }
  
      popupElement.innerHTML = popupContent;
      popupElement.style.display = 'block';
      popupElement.style.left = `${e.clientX + 15}px`;
      popupElement.style.top = `${e.clientY - 10}px`;
    });
  
    dot.addEventListener('mouseout', () => {
      popupElement.style.display = 'none';
    });
  });
  