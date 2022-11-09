import React, { ReactElement } from 'react';
import { useAtom } from 'jotai';
import { colorsAtom, selectedAtom } from '../../lib/atoms';
import { JsxChild } from 'typescript';

const BoldText = ({ children }: { children: React.ReactNode }) => {
  const [colors] = useAtom(colorsAtom);
  const [selected] = useAtom(selectedAtom);

  return (
    <strong
      className='font-bold'
      style={{ color: colors[selected] }}>
      {children}
    </strong>
  );
};

export default BoldText;
