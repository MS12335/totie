// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

// munculkan sidebar menu
hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if(wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }
});

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// send WhatsApp Message
const sendWhatsappForm = document.getElementById("sendWhatsappForm");

sendWhatsappForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendWhatsAppMessage();
});

function sendWhatsAppMessage() {
    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nomor_telepon = document.getElementById("nomor-telepon").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;

    var templateMessage = "Hallo, nama saya " + name + ",\n\nSaya mau membeli "+ jumlah + " pcs Totie Bag dan barangnya dapat diantarkan ke " + alamat + ".\n\nAnda dapat menghubungi saya melalui " + email + " atau " + nomor_telepon +  ". Terima Kasih.";

    var encodedMessage = encodeURIComponent(templateMessage);
    var whatsappURL = "https://wa.me/62895412195888?text=" + encodedMessage;

    window.open(whatsappURL);
}
