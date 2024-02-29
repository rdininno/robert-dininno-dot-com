import ArrowButton from "./ArrowButton";
import Album from "./Album";
import MusicMenuButton from "./MusicMenuButton.js";

export default function Music({ onMenuSelect }) {
  return (
    <div className="music-page">
      <header className="music-header">
        <div className="back-button">
          <ArrowButton direction="up" onClick={() => onMenuSelect("Art")} />
        </div>
        <div className="music-page-title">
          <h1>Audio</h1>
        </div>
      </header>

      <div className="music-page-menu">
        <MusicMenuButton
          label="Albums I've Made"
          scrollToClass=".music-content"
        />
        <MusicMenuButton
          label="Albums I've Recorded"
          scrollToClass=".albums-recorded"
        />
        <MusicMenuButton
          label="Albums I've Played On"
          scrollToClass=".albums-played-on"
        />
      </div>

      <div className="music-content">
        <Album
          albumName="Soul Vibes"
          tracks={[
            { src: "/audio/intro.mp3", title: "Intro" },
            { src: "/audio/festivals.mp3", title: "Festivals" },
            { src: "/audio/aintrun.mp3", title: "Run" },
            { src: "/audio/mod.mp3", title: "Modded" },
            { src: "/audio/sonnyblue.mp3", title: "Soul Vibes" },
            { src: "/audio/street.mp3", title: "On the Block" },
            { src: "/audio/want.mp3", title: "Wanting" },
            { src: "/audio/how.mp3", title: "How" },
          ]}
        />

        <Album
          albumName="Beat n Soul"
          tracks={[
            { src: "/audio/Festivals_OneMin.mp3", title: "Festivals" },
            { src: "/audio/Festivals_OneMin.mp3", title: "Soul Vibes 1" },
          ]}
        />
      </div>

      <div className="albums-recorded">
        <h2 className="albums-recorded-title">Albums I've Recorded</h2>

        <div className="albums-recorded-container">
          <iframe
            title="cindy lee"
            className="iframe"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1313015878&color=%23ff2222&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=158413846/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="pppd"
          >
            <a href="https://pppd.bandcamp.com/album/p-p-p-d-vs-magic-vs-jazz">
              P.P.P.D. vs. Magic vs. Jazz by PPPD
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=581589641/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="pooched"
          >
            <a href="https://pooched.bandcamp.com/album/pooched-c-r-o-w-n-split">
              pooched//C.R.O.W.N. split by pooched
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=1819923021/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="crown"
          >
            <a href="https://crowncrown.bandcamp.com/album/crown-pooched">
              CROWN//POOCHED by CROWN
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=267289251/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="glum"
          >
            <a href="https://iloveglum.bandcamp.com/album/ep">EP by glum</a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=438695709/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="chance"
          >
            <a href="https://chancelovett.bandcamp.com/album/some-little-songs-ep">
              Some Little Songs EP by Chance Lovett &amp; The Broken-Hearted
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=2368402538/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="sharky"
          >
            <a href="https://sharky.bandcamp.com/album/wanty">
              Wanty by Sharky
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=3081556230/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="dark glasses"
          >
            <a href="https://darkglasses.bandcamp.com/album/dark-glasses">
              Dark Glasses by Dark Glasses
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=242397713/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="freak heat waves"
          >
            <a href="https://freakheatwaves.bandcamp.com/album/mission-bay-single">
              Mission Bay Single by Freak Heat Waves
            </a>
          </iframe>

          <iframe
            className="iframe"
            src="https://bandcamp.com/EmbeddedPlayer/album=3297745891/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="Psychosomatic Itch"
          >
            <a href="https://psychosomaticitch.bandcamp.com/album/psychosomatic-itch-ep">
              Psychosomatic Itch EP by Psychosomatic Itch
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
            src="https://bandcamp.com/EmbeddedPlayer/album=2080281962/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
            seamless
            title="six brew bantha"
          >
            <a href="https://sixbrewbantha.bandcamp.com/album/split-7-w-archagathus">
              Split 7&quot; w/Archagathus by Six Brew Bantha
            </a>
          </iframe>
        </div>
      </div>

      <div className="albums-played-on"></div>
    </div>
  );
}
