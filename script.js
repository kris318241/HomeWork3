var first = true;
var rows = 0;
var row_number = 0;

make.onclick = function() {
    if (first){
        var table = document.createElement('Table');
        document.body.appendChild(table);
        table.id = 'Table';
        let row1 = document.createElement('tr');
        let heading1 = document.createElement('th');
        heading1.innerHTML = "№";
        let heading2 = document.createElement('th');
        heading2.innerHTML = "Столбец 2";
        row1.appendChild(heading1);
        row1.appendChild(heading2);
        table.appendChild(row1);
        first = false;
        add.removeAttribute("disabled");
        delite.removeAttribute("disabled");
        inputcoun.removeAttribute("disabled");
    }
    else{
        alert("Ошибка!");
    }
};

add.onclick = function(){
    let table = document.getElementById('Table');
    let Row = document.createElement('tr');
    let next1 = document.createElement('td');
    let next2 = document.createElement('td');
    next1.innerText = ++row_number;
    next2.innerHTML = "lavanda";
    
    Row.appendChild(next1);
    Row.appendChild(next2);
    table.appendChild(Row);
    rows++;
};

delite.onclick = function(){
    let table = document.getElementById('Table');
    let number = document.getElementById("inputcoun").value;
    document.getElementById("inputcoun").value = ""; 
    if(rows > 0){
        if(isNaN(number)){ 
            alert("Ошибка! Не натуральное число");
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
            table.delite(id);
            rows--;
        }
    }    
    else{
        alert("Ошибка! Нет строк в таблице");
    }
};
