'use strict';

const div = document.querySelector('.container');
const ul = document.createElement('ul');
const containerForVid = document.createElement('div');
div.after(containerForVid);
div.append(ul);
ul.classList.add('list');

const URL =
	'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=412e51e107155c7ffabd155a02371cbd&format=json';

fetch(URL).then((res) => res.json()).then((data) => addOnHtml(data.tracks.track));

function addOnHtml(arr) {
	let str = arr.reduce(
		(acc, el) =>
			acc +
			`<li><img src= "${el.image[0]['#text']}" class="artist_img"><span>${el.artist
				.name}</span><span>${el.name}</span></li>`,
		''
	);
	ul.innerHTML = str;
}

ul.addEventListener('click', getVideoID);
function getVideoID(e) {
	let span = e.target.lastChild;
	let song = span.textContent;
	let artist = span.previousSibling.textContent;
	const TUBE = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&part=snippet&maxResult=1&q=${song}|${artist}`;
	console.log(TUBE);
	fetch(TUBE).then((res) => res.json()).then((data) => iFrameAdder(data.items[0].id.videoId));
	console.log(artist);
	console.log(song);
}

function iFrameAdder(videoID) {
	containerForVid.innerHTML =
		'<iframe src=' +
		`https://www.youtube.com/embed/${videoID}?autoplay=1` +
		' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>';
}
