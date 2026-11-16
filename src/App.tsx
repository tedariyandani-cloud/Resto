/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { LocationFooter } from './components/LocationFooter';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { ReservationSection } from './components/ReservationSection';
import { VibeSection } from './components/VibeSection';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-alabaster font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <MenuSection />
        <VibeSection />
        <ReservationSection />
      </main>
      <LocationFooter />
    </div>
  );
}
