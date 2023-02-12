import Header from './Header';
import desktopImage from './assets/image-hero-desktop.png';
import mobileImage from './assets/image-hero-mobile.png';
import clientAudiophile from './assets/client-audiophile.svg';
import clientDatabiz from './assets/client-databiz.svg';
import clientMaker from './assets/client-maker.svg';
import clientMeet from './assets/client-meet.svg';

function App() {
  return (
    <div className="relative grid min-h-screen place-content-center">
      <Header className="absolute top-0 w-full" />

      <main className="flex max-w-5xl">
        <div className="flex basis-3/5 flex-col justify-end">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-7xl font-bold text-_almost-black">
              Make
              <br />
              remote work
            </h1>

            <p className="leading-7 text-_medium-gray">
              Get your team in sync, no matter your location.
              <br />
              Streamline processes, create team rituals, and
              <br />
              watch productivity soar.
            </p>

            <button className="rounded-xl border border-transparent bg-_almost-black px-6 py-3 text-_almost-white transition-colors hover:border hover:border-_almost-black hover:bg-_almost-white hover:text-_almost-black">
              Learn more
            </button>
          </div>

          {/* client list */}
          <ul className="mt-24 flex gap-8">
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

        <div className="basis-2/5">
          <img
            src={desktopImage}
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
