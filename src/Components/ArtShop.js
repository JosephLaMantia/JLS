import React from "react";

export default () => {
  return (
    <article class='project-tile'>
                <a class='project-link' href="https://ttp-art-shop.netlify.app/">ART-SHOP</a>
                <img class='project-img' src="https://i.imgur.com/BfJQ7DI.png" alt="ART-SHOP"/>
                <div id='repo-link-wrapper'>
                    <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-client">Client</a>
                    <a class='repo-link' href="https://github.com/smilteval/ttp-capstone-art-store-server">Server</a>
                </div>
                <p>An online platform where artists and art lovers can post, view, and buy art.</p>
                <p class='collaboration'>In collaboration with Smilte Valasinaite, Vincenzo Mezzio, and Sabahet Alovic.
                </p>
                <ul> Highlighted tech and learning experiences:
                    <li>Stack: MongoDB, React, Node, Strapi</li>
                    <li>Material-UI: A react UI framework.</li>
                    <li>MongoDB: Database to store posts, and user info.</li>
                    <li>Strapi: A headless content management system.</li>
                    <li>Cloudinary: An upload hosting service for storing/rendering images quickly.</li>
                    <li>Netlify: Deployment of front-end.</li>
                    <li>Heroku: Deployment of back-end.</li>
                </ul>
            </article>
  );
};
