import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    const videoLink = video.snippet.thumbnails.high.url;
    return(
        <li className={'list-group-item'}>
            <a href="javascript:void(0)" onClick={() => onVideoSelect(video)}>
                <div className={'video-list img-thumbnail media'}>
                    <div className="row">
                        <div className="col-5">
                            <div className="media-left">
                                <img src={videoLink} alt="" className="media-object img-fluid"/>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="media-body">
                                <div className="media-heading">
                                    {video.snippet.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
};


export default VideoListItem;