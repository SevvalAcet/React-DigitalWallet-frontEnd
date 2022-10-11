import './App.css';
import LeftMenu from './pages/layouts/left-menu';
import Login from './pages/containers/login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MoneyTransfer from './pages/containers/money-transfer';
import MyAccounts from './pages/containers/my-accounts';
import AccountActivities from './pages/containers/account-activities';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-row">
        <div className='page-container w-100 d-flex flex-row'>
          <div className='wrapper'>
            <Routes>
              <Route exact path="/login" element={Login} />
              <Route exact path="/my-accounts" element={MyAccounts} />
              <Route exact path="/account-activities" element={AccountActivities} />
              <Route exact path="/money-transfer" element={MoneyTransfer} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

    //PageName url'ye verilen değer.

  );
}

export default App;
