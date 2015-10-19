/**
 * Created by dagfs on 17.10.15.
 */

(function(){

    if(typeof(Storage) !== "undefined") {
        var elements = {
            "counter" : document.getElementById("counter"),
            "pun" : document.getElementById("pun")
        };

        if( !localStorage.getItem("last_pun") ){
            localStorage.setItem("last_pun", Date.now());
        }


        elements.pun.onclick = function(){
            localStorage.setItem("last_pun", Date.now());

            clearInterval(update_counter);
            update_counter = setInterval(
                updateCounter,
                1000
            );
        };

        function getMinutesSinceLastPun(){
            var last_pun = localStorage.getItem("last_pun");
            var now = Date.now();

            var min_since_last_pun = Math.floor( (now - last_pun) / (60 * 1000));

            return min_since_last_pun;

        }

        function setCounter(value){
            elements.counter.innerHTML = value.toString() + " minuts since last pun!";
        }

        function updateCounter(){
            console.log("upda");
            setCounter(getMinutesSinceLastPun());
        }

        var update_counter = setInterval(
            updateCounter,
            1000
        );

    } else {
        alert("This project uses localStorage. Your browser does not support it...");
    }



}());

