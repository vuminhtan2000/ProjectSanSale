import React from 'react'
import Cateproduct from '../../components/Sanpham/cateproduct'
import Homemenu from "../../components/menuhome/homemenu";
import Header from "../../components/headerconteact/header";
import Slides from '../slide/slide';
export default function Sanpham() {
    return (
        <div>
            <Header/>
            <Homemenu/>
            <Slides/>
            <Cateproduct/>
        </div>
    )
}
