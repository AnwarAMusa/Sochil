function search(table, event, minAge, maxAge, location) {
    var table = document.getElementById(table);
    if (event === '' && minAge === '' && maxAge === '' && location === '') {
        for (var i = 1, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                row.style.display = '';
            }
        }
    }
    else {
        for (var i = 1, row; row = table.rows[i]; i++) {
            var show = false;
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (col.innerHTML === event || col.innerHTML === minAge
                    || col.innerHTML === maxAge || col.innerHTML === location) {
                    show = true;
                }
            }
            if (!show) {
                row.style.display = 'none';
            }
        }
    }
}