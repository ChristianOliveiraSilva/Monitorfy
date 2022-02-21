

import Process from "./setors/process.js"
import Services from "./setors/services.js"
import Others from "./setors/others.js"
import Performance from "./setors/performance.js"

function App() {
  return (
    <section className="">
      <Process />
      <Services />
      <Performance />
      <Others />
    </section>
  );
}

export default App;
