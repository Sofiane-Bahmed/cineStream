# CineStream 🎬

[![React Version](https://img.shields.io/badge/react-%5E18.2.0-blue)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

**CineStream** is a modern, responsive movie discovery application built with React. It leverages the OMDB API to provide users with a seamless experience for searching and exploring their favorite films.

## 🌟 Features

-   **Instant Search:** Quickly find movies by title using the OMDB API integration.
-   **Deep Insights:** View comprehensive details for every movie, including plot summaries, directors, cast, and IMDB ratings.
-   **Dynamic Theming:** Seamlessly toggle between Light and Dark modes for a comfortable viewing experience in any environment.
-   **Fully Responsive:** A "mobile-first" design approach ensures the app looks great on desktops, tablets, and smartphones.
-   **Modern Stack:** Built using React 18, React Router 6, and Styled Components for a robust and maintainable codebase.

---

## 🚀 Installation

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14.0.0 or higher recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Step-by-Step Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cine-stream.git
    cd cine-stream
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Verification:**
    Ensure all packages are installed correctly by checking the `node_modules` folder.

---

## ⚡ Quick Start

To run the application in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Basic Usage

1.  Enter a movie title (e.g., "Inception") in the search bar.
2.  Click the search icon or press Enter.
3.  Click on any movie card to view detailed information.
4.  Use the theme toggle in the navigation bar to switch between Light and Dark modes.

---

## ⚙️ Configuration

The application uses the [OMDB API](http://www.omdbapi.com/). 

### API Key
Currently, a demo API key is hardcoded in `App.js` and `MovieDetails.jsx`. For production use, it is recommended to use an environment variable:

1. Create a `.env` file in the root directory.
2. Add your API key: `REACT_APP_OMDB_API_KEY=your_key_here`.
3. Update the `API_URL` constants to use `process.env.REACT_APP_OMDB_API_KEY`.

---

## 🛠️ Development

### Available Scripts

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `build` folder.
-   `npm test`: Launches the test runner.
-   `npm run lint`: (If configured) Checks for code style issues.

---

## 🧪 Testing

The project uses Jest and React Testing Library for unit testing.

To run the tests:
```bash
npm test
```

---

## 🏆 Acknowledgments

-   [OMDB API](http://www.omdbapi.com/) for the movie data.
-   [Styled Components](https://styled-components.com/) for the dynamic theming system.
-   [React Icons](https://react-icons.github.io/react-icons/) for the UI elements.

