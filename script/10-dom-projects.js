function handleCostKeyDown(event) {
    if(event.key === 'Enter'){calculateTotal()}
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if(cost < 40){
        cost += 10;
    }

    document.querySelector('.js-total-cost')
      .innerHTML = `$${cost}`
}

function subscribe() {
            const buttonElement = document.querySelector('.js-subscribe-button')
            const valueButton = ''

            if(buttonElement.innerText === 'Subscribe'){
                buttonElement.innerText = 'Subscribed';
                buttonElement.classList.add('is-subscribed');
            } else {
                buttonElement.innerText = 'Subscribe';
                buttonElement.classList.remove('is-subscribed')
            }
        }