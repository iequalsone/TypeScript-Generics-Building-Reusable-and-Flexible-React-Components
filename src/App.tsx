import './App.css'
import { HookExample } from './examples/HookExample'
import { ListExample } from './examples/ListExample'
import { SelectExample } from './examples/SelectExample'

function App() {
  return (
    <>
      <section>
        <h1>List Example</h1>
        <ListExample />
      </section>

      <section>
        <h1>Select Example</h1>
        <SelectExample />
      </section>

      <section>
        <h1>Hook Example</h1>
        <HookExample />
      </section>
    </>
  )
}

export default App
