'use client';

import { PropertyCardProps } from './property-card/types';
import PropertyCardComponent from './property-card/PropertyCard';

export default function PropertyCard(props: PropertyCardProps) {
  return <PropertyCardComponent {...props} />;
}