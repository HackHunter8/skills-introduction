# Quick Start Guide - Simple Web App

## 🚀 Get Started in 3 Steps

### Step 1: Get the Code
```bash
# Clone this repository
git clone https://github.com/HackHunter8/skills-introduction.git

# Enter the directory
cd skills-introduction
```

### Step 2: Verify Files
Make sure you can see the web app files:
```bash
ls -la
```

You should see these files:
- ✅ `index.html` - The main web page
- ✅ `styles.css` - Styling for the app
- ✅ `script.js` - Interactive functionality

### Step 3: Open the App

**Easy Way** - Just double-click on `index.html` in your file browser

**OR Using a Web Server:**

```bash
# Make sure you're in the skills-introduction directory
# (the one with index.html)

# Start Python web server
python3 -m http.server 8080

# Open your browser to:
# http://localhost:8080/index.html
```

## ❓ Common Issues

### "404 Not Found" Error

**Problem:** You're running the server from the wrong directory.

**Solution:**
```bash
# Check where you are
pwd

# List files (you should see index.html)
ls

# If you don't see index.html, navigate to the correct directory
cd skills-introduction
```

### Buttons Don't Work

**Problem:** JavaScript may not be loading or there's a browser compatibility issue.

**Solution:**
1. Open browser Developer Tools (press F12)
2. Check the Console tab for errors
3. You should see: "Buttons initialized and ready to use"
4. Try refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)

## 🎯 What This App Does

This is a simple counter application that lets you:
- ➕ Increment the counter (click + button or press ↑)
- ➖ Decrement the counter (click - button or press ↓)
- 🔄 Reset to zero (click Reset button or press R)

The counter changes color based on its value:
- 🟢 Green when positive
- 🔴 Red when negative
- 🟣 Purple when zero

## 📚 More Information

For detailed documentation, see [WEB_APP_README.md](WEB_APP_README.md)
