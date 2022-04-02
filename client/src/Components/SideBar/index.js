import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap} from "./SidebarElements";


const Sidebar = ({isOpen, toggle}) => {
  return( 
  <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon>
          <CloseIcon />
      </Icon>
      <SidebarMenu>
          <SidebarLink to="/">Keyless Remotes</SidebarLink>
          <SidebarLink to="/">Remotes</SidebarLink>
          <SidebarLink to="/">Contact</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
          <SidebarRoute to="/">Find My Remote</SidebarRoute>
      </SideBtnWrap>
  </SidebarContainer>
  );
};
export default Sidebar;
