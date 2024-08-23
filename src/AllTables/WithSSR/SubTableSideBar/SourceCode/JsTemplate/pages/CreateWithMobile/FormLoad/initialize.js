const StartFunc = () => {
    let jVarLocalByClassName = document.getElementsByClassName("mobileTwilioClass");

    var div_array = [...jVarLocalByClassName]; // converts NodeList to Array

    div_array.forEach(div => {
        const phoneInput = window.intlTelInput(div, {
            initialCountry: "in",
            utilsScript:
                "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    });
};

export { StartFunc };
