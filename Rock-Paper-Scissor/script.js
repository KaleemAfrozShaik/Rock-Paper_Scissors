const gameContainer=document.querySelector(".container");
let user_result=document.querySelector(".user_result img");
let comp_result=document.querySelector(".comp_result img");
let result=document.querySelector(".result");
let option_images=document.querySelectorAll(".option_image");

option_images.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        user_result.src=comp_result.src="assets/rock.png";
        result.style.color="#7d2ae8";
        result.textContent="Wait..."
        option_images.forEach((image2,index2)=>{
            index!==index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        //set timeout
        let time=setTimeout(()=>{
            gameContainer.classList.remove("start");
            let imageSrc=e.target.querySelector("img").src;
            user_result.src=imageSrc;
            let randomNumber=Math.floor(Math.random()*3);
            let comp_images=["assets/rock.png","assets/paper.png","assets/scissors.png"];
            comp_result.src=comp_images[randomNumber];
            //assign values for the clicked option R-rock,P-paper,S-scissors
            let userValue=["R","P","S"][index];
            let compValue=["R","P","S"][randomNumber];
            const outComes={
                RR:"Draw",
                RP:"Computer Won",
                RS:"You Won",
                PR:"You Won",
                PP:"Draw",
                PS:"Computer Won",
                SR:"Computer Won",
                SP:"You Won",
                SS:"Draw",
            };
            let outComeValue=outComes[userValue+compValue];
            result.textContent=outComeValue;
            if(outComeValue==="You Won") result.style.color="green";
            else if(outComeValue==="Computer Won") result.style.color="red";
            else result.style.color="#7d2ae8";
            },1500);
    });
});