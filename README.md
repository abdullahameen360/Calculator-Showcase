# 🧮 Basic Calculator

A clean, responsive web calculator built with **HTML**, **CSS**, and **vanilla JavaScript** — no libraries, no frameworks, just pure front-end fundamentals.

---

## 📸 Preview

<img width="775" height="799" alt="image" src="https://github.com/user-attachments/assets/4d9ba120-cbbb-4ccd-98e9-2546eaad4eea" />




---

## ✨ Features

- **Basic arithmetic** — addition, subtraction, multiplication, division
- **Decimal support** — work with floating point numbers
- **Delete (DE)** — remove the last character
- **All Clear (AC)** — reset the display instantly
- **Custom expression parser** — evaluates math expressions safely without using `eval()`
- **Divide-by-zero protection** — returns a friendly error instead of crashing
- **Input validation** — blocks any non-mathematical characters
- **Responsive layout** — centered and clean on any screen size

---

## 🗂️ Project Structure

```
calculator/
├── index.html    # Calculator markup and button layout
├── style.css     # Styling, theming, and layout
└── script.js     # Expression parser and calculate() logic
```

---

## 🚀 Getting Started

No setup needed. Just open the project in your browser:

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Start calculating!

```bash
git clone https://github.com/abdullahameen360/Calculator-Showcase

```

---

## 🧠 How It Works

The `calculate()` function in `script.js` uses a **recursive descent parser** to safely evaluate math expressions:

- Tokenizes the input string into numbers and operators
- Parses operator precedence correctly (`*` and `/` before `+` and `-`)
- Handles parentheses and unary minus
- Returns `"Error"` for invalid input or division by zero

This avoids the security risks of using JavaScript's built-in `eval()`.

---

## 🎨 Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure and calculator layout |
| CSS3 | Styling, dark theme, hover transitions |
| JavaScript (ES6) | Expression parsing and logic |

---

## 📄 License

This project is open source and free to use.
