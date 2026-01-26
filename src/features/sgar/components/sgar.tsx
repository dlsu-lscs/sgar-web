export default function AboutSGAR() {
  return (
    <div className="bg-[var(--card-tertiary-foreground)] w-full h-full flex flex-col items-center py-20 gap-y-16 sm:gap-y-24 z-0">
      <div className="w-full sm:max-w-5xl max-w-lg sm:px-0 px-5 text-center">
        <p className="text-base leading-relaxed">
          Student Government Annual Recruitment (SGAR) gives students the
          opportunity to join USG. This recruitment week will follow a hybrid
          format. Application forms will be available online, and booths will be
          set up along St. Joseph Covered Walk from January 26, 2026, to January
          31, 2026, offering students the chance to learn more about SGAR and
          engage with USG representatives.
        </p>
      </div>
      <div className="w-full sm:max-w-5xl max-w-lg sm:px-0 px-5 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">ABOUT SGAR</h2>
        <p className="text-base leading-relaxed whitespace-pre-line">{`The Office of the Executive Secretary (OSEC) spearheads the Student Government Annual Recruitment Week (SGAR) in line with its mandate to strengthen communication, ensure organizational support, and centralize publicity across the University Student Government (USG). Under the newly ratified Constitution, OSEC is entrusted with ensuring that all units are equally represented and given the spotlight they deserve, allowing Lasallian students to fully explore the diverse opportunities within the USG.
\n
This year’s theme, Arcade, reflects this goal by highlighting how the Executive Board serves as the central system that connects all batch units. Similar to how an arcade houses different games within one shared space, each batch unit represents a distinct component with its own functions and responsibilities, while still contributing to a unified organization. Together, they form one collective “arcade” that demonstrates the range of student leadership and service opportunities available and emphasizes collaboration toward a common purpose.
\n
Guided by the Executive Board’s theme, #GroundedActionsOfTomorrow, SGAR becomes more than just a recruitment initiative. It is a platform that grounds the USG’s vision in action by highlighting inclusivity, collaboration, and empowerment today, while preparing student leaders to take on the challenges of tomorrow.`}</p>
      </div>
    </div>
  );
}
