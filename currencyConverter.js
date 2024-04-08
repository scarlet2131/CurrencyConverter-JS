// Name : Monisha Ranjan
// Student Id : c0914148

// This function handles the conversion
function handleConversion() {
    // Defining the conversion rates
    var usdToCadRate = 1.33;
    var cadToUsdRate = 0.75;

    // Determining the direction of conversion based on the displayed currency codes
    var fromCurrencyCode = document.getElementById('fromCurrency').querySelector('span').textContent;
    var toCurrencyCode = document.getElementById('toCurrency').querySelector('span').textContent;

    // Validation on amount from the input
    var amount = parseFloat(document.getElementById('usdAmount').value);
    if (isNaN(amount)) {
        alert('Please enter a valid number');
        return;
    }

    // Initializing converted amount
    var convertedAmount = 0;

    // Checking the direction of conversion and calculating accordingly
    if (fromCurrencyCode === 'USD' && toCurrencyCode === 'CAD') {
        convertedAmount = amount * usdToCadRate;
    } else if (fromCurrencyCode === 'CAD' && toCurrencyCode === 'USD') {
        convertedAmount = amount * cadToUsdRate;
    }

    // Updating the 'converted to' amount
    document.getElementById('cadAmount').value = convertedAmount.toFixed(2);
}

// Event listener for the convert button
document.getElementById('convertButton').addEventListener('click', handleConversion);


// Function to which swaps the flags and currency codes
function swapCurrencies() {
    // Elements for the 'from' currency
    var fromCurrencyImg = document.getElementById('fromCurrency').querySelector('img');
    var fromCurrencyCode = document.getElementById('fromCurrency').querySelector('span');

    // Elements for the 'to' currency
    var toCurrencyImg = document.getElementById('toCurrency').querySelector('img');
    var toCurrencyCode = document.getElementById('toCurrency').querySelector('span');

    // Swaping the images
    var tempImgSrc = fromCurrencyImg.src;
    fromCurrencyImg.src = toCurrencyImg.src;
    toCurrencyImg.src = tempImgSrc;

    // Swaping the currency codes
    var tempCode = fromCurrencyCode.textContent;
    fromCurrencyCode.textContent = toCurrencyCode.textContent;
    toCurrencyCode.textContent = tempCode;
}

// Event listener for the arrow icon click
document.getElementById('convertIcon').addEventListener('click', swapCurrencies);



