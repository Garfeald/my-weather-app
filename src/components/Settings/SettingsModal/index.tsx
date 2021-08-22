import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {addCardProps, cityWeatherFetchAsync} from "../../../redux/actions";
import {AppState} from "../../../redux/reducers/rootReducer";
import {ICardProps, ICityWeatherStore} from "../../../redux/types";

export type SettingsModalType = {
    disabled: boolean
    setDisabled: Dispatch<SetStateAction<boolean>>
}

export const SettingsModal = ({disabled, setDisabled}: SettingsModalType) => {

    const [value, setValue] = useState<string>()

    

    const { cityWeather } = useSelector<AppState, ICityWeatherStore>(state => state.cityWeather)

    const localWeatherAppCityList = localStorage.getItem('weatherAppCityList')

    const [citiesList, setCitiesList] = useState<ICardProps[]>([])

    const [citiesTitlesList, setCitiesTitlesList] = useState<string[]>()

    useEffect(() => {
        cityWeather && setCitiesList(
            citiesList =>
                [ ...citiesList, {
                    title: cityWeather.name,
                    country: cityWeather.sys.country,
                    temp: cityWeather.main.temp,
                    feels_like: cityWeather.main.feels_like,
                    main: cityWeather.weather[0].main,
                    description: cityWeather.weather[0].description,
                    speed: cityWeather.wind.speed,
                    pressure: cityWeather.main.pressure,
                    humidity: cityWeather.main.humidity,
                    visibility: cityWeather.visibility,
                    id: cityWeather.id,
                    weatherId: cityWeather.weather[0].id
            }])
        uniq(citiesList)
    }, [cityWeather])

    useEffect(() => {
        // @ts-ignore
        citiesList && dispatch(addCardProps(uniq(citiesList)))
        citiesList.length > 0 
            ? localStorage.setItem('weatherAppCityList', JSON.stringify(uniq(citiesList).map(city => city.title)))
            : localStorage.setItem('weatherAppCityList', '')
    }, [citiesList])

    const dispatch = useDispatch()

    const onSubmit = () => {
        value && dispatch(cityWeatherFetchAsync(value))
        setValue('')
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(value);
    };

    const deleteCity = (id: number) => {
        setCitiesList(citiesList.filter(city => city.id !== id))
    }

    const uniq = function(xs: ICardProps[]) {
        const seen = {};
        return xs.filter(function(x) {
            const key = JSON.stringify(x);
            // @ts-ignore
            return !(key in seen) && (seen[key] = x);
        });
    }

    const base = 'SettingsModal'

    return (
        <div className={`${base} ${disabled ? 'active' : ''}`} onClick={() => setDisabled(false)}>
            <div className={`${base}__modal-content`} onClick={e => e.stopPropagation()}>
                <div className={`${base}__modal-content__cross`}>
                    <img
                        src="https://i.ibb.co/5s53Nyj/cross.png"
                        alt="image-cross" className={`${base}__image-cross`}
                        onClick={() => setDisabled(false)}
                    />
                </div>
                <div className={`${base}__block-form`}>
                    <label htmlFor="modal-input">Add location:</label>
                    <input
                        id="modal-input"
                        name="title"
                        placeholder="City name..."
                        type="text"
                        value={value || ''}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <input
                        id="modal-input"
                        type="submit"
                        className={`${base}__block-form__submit ${!value && 'submit-disabled'}`}
                        value="Add city"
                        onClick={onSubmit}
                        disabled={!value}
                    />
                    <hr/>
                        <div className={`${base}__cities-list`}>
                            <ul>
                                {citiesList && uniq(citiesList).map(city => (
                                    <div 
                                        className={`${base}__cities-list__item`} 
                                        key={city.id}
                                        // onDragStart={}
                                        // onDragLeave={}
                                        // onDragEnd={}
                                        // onDragOver={}
                                        // onDrop={}
                                    >
                                        <li>{city.title}</li>
                                        <i className="bi bi-trash" onClick={() => city.id && deleteCity(city.id)}/>
                                    </div>
                                ))}
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}