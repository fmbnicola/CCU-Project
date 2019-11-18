# CCU 2019 - BusBuddy Project

| Grupo 1:           | istid |
|--------------------|-------|
| Francisco Nicolau  | 86419 |
| Alexandra Maroco   | 86369 |
| Cristiana Antunes  | 86398 |
| Catarina Gonçalves | 86397 |

**Important notice**: Sometimes, trying to do nodejs and expo installation on public wifi will stall for long periods, be ware.


## Required Installation:
Follow the steps bellow in the order indicated:

    1-Install Node.js:
    https://nodejs.org/en/download/

    2-Install Expo (in cmd):
    npm install -g expo-cli

    3-To install all nodejs modules required, open bus-buddy dir in cmd and run:
    npm install
___


## Run Project:
Finally, to run project, double click run.bat and then follow instructions on the terminal *

*This shouldn't be a thing but for some reason sometimes there is a error due to a malformed regex... go figure.
Just follow the instructions given [here](https://stackoverflow.com/questions/58268958/i-am-getting-invalid-regular-expression-error-while-running-npm-start) 

```
You have to make change in this file {project_root}\node_modules\metro-config\src\defaults\blacklist.js
Replace the sharedBlacklist var with this var:

var sharedBlacklist = [
    /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
    /website\/node_modules\/.*/,
    /heapCapture\/bundle\.js/,
    /.*\/__tests__\/.*/
];
```
___


## Emulation
If you want to run an emulator (alternatively you can just run it on your phone):

1-Genymotion: [follow link for video of installation process](https://youtu.be/WnS7dcY5Hys?t=420)

2-Android Studio: [follow link for video of installation process](https://www.youtube.com/watch?v=Q0dERWCzoi0&t=606s)

___




