import { calcTotalUsed } from "../../utils/calcSpaceLeft";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { SpaceLeftBubble } from "../SpaceLeftBubble/SpaceLeftBubble";

type ContainerProps = {
  spaceUsed: number;
}

export function ProgressBarContainer({spaceUsed}:ContainerProps) {

  const totalUsed = calcTotalUsed(spaceUsed);

  return (
    <section className="flex flex-col justify-center jus p-10 rounded-lg w-2xl md:max-w-[45vw] max-w-[90vw] bg-(--blue-850) text-white">
      <p className="text-(--light-text) flex gap-1.5">
        You've used
        <span className="text-(--blue-200) font-bold">
          {totalUsed}GB
        </span>
        of your storage
      </p>

      <div className="w-full mt-5  h-4 bg-(--blue-950) rounded-lg relative">
        <ProgressBar spaceUsed={totalUsed} />
        <SpaceLeftBubble spaceLeft={spaceUsed} />
      </div>
      <div className="flex mt-1 justify-between text-(--light-text) text-sm">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </section>
  )
}