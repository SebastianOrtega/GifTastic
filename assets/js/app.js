let animales = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

$(document).ready(function () {



    for (let i = 0; i < animales.length; i++) {
        let newButton = $("<button>");
        newButton.addClass("btnHeader btn btn-info");
        newButton.attr("data-animal", animales[i]);
        newButton.text(animales[i]);
        $(".header").append(newButton);
    }

    // $('.header').on('click', '.answer', function (event) {

    // });

    var API_KEY = "dc6zaTOxFJmzC";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=";


    http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"


    $(".btnHeader").click(function () {

        let seleccion = $(this).attr("data-animal");
        console.log(seleccion);
        $.ajax({
            url: queryURL + seleccion + "&api_key=" + API_KEY + "&limit=10",
            method: "GET"
        }).then(function (response) {
            console.log(response.data.length);
            console.log(response.data[0].rating);
            console.log(response.data[0].images.fixed_height.url);
            console.log(response.data[0].images.fixed_height_still.url);
            $(".imagenes").empty();
            for (let n = 0; n < response.data.length; n++) {
                let imagenContainer = $("<div>");
                imagenContainer.addClass("imgContainer");
                imagenContainer.attr("data-still", response.data[n].images.fixed_height_still.url);
                imagenContainer.attr("data-moving", response.data[n].images.fixed_height.url);
                imagenContainer.attr("data-actual", "still");
                imagenContainer.attr("id", "contenedor-" + n);
                let rating = $("<p>");
                rating.text("Rating: " + response.data[n].rating);
                imagenContainer.append(rating);
                let imagen = $("<img>");
                imagen.addClass("onTheFlyImages")
                imagen.attr("id", "imagen-" + n);
                imagen.attr("src", response.data[n].images.fixed_height_still.url);
                imagenContainer.append(imagen);
                $(".imagenes").append(imagenContainer);
            }
        });
    });




    $('.imagenes').on('click', '.imgContainer', function (event) {

        let toChange = "#" + event.currentTarget.childNodes[1].id;
        let still = event.currentTarget.attributes[1].value;
        let moving = event.currentTarget.attributes[2].value;
        let status = event.currentTarget.attributes[3].value;
        let container = "#" + event.currentTarget.id;

        if (status == "still") {
            $(toChange).attr("src", moving);
            $(container).attr("data-actual", "moving");
        } else {
            $(toChange).attr("src", still);
            $(container).attr("data-actual", "still");
        }


        console.log(event.currentTarget.childNodes[1].id);
        console.log(event);


    });



    $("#boton").click(function () {

        let nuevo = $("#search").val().trim();
        console.log(nuevo);

    });


    // currentTarget.childNodes[1].id













});