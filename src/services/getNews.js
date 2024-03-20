import axios from 'axios';

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const NEWS_API_KEY = process.env.REACT_APP_API_KEY;

export const getNews = async ({searchQuery = 'technology',   }) => {


      try 
      {
            const PATH = '/everything';
            const QUERY = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
            const endpointURL = `${NEWS_API_BASE_URL}${PATH}${QUERY}`

            const response = await axios.get(endpointURL);

            if(response.status === 200)
            {
                  const additionalObj = {
                        category: searchQuery
                  };
                  
                  const resData = {
                        ...response.data,
                        ...additionalObj
                        
                       
                  };

                  return resData;


            }
      } catch (error)
      {
            console.error('Error getting tech news'); 
      }
}