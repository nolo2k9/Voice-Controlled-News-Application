import React, {useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import Newscards from './components/NewsCards/NewsCards';

const alanKey = '2ddc25d3e070a5fec68dcf2f84260ed32e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    /*
        useEffect is ran once the project is mounted 
        Run once or multiple times
    */
    useEffect(() => {
        //setting up what alan needs to run
        alanBtn({
            key: alanKey,
            onCommand : ({command, articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            }

        })
    }, [])

    return (
        <div>
            <h1>Alan AI News Application</h1>
            <Newscards articles={newsArticles} />
        </div>
    );
}

export default App;