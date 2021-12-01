import React, { FC } from 'react'

import CloseCircleOutlined from '@ant-design/icons'
import { Modal } from 'antd'

interface IPopup {
  visible: boolean;
  setVisible: (type: boolean) => void;
  children: React.ReactNode;
  [key: string]: any;
}

const Popup: FC<IPopup> = ({ visible, setVisible, children, ...props }) => {
  return (
    <Modal
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      closeIcon={<CloseCircleOutlined />}
      footer={null}
      {...props}
    >
      {children}
    </Modal>
  )
}

export default Popup
