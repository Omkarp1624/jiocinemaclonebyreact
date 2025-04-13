import React, {useState} from 'react';
import styles from './tags.module.css'
const Tags = () => {

    let [tags,setTags] = useState([
        "For You",
        "Action",
        "Drama",
        "Sci-Fi",
        "Thriller",
        "Romantic Comedy",
        "Superhero",
        "Crime Series",
        "Fantasy",
        "Animated",
        "Documentary",
        "Mystery",
        "Biopic",
        "Family"
    ])
    return (
        <>
             <div className={styles.tags}>
                {
                    tags.map((tag)=>{
                        return <p className={styles.tag}>{tag}</p>
                    })
                }
             </div>

        </>
    )
}

export default Tags