import { DeepPartial } from "@reduxjs/toolkit";
import { FC } from "react";
import { Provider } from "react-redux";
import { StoreSchema, createStore } from "../config";

interface StoreProviderProps {
    children?: React.ReactNode
    initialState?: DeepPartial<StoreSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {children, initialState} = props

    const store = createStore(initialState as StoreSchema)

    return <Provider store={store}>{children}</Provider>;
};

