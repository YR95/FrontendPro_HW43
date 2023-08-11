function renderForm() {
  let form = document.createElement("form");

  addradiobutton(form, "text", "Name");
  addradiobutton(form, "text", "Surname");
  addradiobutton(form, "text", "Date of birth");
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

    select.addEventListener("change", e => {
      console.log(e.target.value);
    });
  }
  form.append(select, addresa);

  document.body.appendChild(form);

}

function addradiobutton(form, type, text) {
  var label = document.createElement("label");

  var element = document.createElement("input");
  //Assign different attributes to the element.
  element.setAttribute("type", type);
  element.setAttribute("value", type);
  element.setAttribute("name", type);
  element.setAttribute("id", text);

  label.appendChild(element);
  label.innerHTML += text;

  form.appendChild(label);

  return element;
}

renderForm();