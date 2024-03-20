import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NewsList from '../components/NewsList';

import {useState, useEffect} from 'react';
import { getNews } from '../services/getNews';
import { useParams } from 'react-router-dom'; 

function App() {

  const {id} = useParams();
  const DEFAULT_SEARCH_QUERY = 'indonesia';

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchTechNews = async () => {

      setLoading(true);  
      
      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY
      });

      if(!res)
      {
        setLoading(false);
        setError(true);

        return;
      }

      setLoading(false);
      setError(false);
      setArticles(res.articles);
    }
    fetchTechNews()

  }, [id]);
  return (
    <div>
      <Navbar/>
      <Container>
        {loading && <Loading />}
        {error && <Error/>}
        {(!loading && articles.length > 0) && (
          <NewsList articles={articles}/>
        )} 
      </Container>  
    </div>
  );
}

export default App;
