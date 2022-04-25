import React from 'react';
import Card from './components/Card/Card'
import Input from './components/Input/Input'

function App(): JSX.Element {
  return <Card className='card__light'>
    <Input />
  </Card>;
}

export default App;
