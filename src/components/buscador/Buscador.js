import React, { Component } from 'react';

class Buscardor extends Component {
    render() { 
        return (
            <form>
                <div className='row'>
                    <div className='form-group cold-md-8'>
                        <input type="text" className='form-control
                        form-control-lg' placeholder='Buscar.
                        Ejemplo: Albercas'/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscardor;
