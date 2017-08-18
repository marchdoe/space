import React from 'react';
import styled, { css } from 'styled-components'

const AstronomyCard = (props) => {

  const { title, url, hdurl, explanation, date, copyright } = props.data

  return (
    <div className='astronomy-card'>
      <Heading className='astronomy-title'>{title}</Heading>

      <a href={hdurl} className='astronomy-image-wrapper'>
        <ImgStyled src={url} alt={title} />
      </a>

      <p>{explanation}</p>

      <span>{date}, {copyright}</span>
    </div>
  )
}

const Heading = styled.h1`
  font-size: 3em;
  font-family: Helvetica;
`

const ImgStyled = styled.img`
  width: 100%;
`

export default AstronomyCard;
