import Slider from 'rc-slider'
import React, { useState } from 'react'
import 'rc-slider/assets/index.css';
import styled from 'styled-components';
import { COLOR } from '../constants/color';

const Value = styled.p`
    text-align: center;
    color: ${COLOR.black};
    margin-bottom: 16px;
`
const CustomRange = styled(Slider)`
    .rc-slider-rail{
        background-color: ${COLOR.gray200};
    }
    .rc-slider-track{
        background-color: ${COLOR.indigo500};
    }
    .rc-slider-handle{
        width: 24px;
        height: 24px;
        margin-top: -10px;
        border: solid 3px ${COLOR.indigo500};
        opacity: 1;
        &:active{
            box-shadow: none;
        }
        &:focus{
            box-shadow: none;
        }
    }
    .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: ${COLOR.indigo500};
        box-shadow: 0px 4px 10px 0px #343A4033;
    }
    @media only screen and (min-width: 768px) {
        .rc-slider-handle{
            width: 20px;
            height: 20px;
            margin-top: -8px;
        }
    }
`

export default function RangeSlider() {
    const range = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500]
    const [value, setValue] = useState([10,19])
    return (
        <>
            <Value>
                {value[0] === value[1] ? 
                    range[value[1]] + "GB" :
                    value[0] === 0 && value[1] === range.length - 1 ?
                    "전체" :
                    range[value[0]] + "GB ~ " + range[value[1]] + "GB"
                }
            </Value>
            <CustomRange
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
