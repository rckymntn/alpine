# Discord Bot Foundation

This is a intended to be a general-purpose foundation for a Discord bot. 

## Included commands and other features

1. `/ping`: The most basic command. Responds with pong. 
2. `/help`: Responds with some information about the bot and its usage. 
3. `/stats`: Responds with some information about the server the command was called in.
96. Command registration and unregistration with Discord API.
98. `moderation`: Messages sent that contain a word in `filter.csv` will be deleted. Also contains message sanitization functions. 
99. And more! There's smaller things like sending a happy birthday message when the bot sees "happy birthday" in another message. 

## Usage

This bot is fairly bare-boned and is instead intended to serve as a solid foundation from which to build upon. 

### Docker

### Standalone

1. Run `npm install`.
2. Create a `.env` file with your Discord Bot Token and Client ID. See `example.env`. 
3. (Optional) Add or change any desired information in `config.js`.
    - In `config.js` you can change
        - What features are enabled
        - Create a text filter
        - Add people to a preemptive banlist
    - By default, everything is enabled and the preemptive banlist and word filter are empty. 
4. (Optional) Make any desired changes.
    - `src` directory is home to `main.js`, `command-manager.js`, `moderation.js`, `lumberjack.js`, `listeners` directory, and the `commands` directory. 
        - `main.js` is the main flow of the application and likely doesn't need to be modified. 
        - `command-manager.js` contains the logic for registering and unregistering slash commands with the Discord API. 
        - `moderation.js` has functions to sanitize text for it to then be scanned for any blocked words contained in `filter.csv`.
        - `lumberjack.js` contains functions to log to console, a guild channel, a file, or all three. 
        - `commands` holds all commands as their own `.js` file. To make a new command, add a new command `your-command.js` to `commands` and run `register.js` before `main.js` for it to take effect. There's an example commmand in `examples/example.js` demonstrating most basic functionality of building a slash command. 
        - `listeners` directory groups event listeners together. For example, all message related listeners are grouped in one file, `message-listener.js`.
        - `tests` directory holds all tests for different files. Test files share the same filename as the file they test, for example `filename.test.js` tests `filename.js`. 
99. Run `npm run start` in your terminal. 

## Testing

## Motivation 

I had written my original Discord bot in Python, but when `discord.py` was discontinued August 2021, I decided to switch to `discord.js`. [discord.py development has resumed now](https://gist.github.com/Rapptz/c4324f17a80c94776832430007ad40e6), but I'll continue working with `discord.js`.