# VBRegexEditor
  Regex Editor Desktop App.

- Run VBRegexEditor Without Build Files :
  ---
    Clone th repo. Locate the cloned folder. Open terminal and run `npm install`,
    - **via browser** : Double click main.html file or open it with any web browser (needs node.js).
    - **via electron.js**  : Open terminal, run `npm start`.

- Run VBRegexEditor with installation :
  ---
    - Existed Builds
      ---
        - Go to download page : [VBRegexEditor](https://drive.google.com/drive/folders/1GQRRyJhnza-ETPuPAhp4Lp3HC39F6CuZ?usp=share_link)
        - Download and extract the related .zip file which compatible with your OS.
        - Run vbregexeditor.exe for Windows or run vbregexeditor.app for MacOS.
          
    - Taking a Fresh Build
      ---
        You can take your own build file for any OS with electron.
        - Install Node.js & Npm.
        - Clone the repo.
        - Locate the cloned folder, run `npm install` and get the project dependencies.
            - for MacOS Build (x86) :  
              `electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds`
            - for MacOS Build (arm64) :  
              `electron-packager . --overwrite --platform=darwin --arch=arm64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds`
            - for Windows Build :  
              `electron-packager . vbregexeditor --overwrite --asar=true --platform=win32 --arch=x64 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="VBRegexeditor"`
        - Your build files will appear under the release-builds folder.   
          > [!NOTE]
          > For Linux builds see the electron [documentation](https://www.electronjs.org/docs/latest/development/build-instructions-linux).
---
- Screenshots
  ---
  ![1](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_1.png)
  --
  ![2](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_2.png)
  --
  ![3](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_3.png)
  --
  ![4](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_4.png)
  --
  ![5](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_5.png)
  --
  ![6](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_6.png)
  --
  ![7](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_7.png)
  --
  ![8](https://github.com/umutakpinar/VBRegexEditor/blob/bc507eb8e585e568a7c42e1c30c088ffa2f8f992/screenshots/screenshot_8.png)
  --
