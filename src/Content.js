import {memo} from 'react'


function Content({onIncrease}) {
   
    return (
        <div>
            <h1>Hell</h1>
            <button onClick={onIncrease}>Click me!</button>
        </div>
    )
}

export default memo(Content)