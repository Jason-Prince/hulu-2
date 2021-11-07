import requests from "../utils/requests";

function Nav() {
  return (
    <nav className="relative">
      <div
        className="
      flex 
      px-10 
      sm:px-20 
      text-2xl 
      whitespace-nowrap 
      space-x-10 
      sm:space-x-20 
      overflow-x-scroll 
      scrollbar-hide
      "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="
            last:pr-24
            cursor-pointer 
            transition 
            duration-100 
            transform 
            hover:scale-125
            hover:text-white
            active:text-red-500
            "
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="
      absolute 
      top-0 
      right-0 
      bg-gradient-to-r
      from-[rgba(24,57,73,0.1)] 
      to-[rgb(24,57,73)] 
      h-10 
      w-16
      "
      />
      <div
        className="
      absolute 
      top-0 
      left-0 
      bg-gradient-to-l
      from-[rgba(4,4,5,.1)] 
      to-[rgb(4,4,5)] 
      h-10 
      w-16
      "
      />
    </nav>
  );
}

export default Nav;
