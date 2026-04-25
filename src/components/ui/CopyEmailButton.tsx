'use client';

interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  return (
    <button
      aria-label={`Copy email address ${email}`}
      onClick={() => navigator.clipboard.writeText(email)}
      className="bg-[#18E299] text-[#003823] px-8 py-4 rounded-full font-code-label font-black text-sm tracking-widest hover:bg-primary-fixed transition-transform active:scale-95 shadow-lg"
    >
      COPY
    </button>
  );
}
