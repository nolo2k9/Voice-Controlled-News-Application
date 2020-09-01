import React from 'react';
import NewsCard from '../NewsCard/NewsCard'
/*
destructuring articles from props
map over articles and for each article return a news card component
*/

const Newscards = ({articles}) => {
    return (
        
        <div>
           {articles.map((article, i) => (
               <NewsCard />
           ))}

        </div>
    );

}

export default Newscards;
