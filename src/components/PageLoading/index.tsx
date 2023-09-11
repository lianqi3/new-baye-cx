import React, { memo } from 'react';
import * as Styled from './Styled';
import { SpinLoading } from 'antd-mobile';
const PageLoading = () => {
  return (
    <Styled.PageLoading>
      <SpinLoading color='#00FFE0' />
    </Styled.PageLoading>
  );
};

export default memo(PageLoading);
