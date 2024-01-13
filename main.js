// To change the display tabs on the page
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Pop up message when the form is submitted
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    var form = document.getElementById('contactForm');
    var submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Add your form validation logic here if needed

        // Trigger the popup (you can customize this part)
        alert('✅Form submitted successfully!✅');
        form.reset();
    });
});





