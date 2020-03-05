const loadNames = (e) => {
    e.preventDefault();
    
    //read form values
    const origin = document.querySelector('#origin');
    const originSelected =  origin.options[origin.selectedIndex].value;

    const gender = document.querySelector('#gender');
    const genderSelected =  gender.options[gender.selectedIndex].value;

    const quantity = document.querySelector('#quantity');
    const quantitySelected =  quantity.options[quantity.selectedIndex].value;

    let url = 'https://uinames.com/api/?';

    //add origin to url
    if (originSelected) {
        url += `region=${originSelected}&`;
    }
    //add gender to url
    if (genderSelected) {
        url += `gender=${genderSelected}&`;
    }
    //add gender to url
    if (quantitySelected) {
        url += `amount=${quantitySelected}`;
    }

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let html = '<h2>Nombres generados</h2>';
            html += `<ul class="lista">`
            data.forEach(generatedName => {
                html += `
                    <li>${generatedName.name}</li>
                `;
            })

            html += `</ul>`;
            document.querySelector('#result').innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        })
}

document.querySelector('#generate-name').addEventListener('submit', loadNames);