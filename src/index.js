import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    window.navigator.geolocation.getCurrentPosition(
        (posicao) => console.log(posicao)
    );

    return (
        <div>
            Meu app
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
