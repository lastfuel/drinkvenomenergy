const flavors = [
    {
      name: 'ORIGINAL',
      image: 'venom-can-o.png',
      className: 'original',
      buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N6DP8C'
    },
    {
      name: 'FRUIT PUNCH',
      image: 'venom-can-fp.png',
      className: 'fruit-punch',
      buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N3PBJX'
    },
    {
      name: 'MANGO',
      image: 'venom-can-m.png',
      className: 'mango',
      buyLink: 'https://www.amazon.com/Energy-Variety-Original-Caffeine-LastFuel/dp/B0C7N4S473'
    }
  ];
  
  let currentFlavorIndex = 0;
  
  const flavorElement = document.getElementById('flavor');
  const canImageElement = document.getElementById('can-image');
  const indicatorContainer = document.getElementById('indicator-container');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const buyButton = document.getElementById('buy-button');
  const bodyElement = document.body;
  const mainContent = document.getElementById('main-content');
  const policyContent = document.getElementById('policy-content');
  const contentContainer = document.getElementById('content-container');
  
  function updateFlavor() {
    flavorElement.textContent = flavors[currentFlavorIndex].name;
    buyButton.href = flavors[currentFlavorIndex].buyLink;
  
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
  
  // Function to show content based on link clicked
  function showContent(section) {
    mainContent.classList.add('fade');
    setTimeout(() => {
      mainContent.classList.add('hidden');
      policyContent.classList.remove('hidden');
      policyContent.classList.add('fade');
  
      if (section === 'privacy') {
        contentContainer.innerHTML = `<h1>Privacy Policy</h1>
          <p>Effective Date: July 2024</p>
          <p>At LastFuel, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website www.drinkvenomenergy.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
          <h2>1. Information We Collect</h2>
          <p><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</p>
          <p><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
          <h2>2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>Provide customer support.</li>
            <li>Send you marketing and promotional communications.</li>
            <li>Respond to your inquiries and offer support.</li>
          </ul>`;
      } else if (section === 'terms') {
        contentContainer.innerHTML = `<h1>Terms and Conditions</h1>
          <h2>1. Agreement to Terms</h2>
          <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [Your Company Name] (“we,” “us” or “our”), concerning your access to and use of the [Your Website URL] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions.</p>
          <h2>2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.</p>
          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not under the age of 13; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.</p>
          <h2>4. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <p>As a user of the Site, you agree not to:</p>
          <ul>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
          </ul>
          <h2>5. Limitation of Liability</h2>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
          <h2>6. Governing Law</h2>
          <p>These Terms shall be governed by and defined following the laws of [Your State/Country]. [Your Company Name] and yourself irrevocably consent that the courts of [Your State/Country] shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
          <h2>7. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
          <p>Email: support@lastfuel.co</p>
          <p>Address: 1 Hardy Rd Bedford, NH 03110</p>`;
      }
    }, 1000); // Adjust timing as needed
  }
  
  // Return to home function
  function showHome() {
    policyContent.classList.add('fade');
    setTimeout(() => {
      policyContent.classList.add('hidden');
      mainContent.classList.remove('hidden');
      mainContent.classList.add('fade');
    }, 1000); // Adjust timing as needed
  }
  
  // Add event listener for the Home link
  document.querySelector('a[href="#home"]').addEventListener('click', showHome);
  