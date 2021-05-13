import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";
import SuperInputText from "../c1-SuperInputText/SuperInputText";

type SearchPropsType = {

};

const Search: React.FC<SearchPropsType> = (
    {
        // type,
        // onChange, onChangeChecked,
        // className, spanClassName,
        // children,
        //
        // ...restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e)
    //     onChangeChecked && onChangeChecked(e.currentTarget.checked)
    // }
    //
    // const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

    return (
        <div>
            <SuperInputText placeholder={"Search"}/>
        </div>
    );
}

export default Search;
