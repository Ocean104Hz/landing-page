import { Reveal } from "./Reveal";

type Props = { index: string; eyebrow: string; title: React.ReactNode; intro?: string; light?: boolean; testId: string };

export function SectionHeading({ index, eyebrow, title, intro, light, testId }: Props) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-lime" : "text-navy"}`}>
        <span className="text-lime">{index}</span>
        <span className={`h-px w-10 ${light ? "bg-white/40" : "bg-navy/30"}`} />
        {eyebrow}
      </p>
      <h2
        data-testid={testId}
        className={`mt-6 font-display text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base md:text-lg ${light ? "text-white/75" : "text-muted"}`}>{intro}</p>}
    </Reveal>
  );
}
