import HeroContent from "./HeroContent";

export default function Hero({ data }: any) {
  return (
    <section className="text-white   flex justify-center relative">
      <div className="w-full max-w-[1200px] px-0 pt-42 pb-24">
        <HeroContent data={data} />
      </div>
    </section>
  );
}
