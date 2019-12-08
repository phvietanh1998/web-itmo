function dz2(text) {
    document.write(text);
    x = text.length;
    y = text.split(" ");
    document.write(
        "<p> Count simbol: " + text.length + "</br>Count word: " + y.length + "</p>"
    );
	document.write("<p> Domain name: " + document.domain + "</p>");
}

function img_count() {
    x = document.images;
    document.write("</br>Have " + x.length + " pictures");
}

function ankor_count() {
    x = document.getElementsByTagName("a");
    document.write(
        "</br>Have " + x.length + " ankors</br> The first ankor is " + x[0]
    );
}

function get_width_pic() {
    x = document.images;
    document.write("</br>Width first picture: " + x[0].width);
}

function get_max_width() {
    x = document.images;
    var max = x[0].width;
    for (i of x) {
        if (max < i.width) {
            max = i.width;
        }
    }
    document.write("</br>Max of width: " + max);
}

function get_sum_height() {
    x = document.images;
    var sum = 0;
    for (i of x) {
        sum = sum + i.height;
    }
    document.write("</br>Summary of height: " + sum);
}

function get_form_name() {
    x = document.forms;
    document.write("</br>Have " + x.length + " forms</br>Get even number form: ");
    var i = 1;

    while (i < x.length) {
        document.write(x[i].name + "; ");
        i = i + 2;
    }
}

function namecurrent(k) {
    var x = document.getElementById("btn" + k).parentNode.name;
    document.getElementById("btn" + k).innerHTML = x;
}

function id_form(k) {
    var x = document.getElementById("btn" + k).parentNode.id;
    document.getElementById("btnt" + k).innerHTML = x;
}

function get_sub(k) {
    id = document.getElementById("btn" + k).parentNode.id;
    document.getElementById("btn1").reset();
}

function link_table() {
    x = document.getElementById("link").getElementsByTagName("a");
    var dict = new Object();
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML in dict) {
            dict[x[i].innerHTML] += 1;
        } else {
            dict[x[i].innerHTML] = 1;
        }
    }
    var table = document.createElement("table");
    table.setAttribute("border", "1");
    var tRow = document.createElement("tr");

    var tData = document.createElement("td");
    tData.textContent = "Text";
    tRow.appendChild(tData);
    var tData = document.createElement("td");
    tData.textContent = "Times";
    tRow.appendChild(tData);
    var tData = document.createElement("td");
    tData.textContent = "link";
    tRow.appendChild(tData);
    table.appendChild(tRow);
    for (index in dict) {
        var tRow = document.createElement("tr");

        var tData = document.createElement("td");
        tData.textContent = index;
        tRow.appendChild(tData);
        var tData = document.createElement("td");
        tData.textContent = dict[index];
        tRow.appendChild(tData);
        var tData = document.createElement("td");
        for (i = 0; i < x.length; i++) {
            if (x[i].innerHTML == index) {
                content = x[i].href;
                break;
            }
        }
        tData.textContent = content;
        tRow.appendChild(tData);
        table.appendChild(tRow);
    }
    table.appendChild(tRow);
    document.body.appendChild(table);
}