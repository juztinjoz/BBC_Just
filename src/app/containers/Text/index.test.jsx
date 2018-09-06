import React from 'react';
import {
  shouldShallowMatchSnapshot,
  isNull,
} from '../../helpers/tests/testHelpers';
import TextContainer from './index';

describe('TextContainer', () => {
  const paragraphBlock = (blockId, text) => ({
    blockId,
    type: 'paragraph',
    model: {
      text,
    },
  });

  const data = {
    blocks: [
      paragraphBlock('01', 'This is a 1st paragraph block.'),
      paragraphBlock('02', 'This is a 2nd paragraph block.'),
      paragraphBlock('03', 'This is a 3rd paragraph block.'),
      paragraphBlock('04', 'This is a 4th paragraph block..'),
      paragraphBlock('05', 'This is a 5th paragraph block.'),
    ],
  };

  describe('with no data', () => {
    isNull('should return null', <TextContainer />);
  });

  shouldShallowMatchSnapshot(
    'should render correctly',
    <TextContainer {...data} />,
  );
});
