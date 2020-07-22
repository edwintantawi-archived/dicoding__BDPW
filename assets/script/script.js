const aboutme = {
  name: "Edwin Tantawi",
  email: "edwintantawi@gmail.com",
  number: "+6282388386923"
}

const table = document.querySelector('table');

const row1 = document.createElement('tr');
row1.innerHTML = '<th>' + "Name" + '</th>';
row1.innerHTML += '<td>' + aboutme.name + '</td>';

const row2 = document.createElement('tr');
row2.innerHTML = '<th>' + "e-Mail" + '</th>';
row2.innerHTML += '<td>' + aboutme.email + '</td>';

const row3 = document.createElement('tr');
row3.innerHTML = '<th>' + "Phone Number" + '</th>';
row3.innerHTML += '<td>' + aboutme.number + '</td>';


table.appendChild(row1)
table.appendChild(row2)
table.appendChild(row3)