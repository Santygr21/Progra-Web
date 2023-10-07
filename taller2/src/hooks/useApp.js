import { useCallback, useEffect, useContext } from "react";
import { fetchFact, fetchImg } from "../services/fetch";
import debounce from 'just-debounce-it'
import { Context } from "../Context/context";

export const useApp = () =>{
    const context = useContext(Context)

  if (!context) {
    throw new Error('This component sould be within a Contextrovider Component')
  }
  const {
    error,
    setError,
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    loading,
    setLoading,
    getRandomFact
  } = context

    useEffect(() =>{
        if (getRandomFact.current) {
            getRandomFact.current = (catFact === ''); 
        }
    },[catFact])

    const handleBTN = () =>{
        setLoading(true)
        getFact()
    }

    const getFact = useCallback(
        debounce(() =>{
          fetchFact().then(newFact =>{
                setCatFact(newFact)
                const newImgText = newFact.split(' ').slice(0, 4).join(' ')
                getImg(newImgText);  
            }).catch(e => setError(e))
        }, 500), [])

    const getImg = useCallback(
        debounce((newImgText) =>{
          fetchImg({newImgText})
          .then(newImg => setCatImg(newImg))
          .catch(e => setError(e))
          .finally(() => setLoading(false))
        },500), [])

    useEffect(() => {
        console.log('getFact volvió a definirse')
      }, [getFact])
    
      useEffect(() => {
        console.log('getImg volvió a definirse')
      }, [getImg]); 

      return (
        {
          error,
          catImg,
          catFact,
          loading,
          getRandomFact,
          handleBTN
        }
      )
}
