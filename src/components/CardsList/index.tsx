import React, {ReactElement, useEffect, useState} from "react";
import {Card} from "../Card";
import {useSelector} from "react-redux";
import {AppState} from "../../redux/reducers/rootReducer";
import {CardPropsStore} from "../../redux/types";

export const CardsList = (): ReactElement => {
    const { cardProps } = useSelector<AppState, CardPropsStore>(state => state.cardProps)
    return (
        <div>
            {cardProps && cardProps.map(city => (
                <div key={city.id}>
                    <Card
                        title={city.title}
                        country={city.country}
                        temp={city.temp}
                        feels_like={city.feels_like}
                        main={city.main}
                        description={city.description}
                        speed={city.speed}
                        pressure={city.pressure}
                        humidity={city.humidity}
                        visibility={city.visibility}
                    />
                </div>
            ))
            }
        </div>
    )
}