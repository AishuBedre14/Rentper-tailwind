import React from 'react'
import { Carousel } from 'flowbite-react';

function CardLayout() {
    return (
        <div className="mt-2 h-screen max-w-full grid grid-cols-3 gap-2">
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
            </div>
        </div>
    )
}

export default CardLayout