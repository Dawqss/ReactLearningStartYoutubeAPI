import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="row">
                <div className="col-md-12">
                    <div className="embed-responisve embed-responisve-16by9">
                        <iframe className="embed-repsonsive-item" src={url}></iframe>
                    </div>
                </div>
                <div className="col-md-12 p-3">
                    <div className="details">
                        <div className="py-2">
                            <span className="badge badge-light">
                                {video.snippet.title}
                            </span>
                        </div>
                        <div className="">s
                            {video.snippet.description}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoDetail;