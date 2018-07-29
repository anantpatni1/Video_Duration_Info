const electron = require('electron');
const ffmpeg=require('fluent-ffmpeg');
const { app,BrowserWindow,ipcMain } = electron;
let mainWindow;

app.on('ready',()=>{
 mainWindow=  new BrowserWindow({});
mainWindow.loadURL(`file://${__dirname}/index.html`);
});


ipcMain.on('getvideolength',(event, path)=>{//receiving from html

  ffmpeg.ffprobe(path, (err,metadata)=>{
    mainWindow.webContents.send('getvideo',metadata.format.duration);
  });


});
