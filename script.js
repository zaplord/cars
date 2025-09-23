
    
    // Create particles
    document.addEventListener('DOMContentLoaded', function() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                const left = Math.random() * 100;
                const top = 100 + Math.random() * 10;
                
                // Random size
                const size = Math.random() * 3 + 1;
                
                // Random animation delay
                const delay = Math.random() * 5;
                
                // Random color
                const colors = ['#ff003c', '#00a2ff', '#ffcc00', '#ffffff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.left = `${left}vw`;
                particle.style.top = `${top}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.backgroundColor = color;
                
                particlesContainer.appendChild(particle);
            }
        });
   function validatePasswords() {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const errorMessage = document.getElementById("error-message");
            
            if (password !== confirmPassword) {
                errorMessage.style.display = "block";
                return false; // Prevent form submission
            } else {
                errorMessage.style.display = "none";
                return true; // Allow form submission
            }
        }

  
               // Create particles
            document.addEventListener('DOMContentLoaded', function() {
                const particlesContainer = document.getElementById('particles');
                const particleCount = 50;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Random position
                    const left = Math.random() * 100;
                    const top = 100 + Math.random() * 10;
                    
                    // Random size
                    const size = Math.random() * 3 + 1;
                    
                    // Random animation delay
                    const delay = Math.random() * 5;
                    
                    // Random color
                const colors = ['#ff003c', '#00a2ff', '#ffcc00', '#ffffff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.left = `${left}vw`;
                particle.style.top = `${top}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.backgroundColor = color;
                
                particlesContainer.appendChild(particle);
            }
        });
  


        // Fake login function, only just checks if username and password are "1"
        function fakeLogin(event) {
            event.preventDefault(); // Prevent form submission

          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          if (username === "1" && password === "1") { 
             setTimeout(function() {
                window.location.href = "./index.html";
              }, 1000); 
              // Allow form submission 
              
              return true;
            } else {
                alert("Invalid username or password.");
                return false; // Prevent form submission
            }
            
            
            
            
        }

         // Continent selection functionality
        document.addEventListener('DOMContentLoaded', function() {
            const continentButtons = document.querySelectorAll('.continent-btn');
            const countryDisplays = document.querySelectorAll('.countries-display');
            
            // Set Europe as default active
            document.querySelector('[data-continent="europe"]').classList.add('active');
            document.getElementById('europe-display').classList.add('active');
            
            continentButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const continent = this.getAttribute('data-continent');
                    
                    // Remove active class from all buttons and displays
                    continentButtons.forEach(btn => btn.classList.remove('active'));
                    countryDisplays.forEach(display => display.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding display
                    this.classList.add('active');
                    document.getElementById(`${continent}-display`).classList.add('active');
                });
            });
            
            // Add click functionality to country cards
            const countryCards = document.querySelectorAll('.country-card');
            countryCards.forEach(card => {
                card.addEventListener('click', function() {
                    const countryName = this.querySelector('.country-name').textContent;
                   const countryCards = document.querySelectorAll('.country-card');
countryCards.forEach(card => {
    card.addEventListener('click', function() {
        const countryName = this.querySelector('.country-name').textContent;
        
        // Only keep your actual functionality
        // countryName.style.display = 'block';
        
        // If you want to show country-specific content:
        const countryId = countryName.toLowerCase().replace(/\s+/g, '-');
        const countryContent = document.getElementById(`${countryId}-content`);
        
        if (countryContent) {
            // Hide all country contents first
            document.querySelectorAll('.country-content').forEach(content => {
                content.style.display = 'none';
            });
            // Show selected country content
            countryContent.style.display = 'block';
        }
    });
});
                    // In a real application, this would navigate to a detailed page
                });
            });
        });