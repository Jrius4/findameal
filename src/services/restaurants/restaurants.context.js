import React, { useState, createContext, useEffect, useMemo } from 'react'
import { restaurantRequest, restaurantTransform } from './restaurants.service'
export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantRequest().then(restaurantTransform).then((result) => {
                setIsLoading(false);

                setRestaurants(result);
            }).catch(error => {
                setIsLoading(false);
                setError(error);
                console.error(error)
            });
        }, 2000);
    }

    useEffect(() => {
        retrieveRestaurants();
    }, []);
    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}
