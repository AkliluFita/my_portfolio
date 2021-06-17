import React,{useState,useEffect} from 'react'
import './portfolio.css'
import PortfolioList from '../portfolioList/PortfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio ,contentPortfolio} from '../../PortfolioData'

function Portfolio() {

 

    const List =[ 
        { id: "featured", title: "Featured", isSelected:false},
      { id: "web", title: "Web App", isSelected:false },
      { id: "mobile", title: "Mobile App", isSelected:false },
      { id: "design", title: "Design", isSelected:false},
      {id: "content",title: "Content", isSelected:false },
    ]

    const [portoList, setportoList] = useState(List)
    const [portoData, setportoData] = useState(featuredPortfolio)

    useEffect(() => {
        if (portoList[0].isSelected) {
            setportoData(featuredPortfolio)
        }
        if (portoList[1].isSelected) {
            setportoData(webPortfolio)
        }
        if (portoList[2].isSelected) {
            setportoData(mobilePortfolio)
        }
        if (portoList[3].isSelected) {
            setportoData(designPortfolio)
        }
        if (portoList[4].isSelected) {
            setportoData(contentPortfolio)
        }
     
    }, [portoList])

    return (
        <div className='portfolio control-sec' id="portfolio">
            <h2 className='porto-title'>Portfolio</h2>
            <ul >
              {portoList.map(item =>{
                  return <PortfolioList 
                            portoList={portoList}
                            setportoList={setportoList}
                            item={item}
                            key={item.id}
                           />
               })} 

            </ul>

           <div className="container">
                {portoData.map(data =>{
                        return  (<div>
                            <img  className='porto-img' src={data.img} alt=""/>
                            <h4>{data.title}</h4>
                         </div>)
                    })}
           </div>

           

        </div>
    )
}

export default Portfolio 