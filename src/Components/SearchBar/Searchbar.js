import React, { useState, useEffect } from 'react';
import Comments from '../Comments/Comments';
import './Searchbar.css';
import ResponseData from '../Data.json';
import { FcSearch } from "react-icons/fc";

const Searchbar = () => {

    const [filtereddata, setFiltereddata] = useState(ResponseData);
    
    const handlefilter = (e) => {
        const searchWord = e.target.value;
        if (searchWord) {
            setFiltereddata(ResponseData.filter((item) => {
                return (
                    item.Description.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
                )
            }))
        } else {
            setFiltereddata(ResponseData)
        }
    }

    useEffect(() => {
        setFiltereddata(filtereddata)
    }, [filtereddata])


    console.log(filtereddata)
    return (
        <>
            <div className="Searchbar">
                <input
                    type="text"
                    placeholder="Search items"
                    className="Search_input"
                    // value={filtereddata}
                    onChange={handlefilter}
                />
                <div>
                    <FcSearch size={25}/>
                </div>
                
            </div>
            <Comments data={filtereddata} />
            
        </>
    )
}

export default Searchbar