function playVideo(button) {
    const video = button.previousElementSibling; // Select the video element (previous sibling)
  
    // Enable controls
    video.controls = true;
  
    // Show the video
    video.style.display = "block"; 
  
    // Start the video
    video.play();
  
    // Hide the play button
    button.style.display = "none"; 
  }
    

  const bubbleContainer = document.querySelector('.bubble-container');
  const texts = ['SOx','NOx', 'CO', 'CO2','02', 'pH', 'TDS', 'BOD', 'TSS', 'COD', 'OIW', 'NO3-', 'NO2-', 'NH4+', 'S2-', 'TS', 'Cl2', 'ClO2', 'TC', 'BTEX', 'O3', 'TP', 'Turb', 'DO', 'EC'];
  let currentBubbles = 0, maxBubbles = 20;
  const bubbleRadius = 50; // Approximate radius of a bubble in pixels
  const minDistance = 2 * bubbleRadius; // Minimum distance between bubble centers
  
  function createBubble() {
      if (currentBubbles >= maxBubbles) return;
  
      const newBubblePositions = [];
      for (let i = 0; i < Math.random() * 4 + 1; i++) {
          let validPosition = false;
          let leftPos;
  
          // Find a valid position that doesn't overlap other bubbles
          while (!validPosition) {
              leftPos = Math.random() * 90; // Generate a new horizontal position as a percentage
              validPosition = newBubblePositions.every(pos => Math.abs(pos - leftPos) * bubbleRadius > minDistance);
          }
  
          const bubble = document.createElement('div');
          bubble.classList.add('bubble');
          bubble.style.left = leftPos + '%';
          bubble.textContent = texts[Math.floor(Math.random() * texts.length)];
          bubbleContainer.appendChild(bubble);
          currentBubbles++;
          newBubblePositions.push(leftPos);
    
          // Remove the bubble after animation
          bubble.addEventListener('animationend', () => {
              bubble.remove();
              currentBubbles--;
          });
      }
  }
    
  setInterval(createBubble, 1000);
  