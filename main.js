const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadFile('page-shim.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () { })

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})