# NodEd

NodEd is a desktop note-taking app which syncs and saves your notes on the cloud. 

My project is on Github and can be accessed by clicking: https://github.com/agt25/NodEd 

Presentation: https://youtu.be/uDTibRx1sQM

<img width="1300" alt="2" src="https://user-images.githubusercontent.com/57548500/101725390-93821c00-3a7e-11eb-9be0-c8568dbb6554.png">

## How to Save from Github 

1. On your preferred IDE or text-editor, run: 

       git clone https://github.com/agt25/NodEd.git

2. Change directories via ```cd NodEd``` & ```cd App```


## How To Run 

### Source Code 

If you prefer to run the source code, drag and drop the entire **NodEd** folder inside your preferred IDE or text editor. 


1. On the terminal, cd into App via ```cd App``` 
2. Run either ```yarn install```or ```npm install``` to install the project's dependencies. 
3. Run ```yarn start``` to get the app running. 
   - Ta-da! The NodEd app appears! 

4. Run ```yarn build``` to package the app. 



### Packaged Distribution 

The packaged app can only be accessed via Google Drive. 

https://drive.google.com/file/d/1x4HytpJAKDbuVzIZs0nfaQOX3Xyp68Wa/view?usp=sharing 

Path: 

                   App -> dist -> click on my-app-0.1.0.dmg (if on a mac!). 


​                   

1. The app will start to download. 
2. Drag and drop the app to your Applications folder. 


If seeing a warning pop-up such as "my-app.app" cannot be opened because the developer cannot be verified:

1. Exit out of the warning sign.
2. Go to your OS's settings (system preferences on macOS). 
3. Click on "Security & Privacy".
4. Navigate to the left-most option: "General"
5. Below **Allow apps downloaded from:** you should see a message *(e.g., my-app.app was blocked from use because it is not from an identified developer)*
6. Click on **Open Anyway** 
7. If NodEd does not start on its own, click on my-app.app again, and the the program should run. 



#### Oddities? 

You'll notice that the left-most side navigational bar is a placeholder of sorts. It is not a bug that folders do not work. The feature was not my priority. Read DESIGN.md for more on the thought process! 

When running the packaged app, you may come across yellow pop-up warning signs from the editor ("This domain is not registered with Tiny Cloud", "Upgrade your account", etc.) Fret not! All the plugins work as intended. I am on a trial version of some premium plugins and tinyMCE is clearly bullying my production build into buying a plan. The errors should not pop up when you run the source code. 

There's a one second delay, after your last keystroke, before your notes save to Firebase. This is not a bug; it was done on purpose. 

As explained on DESIGN.md, I did not implement users. Therefore, do not input sensitive information, even if only testing the app. You are, however, free to write all about how great this program is. Compliments about the programmer are also accepted. 

I believe I've included all the information you need to get everything running. Do not hesitate to reach out via email if you're having trouble along the way. 

<img width="1505" alt="3" src="https://user-images.githubusercontent.com/57548500/101725619-f83d7680-3a7e-11eb-9b0b-f6eac06d3f8e.png">
