import React, {useState} from 'react'

export default function SingleEpisode(props) {
    return (
        <div className="singleEpisode col-md-8 m-2">
            <h3>{props.episode.EpisodeName}</h3>
        </div>
    )
}
