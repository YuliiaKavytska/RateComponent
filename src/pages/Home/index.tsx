import React, { useState } from 'react'

import { Button } from 'antd'

import MarkPopup from 'pages/Home/MarkPopup'

import './style.scss'

const Home = () => {
  const [mark, setMark] = useState<number>(0)
  const [visible, setVisible] = useState(false)

  return (
    <div className='home'>
      <div className='home__body'>
        <div className='home__score'>Your mark is: {!!mark && <span>{mark}</span>}</div>
        <Button type='primary' size='large' onClick={() => setVisible(true)}>
          Set application rating
        </Button>
        <MarkPopup setMark={setMark} visible={visible} setVisible={setVisible} />
      </div>
    </div>
  )
}

export default Home
