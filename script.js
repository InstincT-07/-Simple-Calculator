const display = document.getElementById('inputBox');
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Theme toggle functionality
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeToggle.textContent = '🌞 Light Mode';
            } else {
                themeToggle.textContent = '🌙 Dark Mode';
            }
        });
        // Function to append value to display
        function appendToDisplay(value) {
            display.value += value;
        }
        
        // Function to clear display
        function clearDisplay() {
            display.value = '';
        }
        
        // Function to delete last character
        function deleteLastChar() {
            display.value = display.value.toString().slice(0, -1);
        }
        
        // Function to calculate result
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
                setTimeout(clearDisplay, 1000);
            }
        }
        
        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            // Allow numbers (0-9)
            if (/[0-9]/.test(key)) {
                appendToDisplay(key);
                return;
            }
            
            // Allow operators (+, -, *, /)
            if (/[\+\-\*\/]/.test(key)) {
                appendToDisplay(key);
                return;
            }
            
            // Allow decimal point
            if (key === '.') {
                appendToDisplay('.');
                return;
            }
            
            // Handle Enter key (=)
            if (key === 'Enter') {
                calculate();
                return;
            }
            
            // Handle Backspace (delete)
            if (key === 'Backspace') {
                deleteLastChar();
                return;
            }
            
            // Handle Escape (clear)
            if (key === 'Escape') {
                clearDisplay();
                return;
            }
        });