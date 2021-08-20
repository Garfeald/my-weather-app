import React, {useEffect, useState} from "react";
import './index.scss'
import {ICardProps} from "../../redux/types";

export type ActualWeatherIcon = {
    icon: string
}

export const Card = ({title, country, temp, feels_like, main, description, speed, pressure, humidity, visibility, weatherId}: ICardProps) => {

    const [iconState, setStateIcon] = useState<ActualWeatherIcon>()

    const calCelsius = (temp: number) => {
        const cell = Math.floor(temp - 273.15);
        return cell;
    }

    const weatherIcons = {
        Clear: 'bi bi-brightness-high',
        Thunderstorm: 'bi bi-lightning',
        Drizzle: 'bi bi-cloud-drizzle',
        Rain: 'bi bi-cloud-rain',
        Snow: 'bi bi-cloud-snow',
        Atmosphere: 'bi bi-cloud-fog2',
        Clouds: 'bi bi-cloud-sun'
    }

    const get_WeatherIcon = (rangeId: number) => {
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
                setStateIcon({ icon: weatherIcons.Thunderstorm });
                break;
            case rangeId >= 300 && rangeId <= 321:
                setStateIcon({ icon: weatherIcons.Drizzle });
                break;
            case rangeId >= 500 && rangeId <= 521:
                setStateIcon({ icon: weatherIcons.Rain });
                break;
            case rangeId >= 600 && rangeId <= 622:
                setStateIcon({ icon: weatherIcons.Snow });
                break;
            case rangeId >= 701 && rangeId <= 781:
                setStateIcon({ icon: weatherIcons.Atmosphere });
                break;
            case rangeId === 800:
                setStateIcon({ icon: weatherIcons.Clear });
                break;
            case rangeId >= 801 && rangeId <= 804:
                setStateIcon({ icon: weatherIcons.Clouds });
                break;
            default:
                setStateIcon({ icon: weatherIcons.Clouds });
        }
    }

    useEffect(() => {
        weatherId && get_WeatherIcon(weatherId)
    }, [weatherId])

    const base = 'Card'

    return (
        <div className={`${base}`}>
            <div className={`${base}__city-name`}>{title}, {country}</div>
            <div className={`${base}__temp-block`}>
                <i className={`${base}__temp-block__icon ${iconState && iconState.icon}`}/>
                <div className={`${base}__temp-block__text`}>{temp && calCelsius(temp)}&deg;С</div>
            </div>
            <div className={`${base}__description`}>Feels like {feels_like && calCelsius(feels_like)}&deg;С. {main}, {description}</div>
            <div className={`${base}__wind-block`}>
                <i className="bi bi-wind"/>
                <span>{speed} m/s</span>
                <i className="bi bi-arrow-down-square"/>
                <span>{pressure} hPa</span>
            </div>
            <div className={`${base}__humidity`}>
                <span>humidity: {humidity}%</span>
                <span>visibility: {visibility && (visibility / 1000).toFixed(1)}km</span>
            </div>
        </div>
    )
}