import { View, Text } from 'react-native'
import React from 'react'
import Lista from './components/Lista';
import Cadastro from './components/Cadastro';

export default function App() {
  const [listagem, setListagem] = React.useState(true)

  const handleClick = () => {
    setListagem(!listagem)
  }

  return (
    <View style={{ padding: 16, backgroundColor: 'yellow', display: 'flex', flex: 1 }}>
      {
        listagem ?
          <Lista click={handleClick} />
          :
          <Cadastro click={handleClick} />
      }
    </View>
  )
}