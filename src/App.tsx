import { useState } from "react"
import { ProgressBarContainer } from "./components/ProgressBarContainer/ProgressBarContainer"
import { ToolBar } from "./components/ToolBar/ToolBar"

function App() {
  const [spaceUsed, setSpaceUsed] = useState<number>(158);

  return (
    <div className="flex md:flex-row flex-col gap-5">
      <ToolBar setSpaceUsed={setSpaceUsed} />
      <ProgressBarContainer spaceUsed={spaceUsed} />
    </div>
  )
}

export default App
