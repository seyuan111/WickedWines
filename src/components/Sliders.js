import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Sliders = () => {

    const slides = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Red_and_white_wine_12-2015.jpg/800px-Red_and_white_wine_12-2015.jpg'
        },
        {
            url: 'https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/3/ac/3ac6b114-fe68-11e4-9ba5-f37ab6b22a1e/555ba1b087b4f.image.jpg?resize=1200%2C1004'
        },
        {
            url: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5ae0e0112124509.600ef4600a723.png'
        },
        {
            url: 'https://lymebaywinery.co.uk/wp-content/uploads/2021/07/Lyme-Bay-Fruit-Wines-1024x364.jpg'
        },
        {
            url: 'https://images.squarespace-cdn.com/content/v1/535ee578e4b0daaf97db7663/1493758404262-AELOAKAGO1C794E1CJXO/fruit+wines+gradient.jpg?format=1000w'
        }
    ]

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = current === 0;
        const newIndex = isFirstSlide ? slides.length -1 : current -1;
        setCurrent(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = current === slides.length -1;
        const newIndex = isLastSlide ? 0 : current + 1;
        setCurrent(newIndex);
    }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div style={{backgroundImage: `url(${slides[current].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
    </div>
  )
}

export default Sliders