export default function TitleOrnament({ title }: { title: string }) {
  return (
    <span className="relative inline-block">
      <svg
        viewBox="0 0 52 24"
        fill="currentColor"
        className="absolute text-lime-500 top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
      >
        <defs>
          <pattern
            id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
            x="0"
            y="0"
            width=".135"
            height=".30"
          >
            <circle cx="1" cy="1" r=".7" />
          </pattern>
        </defs>
        <rect
          fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
          width="52"
          height="24"
        />
      </svg>
      <span className="relative">{title}</span>
    </span>
  );
}
