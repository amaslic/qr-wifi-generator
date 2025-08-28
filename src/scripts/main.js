document.addEventListener('DOMContentLoaded', function() {
    const wifiNameInput = document.getElementById('wifi-name');
    const wifiPasswordInput = document.getElementById('wifi-password');
    const wifiTypeInput = document.getElementById('wifi-type'); 
    const generateButton = document.getElementById('generate-btn');
    const qrCodeContainer = document.getElementById('qr-code');
    const printButton = document.getElementById('print-btn');

    function validateInputs() {
        if (wifiTypeInput.value === 'nopass') {
            generateButton.disabled = !wifiNameInput.value;
        } else {
            generateButton.disabled = !(wifiNameInput.value && wifiPasswordInput.value);
        }
    }

    function generateQRCode() {
        const wifiName = wifiNameInput.value;
        const wifiPassword = wifiPasswordInput.value;
        const wifiType = wifiTypeInput.value;
        const qrData = wifiType === 'nopass'
            ? `WIFI:S:${wifiName};T:nopass;;`
            : `WIFI:S:${wifiName};T:${wifiType};P:${wifiPassword};;`;
        
        const qrCode = new QRCode(qrCodeContainer, {
            text: qrData,
            width: 128,
            height: 128,
        });

        printButton.classList.remove('hidden');
    }

    function printQRCode() {
        const qrHTML = qrCodeContainer.innerHTML;

        const cols = 4;
        const rows = 6;

        // Build grid HTML
        let grid = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; justify-items: center; align-items: center; margin: 40px;">';
        for (let i = 0; i < cols * rows; i++) {
            grid += `<div>${qrHTML}</div>`;
        }
        grid += '</div>';

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print QR Codes</title>
                    <style>
                        body { background: #fff; margin: 0; padding: 0; }
                        @media print {
                            body { margin: 0; }
                        }
                    </style>
                </head>
                <body>
                    <h2 style="text-align:center; margin-top:24px;">Wi-Fi QR Codes</h2>
                    ${grid}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }

    wifiNameInput.addEventListener('input', validateInputs);
    wifiPasswordInput.addEventListener('input', validateInputs);
    wifiTypeInput.addEventListener('change', validateInputs);
    generateButton.addEventListener('click', generateQRCode);
    printButton.addEventListener('click', printQRCode);
});