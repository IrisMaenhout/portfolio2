import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './categoryBtn.module.css';

function CategoryBtn({location, logoClassName, text}) {

    const { hash } = useLocation();

    const [url, setUrl] = useState(hash);

    // Parse the hash to extract the category array
    const categoryArrayMatch = hash.match(/category\[\]=([^&]+)/g);

    // Extract categories from the matches
    const categories = categoryArrayMatch ? categoryArrayMatch.map(match => match.replace('category[]=', '')) : [];

    // Check if the button's text matches any category in the array
    const isSelected = categories.includes(location);


    useEffect(() => {
        // Clone the current URL to a new variable
        let updatedUrl = hash;
    
        if (categoryArrayMatch) {
          if (isSelected) {
            // Remove the category from the URL
            updatedUrl = updatedUrl.replace(`&category[]=${location}`, '');
            updatedUrl = updatedUrl.replace(`?category[]=${location}`, '');
    
            if (updatedUrl.includes('#projects&category[]=')) {
              updatedUrl = updatedUrl.replace('#projects&category[]=', '#projects?category[]=');
            }

          } else {
        
            updatedUrl += `&category[]=${location}`;
          }
        } else {
          // If there are no categories in the URL, create a new category parameter
          if(hash){
            updatedUrl += `?category[]=${location}`;

          }else{
            updatedUrl += `/#projects?category[]=${location}`;

          }
        }
    

        setUrl(updatedUrl)
        
      }, [isSelected, hash]);

    return (
        <Link to={url} className={`${styles.btn} ${isSelected && styles.selected}`}>
             <i className={logoClassName}></i>
             <span>{text}</span>
        </Link>
    );
}

export default CategoryBtn;