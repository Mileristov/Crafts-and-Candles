import React from "react";

const Spotify = () => {
    return (
        <div className="spotify-wrap">
            <div className="spotify">
                <iframe
                    title="spot"
                    src="https://open.spotify.com/embed/playlist/2JQiqTV1sWwK4mYQNKtjLG?utm_source=generator"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Spotify;
