import React, {useState, useEffect} from 'react'
import { SHA1 } from 'crypto-js'
import './Episodes.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleEpisode from './SingleEpisode';

export default function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    const pci_date = Math.floor((new Date()).getTime()/1000);

    const pci_keyval = process.env.REACT_APP_PCI_KEYVAL;
    const pci_secretval = process.env.REACT_APP_PCI_SECRETVAL;
    console.log(pci_date, pci_keyval, pci_secretval);

    var hashstring = {pci_date} + {pci_keyval} + {pci_secretval};

    var hash = SHA1(hashstring);

    var pci_key = hash.toString();


    const getEpisodes = () => {
        axios.get("https://api.podcastindex.org/api/1.0/episodes/byfeedid?fulltext=true&id=946122", {
            headers: {
                "X-Auth-Date" : {pci_date},
                "X-Auth-Key" : {pci_keyval},
                "User-Agent" : "BowlAfterBowlWebApp/0.1.0",
                "Authorization" : {pci_key}
            }
        }).then((response) => {
            setEpisodes(response.data);
            console.log(response);
            
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
