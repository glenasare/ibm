import React,{useState} from 'react'
import { MiniNavbar, Text } from './miniNav.style'
import ScrollText from './ScrollText';


function MiniNav() {
  let text = "ONLINE SERVICE - We are live on Youtube and Facebook every Sunday 10.30am"
  const links = "/"

  return (
    <div>
        <MiniNavbar>
            <Text><ScrollText text={text} links={links}/></Text>
            
        </MiniNavbar>
    </div>
  )
}

export default MiniNav