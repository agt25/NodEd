# NodEd's Design

Presentation: https://youtu.be/uDTibRx1sQM 

### Full Stack (F.E.R.N)

My program's wep-app version is built via a F.E.R.N. (Firebase, Express.js, React.js, Node.js) stack. I wanted to use this project as an opportunity to branch out into new languages or frameworks. I thought React's hooks and states would be perfect for a note-taking app. I was not comfortable enough with JavaScript to handle a full-stack CRUD app, so I followed tutorials and short crash courses here and there. The sources I ended up either following along to or taking ideas from are cited in the source code.

### Desktop Version: Electron.js

 The app's desktop result was built with Electron.js. From the start, I knew I wanted a desktop app. Web browser windows get messy; I tend to have at least 7-8 running at a given time. I prefer the note-taking process to be as simple as possible, with very few navigational clicks. Thus, the web-only Google Docs doesn't cut it for me. 

#### Graphic Design and UI

I went with building a hybrid JavaScript desktop-app because of the easy styling capabilities of web-apps. HTML/CSS/ and JavaScript were familiar.I'm a stickler for design. Whether or not my design styles or ideas are decent is a subjective matter. I do aim to find a happy medium between minimalism and color. Note-taking should be distraction-free, but I shouldn't have to stare at a boring screen while procrastinating. Psychology and the placebo effect are real, I think. I know I'm my most productive when surrounded by beautiful spaces, rather than blank walls. The nagivational sidebar, for that reason, has a pop of color that hopefully *electrifies* movement. 

#### The Database

The sidebar is, at this time, a place-holder. Folders were never my priority. I find I rarely use them and rely more on the search of tags. 'Search' was implemented in my original M.E.R.N. stack design. As stated in my Status Report, NodEd's week one state included the ability to retrieve deleted notes. But MongoDB drove me crazy. I had implemented the database locally. All synced up well initially until the database stopped working. I tried brew and other means to get it running again locally but failed. Most of the debugging threads and tutorials I found pertained to Windows. Still, I am clueless as to why the local database won't start. Perhaps it has to do with me running Big Sur, but that could be a stretch. 

In re-routing after the database failure, I opted for Atlas, Mongo's cloud database. Despite checking off the option that allows the database to run on any and every I.P./one's localhost, nothing synced. There were no console errors. Running node server.js alone (without react!) to check if there were errors in retrieving the data proved fruitless. The database was connected, but it would return an empty array. At that point, I gave up on Mongo and switched to Firebase. I followed a CodeAcademy tutorial in integrating Firebase with the note CRUD process. The tutorial used Quill.js as an editor; Quill is more than enough to incorporate in a blog or forum environment, but it wasn't what I needed. 

#### The Text Editor

From the get-go, I was a fan of the CKEditor5. Its framework customizations are powerful. A custom build, along with plenty of plugins, would allow me to check off about 80% of all my "best outcome" hopes. I spent two days tweaking the framework to fit my needs. The documentation seemed awesome until I realized how little of it was React specific. To make matters worse, there was so much documentation that one would easily get lost. I had to try out features one by one, as all documentation was text – no screenshots, no plugin previews. All that time went to waste. 

Before I got to creating my dream editor, I forget to check how well it synced with Firebase –– not very well. The v5 CKEditor would rather you pay for their cloud storage than allow you to store and programmatically retrieve a list of your notes elsewhere. I tried all their "get data" methods, and none would sync to Firebase. Version 4 was more forgiving, but it lacked many of the features I wanted. So, there was no point in spending a lot of time tweaking their frameworks if the result would be like most other editors. 

I switched to TinyMCE for that reason. It allows you to retrieve the document data as quickly as Quill.js. While the editor is rather ordinary, it does the job. Most of their features are premium. The packaged production app may show yellow editor warnings upon initial start-up. I'm on a premium trial, so feel free to x out of the warnings. They're trying to bully me into paying for a $75/monthly plan, which is a ridiculous price given how few special features they have, how much their documentation sucks, and how much effort I had to put in getting their plugins to do half of what they claim to be able to do. Even their advertised premium markdown does not work well. I had to configure the editor to remember keyboard shortcuts that imitate Markdown (output '#' as a heading 1, '##' as a heading 2, etc.). 

#### Closing Thoughts

Overall, I was heartbroken to have spent so much time on the editor portion. I wish I had the time to integrate my "best case" features: interactive code shell, automatic slides-to-notes conversion, and built-in flashcards. The editor solutions I tried sure want you to pay for their mediocre results, so even if I had time, my three favored features would be hard to sync with the editor; bottom line: I should've just built my own editor from scratch! 

While NodEd isn't "the sole note-taking app you'll ever need", it is still a decent program. I didn't implement users as I saw no point in doing so. Thus, all the notes sync up into one account. I would not write any sensitive information while testing the software. All the priority features were implemented. My core fault was thinking too far ahead and out of CS50's scope. I have wanted to build the app written in my proposal for about a year now. Admittedly, I spent too much time switching plans and even frameworks, hoping to find the right sustaining balance of technologies from the start. But I don't regret aiming too high via the incredibly long list of "best result" features found on my proposal. I learned a lot along the way. 

I hope you find the app somewhat cool! And I hope this honest, introspective document will not deter an A ;)

Happy Holidays to you and all your loved ones, Tom! You're a good one, truly. 