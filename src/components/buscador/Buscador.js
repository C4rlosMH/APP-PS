import React from 'react'

export function Buscador(){
        return (
            <form>
                <div className='row'>
                    <div className='form-group cold-md-8'>
                        <input type="text" className='form-control
                        form-control-lg' placeholder='Buscar...'/>
                    </div>
                    <div className='form-group cold-md-4'>
                        <input type="subimt" className='btn btn-lg btn-danger btn-block' value='Buscar'/>
                    </div>
                </div>
            </form>
        );
    }
 

