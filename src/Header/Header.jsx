import React from 'react';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';
import { FaRegBell } from 'react-icons/fa';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <div className='user-area'>
          <div id='logo'>LOGO</div>
          <div className='flex-display'>
            <div className='item-space'>
              <Notification count={699} />
            </div>
            <div className='item-space'>
              <UserInitials name='ayush poddar' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Notification(props) {
  return (
    <>
      <FaRegBell size={30} />
      <div className='float-icon'>
        <NotificationBadge count={props.count} effect={Effect.SCALE} />
      </div>
    </>
  );
}

function UserInitials(props) {
  let userInitials = props.name.split(' ').reduce((partName, currentValue) => partName + currentValue.charAt(0), '');
  return (
    <button className='user-initials'>
      {userInitials}
    </button>
  );
}