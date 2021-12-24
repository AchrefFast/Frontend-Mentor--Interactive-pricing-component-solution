function main() {

    const range = document.getElementById('range');
    const billing = document.getElementById('billing');
    const mediaCondition = window.matchMedia('(min-width: 600px)');

    handleRangeChange(range);
    handleMedia(mediaCondition);

    mediaCondition.addEventListener('change', handleMedia);
    range.addEventListener('input', (e) => { handleRangeChange(e.target) });
    billing.addEventListener('change', (e) => { handleBilling(e.target) });
}

const handleBilling = e => {
    handleRangeChange(range);
}

const handleMedia = e => {
    const discount = document.getElementById('discount');
    if (e.matches) {
        discount.textContent = "25% discount";
    } else {
        discount.textContent = " -25%";
    }
};


const convertToViewPrice = (currentVal, checked) => {
    let prices = [8, 12, 16, 24, 36];
    if (checked) {
        switch (currentVal) {
            case '0': return { view: '10K', price: '$' + prices[0] * 0.75 }
            case '25': return { view: '50K', price: '$' + prices[1] * 0.75 }
            case '50': return { view: '100K', price: '$' + prices[2] * 0.75 }
            case '75': return { view: '500K', price: '$' + prices[3] * 0.75 }
            case '100': return { view: '1M', price: '$' + prices[4] * 0.75 }
            default: return { error: 'Something went wrong..!!!' }
        }
    } else {
        switch (currentVal) {
            case '0': return { view: '10K', price: '$' + prices[0] }
            case '25': return { view: '50K', price: '$' + prices[1] }
            case '50': return { view: '100K', price: '$' + prices[2] }
            case '75': return { view: '500K', price: '$' + prices[3] }
            case '100': return { view: '1M', price: '$' + prices[4] }
            default: return { error: 'Something went wrong..!!!' }
        }
    }
};

function handleRangeChange(elm) {
    const views = document.getElementById('views');
    const price = document.getElementById('price');
    const billing = document.getElementById('billing');
    let curr_per = elm.value;

    elm.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${curr_per}%,  hsl(224, 65%, 95%) ${curr_per}%)`;
    let view_price = convertToViewPrice(curr_per, billing.checked);
    views.textContent = view_price.view;
    price.textContent = view_price.price;
}

window.addEventListener('DOMContentLoaded', main);