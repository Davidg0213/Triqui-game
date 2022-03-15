// function turno(player1){

//     if(player1 === true){
//         const img_player1 = document.getElementById("img_player1");
//         img_player1.src = "./images/messi.png";
//         img_player1.style.width = '120%';

//         const img_player2 = document.getElementById("img_player2");
//         img_player2.src = "./images/ronaldo.png";
//         img_player2.style.width = '80%';

//         document.getElementById("player1_title").style.fontSize = '30px';
//         document.getElementById("player2_title").style.fontSize = '18px';
//     }
//     else {
//         const img_player1 = document.getElementById("img_player1");
//         img_player1.src = "./images/messi.png";
//         img_player1.style.width = '80%';

//         const img_player2 = document.getElementById("img_player2");
//         img_player2.src = "./images/ronaldo.png";
//         img_player2.style.width = '120%';

//         document.getElementById("player1_title").style.fontSize = '18px';
//         document.getElementById("player2_title").style.fontSize = '30px';
//     }
// }

// export default turno;

class Turno {
    constructor(player1) {
        this.player1 = player1;
        this.img_player1 = document.getElementById("img_player1");
        this.img_player2 = document.getElementById("img_player2");
        this.player1_title = document.getElementById("player1_title");
        this.player2_title = document.getElementById("player2_title");

        if(player1 === true){
            this.img_player1.src = "./images/messi.png";
            this.img_player1.style.width = '120%';

            this.img_player2.src = "./images/ronaldo.png";
            this.img_player2.style.width = '80%';

            this.player1_title.style.fontSize = '30px';
            this.player2_title.style.fontSize = '18px';
        }
        else {
            this.img_player1.src = "./images/messi.png";
            this.img_player1.style.width = '80%';

            this.img_player2.src = "./images/ronaldo.png";
            this.img_player2.style.width = '120%';

            this.player1_title.style.fontSize = '18px';
            this.player2_title.style.fontSize = '30px';
        }
    }
}

const turno = new Turno();
export default turno;