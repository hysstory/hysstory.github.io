import React, { useState } from 'react'

import ConstructionText from './ConstructionText'

import './styles.css'

function Construction () {
    const[open, set] = useState(true)
    return (
        <ConstructionText open={open} onClick={() => {set((state) => !state); }}>
            <span className="construction-text">
                <p>
                    hello i am under construction<br />
                    &emsp;&emsp;i will be back soon
                </p>
            </span>

        </ConstructionText>
    )

}

export default Construction