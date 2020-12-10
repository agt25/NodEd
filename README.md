# NodEd


My project is on Github and can be accessed by clicking:                      

Once there, 

Presentation: https://youtu.be/uDTibRx1sQM

NodEd is a desktop note-taking app which syncs and saves your notes on the cloud. 

## How To Run 

### Packaged Distribution 

Inside **App** (the folder!) you will find a folder called **dist**. Click inside and navigate to the **mac** folder if on a mac. Inside you'll find NodEd.app. Click on it and the app will run! 

Alternatively, you can install by clicking *my-app-0.1.0.dmg* inside the **dist**  folder. 

Drag and drop **my-app** onto your **Applications** folder. Click on my-app and NodEd will start! 



### Source Code 

If you prefer to run the source code, drag and drop the entire **NodEd** folder inside your preferred IDE or text editor. 

1. On the terminal, cd into App via ```cd App``` 
2. Run either ```yarn install```or ```npm install``` to install the project's dependencies. 
3. Run ```yarn start``` to get the app running. 
4. Run ```yarn build``` to package the app. 



#### Oddities? 

You'll notice that the left-most side navigational bar is a placeholder of sorts. It is not a bug that folders do not work. The feature was not my priority. Read DESIGN.md for more on the thought process! 

When running the packaged app, you may come across yellow pop-up warning signs from the editor ("This domain is not registered with Tiny Cloud", "Upgrade your account", etc.) Fret not! All the plugins work as intended. I am on a trial version of some premium plugins and tinyMCE is clearly bullying my production build into buying a plan. The errors should not pop up when you run the source code. 

There's a one second delay, after your last keystroke, before your notes save to Firebase. This is not a bug; it was done on purpose. 

As explained on DESIGN.md, I did not implement users. Therefore, do not input sensitive information, even if only testing the app. You are, however, free to write all about how great this program is. Compliments about the programmer are also accepted. 

I believe I've included all the information you need to get everything running. Do not hesitate to reach out via email if you're having trouble along the way. 
