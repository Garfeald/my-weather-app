import './App.scss'
import {Settings} from "./components/Settings";
import {Provider} from 'react-redux';
import {ReactElement} from "react";
import {store} from "./redux/store";
import {CardsList} from "./components/CardsList";

export const  App = (): ReactElement => {

    const base = 'App'

    return (
        <Provider store={store}>
            <div className={`${base}`}>
                <div className={`${base}__block`}>
                    <Settings />
                    <CardsList />
                </div>
            </div>
        </Provider>
    )
}