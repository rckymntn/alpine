# Alpine Discord Bot

A general purpose Discord bot written in JavaScript (and eventually TypeScript.) Currently working on implementing features from my old Python Discord bot, then I'll start working on new stuff. 

### Commands and other Features

1. `/help`: Responds with some information about the bot and its usage. 
2. `/stats`: Responds with some information about the server the command was called in.
3. `roll x`: Responds with a number between one and x where x is provided by the user.
98. `logging`: Functionality to log information to console, a file, and a channel.
99. `moderation`: Messages sent that contain a word in `filter.csv` will be deleted. Also contains message sanitization functions. 

### Usage

##### As Is

1. Create a `.env` file with your Discord Bot Token and Client ID. See `.env-example`. 
2. Create `filter.csv` and add any nonpermitted terms to it. See `filter.csv-example`.
99. Run `npm start` or `node src/main.js` in your terminal. 

##### With Modification

1. `src` directory is home to `main.js`, `command-manager.js`, `moderation.js`, `lumberjack.js`, `listeners` directory, and the `commands` directory. 
    - `main.js` is the main flow of the application and likely doesn't need to be modified. 
    - `command-manager.js` contains the logic for registering and unregistering slash commands with the Discord API. 
    - `moderation.js` has functions to sanitize text for it to then be scanned for any blocked words contained in `filter.csv`.
    - `lumberjack.js` contains functions to log to console, a guild channel, a file, or all three. 
    - `commands` holds all commands as their own `.js` file. To make a new command, add a new command `your-command.js` to `commands` and run `register.js` before `main.js` for it to take effect. There's an example commmand in `examples/example.js` demonstrating most basic functionality of building a slash command. 
    - `listeners` directory groups event listeners together. For example, all message related listeners are grouped in one file, `message-listener.js`.
2. ...
99. Once you're satisified with your changes and have registered any new or modified commands, run `npm start` or `node src/main.js`. 

### Motivation 

`discord.py` was discontinued the 28th of August 2021, which is what my original Discord bot was written in. Meanwhile, as of writing, `discord.js` is actively maintained and presumably won't be discontinued. Additionally, I had some friends asking about having a feature complete bot to call their own, so I decided to take the parts I liked from my old Python bot and make it more distributable. 