

import { Provider, useSelector } from "react-redux";
import store from "./Redux/store";
import RouterComponent from "./Router";



function App() {

 



  return (
    <div className="App">
      <Provider store={store}>
        <RouterComponent></RouterComponent>
      </Provider>

    </div>
  );
}

export default App;
