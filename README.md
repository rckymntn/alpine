# Alpine Discord Bot

A general purpose Discord bot written in JavaScript. Currently working on implementing features from my old Python Discord bot, then I'll start working on new stuff. 

### Commands

1. 

### Usage

##### As Is

1. Create a `.env` file with your Discord Bot Token and Client ID. See `.env_example`. 
2. ...
99. `npm start` or `node src/main.js`

##### With Modification

1. `src` directory is home to `main.js`, `command-manager.js`, and the `commands` directory. 
    - `main.js` is the main flow of the application and likely doesn't need to be modified. 
    - `command-manager.js` contains the logic for registering and unregistering slash commands with the Discord API. 
    - `commands` holds all commands as their own `.js` file. To make a new command, add a new command `your-command.js` to `commands` and run `register.js` before `main.js` for it to take effect. 
2. ...
99. Once you're satisified with your changes and have registered any new or modified commands, run `npm start` or `node src/main.js`. 

### Motivation 

`discord.py` was discontinued the 28th of August 2021, which is what my original Discord bot was written in. Meanwhile, as of writing, `discord.js` is actively maintained and presumably won't be discontinued. Additionally, I had some friends asking about having a feature complete bot to call their own, so I decided to take the parts I liked from my old Python bot and make it more distributable. 