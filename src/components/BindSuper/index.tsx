import React, { memo, useEffect, useState } from 'react'
import { Button, Input, Modal } from 'antd-mobile'
import { PageModelStyled } from './styled'

const BindSuper: React.FC<{ visible: boolean; submit: ((value: string) => void) | null }> = ({
  visible = true,
  submit,
}) => {
  const [value, setValue] = useState<string>('')
  const handleButton = () => {
    if (submit && typeof submit === 'function') {
      submit(value)
    }
  }
  return (
    <PageModelStyled>
      <Modal
        bodyClassName='model-content'
        visible={visible}
        closeOnAction={true}
        content={
          <React.Fragment>
            <div className='title'>邀请链接</div>
            <Input
              className='input'
              value={value}
              placeholder='请输入邀请链接'
              onChange={(val: any) => {
                setValue(val)
              }}
            />
            <Button className='btn' onClick={handleButton}>
              确定
            </Button>
          </React.Fragment>
        }
      ></Modal>
    </PageModelStyled>
  )
}

export default memo(BindSuper)
