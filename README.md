# angular-digicode

angular ui widget to implement a digicode.  
see index.html for example how to use it.  
This widget use material design

## install xvfb, chrome and protractor for end2end test

### for c9.io ide (xvfb already installed)
- install X11 fonts
 
      sudo apt-get install -y xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic

- install last chrome

      wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
      sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
      sudo apt-get update 
      sudo apt-get install -y google-chrome-stable
      
- install protractor 

      npm install -g protractor
      
- update webdriver 

      webdriver-manager update
      
- use --no-sandbox option with chrome
 
  As c9.io is running inside container this option is needed. Update conf.js to pass the option to chrome      

      capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
          args: ['--no-sandbox'] 
        }   
      }
      
## run protractor test on headless chrome
- start webdriver with xvfb (headless)

      xvfb-run webdriver-manager start

- run the test on other terminal (do not forget to start the webserver!)

      protrator conf.js