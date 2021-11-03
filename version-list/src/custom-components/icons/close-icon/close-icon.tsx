import React from 'react';

import { Icon, Props } from '../icon';

export const CloseIcon: React.FC<Props> = (props: Props) => (
  <Icon {...props}>
    <path d="M17.646 7.056l-.702-.702a.5.5 0 00-.708 0L12 10.59 7.764 6.354a.5.5 0 00-.708 0l-.702.702a.5.5 0 000 .708L10.59 12l-4.236 4.236a.5.5 0 000 .707l.702.703a.5.5 0 00.708 0L12 13.41l4.236 4.236a.5.5 0 00.708 0l.702-.703a.5.5 0 000-.707L13.41 12l4.236-4.236a.5.5 0 000-.708z"></path>
  </Icon>
);

export default CloseIcon;
