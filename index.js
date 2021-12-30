const {
	readdirSync,
	rename
} = require('fs');
const {
	resolve
} = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'mp3');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach(file => {

	if (file.includes("[YT2mp3.info]")) {
		const cutSite = file.split("[YT2mp3.info] - ")[1]
		const newName = cutSite.split(" (320kbps)")[0] + ".mp3"

		return rename(
			imageDirPath + `/${file}`,
			imageDirPath + `/${newName.trim()}`,
			err => console.log(err)
		)
	}
});