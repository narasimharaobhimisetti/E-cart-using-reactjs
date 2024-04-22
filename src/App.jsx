import React from 'react';
import "./App.css";
import LandingPage from './stores/landingpage/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import AcFull from './stores/components/fullComponents/AcFull';
import AcSingle from './stores/components/singleComponets/AcSingle';

import BookFull from './stores/components/fullComponents/BookFull';
import BookSingle from './stores/components/singleComponets/BookSingle';

import ComputerFull from './stores/components/fullComponents/ComputerFull';
import ComputerSingle from './stores/components/singleComponets/ComputerSingle';

import FridgeFull from './stores/components/fullComponents/FridgeFull';
import FridgeSingle from './stores/components/singleComponets/FridgeSingle';

import FurnitureFull from './stores/components/fullComponents/FurnitureFull';
import FurnitureSingle from './stores/components/singleComponets/FurnitureSingle';

import KitchenFull from './stores/components/fullComponents/KitchenFull';
import KitchenSingle from './stores/components/singleComponets/KitchenSingle';

import MenFull from './stores/components/fullComponents/MenFull';
import MenSingle from './stores/components/singleComponets/MenSingle';

import MobileFull from './stores/components/fullComponents/MobileFull';
import MobileSingle from './stores/components/singleComponets/MobileSingle';

import SpeakerFull from './stores/components/fullComponents/SpeakerFull';
import SpeakerSingle from './stores/components/singleComponets/SpeakerSingle';

import TvFull from './stores/components/fullComponents/TvFull';
import TvSingle from './stores/components/singleComponets/TvSingle';

import WatchFull from './stores/components/fullComponents/WatchFull';
import WatchSingle from './stores/components/singleComponets/WatchSingle';

import WomanFull from './stores/components/fullComponents/WomanFull';
import WomanSingle from './stores/components/singleComponets/WomanSingle';

import UserCart from './stores/UserCart';









const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>

        <Route path="/ac" element={<AcFull/>}/>
        <Route path="/ac/:id" element={<AcSingle/>}/>

        <Route path="/book" element={<BookFull/>}/>
        <Route path="/book/:id" element={<BookSingle/>}/>

        <Route path="/computer" element={<ComputerFull/>}/>
        <Route path="/computer/:id" element={<ComputerSingle/>}/>

        <Route path="/fridge" element={<FridgeFull/>}/>
        <Route path="/fridge/:id" element={<FridgeSingle/>}/>

        <Route path="/furniture" element={<FurnitureFull/>}/>
        <Route path="/furniture/:id" element={<FurnitureSingle/>}/>

        <Route path="/kitchen" element={<KitchenFull/>}/>
        <Route path="/kitchen/:id" element={<KitchenSingle/>}/>

        <Route path="/men" element={<MenFull/>}/>
        <Route path="/men/:id" element={<MenSingle/>}/>

        <Route path="/mobile" element={<MobileFull/>}/>
        <Route path="/mobile/:id" element={<MobileSingle/>}/>

        <Route path="/speaker"   element={<SpeakerFull/>} />
        <Route path="/speaker/:id" element={<SpeakerSingle/>}/>

        <Route path="/tv"   element={<TvFull/>} />
        <Route path="/tv/:id" element={<TvSingle/>}/>

        <Route path="/watch"   element={<WatchFull/>} />
        <Route path="/watch/:id" element={<WatchSingle/>}/>

        <Route path="/woman"   element={<WomanFull/>} />
        <Route path="/woman/:id" element={<WomanSingle/>}/>

        <Route path="/cart"   element={<UserCart/>} />

        


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
