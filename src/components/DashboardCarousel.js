'use client';

import React from "react";
import { Carousel } from 'flowbite-react';

function DashboardCarousel() {
    return (
        <div>
            <div className="h-24 m-2 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src="https://images.unsplash.com/photo-1516755538454-c8379d7a86aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://media.istockphoto.com/id/1025966854/photo/set-of-household-kitchen-technics-on-yellow-background-set-of-appliance-in-the-new.jpg?s=2048x2048&w=is&k=20&c=jiysoPY6Vjp1LkBHWl6yGOkoIoJnY3XWCF7-i3bwikc=" alt="..." />
                    <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <img src="https://media.istockphoto.com/id/924927670/photo/vintage-furniture-and-home-design-objects-in-shop.jpg?s=2048x2048&w=is&k=20&c=Vpz1E2yeHyORWk69X2cTVyEEr78IB9Iaj44m8xtPyCw=" alt="..." />
                    <img src="https://media.istockphoto.com/id/1304421600/photo/mannequin-of-women-wearing-colorful-traditional-indian-dresses.jpg?s=2048x2048&w=is&k=20&c=eAQBHA4S9QyjrGlEIkG53hJI5BQrnahHTLHFfwjsG9I=" alt="..." />
                </Carousel>
            </div>
        </div>
    );
}

export default DashboardCarousel;
