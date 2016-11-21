1. Install react-redux and redux.
2. Add /src/reducers.js, /src/constants.js, /src/actions.js.
3. Index.js ->
```
import { Provider } from 'react-redux';
import { createStore } from 'redux';
```
4. Create store: `let store = createStore();` and wrapp App with Provider. Pass store as prop to provider. Start app - we have error. No reducers. Lets add one.
5. Add constant -> SET_WORK_DURATION.
6. Add action -> setWorkDuration type and duration property.
7. Add reducer -> workDuration.
8. import {combineReducers} from "redux"
9. Export default combined reducers. Import them in index.js -> `import reducers from "./reducers";` and `let store = createStore(reducers)`
10. Add connect to the App.js -> import { connect } from 'react-redux';
11. Add mapStateToProps and mapDispatchToProps.
12. Add changeWorkDuration and workDuration from store. Remove internal methods and properties. Replace all occurencies.
13. Repeat all steps for break.
14. Change default state because of bug related to the min value in Option!

15. Run `npm run rest-mock` and see: `http://localhost:9080/defaults`.
16. Add constants, actions and reducer for fetching defaults. constants.SAVE_DEFAULTS, update existing reducer and saveDefaults and fetchDefaults actions.
17. Install redux-thunk. Add thunk as middleware. Import thunk and applyMiddleware to index.js. 
18. Pass middleware to store.
19. Fetch defaults in componentDidMount in App.js.
