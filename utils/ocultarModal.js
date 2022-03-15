// function ocultarModal(){
//     let modal = document.querySelectorAll(".modal")[0];
//     let modal_container = document.querySelectorAll(".modal-container")[0];
//     modal.classList.toggle("modal-close");

//     setTimeout(
//         function () {
//             modal_container.style.opacity = "0";
//             modal_container.style.visibility = "hidden";
//         },

//     1000)
// }

// export default ocultarModal 

class OcultarModal {
    constructor() {
        this.modal = document.querySelectorAll(".modal")[0];
        this.modal_container = document.querySelectorAll(".modal-container")[0];
    }

    ocultar() {
        this.modal.classList.toggle("modal-close");

        setTimeout(
            function () {
                this.modal_container.style.opacity = "0";
                this.modal_container.style.visibility = "hidden";
            }.bind(this),
        1000)
    }
}

const ocultarModal = new OcultarModal();
export default ocultarModal;
