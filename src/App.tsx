import { ProgressBarContainer } from "./components/ToolBar/ProgressBarContainer/ProgressBarContainer"
import { ToolBar } from "./components/ToolBar/ToolBar"

function App() {


  return (
    <div className="flex gap-5">
      <ToolBar />
      <ProgressBarContainer />
    </div>
  )
}

export default App
