import React from 'react'
import { useState } from 'react';

import "./Filter.css";
import AllCards from './AllCards';

const Filter = ({ list }) => {
    const [filterType, setFilterType] = useState(0);
    const [filterOption, setFilterOption] = useState(0);
    const genders = [];
    const hair = [];
    const species = [];
    list.map((item) => { genders.push(item.gender) });
    const genderFiltered = Array.from(new Set(genders));
    list.map((item) => { hair.push(item.hairColor) });
    const hairFiltered = Array.from(new Set(hair));
    list.map((item) => { species.push(item.species) });
    const speciesFiltered = Array.from(new Set(species));


    return (
        <div className="filter-area">
            <div className="filter-container">
                <p className="filter-bar-title">Recherchez le wookie idéal parmi nos membres</p>
                <div className="filter-bar">
                    <div className="select-element">
                        <p>Sélectionnez le genre</p>
                        <select name="gender" onChange={
                            e => {
                                setFilterType(e.target.value)
                                setFilterOption(1);
                            }
                        }>
                            <option value=""> - </option>
                            {
                                genderFiltered.map(
                                    (item) => {
                                        return (<option value={item}>{item}</option>)
                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="select-element">
                        <p>Sélectionnez la couleur de cheveux</p>
                        <select name="hair" onChange={
                            e => {
                                setFilterType(e.target.value)
                                setFilterOption(2);
                            }
                        }>
                            <option value=""> - </option>
                            {
                                hairFiltered.map(
                                    (item) => {
                                        return (<option value={item}>{item}</option>)
                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="select-element">
                        <p>Sélectionnez l'espèce</p>
                        <select name="species" onChange={
                            e => {
                                setFilterType(e.target.value)
                                setFilterOption(3);
                            }
                        }>
                            <option value=""> - </option>
                            {
                                speciesFiltered.map(
                                    (item) => {
                                        return (<option value={item}>{item}</option>)
                                    }
                                )
                            }
                        </select>
                    </div>
                </div>
                <div>
                    <AllCards
                        filter={filterType}
                        filterOption={filterOption}
                        characters={list}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter
