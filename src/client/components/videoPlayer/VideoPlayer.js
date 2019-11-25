import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import YouTube from 'react-youtube';
import styles from './videoPlayer.scss';

class VideoPlayer extends PureComponent {
  onReady = (event) => {
    // access to player in all event handlers via event.target
  };

  getYoutubeIdFromUrl = (url = '') => {
    const regex = new RegExp('[?&]v(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  render() {
    const { className, episode } = this.props;

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const youtubeId = this.getYoutubeIdFromUrl(episode.link);

    return (
      <div
        className={
          className
            ? `${styles.videoPlayerContainer} ${className}`
            : styles.videoPlayerContainer
        }
      >
        <div className={styles.videoPlayerWrapper}>
          <div className={styles.videoPlayer}>
            <YouTube
              className={styles.youtube}
              videoId={youtubeId}
              opts={opts}
              onReady={this.onReady}
            />
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  className: PropTypes.string,
  episode: PropTypes.object,
};

export default withRouter(VideoPlayer);
