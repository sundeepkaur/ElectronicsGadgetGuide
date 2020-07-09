
function nextSelect() {
    document.getElementsByClassName("table")[0].style.display = "none";
    document.getElementsByClassName("table")[1].style.display = "none";
    var e = document.getElementById("type-select");
    var strUser = e.options[e.selectedIndex].value;
    if (strUser == 1)
        var choices = ["Iphone XS", "Galaxy S9"];
    else if (strUser == 2)
        var choices = ["Surface Pro 6", "Macbook Air 2018"];

    for (var i = 0; i <= 1; i++) {
        for (var j = 0; j < choices.length; j++) {
            document.getElementsByClassName('type-select-2')[i].options[j].text = choices[j];
        }
    }
    document.getElementById("wrapper21").style.display = "";
    document.getElementById("wrapper22").style.display = "";
    document.getElementById("compareitems").style.display = "";

}
function compare() {
    for (i = 0; i <= 1; i++) {
        x = document.getElementsByClassName('type-select-2')[i]
        var str = x.options[x.selectedIndex].text;
        switch (str) {
            case 'Iphone XS':
                makeTable(mobiles, iphonexs, i);
                break;
            case 'Galaxy S9':
                makeTable(mobiles, galaxys9, i);
                break;
            case 'Surface Pro 6':
                makeTable(laptops, surface6, i);
                break;
            case 'Macbook Air 2018':
                makeTable(laptops, macbook, i);

        }
    }
    document.getElementsByClassName("table")[0].style.display = "";
    document.getElementsByClassName("table")[1].style.display = "";
}

function makeTable(cat, subcat, pos) {
    var result = "<table>";
    const obj = Object.assign(cat);
    const subobj = Object.assign(subcat);
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += "<tr>";
            var val1 = obj[key];
            var val2 = subobj[key];
            result += "<td id='tbold'>" + val1 + "</td>";
            result += "<td>" + val2 + "</td>";
            result += "<tr>";
        }
    }
    result += "</table>";
    document.getElementsByClassName('table')[pos].innerHTML = result;
}


