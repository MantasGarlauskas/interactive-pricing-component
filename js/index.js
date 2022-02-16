const viewsText = document.getElementById('pageviewsDOM');
const priceText = document.getElementById('priceDOM');
const slider = document.getElementById('myRange');
const switchInput = document.getElementById('check');


const prices = {
    monhthly: {
        '10K': '$8.00',
        '50K': '$12.00',
        '100K': '$16.00',
        '500K': '$24.00',
        '1M': '$36.00'
    },
    yearly: {
        '10K': '$6.00',
        '50K': '$9.00',
        '100K': '$12.00',
        '500K': '$18.00',
        '1M': '$27.00'
    }
};
const views = {
    0: '10K',
    1: '50K',
    2: '100K',
    3: '500K',
    4: '1M',
};
switchInput.addEventListener('change', toggle);

function toggle() {
    if (switchInput.checked) {
        priceText.innerText = prices.yearly[viewsText.innerText]
    } else {
        priceText.innerText = prices.monhthly[viewsText.innerText]
    }
};

slider.addEventListener('input', ({ target }) => {
    const color = `linear-gradient(90deg, hsla(174, 86%, 45%, 0.4) ${(Number(target.value) / 4) * 100}%, hsl(224, 65%, 95%) -${ ((4 - Number(target.value)) / 4) * 100}%)`
    viewsText.innerText = views[target.value]
    slider.style.background = color;
    toggle();
});