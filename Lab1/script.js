let personalMovieDB = {
	private: null,
	movies: {},
};
alert('Что вы смотрели?');
if (Math.floor(Math.random() * 2) == 0) {
	personalMovieDB.private = true;
	alert('Как жаль');
} else {
	personalMovieDB.private = false;
	alert('Прогуляйся и подумай еще раз!');
}
for (let i = 0; i < 3; i++) {
	let title;//1
	let rating;
	while (true) {
		title = prompt('Один из последних фильмов которые ты посмотрел?');
		if (title.length == 0 || title.length > 50) {
			alert('Давай по новой');
			continue;
		}
		if (title in personalMovieDB.movies) {
			alert('Повторяться нельзя');
			continue;
		}
		break;
	}
	while (true) {
		rating = prompt('Оцените данный фильм баллами?');
		if (rating.length == 0) {
			alert('Давай по новой');
			continue;
		}
		break;
	}
	personalMovieDB.movies[title] = rating;
}
if (personalMovieDB.private == true)
	alert('Ты что?');
else buildTable();

function buildTable() {
	let table = document.getElementById('table');
	let row = document.createElement('tr');
	th1 = document.createElement('th');
	th1.textContent = 'Фильм';
	row.appendChild(th1);
	th2 = document.createElement('th');
	th2.textContent = 'Оценка';
	row.appendChild(th2);
	table.appendChild(row);
	for (title in personalMovieDB.movies) {
		let row = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.textContent = title;
		row.appendChild(td1);
		let td2 = document.createElement('td');
		td2.textContent = personalMovieDB.movies[title];
		row.appendChild(td2);
		table.appendChild(row);
	}
}