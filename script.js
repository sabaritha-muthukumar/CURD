function onformSubmit()
{
var formData="readFormData()"
insertNewRecord(formData);
}
function readFormData()
{
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["clg"]=document.getElementById("clg").value;
    formData["dept"]=document.getElementById("dept").value;
    formData["mark"]=document.getElementById("mark").value;
    return formData;
}
function insertNewRecord(data)
{
  var table=document.getElementById("student").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0)
    cell1.innerHTML=data.name;
    cell1=newRow.insertCell(1)
    cell1.innerHTML=data.clg;
    cell1=newRow.insertCell(2)
    cell1.innerHTML=data.dept;
    cell1=newRow.insertCell(3)
    cell1.innerHTML=data.mark;
    cell1=newRow.insertCell(4)
    cell1.innerHTML=`<a>Edit</a>
                     <a>Delete</a>`;
                                    
}