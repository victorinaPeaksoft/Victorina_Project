import React from 'react'
import './home.less'
import { CustomButton } from '../CustomButton'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <p>Тест на Личность и характер</p>
        <h1>Узнавайте свой темпаремент</h1>
        <Link to="question">
          <CustomButton primary  >
            Начать
          </CustomButton>
        </Link>

      </div>

    </div>
  )
}

export default Home
