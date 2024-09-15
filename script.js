document.addEventListener('DOMContentLoaded', function() {
    const text = "Welcome to Guest's Redirector. Take your pick.";  // Customizable word
    const typingSpeed = 60;
    const typewriterText = document.getElementById('typewriter-text');
    const button = document.getElementById('redirect-btn');
    const buttons = [
        document.getElementById('redirect-btn-1'),
        document.getElementById('redirect-btn-2'),
        document.getElementById('redirect-btn-3'),
        document.getElementById('redirect-btn-4')
    ];
    const videoContainer = document.getElementById('video-container');
    const boomVideo = document.getElementById('boom-video');

    let index = 0;

    // Typing effect function
    function type() {
        if (index < text.length) {
            let currentChar = text.charAt(index);
            typewriterText.textContent += currentChar;

            // If 41 characters have been typed, insert a line break
            if ((index + 1) % 41 === 0 && currentChar !== " ") {
                typewriterText.textContent += ''; // Add new line
            }

            index++;
            setTimeout(type, typingSpeed);
        } else {
            // Show the buttons with a fade-in effect
            button.classList.remove('hidden');
            button.classList.add('fade-in');
            buttons.forEach(btn => {
                btn.classList.remove('hidden');
                btn.classList.add('fade-in');
            });
        }
    }

    // Call the typing function
    type();

    // Redirect on button click
    button.addEventListener('click', function() {
        window.location.href = "https://guest058.github.io/Snake-Game/";
    });

    // Additional buttons redirection
    buttons[0].addEventListener('click', function() {
        window.location.href = "https://guest058.github.io/Site-Treasure-Hunt/";
    });
    
    buttons[1].addEventListener('click', function() {
        window.location.href = "https://raw.githubusercontent.com/Guest058/chess-dumbopenings/30d3b47ba46ae4e1506beb03fb77be1337bfcfe7/Example.OKHELLNERKUGLDFKGYS";
    });
    
    buttons[2].addEventListener('click', function() {
        window.location.href = "https://raw.githubusercontent.com/Guest058/chess-dumbopenings/30d3b47ba46ae4e1506beb03fb77be1337bfcfe7/Example.OKHELLNERKUGLDFKGYS";
    });
    
    buttons[3].addEventListener('click', function() {
        window.location.href = "https://raw.githubusercontent.com/Guest058/chess-dumbopenings/30d3b47ba46ae4e1506beb03fb77be1337bfcfe7/Example.OKHELLNERKUGLDFKGYS";
    });

    // Define the custom command
    window.Game = {
        Cheat: function() {
            console.error("Nuh uh lil bro");
            typewriterText.textContent = "Game.Cheat() Detected, Shutting down Site.";
            button.classList.remove('fade-in');
            button.classList.add('hidden');
            buttons.forEach(btn => {
                btn.classList.remove('fade-in');
                btn.classList.add('hidden');
            });
        }
    };

    // Sequence to detect 'explode' keystroke
    const explodeSequence = ['o', 'f', 'f', 's', 'e', 't'];
    let currentIndex = 0;

    document.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toLowerCase();

        // Check if the current key matches the next character in the sequence
        if (keyPressed === explodeSequence[currentIndex]) {
            currentIndex++;

            // If the full sequence has been typed, play the video
            if (currentIndex === explodeSequence.length) {
                videoContainer.classList.add('show');
                boomVideo.play();
                currentIndex = 0; // Reset the sequence
            }
        } else {
            // Reset the sequence if a wrong key is pressed
            currentIndex = 0;
        }
    });
});
