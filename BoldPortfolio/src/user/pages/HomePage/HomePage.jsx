import styles from './HomePageStyle.css'
import { HeaderTitle, SocialMedia } from "../../components";

export function HomePage() {
  return (
    <div>
      <HeaderTitle title="Bold Studio." />
      <div className='Container'>
      <h1 className='Comillas'>"</h1>
      <h3 className='slogan'> We're passionate about design, <br></br>code and everything in between.</h3>
      </div>
      <SocialMedia />
    </div>
  );
}