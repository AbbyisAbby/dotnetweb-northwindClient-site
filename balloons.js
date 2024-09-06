document.addEventListener("DOMContentLoaded", function() {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'

    });
    
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function(e){
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
            elem.classList.add("animate__animated", "animate__bounceInDown") :
            elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    // random animation
    var animationList = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"]

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    document.getElementById("happy-birthday").classList.add(animationList[Math.floor(Math.random() * animationList.length)]);

    
    // color requirements after submit
    document.getElementById("submit").addEventListener("click", function(e) {
        if (!(document.getElementById("red").checked||document.getElementById("blue").checked||document.getElementById("green").checked)) {

            e.preventDefault();
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });

    // select all or deselect 
    document.getElementById("selectors").addEventListener("click", function(e) {
        // https://stackoverflow.com/questions/4780912/how-to-trigger-checkbox-click-event-even-if-its-checked-through-javascript-code
        // https://stackoverflow.com/questions/5658849/whats-the-equivalent-of-jquerys-trigger-method-without-jquery

        if (e.target.id == "select-all") {
            document.getElementById("red").checked = false;
            document.getElementById("green").checked = false;
            document.getElementById("blue").checked = false;
        }
        else if (e.target.id == "select-none") {
            document.getElementById("red").checked = true;
            document.getElementById("green").checked = true;
            document.getElementById("blue").checked = true;
        }

        document.getElementById("red").click();
        document.getElementById("green").click();
        document.getElementById("blue").click();
    });

    // mouseover event
    
    // document.getElementById('checkbox-card').addEventListener('mouseover', function(e){
    //     if (e.target.classList.contains('form-check-input')||e.target.classList.contains('form-check-label')) {
    //         document.getElementById("happy-birthday").style.color = e.target.dataset['color'];
    //         // console.log(e.target.dataset['color']);
    //     }
    //     else {
    //         document.getElementById("happy-birthday").style.color = "gray";
    //     }
    // });

    // https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
    Array.from(this.getElementsByClassName('form-check')).forEach(function(element) {
        element.addEventListener('mouseover', function(e) {
            if (e.target.classList.contains('form-check-input')||e.target.classList.contains('form-check-label')) {
                document.getElementById("happy-birthday").style.color = e.target.dataset['color'];
                // console.log(e.target.dataset['color']);
            }
            else {
                document.getElementById("happy-birthday").style.color = "gray";
            }
        });
    });
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
    Array.from(this.getElementsByClassName('form-check')).forEach(function(element) {
        element.addEventListener('mouseleave', function(e) {
            document.getElementById("happy-birthday").style.color = "gray";
        });
    });
});
