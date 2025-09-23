   function showDetails(modelId) {
        // Hide all model details
        const allDetails = document.querySelectorAll('.model-details');
        allDetails.forEach(detail => detail.style.display = 'none');
        
        // Show selected model details
        const selectedDetail = document.getElementById(modelId + '-details');
        if (selectedDetail) {
            selectedDetail.style.display = 'block';
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