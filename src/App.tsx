import useWindowDimensions from './useWindowDimensions';
import Header from './Header';
import desktopImage from './assets/image-hero-desktop.png';
import mobileImage from './assets/image-hero-mobile.png';
import clientAudiophile from './assets/client-audiophile.svg';
import clientDatabiz from './assets/client-databiz.svg';
import clientMaker from './assets/client-maker.svg';
import clientMeet from './assets/client-meet.svg';

function App() {
  const width = useWindowDimensions();
  const breakpoint = 1440;

  return (
    <div className="min-h-screen">
      <Header />
      {/* hero section */}
      <main className="mx-auto flex flex-col-reverse desktop:max-w-5xl desktop:flex-row">
        {/* hero copy */}
        <div className="flex flex-col px-4 desktop:basis-3/5">
          <div className="flex flex-col items-center gap-4 py-12 desktop:items-start desktop:gap-8  desktop:py-20">
            {width >= breakpoint ? (
              <h1 className="text-7xl font-bold text-_almost-black">
                Make
                <br />
                remote work
              </h1>
            ) : (
              <h1 className="text-3xl font-bold text-_almost-black">
                Make remote work
              </h1>
            )}

            {width >= breakpoint ? (
              <p className="leading-7 text-_medium-gray">
                Get your team in sync, no matter your location.
                <br />
                Streamline processes, create team rituals, and
                <br />
                watch productivity soar.
              </p>
            ) : (
              <p className="text-center text-sm leading-6 text-_medium-gray">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
            )}

            <button className="rounded-xl border border-transparent bg-_almost-black px-6 py-3 text-sm text-_almost-white transition-colors hover:border hover:border-_almost-black hover:bg-_almost-white hover:text-_almost-black desktop:text-base">
              Learn more
            </button>
          </div>

          {/* client list */}
          <ul className="flex flex-1 items-end gap-8">
            <li>
              <img src={clientDatabiz} alt="Databiz - a Snap client" />
            </li>
            <li>
              <img src={clientAudiophile} alt="Audiophile - a Snap client" />
            </li>
            <li>
              <img src={clientMeet} alt="Meet - a Snap client" />
            </li>
            <li>
              <img src={clientMaker} alt="Maker - a Snap client" />
            </li>
          </ul>
        </div>

        {/* hero image - desktop */}
        <div className="hidden basis-2/5 desktop:block">
          <img
            src={desktopImage}
            alt="man communicating with teammates on a laptop"
          />
        </div>

        {/* hero image - mobile */}
        <div className="basis-2/5 desktop:hidden">
          <img
            src={mobileImage}
            alt="man communicating with teammates on a laptop"
          />
        </div>
      </main>
    </div>
  );
}

const Attribution = () => {
  return (
    <footer>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.frontendmentor.io/profile/orphandeity">
        Jeff R Williams
      </a>
      .
    </footer>
  );
};

export default App;
