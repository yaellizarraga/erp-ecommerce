import Header from '../../components/header/header'
import { IOptions } from '../../components/header/header'

const headerOptions: IOptions[] = [
  { href: '#', target: '_self', option: '¿Quienes somos?' },
  { href: '#', target: '_self', option: 'Servicios empresariales' },
  { href: '#', target: '_self', option: 'Sucursales' },
  { href: '#', target: '_self', option: 'Contacto' },
  { href: '#', target: '_self', option: 'Servicio al cliente' }
]

function App() {
  return (
    <div className='container'>
      <Header options={headerOptions} />
    </div>
  );
}

export default App;
