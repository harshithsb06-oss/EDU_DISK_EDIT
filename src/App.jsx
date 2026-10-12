import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { ModuleTabs } from './components/ModuleTabs'
import { PlatformShowcase } from './components/PlatformShowcase'
import { WhatsAppSection } from './components/WhatsAppSection'
import { ServicesSection } from './components/ServicesSection'
import { InstitutionsSection } from './components/InstitutionsSection'
import { FaqSection } from './components/FaqSection'
import { CTAForm } from './components/CTAForm'
import { DevTeamSection } from './components/DevTeamSection'
import { Footer } from './components/Footer'
import { ContactFab } from './components/ContactFab'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-mesh" />
        <Navbar />
        <main className="pt-20">
          <HeroSection />
          <FeaturesGrid />
          <ModuleTabs />
          <PlatformShowcase />
          <WhatsAppSection />
          <ServicesSection />
          <InstitutionsSection />
          <FaqSection />
          <CTAForm />
          <DevTeamSection />
        </main>
        <Footer />
        <ContactFab />
      </LanguageProvider>
    </ThemeProvider>
  )
}
