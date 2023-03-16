import React from 'react';
import {Menu, Buscador, Cards} from "../components"

export function Layout(props) {
  const {children}=props;
  return (
    <>
    <div>
      <Menu/>
      <p></p>
      <Buscador/>
      <p>
      </p>
      {/*<Cards/>*/}
    </div>
    <div>
      {children}
    </div>
    </>
  )
}
