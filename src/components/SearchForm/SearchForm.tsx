import React, {FC} from 'react'
import './SearchForm.css'

interface SearchFormProps {
    value: string,
    onChange: (e:object) => void;
    onClick: () => void
}

export const SearchForm:FC<SearchFormProps> = ({value,onChange,onClick}) => {
    return(
        <form className='form'>
            <input value={value} className='searchInput'/>
            <button onClick={onClick} className='resetButton'>Reset</button>
        </form>
    )
}