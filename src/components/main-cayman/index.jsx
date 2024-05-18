import React from 'react'
import { Button } from '../button'
import MainImage from '../../images/Cayman.png';
import {ReactComponent as Databiz} from '../../images/caymans.svg';

export const MainCayman = () => {
    return (
        <section className='w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between'>
            <div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-60">
                <h1 className="text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{'Porsche\n718 Cayman'}</h1>
                <p className='text-medium-gray text-lg my-12 whitespace-pre-line'>{"Создан для жизни в спортивном стиле\nPorsche Panamera: исключительное сочетание стиля, мощности и комфорта.\nОткройте мир скорости и роскоши с автомобилем,\nкоторый воплощает передовые технологии и безупречное качество."}</p>
                <Button isFilled={true}>Узнать больше</Button>
                <div className="flex justify-center xl:justify-left xl:absolute bottom-2 w-full mt-20">
                    <Databiz/>
                </div>
            </div>
            <div className="hidden xl:flex w-2/4 mt-20 xl:order-2 h-3/5">
                <img className='rounded-xl mt-20' src={MainImage} alt='main'/>
            </div>
            <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
                <img src={MainImage} alt='main'/>
            </div>
        </section>
      )
}
