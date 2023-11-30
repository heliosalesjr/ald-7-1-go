'use client'

import RecLembre from '../components/Recursos/RecLembre'
import RecGoogle from '../components/Recursos/RecGoogle'
import RecInfografico from '../components/Recursos/RecInfografico'
import RecDicas from '../components/Recursos/RecDicas'

import RecSugestao from '../components/Recursos/RecSugestao'
import RecFiqueSabendo from '../components/Recursos/RecFiqueSabendo'
import RecHero from '../components/Recursos/RecHero'


function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecGoogle/>
        <RecDicas />
        <RecLembre/>
        <RecInfografico/>
        <RecSugestao  />
        <RecFiqueSabendo />
        
        
    
    </>
    
  )
}

export default Recursos