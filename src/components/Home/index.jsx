import React from 'react'

import Button from '@material-ui/core/Button';

import './home.less'


const Home = () => {
  return (
    <div className='main-page'>
      <div className="container">
        <p>Тест  на личность и характер</p>
        <h2>Узнавайте свой темперамент</h2>
        <Button variant="contained" color="secondary">Начать</Button>
      </div>
    </div>
  )
}

export default Home
