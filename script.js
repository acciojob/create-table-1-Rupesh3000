function insert_Row() {
  const sampleTable = document.getElementById("sampleTable");
  const tbody = sampleTable.tBodies[0]; // first <tbody>
  tbody.insertBefore(newElemnt(), tbody.firstChild);
}

const newElemnt = () => {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerHTML = "New Cell1";

  const td2 = document.createElement("td");
  td2.innerHTML = "New Cell2";

  tr.appendChild(td1);
  tr.appendChild(td2);

  return tr;
};
