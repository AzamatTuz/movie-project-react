import axios from "axios";
import { useState } from "react";


export default function Search({ setFilms}) {

    const [text, setText] = useState("")

    async function getMovie(e) {
        e.preventDefault();

        if (!text.trim()) return;

        try{
            const res = await axios.get(`https://www.omdbapi.com/?apikey=17dec6d0&s=${text}`)
            if (res.data.Response == 'False') {
                setFilms([])
            } else {
                setFilms(res.data.Search)
                setText("")
                
            }
            
        } catch {
            console.error();
            
        }
    }

    return(
        <>
        
        <form onSubmit={getMovie}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
            <button type="submit">Search</button>            
        </form>
        
        </>  
    );
}