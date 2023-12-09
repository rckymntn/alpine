export default class ModerationManager {
	constructor() {

	}

	isPreemptivelyBanned(added) {
		return false;
	}

	screen(message) {
        return false;
	}
}