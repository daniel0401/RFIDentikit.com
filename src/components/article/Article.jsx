import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, text }) => {
  return (
    <div className='rfid__news-container_article'>
        <div className='rfid__news-container_article-image'>
          <img src={imgUrl} alt='News Image' />
        </div>
        <div className='rfid__news-container_article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <span>{text}</span>
          </div>
          <p><a href='javascript:void()'>Read More</a></p>
        </div>
    </div>
  )
}

export default Article