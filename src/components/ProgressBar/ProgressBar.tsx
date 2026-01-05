type spaceUsedProps = {
  spaceUsed: number
}

export function ProgressBar({spaceUsed}: spaceUsedProps) {
    console.log(spaceUsed)
  const spaceToPercent = spaceUsed / 10;

  return (
    <>
      <div 
        className={` h-4 bg-amber-500 absolute rounded-lg left-0 bg-linear-90 from-(--from) to-(--to) transition-[width] ease-in-out duration-300`}
        style={{ width: `${spaceToPercent}%` }}
      />
      <div 
        className="w-2.5 h-2.5 bg-white absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg transition-[left] ease-in-out duration-310"
        style={{ left: `
          ${spaceToPercent > 1.5
            ? (spaceToPercent - 2 ) 
            : (spaceToPercent + 1.5 )
          }%` 
        }}
      />
    </>
  )
}