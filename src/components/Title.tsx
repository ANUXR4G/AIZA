import React from 'react';

type TitleProps = {
    heading: string;
    title: string;
    styleTitle?: string;
    paragraph?: string;

}

const Title = ({heading, title, styleTitle, paragraph}: TitleProps) => {
    return (
        <div className='flex items-center flex-col justify-center text-TextColor  text-center'>
            <div className='py-2 px-4 border rounded-lg mb-4 md:mb-6 border-[#fcfcfa]/20 font-medium text-xs md:text-sm lg:text-base' >{heading}</div>
            <h3 className='mb-3 md:mb-6 text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium'>{title}<span className='text-mainColor font-Instrument italic '>{styleTitle}</span></h3>
            <p className='text-xs md:text-base lg:text-lg text-center text-SecondTextColor'>{paragraph}</p>
        </div>
    );
};

export default Title;