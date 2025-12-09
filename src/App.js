import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import EventsPage from './pages/EventsPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';
import ElectionPage from './pages/ElectionPage';
import LoginPage from './pages/LoginPage';
import GalleryPage from './pages/GalleryPage';
import NewsArchivePage from './pages/NewsArchivePage';

// Newly added pages
import IntroductionPage from './pages/IntroductionPage';
import HistoryPage from './pages/HistoryPage';
import MissionVisionPage from './pages/MissionVisionPage';
import ObjectivePage from './pages/ObjectivePage';
import ApproachPage from './pages/ApproachPage';
import ActivitiesPage from './pages/ActivitiesPage';
import OperationPage from './pages/OperationPage';
import FunctionPage from './pages/FunctionPage';
import OrganogramPage from './pages/OrganogramPage';
import DownloadsPage from './pages/DownloadsPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnersPage from './pages/PartnersPage';
import IndividualMembershipFormPage from './pages/IndividualMembershipFormPage';
import MembershipFormPage from './pages/MembershipFormPage';
import Election2078Page from './pages/Election2078Page';
import MembershipRegistrationForm2Page from './pages/MembershipRegistrationForm2Page';
import MembershipInfoPage from './pages/MembershipInfoPage';
import AdvisoryCommitteePage from './pages/AdvisoryCommitteePage';
import SubCommitteePage from './pages/SubCommitteePage';
import StaffPage from './pages/StaffPage';
import Conference2020Page from './pages/Conference2020Page';
import RegistrationPage from './pages/RegistrationPage';
import OrganizingCommitteePage from './pages/OrganizingCommitteePage';
import ScientificCommitteePage from './pages/ScientificCommitteePage';
import CallForAbstractsPage from './pages/CallForAbstractsPage';
import WhySponsorPage from './pages/WhySponsorPage';
import HowToSponsorPage from './pages/HowToSponsorPage';
import PromoteUsPage from './pages/PromoteUsPage';
import ConferenceSchedulePage from './pages/ConferenceSchedulePage';
import FaqPage from './pages/FaqPage';
import OrganizationalMembershipPage from './pages/OrganizationalMembershipPage';
import CodeOfEthicsPage from './pages/CodeOfEthicsPage';
import AboutTheJournalPage from './pages/AboutTheJournalPage';
import EditorialTeamPage from './pages/EditorialTeamPage';
import ManuscriptSubmissionGuidelinePage from './pages/ManuscriptSubmissionGuidelinePage';
import ManuscriptSubmissionPage from './pages/ManuscriptSubmissionPage';
import ArchivesPage from './pages/ArchivesPage';
import PublicationPage from './pages/PublicationPage';
import ImportantLinksPage from './pages/ImportantLinksPage';
import PublicHealthCampaignAdvocacyPage from './pages/PublicHealthCampaignAdvocacyPage';
import SeriesOfWebenairPage from './pages/SeriesOfWebenairPage';
import IecMaterialPage from './pages/IecMaterialPage';
import HealthPromotionActionPage from './pages/HealthPromotionActionPage';
import CentralCommitteePage from './pages/CentralCommitteePage';
import ProvincialCommitteePage from './pages/ProvincialCommitteePage';
import BidhanPage from './pages/BidhanPage';
import RegulationPage from './pages/RegulationPage';
import BulletinePage from './pages/BulletinePage';
import Conference2025Page from './pages/Conference2025Page';
import Registration2Page from './pages/Registration2Page';
import OrganizingCommittee2Page from './pages/OrganizingCommittee2Page';
import ScientificCommittee2Page from './pages/ScientificCommittee2Page';
import CallForAbstracts2Page from './pages/CallForAbstracts2Page';
import SponsorPage from './pages/SponsorPage';
import ConferenceSchedule2Page from './pages/ConferenceSchedule2Page';
import Faq2Page from './pages/Faq2Page';
import AnnualGeneralAssemblyPage from './pages/AnnualGeneralAssemblyPage';
import ButtonDemoPage from './pages/ButtonDemoPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/causes" element={<CausesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/election-2081" element={<ElectionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsArchivePage />} />
        
        {/* Newly added routes */}
        <Route path="/sample-page" element={<IntroductionPage />} />
        <Route path="/about/introduction" element={<IntroductionPage />} />
        <Route path="/about/history" element={<HistoryPage />} />
        <Route path="/about/mission-and-vision" element={<MissionVisionPage />} />
        <Route path="/about/objective" element={<ObjectivePage />} />
        <Route path="/about/approach" element={<ApproachPage />} />
        <Route path="/about/activities" element={<ActivitiesPage />} />
        <Route path="/about/operation" element={<OperationPage />} />
        <Route path="/about/function" element={<FunctionPage />} />
        <Route path="/about/organogram" element={<OrganogramPage />} />
        <Route path="/about/downloads" element={<DownloadsPage />} />
        <Route path="/about/projects" element={<ProjectsPage />} />
        <Route path="/about/partners" element={<PartnersPage />} />
        <Route path="/individual-membership-form" element={<IndividualMembershipFormPage />} />
        <Route path="/membership-form" element={<MembershipFormPage />} />
        <Route path="/election-2078" element={<Election2078Page />} />
        <Route path="/membership-registration-form-2" element={<MembershipRegistrationForm2Page />} />
        <Route path="/membership-info" element={<MembershipInfoPage />} />
        <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
        <Route path="/sub-committee" element={<SubCommitteePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/conference-2020" element={<Conference2020Page />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/organizing-committee" element={<OrganizingCommitteePage />} />
        <Route path="/scientific-committee" element={<ScientificCommitteePage />} />
        <Route path="/call-for-abstracts" element={<CallForAbstractsPage />} />
        <Route path="/why-sponsor" element={<WhySponsorPage />} />
        <Route path="/how-to-sponsor" element={<HowToSponsorPage />} />
        <Route path="/promote-us" element={<PromoteUsPage />} />
        <Route path="/conference-schedule" element={<ConferenceSchedulePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/organizational-membership" element={<OrganizationalMembershipPage />} />
        <Route path="/code-of-ethics" element={<CodeOfEthicsPage />} />
        <Route path="/about-the-journal" element={<AboutTheJournalPage />} />
        <Route path="/editorial-team" element={<EditorialTeamPage />} />
        <Route path="/manuscript-submission-guideline" element={<ManuscriptSubmissionGuidelinePage />} />
        <Route path="/manuscript-submission" element={<ManuscriptSubmissionPage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/important-links" element={<ImportantLinksPage />} />
        <Route path="/public-health-campain-advocacy" element={<PublicHealthCampaignAdvocacyPage />} />
        <Route path="/public-health-campain-advocacy/series-of-webenair" element={<SeriesOfWebenairPage />} />
        <Route path="/public-health-campain-advocacy/iec-material" element={<IecMaterialPage />} />
        <Route path="/public-health-campain-advocacy/health-promotion-action" element={<HealthPromotionActionPage />} />
        <Route path="/central-committee" element={<CentralCommitteePage />} />
        <Route path="/provincial-committee" element={<ProvincialCommitteePage />} />
        <Route path="/publication/bidhan" element={<BidhanPage />} />
        <Route path="/publication/regulation" element={<RegulationPage />} />
        <Route path="/publication/bulletine" element={<BulletinePage />} />
        <Route path="/conference-2025" element={<Conference2025Page />} />
        <Route path="/registration-2" element={<Registration2Page />} />
        <Route path="/organizing-committee-2" element={<OrganizingCommittee2Page />} />
        <Route path="/scientific-committee-2" element={<ScientificCommittee2Page />} />
        <Route path="/call-for-abstracts-2" element={<CallForAbstracts2Page />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/conference-schedule-2" element={<ConferenceSchedule2Page />} />
        <Route path="/faq-2" element={<Faq2Page />} />
        <Route path="/annual-general-assembly" element={<AnnualGeneralAssemblyPage />} />
        <Route path="/button-demo" element={<ButtonDemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;