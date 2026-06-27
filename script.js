// =============================
// Apparition des sections
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// =============================
// Navbar transparente
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(0,0,0,.85)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }else{

        header.style.background="rgba(0,0,0,.45)";
        header.style.boxShadow="none";

    }

});

// =============================
// Retour en haut
// =============================

const topButton=document.createElement("div");

topButton.innerHTML="↑";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =============================
// Lightbox Galerie
// =============================

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

images.forEach(img=>{

    img.onclick=()=>{

        lightbox.classList.add("open");

        lightboxImg.src=img.src;

    }

});

lightbox.onclick=()=>{

    lightbox.classList.remove("open");

};

paypal.Buttons({

    createOrder: function(data, actions) {

        const price = document.getElementById("service").value;

        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: price
                }
            }]
        });

    },

    onApprove: function(data, actions) {

        return actions.order.capture().then(function(details) {

            const name = document.getElementById("name").value;
            const date = document.getElementById("date").value;
            const service = document.getElementById("service").value;

            alert(
                "Paiement réussi ✔\n" +
                "Merci " + name + "\n" +
                "Séance confirmée le " + date
            );

            console.log("Réservation :", {
                name,
                date,
                service,
                orderID: data.orderID
            });

        });

    }

}).render('#paypal-button-container');
