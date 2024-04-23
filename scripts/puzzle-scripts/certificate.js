document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const printButton = document.getElementById('print-btn');
    const date = new Date().toLocaleDateString();

    // Print certificate
    printButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name !== '') {
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Print Certificate</title>
                    <style>
                        @font-face {
                            font-family: 'EyeSpyItalic';
                            src: url("../assets/font/EyeSpyItalic.otf") format("opentype");
                        }
                        body {
                            font-family: 'EyeSpyItalic', sans-serif;
                            margin: 0;
                            padding: 20px;
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background: white; /* Ensure a white background for printing */
                        }
                        .certificate-content {
                            width: 100%;
                            max-width: 800px;
                            border: none;
                        }
                        #certificate-background {
                            width: 100%;
                            height: auto;
                        }
                        .text-content {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: #000; /* Set text color to black for printing */
                        }
                    </style>
                </head>
                <body>
                    <div class="certificate-content">
                        <img id="certificate-background" src="../assets/certificate_background.png" alt="Certificate Background">
                        <div class="text-content">
                            <p>This certifies that ${name}</p>
                            <p>has successfully completed the escape room challenge and is officially a D.A.T.A Agent.</p>
                            <p>Date: ${date}</p>
                        </div>
                    </div>
                </body>
                </html>
            `);

            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.onafterprint = function() {
                printWindow.close();
            };
        } else {
            alert("Please enter your name before printing the certificate.");
        }
    });
});
