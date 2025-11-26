# Simple Web App

A simple, interactive counter web application built with HTML, CSS, and JavaScript.

## Features

- **Interactive Counter**: Increment, decrement, or reset the counter with intuitive buttons
- **Beautiful UI**: Modern gradient design with smooth animations
- **Keyboard Support**: Control the counter using keyboard shortcuts
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Visual Feedback**: Color changes and pulse animations for better user experience

## How to Run

### Option 1: Open Directly in Browser
Simply open the `index.html` file in your web browser:
1. Navigate to the project directory
2. Double-click on `index.html`
3. The app will open in your default browser

### Option 2: Using Python HTTP Server
For a more production-like experience:

```bash
# Navigate to the project directory
cd /path/to/skills-introduction

# Start a local HTTP server
python3 -m http.server 8080

# Open your browser and visit:
# http://localhost:8080/index.html
```

### Option 3: Using Node.js HTTP Server
If you have Node.js installed:

```bash
# Install http-server globally (first time only)
npm install -g http-server

# Navigate to the project directory
cd /path/to/skills-introduction

# Start the server
http-server -p 8080

# Open your browser and visit:
# http://localhost:8080/index.html
```

## Keyboard Shortcuts

- **Arrow Up** or **+**: Increment counter
- **Arrow Down** or **-**: Decrement counter
- **R**: Reset counter to 0

## File Structure

```
skills-introduction/
├── index.html       # Main HTML structure
├── styles.css       # CSS styling and animations
├── script.js        # JavaScript functionality
└── WEB_APP_README.md # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6)**: Interactive functionality and event handling

## Browser Compatibility

This web app works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Customization

Feel free to customize the app by:
- Changing colors in `styles.css`
- Modifying the counter logic in `script.js`
- Adding new features or buttons in `index.html`

## License

This project is open source and available under the MIT License.
