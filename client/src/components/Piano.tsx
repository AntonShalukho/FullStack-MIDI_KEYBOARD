import {whiteKeys, blackKeys} from '../appService/Keys'
import Button from '../UI/Button'
import Account from './Account'
import Desk from './Desk'
import WhiteKey from './WhiteKey'
import BlackKey from './BlackKey'
import IconsDesk from './IconsDesk'
import { useSelector } from 'react-redux'
import { selectorChangeIcon } from '../store'



const Piano = () => {   
    const isIcon = useSelector(selectorChangeIcon)
  
    return (
      <div  className='root4'>
        <div className="bodyShadow">
        </div>
        <Desk/>
        <div className="piano"  >
            {whiteKeys.map((k) => 
              <WhiteKey
                key={k.name} 
                id={k.name}
                audio={k.audio}
                keyClass={k.keyClass} 
                keyStyle={k.keyStyle} 
                keyName={k.keyName}
              />
            )}
            {blackKeys.map((k) => 
              <BlackKey 
                key={k.name} 
                id={k.name}
                audio={k.audio}
                keyClass={k.keyClass} 
                keyStyle={k.keyStyle} 
                keyName={k.keyName}
              />
            )}
        </div>
        <Button buttClass='buttonExit' text='Exit' />
        <Account/>
        {isIcon && <IconsDesk/>}
        
      </div>
    )
}

export default Piano