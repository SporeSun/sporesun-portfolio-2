import React from 'react';

const Resume = () => {
    const proficiencies = [
        // List your proficiencies here
    ];

    return (
        <section>
            <h2>Resume</h2>
            <a href="path-to-your-resume.pdf" download>Download My Resume</a>
            <ul>
                {proficiencies.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Resume;
