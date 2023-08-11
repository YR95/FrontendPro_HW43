function renderForm() {
  let form = document.createElement("form");

  addElementinDom(form, "text", "Name");

  addElementinDom(form, "text", "Surname");
  addElementinDom(form, "date", "Date of birth");
  addElementinDom(form, "radio", "Female");
  addElementinDom(form, "radio", "Male");
  addElementinDom(form, "checkbox", "English");
  addElementinDom(form, "checkbox", "Ukranian");
  let addresa = document.createElement("textarea");
  addresa.id = "addresa";
  addresa.rows = 2;
  addresa.cols = 5;
  addresa.name = "addressa";
  addresa.placeholder = "Input your addres....";

  const cities = [
    "Dnipro",
    "Lviv",
  ];
  const select = document.createElement("select");
  for (let key in cities) {
    let option = document.createElement("option");
    option.setAttribute('value', cities[key]);

    let optionText = document.createTextNode(cities[key]);
    option.appendChild(optionText);

    select.appendChild(option);

  }

  let button = document.createElement("button");
  button.id = "saveButton";
  button.innerText = "Save data";

  form.append(select, addresa, button);

  document.body.appendChild(form);
}

function addElementinDom(form, type, text) {
  var label = document.createElement("label");

  var element = document.createElement("input");
  element.setAttribute("type", type);
  element.setAttribute("value", text);
  element.setAttribute("name", type);
  element.setAttribute("id", text);

  if (text === "Name" || text === "Surname") {
    element.setAttribute("value", "");
  }

  label.appendChild(element);
  label.innerHTML += text;

  form.appendChild(label);

  return element;
}

function getValuesFromInputs(person) {
  getValueFromActionListener("#Name", person, "name");
  getValueFromActionListener("#Surname", person, "surname");
  getValueFromActionListener("input[name=date]", person, "dataOfBirth");
  getValueFromActionListenerClick('#Female', person, "gender");
  getValueFromActionListenerClick('#Male', person, "gender");
  getValueFromActionListenerClick("#English", person, "languages");
  getValueFromActionListenerClick("#Ukranian", person, "languages");
  getValueFromActionListener("#addresa", person, "adressa");
  getValueFromActionListener("select", person, "city");

  return person;
}

class Person {
  name = "";
  surname = "";
  adressa = "";
  city = "";
  gender = "";
  languages = [];
  dataOfBirth = "";

}

function getValueFromActionListener(id, object, field) {

  let result = "";
  document.querySelector(id) !== null ?
      document.querySelector(id).addEventListener("change", (ev) => {
        result = ev.target.value;
        object[field] = result;
        console.log(object);
      })
      : "";

}

function getValueFromActionListenerClick(id, object, field) {

  let result = "";

  document.querySelector(id) !== null ?
      document.querySelector(id).addEventListener("click", (ev) => {
        result = (ev.target.id);
        if (field === "languages") {
          object[field].push(result);
        } else {
          object[field] = result;
        }
        console.log(object);
      })
      : "";
}

function clickButtonRendertAble(button, person) {

  document.querySelector(button).addEventListener("click", (ev) => {
    document.querySelector("form").innerHTML = "";
    let table = document.createElement("table");
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = "Name: " + person.name;
    let tdSurname = document.createElement("td");
    tdSurname.innerHTML = "Surname :" + person.surname;
    let trSecond = document.createElement("tr");

    let tdadressa = document.createElement("td");
    tdadressa.innerHTML = "Address :" + person.adressa;

    let tdgender = document.createElement("td");
    tdgender.innerHTML = "Gender :" + person.gender;

    let trThird = document.createElement("tr");
    let tdlanguages = document.createElement("td");
    tdlanguages.innerHTML = "Languages :" + person.languages;

    let tdcity = document.createElement("td");
    tdcity.innerHTML = "City :" + person.city;

    let tdabirth = document.createElement("td");
    tdabirth.innerHTML = "Birth :" + person.dataOfBirth;

    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    trSecond.appendChild(tdadressa);
    trSecond.appendChild(tdgender);

    trThird.appendChild(tdlanguages);
    trThird.appendChild(tdcity);
    trThird.appendChild(tdabirth);

    table.append(tr, trSecond, trThird);
    document.body.appendChild(table);
  });
}

personAm = new Person();
renderForm(personAm);
getValuesFromInputs(personAm);
console.log(personAm);
clickButtonRendertAble("#saveButton", personAm);