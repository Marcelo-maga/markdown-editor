const isDev = require('electron-is-dev')
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    minWidth: 1050,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // mainWindow.setMenu(null)

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`
  )

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
async function registerListeners () {
  ipcMain.on('close', () => {
    console.log('cu')
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
