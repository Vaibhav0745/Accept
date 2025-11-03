document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const permissionCard = document.querySelector('.permission-card');
    const maybeScreen = document.querySelector('.maybe-screen');
    const maybeContent = document.querySelector('.maybe-content');
    const yesBtn = document.getElementById('yes-btn');
    const maybeBtn = document.getElementById('maybe-btn');
    const backBtn = document.getElementById('back-btn');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const heartIcon = document.querySelector('.fa-heart');
    const messageMain = document.querySelector('.message-main');
    const messageSecondary = document.querySelector('.message-secondary');
    const messageNote = document.querySelector('.message-note');
    const cardHeader = document.querySelector('.card-header');
    const subtitle = document.querySelector('.subtitle');
    
    // Clear any existing permission from localStorage
    localStorage.removeItem('permission');
    
    // Personalize the name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.textContent = 'Aditi';
    }

    // Create animated particles
    createParticles();

    // Set initial state for animations
    if (permissionCard) {
        permissionCard.style.opacity = '0';
        permissionCard.style.transform = 'translateY(40px) scale(0.95)';
        
        // Add subtle pulsing glow to the card
        permissionCard.style.animation = 'none';
        permissionCard.style.boxShadow = '0 18px 40px rgba(50, 50, 93, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)';
        
        // Trigger entrance animation after a short delay
        setTimeout(() => {
            permissionCard.style.opacity = '1';
            permissionCard.style.transform = 'translateY(0) scale(1)';
            permissionCard.style.transition = 'opacity 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 1.2s ease';
            
            // Fade in the header elements first
            if (cardHeader) {
                cardHeader.style.opacity = '0';
                cardHeader.style.transform = 'translateY(15px)';
                cardHeader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                setTimeout(() => {
                    cardHeader.style.opacity = '1';
                    cardHeader.style.transform = 'translateY(0)';
                    
                    // Animate subtitle with a delay
                    if (subtitle) {
                        subtitle.style.opacity = '0';
                        subtitle.style.transform = 'translateY(10px)';
                        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                        
                        setTimeout(() => {
                            subtitle.style.opacity = '1';
                            subtitle.style.transform = 'translateY(0)';
                        }, 200);
                    }
                }, 300);
            }
            
            // Animate icon container with a delay
            const iconContainer = document.querySelector('.icon-container');
            if (iconContainer) {
                iconContainer.style.opacity = '0';
                iconContainer.style.transform = 'scale(0.8)';
                iconContainer.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                
                setTimeout(() => {
                    iconContainer.style.opacity = '1';
                    iconContainer.style.transform = 'scale(1)';
                    
                    // Start heart animation only after icon container appears
                    if (heartIcon) {
                        heartIcon.style.opacity = '0';
                        
                        setTimeout(() => {
                            heartIcon.style.opacity = '1';
                            heartIcon.style.transition = 'opacity 0.5s ease';
                            heartIcon.style.animation = 'heartbeat 2s infinite';
                        }, 300);
                    }
                }, 800);
            }
            
            // Animate messages with a staggered delay
            if (messageMain) {
                messageMain.style.opacity = '0';
                messageMain.style.transform = 'translateY(20px)';
                messageMain.style.transition = 'opacity 1s ease, transform 1s ease';
                
                setTimeout(() => {
                    messageMain.style.opacity = '1';
                    messageMain.style.transform = 'translateY(0)';
                    
                    // Animate secondary message
                    if (messageSecondary) {
                        messageSecondary.style.opacity = '0';
                        messageSecondary.style.transform = 'translateY(20px)';
                        messageSecondary.style.transition = 'opacity 1s ease, transform 1s ease';
                        
                        setTimeout(() => {
                            messageSecondary.style.opacity = '1';
                            messageSecondary.style.transform = 'translateY(0)';
                            
                            // Animate note message
                            if (messageNote) {
                                messageNote.style.opacity = '0';
                                messageNote.style.transform = 'translateY(20px)';
                                messageNote.style.transition = 'opacity 1s ease, transform 1s ease';
                                
                                setTimeout(() => {
                                    messageNote.style.opacity = '1';
                                    messageNote.style.transform = 'translateY(0)';
                                    
                                    // Animate buttons after all text is visible
                                    const btnGroup = document.querySelector('.btn-group');
                                    if (btnGroup) {
                                        btnGroup.style.opacity = '0';
                                        btnGroup.style.transform = 'translateY(20px)';
                                        btnGroup.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                                        
                                        setTimeout(() => {
                                            btnGroup.style.opacity = '1';
                                            btnGroup.style.transform = 'translateY(0)';
                                        }, 200);
                                    }
                                }, 300);
                            }
                        }, 300);
                    }
                }, 900);
            }
        }, 400);
    }
    
    // Enhanced heart animation on hover
    const iconContainer = document.querySelector('.icon-container');
    if (iconContainer && heartIcon) {
        iconContainer.addEventListener('mouseenter', () => {
            heartIcon.style.animation = 'none'; // Temporarily remove the animation
            heartIcon.style.transform = 'scale(1.8)';
            heartIcon.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            // Add glow effect to the icon container
            iconContainer.style.boxShadow = '0 10px 30px rgba(75, 108, 183, 0.7)';
            
            setTimeout(() => {
                heartIcon.style.transform = 'scale(1)';
                
                setTimeout(() => {
                    heartIcon.style.animation = 'heartbeat 2s infinite';
                    
                    // Restore original shadow after a delay
                    setTimeout(() => {
                        iconContainer.style.boxShadow = '0 8px 25px rgba(75, 108, 183, 0.4)';
                    }, 300);
                }, 300);
            }, 300);
        });
    }

    // Event listener for "Yes" button
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            // Show confetti
            confettiCanvas.classList.remove('hidden');
            fireConfetti();
            
            // Enhance heart icon animation when "Yes" is clicked
            if (heartIcon) {
                heartIcon.style.animation = 'none';
                heartIcon.style.transform = 'scale(2)';
                heartIcon.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                
                setTimeout(() => {
                    heartIcon.style.transform = 'scale(1)';
                }, 500);
            }
            
            // Add fade out animation to the card with 3D effect
            permissionCard.style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            permissionCard.style.transform = 'translateY(-30px) rotateX(10deg) scale(0.95)';
            permissionCard.style.opacity = '0';
            
            // After a short delay, redirect to the external website
            setTimeout(() => {
                window.location.href = 'https://vaibhav0745.github.io/for-my-diamond/';
            }, 2200); // Extended delay to allow confetti and animations to show
        });
    }
    
    // Event listener for "Maybe Later" button
    if (maybeBtn) {
        maybeBtn.addEventListener('click', () => {
            // Add slide-out animation with 3D effect
            permissionCard.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            permissionCard.style.transform = 'translateX(-60px) rotateY(-10deg)';
            permissionCard.style.opacity = '0';
            
            setTimeout(() => {
                // Hide permission card and show maybe screen
                permissionCard.classList.add('hidden');
                maybeScreen.classList.remove('hidden');
                
                // Set initial state for maybe screen
                maybeScreen.style.opacity = '0';
                maybeScreen.style.transform = 'translateX(60px) rotateY(10deg)';
                
                // Slide in the maybe screen
                setTimeout(() => {
                    maybeScreen.style.transition = 'opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    maybeScreen.style.transform = 'translateX(0) rotateY(0)';
                    maybeScreen.style.opacity = '1';
                    
                    // Activate the content with a small delay for a staggered effect
                    setTimeout(() => {
                        if (maybeContent) {
                            maybeContent.classList.add('active');
                        }
                    }, 300);
                }, 50);
            }, 500);
        });
    }
    
    // Event listener for "Go Back" button
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Deactivate content first
            if (maybeContent) {
                maybeContent.classList.remove('active');
            }
            
            // Add slide-out animation with 3D effect
            maybeScreen.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            maybeScreen.style.transform = 'translateX(60px) rotateY(10deg)';
            maybeScreen.style.opacity = '0';
            
            setTimeout(() => {
                // Hide maybe screen and show permission card
                maybeScreen.classList.add('hidden');
                permissionCard.classList.remove('hidden');
                
                // Set initial state for permission card
                permissionCard.style.opacity = '0';
                permissionCard.style.transform = 'translateX(-60px) rotateY(-10deg)';
                
                // Slide in the permission card
                setTimeout(() => {
                    permissionCard.style.transition = 'opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    permissionCard.style.transform = 'translateX(0) rotateY(0)';
                    permissionCard.style.opacity = '1';
                    
                    // Animate messages again with a staggered delay
                    if (messageMain) {
                        messageMain.style.opacity = '0';
                        messageMain.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            messageMain.style.opacity = '1';
                            messageMain.style.transform = 'translateY(0)';
                            
                            if (messageSecondary) {
                                messageSecondary.style.opacity = '0';
                                messageSecondary.style.transform = 'translateY(20px)';
                                
                                setTimeout(() => {
                                    messageSecondary.style.opacity = '1';
                                    messageSecondary.style.transform = 'translateY(0)';
                                    
                                    if (messageNote) {
                                        messageNote.style.opacity = '0';
                                        messageNote.style.transform = 'translateY(20px)';
                                        
                                        setTimeout(() => {
                                            messageNote.style.opacity = '1';
                                            messageNote.style.transform = 'translateY(0)';
                                            
                                            // Animate buttons after all text is visible
                                            const btnGroup = document.querySelector('.btn-group');
                                            if (btnGroup) {
                                                btnGroup.style.opacity = '0';
                                                btnGroup.style.transform = 'translateY(20px)';
                                                
                                                setTimeout(() => {
                                                    btnGroup.style.opacity = '1';
                                                    btnGroup.style.transform = 'translateY(0)';
                                                }, 200);
                                            }
                                        }, 300);
                                    }
                                }, 300);
                            }
                        }, 300);
                    }
                }, 50);
            }, 500);
        });
    }
    
    // Confetti function
    function fireConfetti() {
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 30,
                angle: 60,
                spread: 80,
                origin: { x: 0 },
                colors: ['#4b6cb7', '#182848', '#4776E6', '#5E8BFF'],
                shapes: ['circle', 'square'],
                scalar: 1.2
            });
            confetti({
                particleCount: 30,
                angle: 120,
                spread: 80,
                origin: { x: 1 },
                colors: ['#4b6cb7', '#182848', '#4776E6', '#5E8BFF'],
                shapes: ['circle', 'square'],
                scalar: 1.2
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            } else {
                confettiCanvas.classList.add('hidden');
            }
        }());
    }

    // Function to create particles for background animation
    function createParticles() {
        const particles = document.querySelector('.particles');
        if (!particles) return;
        
        // Add random dots to the background
        for (let i = 0; i < 100; i++) {
            const dot = document.createElement('div');
            dot.className = 'particle-dot';
            
            // Random position
            dot.style.left = `${Math.random() * 100}%`;
            dot.style.top = `${Math.random() * 100}%`;
            
            // Random size
            const size = 1 + Math.random() * 4;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            
            // Random opacity and color
            dot.style.opacity = 0.1 + Math.random() * 0.4;
            
            // Random animation duration
            dot.style.animationDuration = `${20 + Math.random() * 40}s`;
            dot.style.animationDelay = `${Math.random() * 10}s`;
            
            particles.appendChild(dot);
        }
    }
    
    // Add subtle hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
