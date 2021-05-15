import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import s from "./SuperCheckbox.module.css";
import SuperInputText from "../c1-SuperInputText/SuperInputText";
import SuperButton from "../c2-SuperButton/SuperButton";
import {useDispatch} from "react-redux";
import {SetPacksSearchTermAC} from "../../../../features/packs/bll/packs-reducer";

type SearchPropsType = {

};

const Search: React.FC<SearchPropsType> = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const setSearchTerm = () => {
        dispatch(SetPacksSearchTermAC(inputValue))
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div>
            <SuperInputText placeholder={"Type name"} onChange={onChangeCallback}/>
            <SuperButton onClick={setSearchTerm}>Search</SuperButton>
        </div>
    );
}

export default Search;
