import Feed from "@components/Feed";

function Home() {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">promptopia is an open-source AI prompting toll for the mordren world to discover , create and sharre creative prompts</p>
        <Feed/>
      </section>
    </div>
  );
}

export default Home;
