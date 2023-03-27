import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Layout} from "../layouts"
import { Home, Singin, Palapas, Salones, Albercas} from '../pages';

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
    <Route path='/ingresa' element={loadLayouts(Layout, Singin)}/>
    <Route path='/palapas' element={loadLayouts(Layout, Palapas)}/>
    <Route path='/salones' element={loadLayouts(Layout, Salones)}/>
    <Route path='/albercas' element={loadLayouts(Layout, Albercas)}/>
</Routes>
)
}
