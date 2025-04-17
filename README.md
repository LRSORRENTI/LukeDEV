# LukeDEVS

# NOTE TO SELF: I'm taking LukeDEVS down, inside of App.jsx remove the < Down/> component, which is a modified version of the < Hero/> component, and uncomment the rest to view the full application:

```
// src/App.jsx file:

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      // REMOVE BELOW
      <FadeInSection>
        <Down/>
      </FadeInSection>
      // REMOVE ABOVE AND UNCOMMENT BELOW
        {/* <Header />
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Benefits />
        </FadeInSection>
        <FadeInSection>
          <Collaboration />
        </FadeInSection>
        <FadeInSection>
          <Services />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <FadeInSection>
          <Roadmap />
        </FadeInSection>
        <FadeInSection>
          <Footer />
        </FadeInSection> */}
      </div>
      <ButtonGradient />
    </>
  );
};

```

**Welcome to LukeDEVS, a dynamic web development services platform designed to showcase and sell top-tier web development services. This project is built using React and leverages Vite for efficient bundling and development workflows. Our site features a modern, responsive design implemented with TailwindCSS and enhanced interactive elements provided by react-just-parallax.**

## Features

- **Modern Design**: Utilizing React along with TailwindCSS to provide a responsive and aesthetically pleasing design.
- **Interactive Elements**: Enhanced user experience through react-just-parallax for smooth and engaging visual effects.
- **Routing**: Efficient page navigation managed by react-router-dom.
- **Accessibility and Performance**: Optimized for speed and accessibility.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LRSORRENTI/lukeDEV.git
   cd lukeDEV
   ```

2. Install dependencies:

```bash
npm install
```

3. Running the Development Server

```bash
npm run dev
```

3. Building for Production

```bash
npm run build
```

This will bundle the application in the dist directory, optimizing the build for the best performance. The build is minified and the filenames include the hashes.

4. Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
```

### Contributing

Contributions are welcome.

1. Fork the Project

2. Create your Feature Branch (git checkout -b feature/AmazingFeature)

3. Commit your Changes (git commit -m 'Add some AmazingFeature')

4. Push to the Branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

### License

**Distributed under the MIT License. See LICENSE for more information.**
