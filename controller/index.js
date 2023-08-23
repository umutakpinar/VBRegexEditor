const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        minHeight : 540,
        minWidth : 960,
        width : 1920,
        height : 1080,
    });

    mainWindow.loadURL(
        url.format({
            pathname : path.join(__dirname,"../view/index.html"),
            protocol: "file:",
            slashes : true,
        })
    );
});