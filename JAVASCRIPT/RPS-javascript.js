const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user-rst img");
const aiResult = document.querySelector(".ai-rst img");
const rst = document.querySelector(".rst");
const selectOption = document.querySelectorAll(".select-img");


selectOption.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = aiResult.src = "./IMAGES/rock.png";
        rst.textContent = "Wait . . .";

        selectOption.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let shuffle = Math.floor(Math.random() * 3);
            let aiImages = ["./IMAGES/paper.png", "./IMAGES/rock.png", "./IMAGES/scissor.png"];

            aiResult.src = aiImages[shuffle];

            let aiValue = ["R", "P", "S"][shuffle];
            let userValue = ["R", "P", "S"][index];

            let endResult = {
                RR: "Draw",
                RP: "Lose",
                RS: "Win",
                PR: "Win",
                PP: "Draw",
                PS: "Lose",
                SR: "Lose",
                SP: "Win",
                SS: "Draw"
            };
            let endResultValue = endResult[aiValue + userValue];
            rst.textContent = userValue === aiValue ? "Match Draw" : `You ${endResultValue} !`;
            // console.log(endResultValue);
        }, 2500);
    });
});