import React, { memo, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContex'
import styles from './Header.css'
import { Button } from '../Button/Button'

export const Header = memo(function Header (){
    const items = [
        {
            id: 1, 
            title: 'All'
        },
        {
            id: 2, 
            title: 'Best Movies'
        },
        {
            id: 3, 
            title: 'Regular Movies'
        },
        {
            id: 4, 
            title: 'Worst Movies'
        }]

    const navigate = useNavigate(); 
    
    return(
        <>
        <header>
            <img src="" alt="" onClick={() => navigate('/Dashboard')} />
        
        <Menu items={items} />
        <div>
            <h3>algo</h3>
            <img src="" alt="" />
        </div>
        <Button onClick={() => navigate('/')} title='LogOut' />
        </header>
        </>
    )})

    export function Menu ({ items }){
        return(
            <nav>
                <ul>
                    {
                        items.map((item) =>{
                            return <Dropdown key={item.id} item={item} />
                        })
                    }
                </ul>
            </nav>
        )
    }

    function Dropdown ({ item }) {
        const [hover, setHover] = useState(false)
      
        const toggleHover = () => setHover(true)
      
        const toggleState = () => setHover((prevState) => !prevState)
      
        console.log(UserContext);
        console.log(useContext(UserContext));

        const {
        //   selectedCategory,
          setSelectedCategory
        } = useContext(UserContext)
      
        const handleCategoryClick = () => {
          setSelectedCategory(item.title)
        }
        
        return (
          <div key={item.id} onMouseLeave={toggleState}>
            <p onClick={handleCategoryClick} onMouseEnter={toggleHover} className='dropDown'>{item.title}</p>
          </div>
        )
      } 