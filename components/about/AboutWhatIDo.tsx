import { whatIDo } from "@/data";

export default function AboutWhatIDo() {
  return (
    <section className="w-full text-card-content">
      <div className="grid grid-cols-2 gap-1 xl:gap-3 overflow-hidden">
        {whatIDo.map((item) => (
          <div
            key={item.number}
            className="border rounded-2xl p-2 xl:p-4 min-h-20"
          >
            <p className="text-sm font-semibold font-bricolage uppercase text-primary">
              {item.title}
            </p>
            <p className="text-xs font-extralight xl:pl-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
