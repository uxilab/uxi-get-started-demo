import React from 'react';
import Button from 'uxi/Button';
import double from './double'

const App = () => (
  <div>
    <h2>Hello world</h2>
    <Button type="primary" text={'click me'} onClick={() => alert('clicked')} />
    <p>{`double 3 and you get ${double(3)}`}</p>
  </div>
)

export default App;
