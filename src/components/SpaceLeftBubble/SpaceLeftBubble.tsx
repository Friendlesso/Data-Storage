import TrianglePng from "../../assets/icons/triangle-top-right-icon.svg";

type SpaceLeftBubbleProps = {
  spaceLeft: number
}

export function SpaceLeftBubble({ spaceLeft }: SpaceLeftBubbleProps) {
  return (
    <>
      <div
        className={`
          absolute 
          md:-top-30 md:right-0 md:bottom-auto md:translate-0
          right-1/2 translate-x-1/2 -bottom-15 translate-y-1/2 
         bg-white  
          py-3 px-8 
          rounded-2xl
        `}
      >
        <p className="text-(--light-text) text-sm">
          <span className="font-bold text-black text-2xl">
            {spaceLeft}
          </span>
          GB LEFT
        </p>
      </div>
      <div className="absolute md:-top-20 md:right-0 md:block hidden">
        <img className="w-8 h-8" src={TrianglePng} />
      </div>
    </>
  )
}