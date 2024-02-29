export default function AlbumPlayed() {
  return (
    <div className="albums-played-on">
      <h2 className="albums-played-title">Albums I've Played On</h2>

      <div className="albums-played-container">
        <div className="albums-played-main">
          <iframe
            className="iframe-large"
            src="https://bandcamp.com/EmbeddedPlayer/album=3301626377/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/"
            seamless
            title="zithers-1"
          >
            <a href="https://johnnyzithers.bandcamp.com/album/johnny-zithers-is-dead">
              Johnny Zithers is Dead by Johnny Zithers
            </a>
          </iframe>
          (BASS)
          <iframe
            className="iframe-large"
            src="https://bandcamp.com/EmbeddedPlayer/album=1431050196/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/transparent=true/"
            seamless
            title="zithers-2"
          >
            <a href="https://johnnyzithers.bandcamp.com/album/hi-world">
              Hi World by JOHNNY ZITHERS
            </a>
          </iframe>
        </div>
        <iframe
          className="iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=2093933445/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="mt-royal"
        >
          <a href="https://mtroyal2.bandcamp.com/album/mount-royal">
            Mount Royal by Mt. Royal
          </a>
        </iframe>
        (GUITAR/VOCALS)
        <iframe
          className="iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=1707507135/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="human cat"
        >
          <a href="https://humancat.bandcamp.com/album/total-recall">
            Total Recall by Human Cat
          </a>
        </iframe>
        <iframe
          className="iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=1799917235/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="lake country split"
        >
          <a href="https://lakecountry.bandcamp.com/album/lake-country-sans-aids-split">
            Lake Country / Sans Aids Split by Lake Country
          </a>
        </iframe>
        (BASS/VOCALS)
        <iframe
          className="iframe"
          src="https://bandcamp.com/EmbeddedPlayer/album=1802214255/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
          seamless
          title="lake country 7inch"
        >
          <a href="https://lakecountry.bandcamp.com/album/virtual-7">
            Virtual 7&quot; by Lake Country
          </a>
        </iframe>
      </div>
    </div>
  );
}
