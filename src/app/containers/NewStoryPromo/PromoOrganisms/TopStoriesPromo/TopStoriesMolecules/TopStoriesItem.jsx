import React, { useContext } from 'react';
import { ServiceContext } from '#contexts/ServiceContext';
import { shape, number, string } from 'prop-types';
import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import { storyItem } from '#models/propTypes/storyItem';
import { buildUniquePromoId } from '#app/containers/StoryPromo/utilities';
import { getIsLive } from '#lib/utilities/getStoryPromoInfo';
import Promo from '../../../Promo';
import { StyledPromoHeading } from '../index.styles';

const TopStoriesItem = ({ item, index, labelId }) => {
  const { script, service, dir, translations } = useContext(ServiceContext);
  const timestamp = path(['timestamp'], item);
  const mediaType = path(['media', 'format'], item);
  const url = path(['locators', 'assetUri'], item);
  const isLive = getIsLive(item);

  const liveLabel = pathOr('LIVE', ['media', 'liveLabel'], translations);

  // As screenreaders mispronounce the word 'LIVE', we use visually hidden
  // text to read 'Live' instead, which screenreaders pronounce correctly.
  const liveLabelIsEnglish = liveLabel === 'LIVE';

  const linkId = buildUniquePromoId({
    sectionType: 'top-stories',
    promoGroupId: labelId,
    promoItem: item,
    promoIndex: index,
  });

  return (
    <Promo.BoxWrapper>
      {mediaType && <Promo.MediaIndicator type={mediaType} />}
      <StyledPromoHeading script={script} service={service}>
        <Promo.Link href={url} aria-labelledby={linkId}>
          {isLive ? (
            <Promo.LiveLabel
              id={linkId}
              service={service}
              dir={dir}
              liveText={liveLabel}
              ariaHidden={liveLabelIsEnglish}
              offScreenText={liveLabelIsEnglish ? 'Live' : null}
            >
              <Promo.Content item={item} id={linkId} />
            </Promo.LiveLabel>
          ) : (
            <Promo.Content item={item} id={linkId} />
          )}
        </Promo.Link>
      </StyledPromoHeading>
      <Promo.Timestamp>{timestamp}</Promo.Timestamp>
    </Promo.BoxWrapper>
  );
};

TopStoriesItem.propTypes = {
  item: shape(storyItem).isRequired,
  index: number,
  labelId: string.isRequired,
};

TopStoriesItem.defaultProps = { index: null };

export default TopStoriesItem;
