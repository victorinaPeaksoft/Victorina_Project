import React from 'react'
import './home.less'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <p>Тест на Личность и характер</p>
        <h1>Узнавайте свой темпаремент</h1>
        <Link to="question">
          <Button variant="contained" color="primary">
            Начать
          </Button>
        </Link>

      </div>

    </div>
  )
}

export default Home
