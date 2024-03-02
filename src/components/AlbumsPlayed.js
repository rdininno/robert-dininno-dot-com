import { useState } from "react";

export default function AlbumPlayed() {
  const [albumSelected, setAlbumSelected] = useState(null);

  const albumData = [
    {
      albumName: "Johnny Zithers is Dead - Johnny Zithers",
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=3301626377/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "zithers 1",
        className: "iframe",
      },
    },
    {
      albumName: "Hi World - JOHNNY ZITHERS",
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=1431050196/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "zithers 2",
        className: "iframe",
      },
    },
    {
      albumName: "Mount Royal - Mt. Royal",
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=2093933445/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "crown",
        className: "iframe",
      },
    },
    {
      albumName: "Total Recall - Human Cat",
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=1707507135/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "human cat",
        className: "iframe",
      },
    },
    {
      albumName: "Lake Country/Sans Aids Split - Lake Country",
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=1799917235/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "lake country 1",
        className: "iframe",
      },
    },
    {
      albumName: 'Virtual 7" - Lake Country',
      iframeDetails: {
        src: "https://bandcamp.com/EmbeddedPlayer/album=1802214255/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/",
        seamless: "seamless",
        title: "lake country 2",
        className: "iframe",
      },
    },
  ];

  const handleAlbumSelection = (album) => setAlbumSelected(album);

  return (
    <div className="albums-played-on">
      <div className="album-list">
        <div className="album-list-background">
          {albumSelected && (
            <iframe
              title={
                albumSelected.iframeDetails.title || albumSelected.albumName
              }
              className={albumSelected.iframeDetails.className}
              allow={albumSelected.iframeDetails.allow}
              src={albumSelected.iframeDetails.src}
              seamless={albumSelected.iframeDetails.seamless}
            ></iframe>
          )}
        </div>
      </div>

      <div className="album-names-container-scroll">
        {albumData.map((album, index) => (
          <div
            className="album-name-smaller"
            key={index}
            onClick={() => handleAlbumSelection(album)}
          >
            {album.albumName}
          </div>
        ))}
      </div>
    </div>
  );
}
