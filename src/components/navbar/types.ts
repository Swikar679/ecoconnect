import { LucideIcon } from 'lucide-react';

export interface NavItemType {
  name: string;
  icon: React.ReactElement<LucideIcon>;
  onClick?: () => void;
}