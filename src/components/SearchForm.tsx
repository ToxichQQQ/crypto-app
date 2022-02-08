import React, {FC} from 'react'


interface SearchFormProps {
    value: string,
    onChange: (e:object) => void;
    onClick: () => void
}

export const SearchForm:FC<SearchFormProps> = ({value,onChange,onClick}) => {
    return(
        <form>
            <input value={value}/>
            <button onClick={onClick}>Refresh</button>
        </form>
    )
}