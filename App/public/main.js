const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

// This is essentially boiler plate for initializing an Electron app. 

let mainWindow;

// Icon for distribution 
// Source u/Shashwat 
// https://stackoverflow.com/questions/42684051/how-to-add-an-icon-to-electron-application
const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/public/appIcon.png'); 
 

    image.setTemplateImage(true);


// createWindow function updated to remove typical mac menu bar. 
// Remove "hiddenInset" if you prefer a non-transparent menu bar. 
function createWindow() {
  mainWindow = new BrowserWindow({ width: 1200, height: 680, 
  titleBarStyle: 'hiddenInset', 
  icon: image,
  webPreferences: { nodeIntegration: true }});
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
