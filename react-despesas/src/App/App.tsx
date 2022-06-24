import React from "react";
import ExpansePage from "../Pages/ExpansePage";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { getFixedStartDate } from "../Helpers/calendarHelper";


function App() {
  const date=getFixedStartDate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/despesas/:month" element={<ExpansePage />} />
        <Route path="*" element={<Navigate to={'/despesas/'+date.year+'-'+date.month} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
