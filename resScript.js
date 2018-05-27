// capture input from form field
// find the form and input
const regForm = document.getElementById('registrar');
const formInput = document.querySelector('input');
const ul = document.querySelector('ul');

// add event listener with anonymous function that looks at an event handler
regForm.addEventListener('submit',
    (e) => {
        // prevent page from refreshing by default
        e.preventDefault();

        // store text in variable
        const nameInput = formInput.value;
        formInput.value = '';
        console.log(nameInput);

        // create li element and assign value
        const li = document.createElement('li');
        li.textContent = nameInput;

        // create a checkbox that will indicate whether the guest is confirmed and 
        const checkBoxLabel = document.createElement('label');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBoxLabel.textContent = 'Confirmed';
        checkBoxLabel.appendChild(checkBox);
        li.appendChild(checkBoxLabel);

        // add entire li to ul
        ul.appendChild(li);
    }
);

// watch for checkbox to be clicked
ul.addEventListener('change', 
    (e) => {
        // store checked status in checkBox info
        const checkBox = e.target;
        checkBox.checked = e.target.checked;
        // reference the list item and set a new class name if checked
        const li = checkBox.parentNode.parentNode;
        if (checkBox.checked) {
            li.className = 'responded';
        } else {
            li.className = '';
        }
    }
);