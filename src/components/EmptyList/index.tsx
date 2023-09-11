import React, { memo } from 'react'
import * as Styled from './Style'

const EmptyList: React.FC = () => {
  return (
    <Styled.EmptyContainer>
      <div className='text-tips'>暂无数据</div>
    </Styled.EmptyContainer>
  )
}

export default memo(EmptyList)
