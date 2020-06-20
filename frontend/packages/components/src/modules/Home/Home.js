import React from 'react'
import { View, Text } from 'react-native'
import { IdeasList } from '../IdeasList/IdeasList'
import { Block } from '../../components/Block/Block'

export const Home = () => {
  return (
    <Block>
      <Text>Home component</Text>
      <IdeasList />
    </Block>
  )
}
