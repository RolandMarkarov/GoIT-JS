'use strict';

const div = document.querySelector('.users');
const allUsersBtn = document.querySelector('.all_users');
const formByID = document.querySelector('.form_id');
const formDelID = document.querySelector('.delete_id');
const formByNameAge = document.querySelector('.fomr_name');
const input = document.querySelector('.input');
const inputName = document.querySelector('.name');
const inputAge = document.querySelector('.age');
const table = document.querySelector('.tr');
const tableAdd = document.querySelector('.tr_add');
const inputID = document.querySelector('.remove_id');

allUsersBtn.addEventListener('click', getAllUsers);
formByID.addEventListener('submit', formID);
formByNameAge.addEventListener('submit', addUsersByNameAge);
formDelID.addEventListener('submit', removeUser);

function getAllUsers() {
	fetch('https://test-users-api.herokuapp.com/users/').then((res) => res.json()).then((data) => getUsers(data.data));
}
function getUsers(arr) {
	let str = arr.reduce((acc, el) => acc + `<p>${el.name} ${el.id} ${el.age}</p>`, '');
	div.innerHTML = str;
}
function formID(e) {
	e.preventDefault();
	getUserById(input.value).then((res) => res.json()).then((data) => addForm(data.data));
}
function getUserById(id) {
	return fetch(`https://test-users-api.herokuapp.com/users/${id}`);
}
function getUserByName(id) {
	return fetch(`https://test-users-api.herokuapp.com/users/${name}/${age}`);
}

function addForm(obj) {
	let str = `<p>${obj.name}</p><p>${obj.age}</p>`;
	table.innerHTML = str;
}

function addUsersByNameAge(e) {
	let name = inputName.value;
	let age = inputAge.value;
	e.preventDefault();
	fetch('https://test-users-api.herokuapp.com/users', {
		method: 'POST',
		body: JSON.stringify({ name: name, age: age }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
}

function removeUser(e) {
	let id = inputID.value;
	e.preventDefault();
	fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
		method: 'DELETE',
		body: JSON.stringify({ id: id }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
}
