import React, { FC, useState } from 'react'

import { Button } from 'antd'

import Popup from 'components/common/Popup/Popup'
import SmileScoreRange from 'components/UI/SmileRange'

interface IMarkPopup {
  visible: boolean,
  setVisible: (value: boolean) => void 
  setMark: (value: number) => void;
}

const MarkPopup: FC<IMarkPopup> = ({ visible, setVisible, setMark }) => {
  const [step, setStep] = useState<number>(1)

  const onConfirm = () => {
    setMark(step)
    setVisible(false)
  }

  return (
    <Popup className='score-modal' visible={visible} setVisible={setVisible} width={560}>
      <div className='score-modal__inner'>
        <div className='score-modal__header'>Rate the app</div>
        <div className='score-modal__body'>
          <SmileScoreRange step={step} setStep={setStep} />
        </div>
        <div className='score-modal__footer'>
          <Button block type='primary' size='large' onClick={onConfirm}>
            OK
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export default MarkPopup
