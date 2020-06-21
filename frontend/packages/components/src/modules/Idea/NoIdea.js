import React from 'react'
import styled from 'styled-components/native'
import { Card } from '../../components/Card/Card'
import { TitleBlue } from '../../components/Title/Title'

const Title = styled(TitleBlue)``

const CardNoIdea = styled(Card)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const NoIdea = () => {
  return (
    <CardNoIdea>
      <Title>Пока больше нет идей</Title>
    </CardNoIdea>
  )
}