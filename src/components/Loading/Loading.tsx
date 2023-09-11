import React from 'react';
import styled from 'styled-components';
import { SpinLoading } from 'antd-mobile';

import { useLoading } from './LoadingContext';

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;
export default function Loading() {
  // @ts-ignore
  const { loading } = useLoading();

  if (!loading) {
    return null;
  }

  return (
    <LoadingContainer>
      <SpinLoading color='#00FFE0' style={{ '--size': '48px' }} />
    </LoadingContainer>
  );
}
