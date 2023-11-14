import React from 'react';

const Header = ({ currentSection, setCurrentSection }) => {
    const navTitles = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

    return (
        <header>
            <h1>Developer Name</h1>
            <nav>
                {navTitles.map(title => (
                    <button
                        key={title}
                        className={currentSection === title ? 'active' : ''}
                        onClick={() => setCurrentSection(title)}
                    >
                        {title}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;
