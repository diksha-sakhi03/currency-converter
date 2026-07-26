# 💱 Currency Converter

A simple and responsive Currency Converter web application built using **HTML**, **CSS**, and **Vanilla JavaScript**. The application fetches real-time exchange rates from a public currency API and converts one currency into another instantly.

## 🚀 Features

* Convert between multiple international currencies.
* Real-time exchange rates using a public REST API.
* Dynamic currency dropdowns.
* Country flags update automatically based on the selected currency.
* User-friendly interface with instant conversion results.
* Built entirely with Vanilla JavaScript (no frameworks).

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Async/Await
* REST API

## 📂 Project Structure

```text
Currency Converter/
│── index.html
│── style.css
│── script.js
│── codes.js        # Currency-country mapping
│── README.md
```

## ⚙️ How It Works

1. The application dynamically populates the currency dropdowns.
2. When the user selects different currencies, the corresponding country flags are updated.
3. After entering an amount and clicking **Get Exchange Rate**, the application:

   * Fetches the latest exchange rates from the Currency API.
   * Parses the JSON response.
   * Calculates the converted amount.
   * Displays the result on the page.

## 🌐 API Used

This project uses the free Currency API provided by:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api

## 📸 Features Demonstrated

* DOM Manipulation
* Event Handling
* Dynamic Element Creation
* Fetch API
* Asynchronous Programming (Async/Await)
* JSON Parsing
* API Integration
* Dynamic UI Updates

## ▶️ Running the Project

1. Clone the repository.

```bash
git clone <your-repository-link>
```

2. Open the project folder.

3. Open `index.html` in your browser or run it using the **Live Server** extension in VS Code.

## 📖 What I Learned

Through this project, I gained hands-on experience with:

* Working with REST APIs.
* Fetching real-time data using the Fetch API.
* Understanding asynchronous JavaScript using Async/Await.
* Parsing JSON responses.
* Manipulating the DOM dynamically.
* Updating the UI based on API responses.
* Organizing JavaScript code into reusable functions.

## 🔮 Future Improvements

* Add error handling for failed API requests.
* Show loading indicators while fetching exchange rates.
* Validate user input.
* Remember previously selected currencies.
* Display exchange rate history using charts.
* Improve UI responsiveness for smaller devices.

## 👩‍💻 Author

**Diksha Sakhi**

If you found this project helpful, feel free to ⭐ the repository!
