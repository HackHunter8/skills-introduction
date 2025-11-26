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
1. Clone or download this repository
2. Navigate to the project directory
3. Double-click on `index.html`
4. The app will open in your default browser

### Option 2: Using Python HTTP Server
For a more production-like experience:

```bash
# First, clone the repository (if you haven't already)
git clone https://github.com/HackHunter8/skills-introduction.git

# Navigate to the project directory (IMPORTANT!)
cd skills-introduction

# Verify you're in the correct directory (you should see index.html)
ls -la

# Start a local HTTP server
python3 -m http.server 8080

# Open your browser and visit:
# http://localhost:8080/index.html
```

**Important Note:** Make sure you run the server from the directory that contains `index.html`, `styles.css`, and `script.js` files. If you get a 404 error, you're likely in the wrong directory.

### Option 3: Using Node.js HTTP Server
If you have Node.js installed:

```bash
# Install http-server globally (first time only)
npm install -g http-server

# Navigate to the project directory (where index.html is located)
cd skills-introduction

# Start the server
http-server -p 8080

# Open your browser and visit:
# http://localhost:8080/index.html
```

## Troubleshooting

### Getting 404 Error?
If you see a 404 error when trying to access the app:

1. **Check your current directory**: Make sure you're running the server from the directory that contains `index.html`
   ```bash
   pwd  # Shows your current directory
   ls   # List files - you should see index.html, styles.css, and script.js
   ```

2. **Navigate to the correct directory**: If you're not in the right place:
   ```bash
   cd skills-introduction  # Adjust path as needed
   ```

3. **Verify files exist**:
   ```bash
   ls -la | grep -E "(index.html|styles.css|script.js)"
   ```

### Buttons Not Clickable?
If buttons don't respond to clicks:

1. **Check browser console**: Open Developer Tools (F12) and check for any JavaScript errors
2. **Try a different browser**: Use Chrome, Firefox, Safari, or Edge (latest versions)
3. **Clear cache**: Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
4. **Check console logs**: You should see "Buttons initialized and ready to use" in the console

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
