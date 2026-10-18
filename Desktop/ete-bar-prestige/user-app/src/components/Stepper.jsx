const steps = [
  { key: 'phone_verified', label: 'شماره موبایل' },
  { key: 'identity_verified', label: 'اطلاعات هویتی' },
  { key: 'terms_accepted', label: 'شرایط و قوانین' },
  { key: 'attorney_set', label: 'وکالت‌نامه' },
  { key: 'pending_review', label: 'رمز تصدیق و سند' },
];

export default function Stepper({ current }) {
  const currentIdx = steps.findIndex((s) => s.key === current);
  return (
    <div className="flex items-center justify-between mb-6 text-xs">
      {steps.map((s, i) => {
        const done = i < currentIdx;
        const active = i === currentIdx;
        return (
          <div key={s.key} className="flex-1 flex flex-col items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center border ${
                done
                  ? 'bg-teal-brand text-black border-teal-brand'
                  : active
                  ? 'border-gold-brand text-gold-brand'
                  : 'border-dark-border text-gray-500'
              }`}
            >
              {done ? '✓' : i + 1}
            </div>
            <span className={active ? 'text-gold-brand' : 'text-gray-500'}>{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}