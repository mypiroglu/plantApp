export interface SubscriptionButtonProps {
  option: SubscriptionOption;
  isSelected: boolean;
  onSelect: (option: SubscriptionOption) => void;
}
