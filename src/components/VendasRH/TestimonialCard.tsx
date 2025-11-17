interface TestimonialCardProps {
  quote: string | React.ReactNode;
  name: string;
  role: string;
  company: string;
  result: string;
  avatar?: string;
}

export const TestimonialCard = ({
  quote,
  name,
  role,
  company,
  result,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-rh-orange/50 transition-colors">
      {typeof quote === 'string' ? (
        <>
          <div className="text-rh-orange text-4xl mb-4">"</div>
          <p className="text-rh-text-dark/90 leading-relaxed mb-6 italic">
            {quote}
          </p>
        </>
      ) : (
        <div className="mb-6">
          {quote}
        </div>
      )}
      <div className="flex items-center gap-4 mb-4">
        {avatar ? (
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rh-cta-pink to-rh-cta-orange" />
        )}
        <div>
          <p className="font-heading font-bold text-rh-text-dark">{name}</p>
          <p className="text-sm text-rh-muted-dark">
            {role} • {company}
          </p>
        </div>
      </div>
      <div className="bg-rh-orange/10 border border-rh-orange/30 rounded-xl p-3">
        <p className="text-sm font-semibold text-rh-text-dark">
          📊 Resultado: {result}
        </p>
      </div>
    </div>
  );
};
