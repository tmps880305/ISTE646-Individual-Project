window.onload = function(){
    // The value of each bar is set to the value in the div with 'rate-bar-wrapper'
    // By obtaining the value and set it to the fill of rate bar, the style could be dynamic
    bar = document.getElementsByClassName('rate-bar-wrapper');

    for(i = 0; i < bar.length; i++){
        barValue = bar[i].getAttribute("value") + '0%';
        tmp = bar[i].getElementsByClassName('rate-bar-fill')[0].style.width = barValue;
    }
}