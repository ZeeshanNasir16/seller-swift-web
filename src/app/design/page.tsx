import React from 'react';

const DesignPage = () => {
  return (
    <section className='relative isolate min-h-[80vh] w-full overflow-hidden bg-[#0b0b16]'>
      {/* PURPLE OVAL GLOW */}
      <div
        className='pointer-events-none absolute inset-0
      /* radial ellipse: width 95%, height 70%, centered near top-right */'
        /* optional: make the glow sit “over” the base while staying subtle */
        style={{
          background:
            'radial-gradient(ellipse_95%_70%_at_66%_28%, rgba(177,103,255,0.85) 0%, rgba(139,92,246,0.55) 22%,  rgba(94,47,184,0.30) 45%,rgba(22,16,37,0.12) 60%, rgba(11,11,22,0) 68%',
        }}
      />

      {/* OPTIONAL: bottom vignette fade like your screenshot */}
      {/* <div
        className='pointer-events-none absolute inset-0
      [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.6)_78%)]'
      /> */}

      {/* OPTIONAL: faint grid */}
      {/* <div
        className='pointer-events-none absolute inset-0 opacity-10
    [background:
      repeating-linear-gradient(0deg,transparent_0_63px,rgba(255,255,255,.6)_64px),
      repeating-linear-gradient(90deg,transparent_0_63px,rgba(255,255,255,.6)_64px)
    ]'
      /> */}

      {/* content */}
      <div className='relative z-10 mx-auto max-w-screen-xl px-6 py-24 text-center text-white'>
        {/* ... */}
      </div>
    </section>
  );
};

export default DesignPage;
