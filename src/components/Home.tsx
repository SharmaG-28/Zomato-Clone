import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RestProp {
    rest: any;
    city: any;
    search: any;
}

const Home = (props: RestProp) => {

    const searchString = (props.search ?? '').toLowerCase();

    return (
        <div className='p-4 pl-20'>
            <h1 className='font-semibold text-3xl'>Best Food in Location</h1>
            {props.city ? (
                <div className='grid grid-cols-3'>
                    {props.rest
                        ?.filter((data: any) => data.address.city.includes(props.city))
                        .filter((data: any) => data.name.toLowerCase().includes(searchString))
                        .map((data: any) => (
                            <Link to="/details" state={{ data: data, city: data.address.city }} key={data.id} >
                                <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12 p-4">
                                    <img className="w-full rounded-2xl h-60" src={data.food_photos[0] ?? data.store_photos[0]} alt={data.name} />
                                    <div className="py-4">
                                        <div className="font-semibold text-lg mb-2">{data.name}</div>
                                        <p className="text-gray-400 text-base">{data.cuisines[0]}, {data.cuisines[1]}, {data.cuisines[2]}...</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            ) : (
                <div className='grid grid-cols-3'>
                    {props.rest
                        ?.filter((data: any) => data.name.toLowerCase().includes(searchString))
                        .map((data: any) => (
                            <Link to="/details" state={{ data: data }} key={data.id}>
                                <div className="max-w-xs rounded-xl overflow-hidden shadow-sm mt-12 p-4">
                                    <img className="w-full rounded-2xl h-60" src={data.food_photos[0] ?? data.store_photos[0]} alt={data.name} />
                                    <div className="py-4">
                                        <div className="font-semibold text-sm mb-2">{data.name}</div>
                                        <p className="text-gray-700 text-base">{data.cuisines[0]}, {data.cuisines[1]}, {data.cuisines[2]}...</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Home;
