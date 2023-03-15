import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts"
import { Home, } from '../pages';

export function Rutas() {
    const loadLayouts=(Layout,Page)=>{
        return(
            <Layout>
                <Page/>
            </Layout>
        )
    }
  return (
   <Routes>
    <Route path='/' element={loadLayouts(Layout, Home)}/>
   </Routes> 
  )
}
