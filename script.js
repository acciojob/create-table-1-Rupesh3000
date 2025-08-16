function insert_Row() {
  //Write your code here
  const sampleTable = document.getElementById("sampleTable");
  sampleTable.insertBefore(newElemnt(), sampleTable.firstChild);
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
