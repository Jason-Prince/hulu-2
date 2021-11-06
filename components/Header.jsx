import HeaderItem from "./HeaderItem";
import Image from "next/image";

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem />
      </div>
      <Image src="/hulu-Green-digital.svg" width={200} height={100} />
    </header>
  );
}

export default Header;
