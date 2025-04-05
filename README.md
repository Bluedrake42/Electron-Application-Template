# Electron Application Starter Template

## Author

Connor Hill

- GitHub: [Connor Hill](https://github.com/bluedrake42)

This is a template that anyone can utilize to quickly develop desktop applications utilizing electron. I've created this template specifically for my students, however anyone is free to utilize this starter project for their own personal or commercial needs as desired. 

## What is Electron?

Electron is a powerful framework that allows developers to build cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript. Created by GitHub, Electron combines Chromium (which powers Google Chrome) for the frontend and Node.js for the backend, enabling you to:

- Build desktop applications that run on Windows, macOS, and Linux
- Use familiar web development skills to create native applications
- Access operating system features directly through Node.js APIs
- Package and distribute your app through native installers

Electron powers many popular applications including Visual Studio Code, Slack, Discord, and GitHub Desktop, demonstrating its capability to create professional-grade desktop software.


## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url> your-app-name
    cd your-app-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```

## Structure

-   `main.js`: Main process entry point.
-   `index.html`: Application UI.
-   `renderer.js`: Renderer process script.
-   `package.json`: Project metadata and dependencies.

## License

[MIT](LICENSE)