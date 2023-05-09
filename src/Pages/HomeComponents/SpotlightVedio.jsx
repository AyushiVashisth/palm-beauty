import React, { useRef, useState } from "react";

const SpotlightVedio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };
  return (
    <div>
                  
      <video
        onTimeUpdate={handleProgress}
        ref={videoRef}
        width="100%"
        height="100%"
        controls
      >
                        {" "}
        <iframe
          width="400"
          height="226"
          src="https://www.youtube.com/embed/NrI9d0XiP7M"
          title="How to find perfect foundation for your skin tone Ft. Purplle"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
                    
      </video>
                  
      <div>
                        
        <button onClick={togglePlay}>
                              {isPlaying ? "Pause" : "Play"}
                          
        </button>
                        
        <progress value={progress} max="100" />
                    
      </div>
              
    </div>
  );
};

export default SpotlightVedio;
// <iframe width="400" height="226" src="https://www.youtube.com/embed/NrI9d0XiP7M" title="How to find perfect foundation for your skin tone Ft. Purplle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
