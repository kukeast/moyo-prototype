import Slider from 'rc-slider'
import React, { useState } from 'react'
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const Value = styled.p`
    text-align: center;
`

export default function RangeSlider() {
    const range = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500]
    const [value, setValue] = useState([14,range.length - 1])
    return (
        <>
            <Value>
                {value[0] === value[1] ? 
                    range[value[1]] + "GB" :
                    value[0] === 0 && value[1] === range.length - 1 ?
                    "전체" :
                    range[value[0]] + " ~ " + range[value[1]] + "GB"
                }
            </Value>
            <Slider
                range
                allowCross={false}
                min={0}
                max={range.length - 1}
                defaultValue={value}
                onChange={e => setValue(e)}
            />
        </>
    )
}
