import React, { useRef, memo } from 'react';
import styles from './search.module.css'

//memo지만 update됨, 전달되는 prop이 변경된다는 것(onSearch)
const Search = memo(
    ({ onSearch }) => {

        const inputRef = useRef();

        const handleSearch = (e) => {
            e.preventDefault();
            const search = inputRef.current.value;
            search && onSearch(search);
            inputRef.current.value = "";
        }

        const onKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSearch(e);
            }

        }


        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" className={styles.logoImg} />
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input
                    ref={inputRef}
                    type="search"
                    placeholder="Search.."
                    className={styles.input}
                    onKeyPress={onKeyPress}
                />
                <button className={styles.button} onClick={handleSearch} type="submit">
                    <img className={styles.buttonImg} src="/images/search.png" alt="" className={styles.buttonImg} />
                </button>
            </header >
        )
    }
)

export default Search;