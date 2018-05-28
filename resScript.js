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
        const span = document.createElement('span');
        span.textContent = nameInput;
        li.appendChild(span);

        // create a checkbox that will indicate whether the guest is confirmed and 
        const checkBoxLabel = document.createElement('label');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBoxLabel.textContent = 'Confirmed';
        checkBoxLabel.appendChild(checkBox);
        li.appendChild(checkBoxLabel);

        // create an edit button to change names
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        li.appendChild(editButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        li.appendChild(removeButton);

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

// split actions between edit and remove buttons
ul.addEventListener('click',
    (e) => {
        // only perform actions on a button
        if (e.target.tagName === 'BUTTON') {
            // choose which button to perform actions on
            const clickedButton = e.target.textContent;
            // perform actions on edit button
            if (clickedButton.toLowerCase() === 'edit') {
                // create text input field
                const textInput = document.createElement('input');
                textInput.type = 'text';
                // add name to text input
                const li = e.target.parentNode;
                const span = li.firstElementChild;
                textInput.value = span.textContent;
                // append text input to li after name span
                li.insertBefore(textInput, span);
                // change text of edit button to save
                e.target.textContent = 'Save';
                // remove span
                li.removeChild(span);
            } else if (clickedButton.toLowerCase() === 'save') {
                const li = e.target.parentNode;
                // create span element
                const span = document.createElement('span');
                // set text content to input's value
                const textInput = li.firstElementChild;
                span.textContent = textInput.value;
                // append span to li after name textInput
                li.insertBefore(span, textInput);
                // change text of edit button to save
                e.target.textContent = 'Edit';
                // remove span
                li.removeChild(textInput);
            } else if (clickedButton.toLowerCase() === 'remove') {
                const li = e.target.parentNode;
                ul.removeChild(li);
            }
        }
    }
);