import { useCallback, useContext, useEffect } from 'react';
import { fetchData } from '../services/fetchData.js';
import { UserContext } from '../context/UserContext.js';
import { fetchFact } from '../pages/HomePage/HomePage';

export function useFilter() {
  const context = useContext(UserContext);

  const {
    error,
    setError,
    Movies,
    setMovies,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    setIsLoading,
    endpoint,
    setEndpoint,
    query,
    setQuery,
    results,
    setResults
  } = context;

  if (!context) {
    throw new Error('This component should be within a UserContextProvider Component');
  }

  // Use effect
  useEffect(() => {
    console.log('useFilter is running');
    handleFetchAndState();
  }, [endpoint, query]);

  // Fetching
  const handleFetchAndState = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseData = await fetchData(endpoint, query);
      const filteredData = responseData.data.filter((item) =>
        item.attributes.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredData);
      setError(null); // Clear error if the request is successful
    } catch (error) {
      setError(`Error al obtener datos: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, query, setResults, setError, setIsLoading]);

  // Fetching movies from the new source
  const getMovies = useCallback(() => {
    setIsLoading(true);
    fetchFact()
      .then((newMovies) => {
        setMovies(newMovies);
        setError(null); // Clear error if the request is successful
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [setMovies, setError, setIsLoading]);

  // Use effect to fetch movies
  useEffect(() => {
    console.log('useFilter is running');
    getMovies();
  }, [getMovies]);

  const handleSelectChange = useCallback(
    (e) => {
      const selectedValue = e.target.value;
      setEndpoint(selectedValue);
      setQuery('');
    },
    [setEndpoint, setQuery]
  );

  const handleQueryChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return {
    error,
    Movies,
    selectedCategory,
    setSelectedCategory,
    isLoading,
    endpoint,
    setEndpoint,
    query,
    setQuery,
    results,
    setResults,
    handleSelectChange,
    handleQueryChange,
  };
}
