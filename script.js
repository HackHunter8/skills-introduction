// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Counter application logic
    let counter = 0;

    // Get DOM elements
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Check if all elements exist
    if (!counterDisplay || !incrementBtn || !decrementBtn || !resetBtn) {
        console.error('Required DOM elements not found');
        console.error('counterDisplay:', counterDisplay);
        console.error('incrementBtn:', incrementBtn);
        console.error('decrementBtn:', decrementBtn);
        console.error('resetBtn:', resetBtn);
        return;
    }

    // Function to update the counter display
    function updateCounter() {
        counterDisplay.textContent = counter;
        
        // Add pulse animation
        counterDisplay.classList.add('pulse');
        setTimeout(function() {
            counterDisplay.classList.remove('pulse');
        }, 300);
        
        // Change color based on value
        if (counter > 0) {
            counterDisplay.style.color = '#10b981'; // green
        } else if (counter < 0) {
            counterDisplay.style.color = '#ef4444'; // red
        } else {
            counterDisplay.style.color = '#667eea'; // purple
        }
    }

    // Event listeners with fallback for older browsers
    if (incrementBtn) {
        incrementBtn.onclick = function() {
            counter++;
            updateCounter();
            console.log('Incremented to:', counter);
        };
    }

    if (decrementBtn) {
        decrementBtn.onclick = function() {
            counter--;
            updateCounter();
            console.log('Decremented to:', counter);
        };
    }

    if (resetBtn) {
        resetBtn.onclick = function() {
            counter = 0;
            updateCounter();
            console.log('Reset to:', counter);
        };
    }

    // Keyboard support (only when not typing in input fields)
    document.addEventListener('keydown', function(event) {
        // Ignore keyboard shortcuts if user is typing in an input field
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
            return;
        }
        
        if (event.key === 'ArrowUp' || event.key === '+') {
            counter++;
            updateCounter();
        } else if (event.key === 'ArrowDown' || event.key === '-') {
            counter--;
            updateCounter();
        } else if (event.key === 'r' || event.key === 'R') {
            counter = 0;
            updateCounter();
        }
    });

    // Initialize
    console.log('Simple Web App loaded successfully!');
    console.log('Keyboard shortcuts: Arrow Up/+ (increment), Arrow Down/- (decrement), R (reset)');
    console.log('Buttons initialized and ready to use');
});
