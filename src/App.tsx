import { useEffect, useState } from 'react';
import { AgeGate, readAge, writeAge, type AgeState } from './components/AgeGate';
import { CookieConsent } from './components/CookieConsent';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegalPage } from './components/LegalPage';
import { PlanSection } from './components/Plan';
import { FinalCta, HowItWorks, Reviews, RiskNote, WhatYouGet } from './components/Sections';
import { BRAND } from './content';
import { LEGAL_DOCS } from './content/legal';
import { useRoute } from './lib/router';

const LEGAL_SLUGS = LEGAL_DOCS.map((doc) => doc.slug);

export default function App() {
  const route = useRoute();
  const [age, setAge] = useState<AgeState>('unknown');

  useEffect(() => {
    setAge(readAge());
  }, []);

  const slug = route.replace(/^\//, '');
  const legalDoc = LEGAL_SLUGS.includes(slug) ? LEGAL_DOCS.find((doc) => doc.slug === slug) : undefined;

  useEffect(() => {
    document.title = legalDoc ? `${legalDoc.title} — ${BRAND}` : `${BRAND} — Grupo de palpites e análises esportivas`;
  }, [legalDoc]);

  if (age !== 'ok') {
    return (
      <AgeGate
        state={age}
        onConfirm={() => {
          writeAge('ok');
          setAge('ok');
        }}
        onDeny={() => {
          writeAge('denied');
          setAge('denied');
        }}
      />
    );
  }

  if (route !== '/' && !legalDoc) {
    return <LegalPage slug={slug} />;
  }

  if (legalDoc) {
    return <LegalPage slug={legalDoc.slug} />;
  }

  return (
    <>
      <a className="skip" href="#main">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="main">
        <Hero />
        <WhatYouGet />
        <HowItWorks />
        <PlanSection />
        <Reviews />
        <Faq />
        <FinalCta />
        <RiskNote />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
