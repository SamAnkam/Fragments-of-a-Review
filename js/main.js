$(document).on("click", ".toggle-text-button", function() {
    if ($(this).text() == "read it!") {
        $(this).text("finished reading!");
        $(this).parent().children(".toggle-text").slideDown();
    } else {
        $(this).text("read it!");
        $(this).parent().children(".toggle-text").slideUp();
    }
});

$(document).ready(function() { //code from https://codepen.io/
    $("#main-content").tabs();

    //$("#toggle").click(function() {
        //var elem = $("#toggle").text();
        //if (elem == "read it!") {
            //to do when btn is in read more state
            //$("#toggle").text("finished reading!");
            //$("#text").slideDown();
        //} else {
            //to do when btn is in the read less state
            //$("#toggle").text("read it!");
            //$("#text").slideUp();
        //}
    //})
});

