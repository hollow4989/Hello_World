// Function to animate each character randomly in various directions with a random color
        function animateCharacters() {
            const charElements = document.querySelectorAll('.char');
            const totalChars = charElements.length;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Function to generate random values for animation properties
            function generateRandomAnimationProperties() {
                const translateX = Math.random() * (window.innerWidth - charElements[0].offsetWidth) - centerX;
                const translateY = Math.random() * (window.innerHeight - charElements[0].offsetHeight) - centerY;
                const rotate = Math.random() * 720 - 360; // Random rotation between -360 and 360 degrees
                const scale = Math.random() * 1 + 1; // Random scale between 1 and 2 (double the size)
                const color = getRandomColor(); // Get a random color for the character
                return { translateX, translateY, rotate, scale, color };
            }

            // Function to generate a random color
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            // Store all the animation objects in an array
            const animations = [];

            charElements.forEach((char, index) => {
                function animateCharacter() {
                    const { translateX, translateY, rotate, scale } = generateRandomAnimationProperties();

                    // Define the animation using Anime.js for each character
                    const animation = anime({
                        targets: char,
                        translateX: translateX + 'px',
                        translateY: translateY + 'px',
                        rotate: rotate + 'deg',
                        scale: scale,
                        duration: 3000 + index * 200, // Add a slight delay to each character's animation
                        easing: 'easeInOutQuad', // Timing function (you can try different ones)
                        complete: animateCharacter, // Call the function again when the animation finishes
                        color: getRandomColor(), // Set a new random color for each character
                    });

                    animations.push(animation);
                }

                // Start the initial animation for each character
                animateCharacter();
            });
        }

        // Call the animateCharacters function after the page is loaded
        document.addEventListener('DOMContentLoaded', animateCharacters);