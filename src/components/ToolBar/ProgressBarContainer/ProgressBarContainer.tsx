import { useState } from "react"

export function ProgressBarContainer() {
  const [prc, setPrc] = useState(45);
  return (
    <section className="bg-(--blue-850) text-white">
      <p>You've used ${185} ${'unit'} of your storage</p>

      <div className="w-52 h-4 bg-(--blue-950) rounded-lg overflow-hidden relative">
        <div className={` h-4 bg-amber-500 absolute rounded-lg left-0 bg-linear-90 from-(--from) to-(--to)`}
          style={{width: `${prc}%`}}
        ></div>
        <div className="w-3 h-3 bg-white absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg"
          style={{left: `${prc - 5}%`}}
        ></div>
      </div>
    </section>
  )
}