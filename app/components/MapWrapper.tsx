'use client';

import dynamic from 'next/dynamic';
import { SearchResultData } from '../types/app';

const DynamicMap = dynamic(() => import('./Map'), { ssr: false });

export default function MapWrapper({ searchResultData }: { searchResultData: SearchResultData }) {
  return <DynamicMap searchResultData={searchResultData} />;
}
