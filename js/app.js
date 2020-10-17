!(function(d) {
    let sign_in = document.getElementsByClassName("login")[0];
    let sign_out = document.getElementsByClassName("logout")[0];
    let cart = d.getElementsByClassName("cart")[0];
    sign_in.onclick = function(){
        let sign_in_modal = document.getElementsByClassName("sign__in__modal__container")[0];
        sign_in_modal.style.display = "inline-block";
        sign_in_modal.onclick = function() {
            sign_in_modal.style.display = "none";
        }

    }

    cart.onclick = function(){
        let cart_modal = d.getElementsByClassName("modal__cart__container")[0];
         cart_modal.style.display = "inline-block";
         cart_modal.onclick = function() {
             cart_modal.style.display = "none";
         }
    }
} (document));