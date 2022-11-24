var first = true;
var rows = 0;
var row_number = 0;

make.onclick = function() {
    if (first){
        var table = document.createElement('Table');
        document.body.appendChild(table);
        table.id = 'Table';

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "№";
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Столбец 2";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        table.appendChild(row_1);

        first = false;
        add.removeAttribute("disabled");
        delite.removeAttribute("disabled");
        input-coun.removeAttribute("disabled");
    }
    else{
        alert("Ошибка!");
    }
};

add.onclick = function(){
    let table = document.getElementById('Table');
    let newRow = document.createElement('tr');
    let next1 = document.createElement('td');
    let next2 = document.createElement('td');
    next1.innerText = ++row_number;
    next2.innerHTML = "lavanda";

    newRow.appendChild(next1);
    newRow.appendChild(next2);
    table.appendChild(newRow);
    rows++;
};



delite.onclick = function(){
    let table = document.getElementById('Table');
    let number = document.getElementById("inputcoun").value;
    document.getElementById("inputcoun").value = ""; 
    if(rows > 0){
        if(isNaN(number)){ 
            alert("Ошибка! Ведите натуральное число");
        }
        else{
            let id = 0;
            for (var i = 0, row; row = table.rows[i]; i++) 
                    if (row.cells[0].innerText == +number){
                        id = i;
                        break;
                    }
                if (id == 0){
                    alert('Ошибка! Строки с таким номером не существует');
                    return;
                }
            table.deleteRow(id);
            rows--;
        }
    }    
    else{
        alert("Ошибка! Добавьте строку в таблицу");
    }
};