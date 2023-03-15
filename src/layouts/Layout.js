import React from 'react';
import {Menu} from "../components"

export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      <Menu/>
    </div>
    <div>
      {children}
    </div>
    </>
  )
}
