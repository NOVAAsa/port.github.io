// Function to change the background color of the page when a button is clicked
function changeBackgroundColor() {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get input values from form (for example)
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Handle form data here (e.g., send to server or display alert)
    alert(`Name: ${name}\nMessage: ${message}`);
}

// Function for handling button hover (similar to CSS hover effect in JS)
function handleButtonHover() {
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.transform = 'translateY(-3px)';
            btn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Combine everything under a single DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    // Change background color on button click
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }

    // Attach the form submit event
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    // Call the button hover effect function
    handleButtonHover();
});

