import { HeaderTitle, FilterWork, SocialMedia } from "../../components";
import styles from './WorkPageStyle.css'

export function WorkPage() {
  return (
    <div>
      <HeaderTitle title="Our Work" />
      <FilterWork />
      <SocialMedia />
    </div>
  );
}