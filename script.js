// Mobile Navigation

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}


// Search Property

function searchProperty() {

    let city = document.getElementById("citySearch").value.trim();

    let type = document.getElementById("propertyType").value;

    if (city === "") {
        alert("Please enter a city or location.");
        return;
    }

    if (type === "") {
        alert("Please select Buy or Rent.");
        return;
    }

    if (type === "Buy") {
        window.location.href =
            "buy.html?city=" + encodeURIComponent(city);
    }

    else {
        window.location.href =
            "rent.html?city=" + encodeURIComponent(city);
    }
}


// View Property

function viewProperty(id) {

    window.location.href =
        "property-details.html?id=" + id;

}


// Favourite Properties

function toggleFavourite(id) {

    let favourites =
        JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourites.includes(id)) {

        favourites = favourites.filter(item => item !== id);

        alert("Property removed from favourites!");

    } else {

        favourites.push(id);

        alert("Property added to favourites!");

    }

    localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
    );

}