export default function AboutLSCS() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full min-h-screen flex flex-col items-center py-20 gap-y-16 sm:gap-y-24">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">ABOUT LSCS</h2>
        <p className="text-base leading-relaxed">
          La Salle Computer Society (LSCS) is DLSU&apos;s largest and pioneering
          technological organization and the home organization of the College of
          Computer Studies. LSCS is committed to help students learn more about
          tech through interactive workshops, make new friends with recreational
          events, develop their leadership skills through the esteemed Junior
          Officer Training program, secure a job through various career events,
          and more. Now in its 40th year of service, LSCS continues to ignite,
          innovate, and inspire.
        </p>
      </div>

      <div className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">VISION</h2>
        <p className="text-base leading-relaxed">
          We envision the La Salle Computer Society to be an organization that,
          through quality assistance and activities, will mold its members
          academically, socially and spiritually in order for them to become
          competent Lasallian students and well-rounded individuals. We also see
          the organization to be the pioneering student organization of the De
          La Salle University Manila that strongly symbolizes the expertise of
          the College of Computer Studies (CCS) in the field of computer
          science.
        </p>
      </div>

      <div className="w-full max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">MISSION</h2>
        <div className="text-base leading-relaxed space-y-4">
          <p>
            <span className="font-bold">Purpose</span> - to know and understand
            the reason behind every act, decision, and endeavor pursued.
          </p>
          <p>
            <span className="font-bold">Process</span> - to organize and oversee
            the entire procedure of every project and make sure that each goes
            through very necessary step towards the purpose.
          </p>
          <p>
            <span className="font-bold">Excellence</span> - to accomplish our
            goals in the best way possible and in accordance with the ideals of
            the organization and of De La Salle University Manila.
          </p>
        </div>
      </div>
    </div>
  );
}
