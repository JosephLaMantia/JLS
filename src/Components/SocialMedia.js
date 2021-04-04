import React from "react";

export default () => {
  return (
    <article class='project-tile'>
                <a class='project-link' href="https://confident-euclid-5ac7e8.netlify.app/">Social Media App</a>
                <img class='project-img' src="https://i.imgur.com/FSc4nGn.png" alt="Social Media App"/>
                <div id='repo-link-wrapper'>
                    <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-client">Client</a>
                    <a class='repo-link' href="https://github.com/JosephLaMantia/socialmedia-server">Server</a>
                </div>
                <p>Fully functioning social media web application.</p>
                <p class='collaboration'>In collaboration with Smilte Valasinaite, and Vincenzo Mezzio.</p>
                <ul> Highlighted tech and learning experiences:
                    <li>Stack: MERNG (MongoDB, Express, React, Node.js, GraphQL)</li>
                    <li>Semantic-UI: A react UI framework.</li>
                    <li>MongoDB: Database to store posts, and user info.</li>
                    <li>GraphQL: Query language for API's.</li>
                    <li>Apollo Client: A state management library.</li>
                    <li>Netlify: Deployment of front-end.</li>
                    <li>Heroku: Deployment of back-end.</li>
                </ul>
            </article>
  );
};