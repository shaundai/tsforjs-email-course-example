/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const testApi = () => {
    const [geo, setGeo] = useState({apiResponse : ''})
        fetch("https://shaundai-salesloft-node.herokuapp.com/salesloft")
            .then(res => res.text())
            .then(res => {
                setGeo({ apiResponse: res })
            })
            .catch(err => err);
        return (
            <div>
                hi {geo.apiResponse}
            </div>
        )
}

export default testApi;