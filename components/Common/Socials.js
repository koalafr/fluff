import { socials } from "../../fluff.config";
import Icon from "./Icon";

function Socials() {
  return (
    <div className='mx-auto flex justify-center gap-3'>
      {socials.map(({ icon, href }) => {
        return (
          <span key={href}>
            <Icon icon={icon} href={href} />
          </span>
        );
      })}
    </div>
  );
}
export default Socials;
