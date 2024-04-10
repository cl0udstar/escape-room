function generateCertificate() {
    const userName = document.getElementById('userName').value;
    const selectedColor = document.getElementById('textColor').value;
    
    if (userName.trim() !== '') {
        const certificateHTML = `
            <h2 style="color: ${selectedColor};">Certificate of Completion</h2>
            <p style="color: ${selectedColor};">This certifies that</p>
            <h3 style="color: ${selectedColor};">${userName}</h3>
            <p style="color: ${selectedColor};">has successfully completed the escape room challenge and is officially a D.A.T.A Agent.</p>
            <p style="color: ${selectedColor};">Date: ${new Date().toLocaleDateString()}</p>
        `;
        
        const previewContainer = document.getElementById('certificatePreview');
        previewContainer.innerHTML = certificateHTML;
        previewContainer.style.display = 'block';
    } else {
        alert('Please enter your name.');
    }
}


function printCertificate() {
    const previewContainer = document.getElementById('certificatePreview');
    if (previewContainer.style.display === 'block') {
        window.print();
    } else {
        alert('Please generate the certificate first.');
    }
}
