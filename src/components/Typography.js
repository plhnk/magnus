/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Global } from '@emotion/core';

import React from 'react';
import maziuswoff from './../fonts/MAZIUSREVIEW20.09-Extraitalic.woff';
import maziuswoff2 from './../fonts/MAZIUSREVIEW20.09-Extraitalic.woff2';
import workSans from './../fonts/WorkSans-VariableFont_wght.ttf';

export default function Typography() {
  const component = (
    <>
      <Global
        styles={(theme) => ({
          html: {
            fontSize: '16px',
          },
          '::selection': {
            backgroundColor: theme.colors.primary,
            color: 'white',
          },
        })}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'Mazius',
            src: `url(${maziuswoff}) format('woff'), url(${maziuswoff2}) format('woff2'), local('Times')`,
            fontDisplay: 'swap',
          },
        }}
      />
      <Global
        styles={{
          '@font-face': {
            fontFamily: 'Work Sans',
            src: `url(${workSans}) format('woff'), local('Helvetica')`,
            fontWeight: '400, 800',
            fontDisplay: 'swap',
          },
        }}
      />
    </>
  );
  return component;
}
