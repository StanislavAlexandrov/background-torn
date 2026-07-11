const containerTorn = document.querySelector('.container');

containerTorn.addEventListener(
    'scroll',
    () => {
        calculatedPercentage =
            containerTorn.offsetHeight /
            6 /
            (document.body.offsetHeight - containerTorn.scrollTop);
        if (calculatedPercentage == 'Infinity') {
            calculatedPercentage = 100;
        }

        document.body.style.setProperty('--scroll', calculatedPercentage);
    },
    false
);
