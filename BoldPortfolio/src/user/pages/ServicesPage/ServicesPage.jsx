import styles from './ServicesPageStyle.css'

export function ServicesPage() {
  return (
    <>
    <h3>WHAT WE DO</h3>
    <div className='servicesContainer'>
      <div>
        <h2 className="rosita">App / Web Development</h2>
        <h2 className="rosita">UI Design</h2>
        <h2 className="rosita">UX Design</h2>
        <h2 className="rosita">Prototyping</h2>
        <h2 className="rosita">Branding</h2>
      </div>
      <img src="./servicesAsset.png" alt="" />
    </div>
    </>
    
  );
}