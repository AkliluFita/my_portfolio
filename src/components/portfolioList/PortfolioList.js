import React from 'react'
import './portfolioList.css'

function PortfolioList(props) {

    const{portoList,setportoList,item} = props
    const{id, title} =  item

    const handleSelect = () => {
        setportoList(portoList.map(list =>{
            if (list.id === id) {
                return {...list, isSelected : true}
            }

            else 
                return{ ...list,  isSelected:false}
            // return list
        }))


    }

    return (
        <li className={item.isSelected? 'PortfolioList  active': 'PortfolioList'} onClick={handleSelect}>{title}</li>
        
    )
}

export default PortfolioList
