import { Route, Routes } from "react-router-dom";

import ScrollToTop from "@/components/routing/ScrollToTop";
import HomePage from "@/pages/HomePage";
// import RegisterPage from "@/pages/register/RegisterPage";
import RegistrationSuccessPage from "@/pages/register/RegistrationSuccessPage";
import TermsPage from "@/pages/TermsPage";
// import PrivacyPage from "@/pages/PrivacyPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<RegistrationSuccessPage />} />
        <Route path="/privacy-policy" element={<TermsPage />} />
        {/* <Route path="/privacy" element={<PrivacyPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
