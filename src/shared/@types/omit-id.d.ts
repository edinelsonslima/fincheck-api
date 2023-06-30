type OmitId<Type extends object> = Omit<Type, 'id'>;

type OmitIdAndKeys<Type extends object, Keys extends keyof Type> = Omit<
  Type,
  'id' | Keys
>;
