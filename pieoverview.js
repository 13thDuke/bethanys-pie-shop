window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]"); // puts all the buttons with an ID data-order into a node list

    orderButtons.forEach(function(button) { // a forEach loop to look at each button on the page

        button.addEventListener("click", function(e) { // add a listener for the click of a button
            const button = e.currentTarget; // gives us reference to the HTML element of the button we clicked on
            const container = button.parentNode; //reference to the button's container of data

            const order = { // build an arrat of the attributes we need
                id: button.getAttribute("data-order"), // button value (cheery pie, apple pie, etc)
                title: container.querySelector(".title").innerText, // use the class, then get the item related to that title
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            localStorage.setItem("order", JSON.stringify(order)); // have to convert array to string so localStorage can save it

            const url = window.location.href.replace("pieoverview.html", "order.html"); // read value of current page and switch value
            window.location.href = url; //forward broswer to new page order.html
        });
    })
})