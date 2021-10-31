import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import background from "../src/assets/cover/portfolio-bg.jpg"; HELP

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header 
      // style={{ backgroundImage: `url(${background})`}}  HELP
      className="flex-row px-1">
      <h2>
        <a data-testid="link" className="brand-term" href="/">
          Lady Lazy Dev
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;