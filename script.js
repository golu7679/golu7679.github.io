const descriptionElement = document.getElementById("description");

const about = () => {
    descriptionElement.innerHTML = `I am Golu Rajak. I am software engineer in <a href="https://www.inocentum.in"
    title="www.inocentum.in">Inocnetum</a>.
In youtube I known as BrighterYT, I made videos in Discord Bot. I also made discord bot using discordpy.
<br> I am learning Nestjs, Django.`;
};

const link = () => {
    /**
     * facebook
     * twitter
     * linkedin
     * github
     * discord
     * youtube
     * gmail
     */

    descriptionElement.innerHTML = `
    <div class="flex">
    <a class="links">
        <i class="fab fa-facebook"></i>
    </a>
    <a class="links">
        <i class="fab fa-twitter"></i>
    </a>
    <a class="links">
        <i class="fab fa-linkedin"></i>
    </a>
    <a class="links">
        <i class="fab fa-github"></i>
    </a>
    <a class="links">
        <i class="fab fa-discord"></i>
    </a>
    <a class="links">
        <i class="fab fa-youtube"></i>
    </a>
    <a class="links">
        <i class="fab fa-instagram"></i>
    </a>
    <a class="links">
        <i class="fas fa-envelope"></i>
    </a>
    </div>
    `;
};

const skills = () => {
    /**
     * c
     * c++
     * python
     * java
     * js
     * ts
     * Html
     * css
     * scss
     *
     */
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
    newButton.innerHTML = `<span> <i class="fas fa-download"></i> Download CV </span>`;
    descriptionElement.innerHTML = newButton.outerHTML;
};
// <img class="image-margin" src="
