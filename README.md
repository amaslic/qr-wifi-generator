# Wi-Fi QR Code Generator

This project is a simple web application that allows users to generate a QR code for their Wi-Fi network. Users can input their Wi-Fi name (SSID), password and type. The application will generate a QR code that can be scanned by devices to connect to the network.

## Project Structure

```
wifi-qr-html
├── src
│   ├── index.html        # Main HTML file with Tailwind CSS and QR code generator
│   ├── scripts
│   │   └── main.js       # JavaScript logic for enabling button and generating QR code
│   └── styles
│       └── tailwind.css  # Tailwind CSS file for styling
└── README.md             # Project documentation
```

## Dependencies

- Tailwind CSS (included via CDN)
- QR Code Generator library (included via CDN)

## How to Use

1. Open `src/index.html` in your web browser.
2. Enter your Wi-Fi Name (SSID) in the first input field.
3. Enter your Wi-Fi Password in the second input field.
4. Select your Wi-Fi Type.
5. Click the "Generate QR Code" button to create the QR code.
6. Use the "Print" option to print the generated QR code.

## License

This project is open-source and available for anyone to use and modify.