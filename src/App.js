import Header from './js/components/header';
import Footer from './js/components/footer';
import ProfilePage from './js/pages/profilePage';

import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='in-main'>
        <ProfilePage userID="Coffeislife"/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
