import React, {useState, useEffect} from 'react'

import './Episodes.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleEpisode from './SingleEpisode';


export default function Episodes() {
    const [episodes, setEpisodes] = useState(false);

    const getEpisodes = () => {
        axios.get("https://api.podcastindex.org/api/1.0/episodes/byfeedid?fu;;text=true&id=946122").then((response) => {
            setEpisodes(response.data);
        });
    };

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <section className="episodes">
            <article className="bg-info p-5">
                <h1 className="text-center">Latest Episodes</h1>
            </article>
            <Container>
                <article className="episodesGallery row justify-content-center">
                    {
                    episodes.map(x =>
                        <SingleEpisode
                            key={x.id}
                            episode={x}/>
                    )}
                </article>
            </Container>
        </section>
    )
}
