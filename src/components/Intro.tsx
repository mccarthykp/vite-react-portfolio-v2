export default function Intro() {
  return (
    <>
      <div className="flex flex-row">
        <h1 className="text-4xl w-fit font-orbitron font-extrabold text-left text-black dark:text-neutral-300 pt-10 tracking-wide">
          Hi, I'm Kevin!
        </h1>
        <div className="w-fit lg:w-3/3">
          <div className="rounded-full overflow-hidden w-24 h-24 sm:ml-8 ml-4 md:mt-0 bg-gray-300">
            <img
              src="/assets/imgs/portrait.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <p className="lg:w-5/6 max-w-4xl md:text-2xl text-xl font-rajdhani font-normal text-left text-gray-600 dark:text-neutral-400 py-4 tracking-wide">
        I'm a <b>Full Stack Software Developer</b> with over four years of
        industry experience. My most recent work involved leveraging
        internal APIs to develop new user experiences and increase user
        engagement on the Shopify platform using <i>Ruby on Rails</i>, <i>React</i>, <i>TypeScript</i> and <i>GraphQL</i>.
      </p>
    </>
  );
}
