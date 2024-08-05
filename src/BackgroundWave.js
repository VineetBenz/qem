import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const Wave = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23556B2F'/%3E%3C/svg%3E");
  position: absolute;
  width: 200%;
  height: 100%;
  animation: ${waveAnimation} 10s linear infinite;
  transform: translateY(0);
  opacity: 0.3;
`;

const BackgroundWave = () => (
  <WaveContainer>
    <Wave />
    <Wave style={{ top: '15px', animationDuration: '15s', opacity: 0.5 }} />
    <Wave style={{ top: '30px', animationDuration: '20s', opacity: 0.7 }} />
  </WaveContainer>
);

export default BackgroundWave;