import React from 'react';
import styles from './App.module.scss';
import Button, {ButtonType} from './components/Button/Button';
import { LikeIcon } from './assets/icons/LikeIcon';
import { LogoIcon } from './assets/icons/LogoIcon';
import UserName from './components/UserName/UserName';
import Tabs from './components/Tabs/Tabs';
import Title from './components/Title/Title';


const App = ()=> {
  return (
    <div>
      
              <Button title={'Primary'} type={ButtonType.Primary} onClick={()=>{}} />
          <Button title='Disabled' type={ButtonType.Primary} onClick={()=>{}} disabled/>
              <Button title={'Close'} type={ButtonType.Close} onClick={()=>{}}/>
          <Button title={'Like'} type={ButtonType.Like} onClick={() => { }} />
          <LikeIcon />
          <UserName username='Name Surname' />
          <Tabs />
          <LogoIcon />
          <Title title='New Releases Books'/>
              
        
    </div>
  );
}

export default App;
