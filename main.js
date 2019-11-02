var penColor = 'black';

function setCellColor(cell) {
	cell.style.backgroundColor = penColor;
}

function setPenColor(color) {
	penColor = color;
}

function resetGrid() {
	var cells = document.querySelectorAll('.cell');

	cells.forEach(cell => cell.style.backgroundColor = 'white');
}