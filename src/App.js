import './app.scss'
import {createStore} from "redux";
import reducer from './reducers'
import {Provider} from "react-redux";
import Message from "./Message";
import Controls from "./Controls";

const App = () => {
    let store = createStore(reducer)
    store.subscribe(() => {
        console.log('this is subscribed')
    })

    return (
        <Provider store={store}>
            <div className="App">
                <Message/>
                <Controls/>
            </div>
        </Provider>
    );
}

export default App;
