/*
 * Electron Application Main Process
 * -------------------------------
 * This is the main entry point for an Electron application. Electron uses a main process
 * (this file) and renderer processes (for each window) to create desktop applications.
 * The main process handles creating windows, application lifecycle, and native features.
 */

// Import required Electron modules - app controls application lifecycle,
// BrowserWindow is used to create and manage application windows
const { app, BrowserWindow } = require('electron')

/*
 * Window Creation
 * --------------
 * This function creates a new application window with specific configurations.
 * Each window runs in its own renderer process.
 */
function createWindow () {
  // Create a new browser window instance with specific dimensions
  // nodeIntegration allows renderer process to access Node.js features
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load the main HTML file into the window
  // This HTML file is the entry point for the renderer process
  win.loadFile('index.html')

  // Developer tools can be enabled for debugging
  // Commented out by default
  // win.webContents.openDevTools()
}

/*
 * Application Lifecycle
 * -------------------
 * Electron uses several events to manage the application's lifecycle
 */

// 'whenReady' fires when Electron is initialized and ready to create windows
// This is the first point where we can create browser windows
app.whenReady().then(createWindow)

/*
 * Platform-Specific Behavior
 * ------------------------
 * Different operating systems have different conventions for window management
 */

// Handle window closing behavior
// Special case for macOS where applications stay active even with no windows
app.on('window-all-closed', () => {
  // Quit the application on all platforms except macOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Handle application activation
// On macOS, it's common to re-create windows when the dock icon is clicked
app.on('activate', () => {
  // Create a new window if none exists when the app is activated
  // This is macOS-specific behavior
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

/*
 * Additional Application Logic
 * --------------------------
 * The main process can include additional code for:
 * - Inter-process communication (IPC)
 * - System tray integration
 * - Native menus
 * - Other OS-level integrations
 */