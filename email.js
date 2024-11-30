// Initialize EmailJS with your Public Key
emailjs.init('GHevvYUSyh_S46XYh');  // Replace 'user_xxx123xxx456' with your actual Public Key from EmailJS

// Function to generate an 8-digit code
function generateCode() {
    return Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit random number
}

// Function to send an email with the generated 8-digit code
function sendCode(email) {
    const code = generateCode();  // Generate the 8-digit code

    // Template parameters for the email
    const templateParams = {
        to_email: email,  // The recipient's email address
        from_name: "Your Name",  // Your name or from email address (as displayed in the email)
        code: code,  // The generated 8-digit code
    };

    // Send the email using EmailJS
    emailjs.send('service_v22bt34', 'template_o4p7alb', templateParams)  // Replace with your actual service and template IDs
        .then(function(response) {
            console.log('Email sent successfully:', response);
            // You can use the code or display it in any way here
            alert(`Email sent successfully! `);  // Show the code to the user
        }, function(error) {
            console.log('Error sending email:', error);
            alert('Error sending email. Please try again.');
        });
}

// Usage example: Send an email to a specific address

