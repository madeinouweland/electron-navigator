const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({ width: 900, height: 600 })
  win.loadFile('mainview.html')
}

app.on('ready', createWindow)
