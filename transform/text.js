var listStudent = new Array();
var student1 = {
    'name': 'Xuan Hung',
    'rollNumber': 'A001',
};
var student2 = {
    'name': 'Van Hung',
    'rollNumber': 'TL001',
}
listStudent.push(student1);
listStudent.push(student2);
var contentDiv = document.getElementById('content');
if (contentDiv) {
    var contentOfDiv = `<ul>`;
    for (var i = 0; i < listStudent.length; i++) {
        contentOfDiv += `<li>${listStudent[i].rollNumber} - ${listStudent[i].name}</li>`
    }
    contentOfDiv += `</ul>`;
    contentDiv.innerHTML = contentOfDiv;
}