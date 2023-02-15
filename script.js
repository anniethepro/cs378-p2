const mac_minus = document.getElementById("mac-minus");
const mac_plus = document.getElementById("mac-plus");
const mac_value = document.getElementById("mac-value");

const pasta_minus = document.getElementById("pasta-minus");
const pasta_plus = document.getElementById("pasta-plus");
const pasta_value = document.getElementById("pasta-value");

const tacos_minus = document.getElementById("tacos-minus");
const tacos_plus = document.getElementById("tacos-plus");
const tacos_value = document.getElementById("tacos-value");

const enchilada_minus = document.getElementById("enchilada-minus");
const enchilada_plus = document.getElementById("enchilada-plus");
const enchilada_value = document.getElementById("enchilada-value");

const subtotal = document.getElementById("subtotal");



let mac_count = 0;
mac_value.innerHTML = mac_count

let pasta_count = 0;
pasta_value.innerHTML = pasta_count;

let tacos_count = 0;
tacos_value.innerHTML = tacos_count;

let enchilada_count = 0;
enchilada_value.innerHTML = enchilada_count;




function increment_count(clicked_id) {
    if (clicked_id === 'mac-plus') {
        mac_count++;
        mac_value.innerHTML = mac_count;
    }

    if (clicked_id === 'pasta-plus') {
        pasta_count++;
        pasta_value.innerHTML = pasta_count;
    }

    if (clicked_id === 'tacos-plus') {
        tacos_count++;
        tacos_value.innerHTML = tacos_count;
    }

    if (clicked_id === 'enchilada-plus') {
        enchilada_count++;
        enchilada_value.innerHTML = enchilada_count;
    }
    let subtotal_amt = subtotal_calc();
    subtotal.innerHTML = "Subtotal $" + subtotal_amt;

}

function decrement_count(clicked_id) {
    if (clicked_id === 'mac-minus') {
        if (mac_count > 0) {
            mac_count--;
            mac_value.innerHTML = mac_count;
        }
    }   

    if (clicked_id === 'pasta-minus') {
        if (pasta_count > 0) {
            pasta_count--;
            pasta_value.innerHTML = pasta_count;
        }
    }

    if (clicked_id === 'tacos-minus') {
        if (tacos_count > 0) {
            tacos_count--;
            tacos_value.innerHTML = tacos_count;
        }
    }

    if (clicked_id === 'enchilada-minus') {
        if (enchilada_count > 0) {
            enchilada_count--;
            enchilada_value.innerHTML = enchilada_count;
        }
    }
    let subtotal_amt = subtotal_calc();
    subtotal.innerHTML = "Subtotal $" + subtotal_amt;

}

function subtotal_calc() {
    return mac_count * 5 + pasta_count * 8 +tacos_count * 8 + enchilada_count * 10;
}

function clear_all() {
    mac_count = 0;
    mac_value.innerHTML = mac_count;
    pasta_count = 0;
    pasta_value.innerHTML = pasta_count;
    tacos_count = 0;
    tacos_value.innerHTML = tacos_count;
    enchilada_count = 0;
    enchilada_value.innerHTML = enchilada_count;
    let subtotal_amt = subtotal_calc();
    subtotal.innerHTML = "Subtotal $" + subtotal_amt;
}

function order() {
    if (mac_count == 0 && pasta_count == 0 && tacos_count == 0 && enchilada_count == 0) {
        alert('No items in cart');
    } else {
        mac_sentence = "";
        if (mac_count > 0) {
            mac_sentence = mac_count + " mac & cheese ";
        }
        
        pasta_sentence = "";
        if (pasta_count > 0) {
            pasta_sentence = pasta_count + " pasta ";
        }

        tacos_sentence = "";
        if (tacos_count > 0) {
            tacos_sentence = tacos_count + " tacos ";
        }

        enchilada_sentence = "";
        if (enchilada_count > 0) {
            enchilada_sentence = enchilada_count + " enchilada ";
        }
        
        let sentence = mac_sentence + pasta_sentence + tacos_sentence + enchilada_sentence;
        alert('Order placed!\n' + sentence);
    }
    
}