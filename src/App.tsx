import { useCallback, useEffect, useState } from 'react';
import { AgeGate, readAge, writeAge, type AgeState } from './components/AgeGate';
import { CookieConsent } from './components/CookieConsent';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeadModal } from './components/LeadModal';
import { LegalPage } from './components/LegalPage';
import { Plans } from './components/Plans';
import {
  Compare,
  CtaBand,
  Features,
  HowItWorks,
  LegalCallout,
  Samples,
  Testimonials,
  Ticker,
} from './components/Sections';
import { BRAND } from './content';
import { LEGAL_DOCS } from './content/legal';
import { useRoute } from './lib/router';
import { useReveal } from './lib/useReveal';

const LEGAL_ROUTES = LEGAL_DOCS.map((doc) => `/${doc.slug}`);

export default function App() {
  const route = useRoute();
  const [age, setAge] = useState<AgeState>(() => readAge());
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadPlan, setLeadPlan] = useState('trimestral');

  const isLegal = LEGAL_ROUTES.includes(route);
  const gated = !isLegal && age !== 'ok';

  const openLead = useCallback((planId?: string) => {
    setLeadPlan(planId ?? 'trimestral');
    setLeadOpen(true);
  }, []);

  const closeLead = useCallback(() => setLeadOpen(false), []);

  useReveal([route, age]);

  useEffect(() => {
    if (isLegal) {
      const doc = LEGAL_DOCS.find((item) => `/${item.slug}` === route);
      document.title = `${doc?.title ?? 'Documento'} — ${BRAND}`;
    } else {
      document.title = `${BRAND} — Grupo de análises esportivas | Conteúdo 18+`;
    }
  }, [route, isLegal]);

  const confirmAge = () => {
    writeAge('ok');
    setAge('ok');
  };

  const denyAge = () => {
    if (age === 'denied') {
      setAge('unknown');
      return;
    }
    writeAge('denied');
    setAge('denied');
  };

  if (gated) {
    return <AgeGate state={age} onConfirm={confirmAge} onDeny={denyAge} />;
  }

  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      {isLegal ? (
        <>
          <LegalPage slug={route.slice(1)} />
          <Footer onOpenLead={openLead} />
        </>
      ) : (
        <>
          <Header onOpenLead={openLead} />
          <main id="conteudo">
            <Hero onOpenLead={openLead} />
            <Ticker />
            <Features />
            <HowItWorks />
            <Compare />
            <Samples />
            <Plans onOpenLead={openLead} />
            <Testimonials />
            <Faq />
            <CtaBand onOpenLead={openLead} />
            <LegalCallout />
          </main>
          <Footer onOpenLead={openLead} />
        </>
      )}

      <CookieConsent />
      <LeadModal open={leadOpen} planId={leadPlan} onClose={closeLead} />
    </>
  );
}
