"use client";

import React from 'react';
import { Home, User, Settings } from 'lucide-react'; // Import icons from lucide-react
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 20px;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    bottom: 0;
    top: auto;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconWrapper>
        <Home size={24} />
      </IconWrapper>
      <IconWrapper>
        <User size={24} />
      </IconWrapper>
      <IconWrapper>
        <Settings size={24} />
      </IconWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;