const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const carouselInner = document.querySelector('.blog-carousel-inner');
        const items = document.querySelectorAll('.blog-carousel-item');
        const itemWidth = items[0].getBoundingClientRect().width;
        let index = 0;

        // Clone the first and last 3 items for infinite loop
        for (let i = 0; i < 3; i++) {
            const cloneFirst = items[i].cloneNode(true);
            const cloneLast = items[items.length - 1 - i].cloneNode(true);
            carouselInner.appendChild(cloneFirst);
            carouselInner.insertBefore(cloneLast, items[0]);
        }

        const totalItems = items.length + 6; // Original items + 3 cloned at each end

        function updateCarousel() {
            const offset = -(index + 3) * itemWidth; // +3 to account for the cloned items
            carouselInner.style.transform = `translateX(${offset}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (index <= 0) {
                index = items.length;
                carouselInner.style.transition = 'none'; // Disable transition to jump to the end
                updateCarousel();
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                    index--;
                    updateCarousel();
                }, 50);
            } else {
                index--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (index >= items.length) {
                index = 0;
                carouselInner.style.transition = 'none'; // Disable transition to jump to the start
                updateCarousel();
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
                    index++;
                    updateCarousel();
                }, 50);
            } else {
                index++;
                updateCarousel();
            }
        });

        // Initialize the carousel position
        updateCarousel();

        // Auto-slide
        setInterval(() => {
            nextButton.click();
        }, 5000);


        /////////////////////////blog sharing icon//////////////////////////////

          document.querySelector('.share-icon').addEventListener('click', () => {
            const socialIcons = document.querySelector('.social-icons');
            socialIcons.style.display = socialIcons.style.display === 'none' || socialIcons.style.display === '' ? 'flex' : 'none';
          });
          
          const currentUrl = window.location.href;
          const encodedUrl = encodeURIComponent(currentUrl);
          const message = encodeURIComponent(`Check out this page: ${currentUrl}`);
          
          document.getElementById('twitter-share').addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check%20out%20this%20page:`, '_blank');
          });
          
          document.getElementById('whatsapp-share').addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
          });
          
          document.getElementById('linkedin-share').addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
          });
          
          document.getElementById('facebook-share').addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
          });
          
          document.getElementById('copy-url').addEventListener('click', () => {
            navigator.clipboard.writeText(currentUrl).then(() => {
              alert('URL copied to clipboard!');
            }).catch(err => {
              console.error('Failed to copy URL: ', err);
            });
          });
          
