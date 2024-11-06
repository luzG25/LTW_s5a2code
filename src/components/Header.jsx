import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas"  className="mb-8 w-44 h-44 object-contain"/>
      <h1 className="text-4xl uppercase font-semibold text-center text-white font-title">ISECMARCode</h1>
      <p className="text-sky-20-">Comunidade de programadores Isecmar.</p>
    </header>
  );
}
