'use client';

import { useEffect } from 'react';

const videos = [
  // {
  //   version: 1,
  //   id: '67b3800ea42b0f5bab097c7f',
  //   thumbnail: 'https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b3800ea42b0f5bab097c7f/thumbnail.jpg',
  //   scriptSrc: 'https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b3800ea42b0f5bab097c7f/player.js'
  // },
  {
    // Version 2 Gano VWO
    version: 2,
    id: '67b3818fd2a6c3a06c164fd6',
    thumbnail: 'https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b3818fd2a6c3a06c164fd6/thumbnail.jpg',
    scriptSrc: 'https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b3818fd2a6c3a06c164fd6/player.js'
  },
  // {
  //   version: 3,
  //   id: '67b381a1aab0e4b251a3b934',
  //   thumbnail: 'https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381a1aab0e4b251a3b934/thumbnail.jpg',
  //   scriptSrc: 'https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381a1aab0e4b251a3b934/player.js'
  // },
  // {
  //   version: 4,
  //   id: '67b381b2fc05b6e78af4947b',
  //   thumbnail: 'https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381b2fc05b6e78af4947b/thumbnail.jpg',
  //   scriptSrc: 'https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381b2fc05b6e78af4947b/player.js'
  // },
  {
    version: 5, // Thankyou
    id: '67b381c37ec45990fcee8acb',
    thumbnail: 'https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381c37ec45990fcee8acb/thumbnail.jpg',
    scriptSrc: 'https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/67b381c37ec45990fcee8acb/player.js'
  },
  // {
  //   version: 6, // Old one
  //   id: "6736a8255ee58e000b77dd12",
  //   thumbnail: "https://images.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/6736a8255ee58e000b77dd12/thumbnail.jpg",
  //   scriptSrc: "https://scripts.converteai.net/e6c08ca4-cb83-46ad-9564-d95d0d125100/players/6736a8255ee58e000b77dd12/player.js"
  // }
];

const VideoEmbed = ({ version }:any) => {
  const video = videos.find(v => v.version === version);

  useEffect(() => {
    if (video) {
      const existingScript = document.getElementById(`script_${video?.id}`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = video.scriptSrc;
        script.async = true;
        script.id = `script_${video.id}`;
        document.head.appendChild(script);
      }
    }

    return () => {
      const scripts = document.querySelectorAll("[id^='script_']");
      scripts.forEach(script => script.remove());
    };
  }, [video]);

  if (!video) return <p>Versión de video no encontrada</p>;

  return (
    <div
      id={`vid_${video.id}`}
      style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
    >
      <img
        id={`thumb_${video.id}`}
        src={video.thumbnail}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        alt="thumbnail"
      />
      <div
        id={`backdrop_${video.id}`}
        style={{
          backdropFilter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      ></div>
    </div>
  );
};

export default VideoEmbed;