import React, { useEffect } from 'react'
import { useState } from 'react'


export const InputRadio = ({isChecked, onChange,item,id,next}) => {

    const [radioState , setRadioState] = useState(isChecked)

    useEffect(() => {
        setRadioState(isChecked)
    },[isChecked])

    return <div>
        <li key={id}>
                  <label
                    onClick={() => next(item.key)}
                    id={`${item.key}`}
                    value={item.key}
                  >
                    <input
                      type="radio"
                      id={`${item.key}`}
                      value={item.key}
                      name="radiovalues"
                    //   checked={radioState}
                    //   onChange={onChange}
                    />

                    {item.variant}
                  </label>
                </li>
    </div>
}