import { useState } from "react"
import Card from "./Card";
import styles from '../styles/styles.module.css'

const Form = () => {
    const [song, setSong] = useState("");
    const [artist, setArtist] = useState("");
    const [songs, setSongs] = useState([])

    const [error, setError] = useState(false);
    const [show, setShow] = useState(true);
    console.log(songs);

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(song.length<=3 
            && artist.length<=6) {
            setError(true);
            setShow(true);
        } else { 
            setError(false);
            setShow(false);
            setSongs({...songs, song})
        }
    }

    const reset = () => {
        setSong("");
        setArtist("");
        setError(false)
        setShow(true)
    }
  return (
    <>
        {show ?
            (<form onSubmit={handleSubmit} className={styles.formContainer}>
                <input 
                    type="text"
                    value={song}
                    placeholder="Ingrese una canción"
                    onChange={(e) => setSong(e.target.value)}/>
                <input 
                    type="text"
                    value={artist}
                    placeholder="Ingrese el nombre del artista"
                    onChange={(e) => setArtist(e.target.value)}/>
                <button>Agregar canción</button>
            </form>) : (
                <Card artist={artist} song={song}/>
            )
        }
        {error && 
            <h1 style={{color: "red", fontSize: "24px   "}}>Por favor chequea que la información sea correcta!</h1>
        }
        <button onClick={reset}>Agregar otra canción</button>
    </>
  )
}

export default Form