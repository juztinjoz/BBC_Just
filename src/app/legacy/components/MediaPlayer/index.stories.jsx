/* eslint-disable no-alert */
import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';
import ampDecorator from '../../../../../.storybook/helpers/ampDecorator';
import notes from './README.mdx';

const withDuration = {
  duration: '2:30',
  durationSpoken: '2 minutes 30 seconds',
  datetime: 'PT2M30S',
};

export default {
  title: 'Components/Media Player',
  component: CanonicalMediaPlayer,
  parameters: {
    chromatic: {
      diffThreshold: 0.2,
    },
    docs: { page: notes },
  },
  decorators: [withKnobs({ escapeHTML: false })],
};

export const ArticlesCanonical = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    mediaInfo={{ title: 'Dog chases cat.', type: 'video', ...withDuration }}
    title="Default Video player"
  />
);

export const MAPCanonical = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.com/ws/av-embeds/cps/pidgin/23248703/p01kx42v/pcm"
    showPlaceholder={false}
    service="pidgin"
    mediaInfo={{
      title: 'alt-text world service clip',
      type: 'video',
      ...withDuration,
    }}
    showLoadingImage={boolean('Show loading image', true)}
    darkMode={boolean('Dark mode', false)}
    title="Media player"
    noJsMessage="Dem no support media player for your device"
    noJsClassName="no-js"
  />
);

export const Guidance = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    title="Video player"
    mediaInfo={{
      title: 'Dog chases cat.',
      type: 'video',
      guidanceMessage: 'Guidance: May contain strong language that may offend',
      ...withDuration,
    }}
  />
);

export const Audio = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    mediaInfo={{
      type: 'audio',
      title: 'Dog barks at cat.',
      ...withDuration,
    }}
    title="Video player"
  />
);

export const AudioSkin = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko"
    showPlaceholder={false}
    placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/amp_audio_placeholder.png"
    skin="audio"
    service="news"
    mediaInfo={{ type: 'audio', title: 'Live show intro.' }}
    title="Audio player"
  />
);

export const WithCallbacks = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko"
    showPlaceholder={false}
    placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/amp_audio_placeholder.png"
    skin="audio"
    service="news"
    mediaInfo={{ type: 'audio', title: 'Live show intro.' }}
    title="Audio player"
    onMediaInitialised={() => alert('Media Player Initialised')}
    onMediaPlaying={() => alert('Media Player Playing')}
    onMediaPause={() => alert('Media Player Paused')}
  />
);

export const AMP = () => (
  <AmpMediaPlayer
    isAmp
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en/amp"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    mediaInfo={{
      type: 'audio',
      title: 'Dog barks at cat.',
      ...withDuration,
    }}
    title="Video player"
    noJsMessage="no js"
  />
);

AMP.parameters = { chromatic: { disable: true } };
AMP.decorators = [ampDecorator];

export const AMPAudioSkin = () => (
  <AmpMediaPlayer
    isAmp
    src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko/amp"
    placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/amp_audio_placeholder.png"
    skin="audio"
    title="Audio player"
    noJsMessage="no js"
    service="news"
  />
);

AMPAudioSkin.decorators = [ampDecorator];
