import Header from "./components/header/indext";
import DesktopSideBar from "./components/side-bar/desktop";
import RoutesConfig from "./routes";

function App() {
  return (
    <div className="flex flex-row h-screen">
      <DesktopSideBar />
      <div className="flex-1">
        <Header />
        <main className="rounded-tl-2xl py-10">
          <RoutesConfig />
        </main>
      </div>
    </div>
  );
}

export default App;
