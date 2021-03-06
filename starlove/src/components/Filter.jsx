import React from 'react'
import { useState } from 'react';

import "./Filter.css";
import AllCards from './AllCards';

const Filter = ({ list }) => {
    const [filters, setFilters] = useState({hair:'', gender:'', species:''});
    const genders = [];
    const hair = [];
    const species = [];
    list.map(item => genders.push(item.gender));
    const genderFiltered = Array.from(new Set(genders)).sort();
    list.map(item => hair.push(item.hairColor));
    const hairFiltered = Array.from(new Set(hair)).sort();
    list.map(item => species.push(item.species));
    const speciesFiltered = Array.from(new Set(species)).sort();

    return (
        <div className="filter-area">
            <div className="filter-container">
                <p className="filter-bar-title">Recherchez le wookie idéal parmi nos membres</p>
                <div className="filter-bar">
                    <div className="select-element">
                        <p>Sélectionnez le genre</p>
                        <select name="gender" onChange={
                            e => setFilters({...filters, gender:e.target.value})
                        }>
                            <option value=""> - </option>
                            {genderFiltered.map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="select-element">
                        <p>Sélectionnez la couleur de cheveux</p>
                        <select name="hair" onChange={
                            e => setFilters({...filters, hair:e.target.value})
                        }>
                            <option value=""> - </option>
                            {hairFiltered.map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="select-element">
                        <p>Sélectionnez l'espèce</p>
                        <select name="species" onChange={
                            e => setFilters({...filters, species:e.target.value})
                        }>
                            <option value=""> - </option>
                            {speciesFiltered.map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
                <AllCards filters={filters} characters={list} />
            </div>
        </div>
    )
}

export default Filter
