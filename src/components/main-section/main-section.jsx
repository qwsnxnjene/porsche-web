import React from 'react'
import MainImage from '../../images/image-hero-desktop.png';
import SmallMainImage from '../../images/image-hero-mobile.png';
import {ReactComponent as Databiz} from '../../images/client-databiz.svg';

import { Button } from '../button';

export const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between'>
        <div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-60">
            <h1 className="text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{'Porsche\nTaycan'}</h1>
            <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>{"Комфортное будущее уже здесь.\nPorsche Taycan — воплощение скорости и технологий.\n Мощный, быстрый и экономичный, он идеален для тех,\n кто ценит инновации и стремится к экологичности."}</p>
            <Button isFilled={true}>Узнать больше</Button>
            <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
                <Databiz/>
            </div>
        </div>
        <div className="hidden xl:flex w-2/4 mt-20 xl:order-2 h-3/5">
            <img className='rounded-xl mt-20' src={MainImage} alt='main'/>
        </div>
        <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
            <img src={SmallMainImage} alt='main'/>
        </div>
    </section>
  )
}
