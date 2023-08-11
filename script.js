function renderForm() {
  let form = document.createElement("form");

  addradiobutton(form, "text", "Name");

  addradiobutton(form, "text", "Surname");
  addradiobutton(form, "date", "Date of birth");
  addradiobutton(form, "radio", "Female");
  addradiobutton(form, "radio", "Male");
  addradiobutton(form, "checkbox", "English");
  addradiobutton(form, "checkbox", "Ukranian");
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

    // select.addEventListener("change", e => {
    //   console.log(e.target.value);
    // });
  }
  form.append(select, addresa);

  document.body.appendChild(form);
}

function addradiobutton(form, type, text) {
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

  let fff = document.querySelector(id);
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

personAm = new Person();
renderForm(personAm);
getValuesFromInputs(personAm);
console.log(personAm);