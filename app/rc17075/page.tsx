import React from 'react'
import anneImage from '@/public/anne.jpg'
import peaky from '@/public/peaky-blinders.jpeg'
import gambito from '@/public/gambito.jpg'

import Image from 'next/image'

const TopPage = () =>{
    return(
        <div>
            <div className='grid grid-cols-5 grid-rows-5'>
                <div className='bg-purple-300 p-10 row-span-5 col-span-3'>
                    <h1>Puesto 1</h1>
                    <h2>Anne with an e</h2>
                    <Image src={anneImage} alt = {'Image de Anne with an e'}/>
                    <p>La historia de Anne with an E gira alrededor de una jovencita huérfana que, contra todo pronóstico y enfrentando grandes desafíos, lucha por encontrar el amor, la aceptación y el lugar que le corresponde en el mundo.</p>

                </div>
                <div className='bg-green-400 p-10 row-span-3 col-span-2'>
                    <h1>Puesto 2</h1>
                    <h2>Peaky Blinders</h2>
                    <Image src={peaky} alt = {'Image de peaky blinders'}/>
                    <p>Thomas Shelby y su familia lideran el más poderoso y temido grupo de mafiosos: los Peaky Blinders. Llamados así por su costumbre de coser cuchillas en la puntas de sus boinas, hacen dinero gracias a las apuestas ilegales, protección y el mercado negro.</p>
                
                </div>
                <div className='bg-rose-300 p-10 row-span-2 col-span-2'>
                    <h1>Puesto 3</h1>
                    <h2>Gambito de dama</h2>
                    <Image src={gambito} alt = {'Image de Gambito de dama'}/>
                    <p>En un orfanato de los años 50, una chica exhibe un talento extraordinario para el ajedrez. A medida que su fama sube como la espuma, intenta superar su adicción. Ve todo lo que quieras. Galardonada con 11 premios Emmy, incluido el de mejor miniserie, y los Globos de Oro a mejor miniserie y mejor actriz.</p>
                
                </div>

            </div>
        </div>
    )
}
export default TopPage