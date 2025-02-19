import React from 'react'
import Card from './Cards'

function CardList() {
  return (
    <div className='sm:grid-flow-col sm:grid-rows-2 p-20 justify-center gap-20 relative grid'>
        <Card 
        img={"https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Maha_kumbh_mela_01_1024x1024.jpg?v=1736769922"}
        title={"Maha Kumbh 2025"}
        details={"Lorem2ad fgdikj kdsfnj jksfk kjfrklewr "}
        />
        <Card 
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-ETV9SIb_nLeZpYPtd33rWQusBtiAKWi6g&s"}
        title={"Kumbh Mela Guide"}
        details={"Lorem2ad fgdikj kdsfnj jksfk kjfrklewr "}
        />
        <Card 
        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6i1iBlVBiOcJv8h9xZZrFNyzr0qV4PGMQow&s"}
        title={"Maha Kumbh Mela 25"}
        details={"Lorem2ad fgdikj kdsfnj jksfk kjfrklewr "}
        />
        <Card 
        img={"https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Maha_kumbh_mela_01_1024x1024.jpg?v=1736769922"}
        title={"Kumbh Mela 2025"}
        details={"Lorem2ad fgdikj kdsfnj jksfk kjfrklewr "}
        />
    </div>
  )
}

export default CardList