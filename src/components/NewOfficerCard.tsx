import React, { useState } from 'react'
interface OfficerCardProps {
    title: string;
    name: string;
    uniqname: string;
}

function NewOfficerCard(props: OfficerCardProps) {
    
    return (
        <div>
            {rope}        </div>

        <div className = "d-flex officerCard">
            <div className = "bg-container">
                <div className = "officerBox cardOne card bg-dblue text-center">
                    <p className = "txt-beige txt-Merri">{props.title}</p>
                </div>

                <div className = "officerBox cardTwo card bg-dblue text-center">
                    <p className = "txt-beige txt-Merri">{props.name}</p>
                </div>

                <div className = "officerBox cardThree card bg-lblue">
                    <div className ="card-body"> </div>
                </div>

                <div className = "officerBox cardFour card bg-lblue text-center">
                    <p className = "txt-dblue txt-Merri">{props.uniqname}</p>
                </div>
            </div>

            <button type="button" className ="btn bg-beige"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-fill txt-dblue" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
            </button> 

            <button type="button" className ="btn bg-beige"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3 txt-blue" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </button> 
        </div>
    )
}

export const OfficerCardList = () => {
    return (

    )
}
