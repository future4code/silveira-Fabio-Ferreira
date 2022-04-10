import React from "react";

export default class CriarPlaylist extends React.Component{
    render(){
        return(
            <div>
                <h2>CriarPlaylist</h2>
                <button onClick={this.props.irInfos}>Playlist Especifica</button>
            </div>
        )
    }
}