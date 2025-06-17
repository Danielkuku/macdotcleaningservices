import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CommercialCleaning from "./pages/CommercialCleaning";
import ResidentialCleaning from "./pages/ResidentialCleaning";
import MoveInCleaning from "./pages/MoveInMoveOut";
import EventCleaning from "./pages/SpecialEventCleaning";
import TenancyCleaning from "./pages/EndOfTenancy";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/commercial" element={<CommercialCleaning />} />
        <Route path="/services/residential" element={<ResidentialCleaning />} />
        <Route path="/services/move-in" element={<MoveInCleaning />} />
        <Route path="/services/event" element={<EventCleaning />} />
        <Route path="/services/tenancy" element={<TenancyCleaning />} />
      </Routes>
    </>
  );
};

export default App;
