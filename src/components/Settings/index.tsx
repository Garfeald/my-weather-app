import React, {useState} from "react";
import './index.scss'
import {SettingsModal} from "./SettingsModal";

export const Settings = () => {

    const [isModalDisabled, setIsModalDisabled] = useState<boolean>(false)

    const  base = 'Settings'

    return (
        <div className={`${base}`}>
            <i className={`${base}__icon bi bi-gear-fill`} onClick={() => setIsModalDisabled(true)}/>
            <SettingsModal disabled={isModalDisabled} setDisabled={setIsModalDisabled}/>
        </div>
    )
}