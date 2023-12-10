import config from "../config.json" assert { type: "json" };

export default class ModerationManager {
	constructor() {

	}

	isPreemptivelyBanned(added) {
		if (added.user.username in config.moderation.preemptiveBanList) {
			return true;
		}
	}

	screen(message) {
        for (word of config.moderation.filter) {
			if (this.sanitize(message).includes(word)) {
				return true;
			}
		}
		return false;
	}

	sanitize(string) {
		string.toLowerCase();
		string = string.replace(/['".,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		string = string.replace(/1/g, "l");
		string = string.replace(/3/g, "e");
		string = string.replace(/4/g, "a");
		string = string.replace(/5/g, "s");
		string = string.replace(/7/g, "t");
		string = string.replace(/8/g, "b");
		string = string.replace(/9/g, "g");
		string = string.replace(/0/g, "o");
		string = string.replace(/!/g, "i");
		string = string.replace(/@/g, "a");  
		string = string.replace(/\$/g, "s");
		let blah = "blahg"
		blah.includes
		return string;
	}
}