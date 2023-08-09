function renderForm() {
  let form = document.createElement("form");
  let pNane = document.createElement("p");
  let pSurname = document.createElement("p");
  let pdateBirth = document.createElement("p");

  addradiobutton(form, "radio", "Female");
  addradiobutton(form, "radio", "Male");

  addradiobutton(form, "checkbox", "English");
  addradiobutton(form, "checkbox", "Ukranian");

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
  form.append(select);

  const languages = ["English", "Ukranian"];
  const arOfLanguages = languages.map(value => {
    let input = document.createElement("input");
    let labelcheck = document.createElement("labelcheck");

    input.type = "checkbox";
    input.title = value;
    input.id = value;
    labelcheck.htmlFor = value;
    labelcheck.appendChild(document.createTextNode(`${value}`));

    form.append(input);
    form.append(labelcheck);
  });

  document.body.appendChild(form);

}

var counter = 0;

function addradiobutton(form, type, text) {
  var label = document.createElement("label");

  var element = document.createElement("input");
  //Assign different attributes to the element.
  element.setAttribute("type", type);
  element.setAttribute("value", type);
  element.setAttribute("name", type);

  label.appendChild(element);
  label.innerHTML += text;

  // var foo = document.getElementById("fooBar");
  //Append the element in page (in span).
  form.appendChild(label);
  counter = counter + 1;
}

const main = document.querySelector("#main");
renderForm();