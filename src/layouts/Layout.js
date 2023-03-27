import React from 'react';
import {Menu, Buscador} from "../components"

export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      <Menu/>
      <p></p>
      <Buscador/>
    </div>
    <div>
      {children}
    </div>
    </>
  )
}
