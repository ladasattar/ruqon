import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FormEfekPelet } from "../components/forms/FormEfekPelet";
import { FormIsiKiriman } from "../components/forms/FormIsiKiriman";
import { Activity } from "../pages/Activity";
import { LandingPage } from "../pages/LandingPage";
import { OnboardFeature } from "../pages/OnboardFeature";
import { Payment } from "../pages/Payment";
import { SuccessSummary } from "../pages/SuccesSummary";
import { TargetForm } from "../pages/TargetForm";

export const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/activity" element={<Activity />} />

        <Route exact path="/ruqyah-online" element={<OnboardFeature />} />
        <Route
          exact
          path="/ruqyah-online/targeting"
          element={<TargetForm type="ruqyah" />}
        />
        <Route
          exact
          path="/ruqyah-online/targeting/isi-kiriman"
          element={<FormIsiKiriman />}
        />
        <Route
          exact
          path="/ruqyah-online/success"
          element={<SuccessSummary type="ruqyah" />}
        />

        <Route exact path="/kirim-doa" element={<OnboardFeature />} />
        <Route
          exact
          path="/kirim-doa/targeting"
          element={<TargetForm type="kirim-doa" />}
        />
        <Route
          exact
          path="/kirim-doa/targeting/efek"
          element={<FormEfekPelet />}
        />
        <Route
          exact
          path="/kirim-doa/success"
          element={<SuccessSummary type="kirim-doa" />}
        />

        <Route exact path="/proteksi-online" element={<OnboardFeature />} />
        <Route
          exact
          path="/proteksi-online/targeting"
          element={<TargetForm type="proteksi" />}
        />
        <Route
          exact
          path="/proteksi-online/success"
          element={<SuccessSummary type="proteksi" />}
        />

        <Route
          exact
          path="/ruqyah-online/pilih-tumbal"
          element={<Payment for="ruqyah" />}
        />
        <Route
          exact
          path="/kirim-doa/pilih-tumbal"
          element={<Payment for="kirim-doa" />}
        />
        <Route
          exact
          path="/proteksi-online/pilih-tumbal"
          element={<Payment for="proteksi" />}
        />
        <Route exact path="/login" element={<Navigate replace to="/" />} />
        <Route exact path="/register" element={<Navigate replace to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
