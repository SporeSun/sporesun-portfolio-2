import React from 'react';

const Portfolio = () => {
    const projects = [
        // Add your project details here
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                {projects.map(project => (
                    <div key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <a href={project.liveLink}>Live Version</a>
                        <a href={project.repoLink}>GitHub Repo</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
