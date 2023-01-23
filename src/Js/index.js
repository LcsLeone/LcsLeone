const botaoTrailer = document.querySelector(".botao-treiler");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;

/**
 * When the button is clicked, toggle the class 'aberto' on the modal.
 */
function alternarModal(){
    modal.classList.toggle("aberto");
};

/* Adding an event listener to the button. When the button is clicked, the modal is opened and the
video is played. */
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});


/* Removing the class "aberto" from the modal and setting the video source to an empty string. */
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

