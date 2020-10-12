!(function(d) {
    let sign_in = document.getElementsByClassName("login")[0];

    let sign_out = document.getElementsByClassName("logout")[0];
    sign_in.onclick = function(){
        let sign_in_modal = document.getElementsByClassName("sign__in__modal__container")[0];
        sign_in_modal.style.display = "inline-block"
        sign_in_modal.onclick = function() {
            sign_in_modal.style.display = "none";
        }

    }
} (document));