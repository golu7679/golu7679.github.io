const descriptionElement = document.getElementById("description");

const about = () => {
    descriptionElement.innerHTML = `I am Golu Rajak, a software engineer in <a href="https://www.inocentum.in"
    title="www.inocentum.in" targer="_blank">Inocnetum</a>. In youtube people know me as BrighterYT. I made videos on
    how to setup a Discord Bot. I also made discord bot using discordpy. <br>
    Currently I am learning Nestjs and Django.`;
};

const link = () => {

    descriptionElement.innerHTML = `
    <div class="flex">
    <a class="links" href="https://www.facebook.com/golu7679/" target="_blank">
        <i class="fab fa-facebook"></i>
    </a>
    <a class="links" target="_blank" href="https://twitter.com/golu7679">
        <i class="fab fa-twitter"></i>
    </a>
    <a class="links" target="_blank" href="https://www.linkedin.com/in/golu-rajak-a8567a1b7/">
        <i class="fab fa-linkedin"></i>
    </a>
    <a class="links" target="_blank" href="https://github.com/golu7679">
        <i class="fab fa-github"></i>
    </a>
    <a class="links" target="_blank" href="https://discord.gg/NhK2mbw">
        <i class="fab fa-discord"></i>
    </a>
    <a class="links" target="_blank" href="https://www.youtube.com/c/BrighterYT">
        <i class="fab fa-youtube"></i>
    </a>
    <a class="links" target="_blank" href="https://www.instagram.com/golu701/">
        <i class="fab fa-instagram"></i>
    </a>
    <a class="links" href="mailto:golurajak811@gmail.com">
        <i class="fas fa-envelope"></i>
    </a>
    </div>
    `;
};

const skills = () => {
    descriptionElement.innerHTML = `<img class="image-margin" src="https://img.shields.io/badge/-C%20Language-333333?style=flat&logo=c"/>
                                    <img class="image-margin" src="https://img.shields.io/badge/-C++%20-333333?style=flat&logo=cplusplus"/>
                                    <img class="image-margin" src="https://img.shields.io/badge/-Java-333333?style=flat&logo=java" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Python%20-333333?style=flat&logo=python">
                                    <img class="image-margin" src="https://img.shields.io/badge/-Flask-333333?style=flat&logo=flask" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-HTML-333333?style=flat&logo=HTML5" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Sass-333333?style=flat&logo=sass" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Bootstrap-333333?style=flat&logo=bootstrap&logoColor=563D7C" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Angular-333333?style=flat&logo=angular&logoColor=dd1b16" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Express%20-333333?style=flat&logo=express" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-React-333333?style=flat&logo=react" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-Django-333333?style=flat&logo=django" />
                                    <img class="image-margin" src="https://img.shields.io/badge/-NestJs-333333?style=flat&logo=nestjs&logoColor=ed2945" />`;
};

const cv = () => {
    let newButton = document.createElement("button");
    newButton.classList.add("bg-gradient1");
    newButton.innerHTML = `<a href="cv.pdf" download> <span> <i class="fas fa-download"></i> Download CV </span> </a>`;
    descriptionElement.innerHTML = newButton.outerHTML;
};
