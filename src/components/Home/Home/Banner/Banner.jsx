

const Banner = () => {
    return (
        <div>
            <div
  className="hero  "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/WytST6z/1000-F-540488471-p-LQTo5t-XQhcq-ELRp-QPxb-Sp6-Hk-AEf3-H3-B-transformed.jpg)",
  }}>
  <div className=" hero-overlay bg-opacity-15"></div>
  <div className="">
   <div className="hero-content  flex justify-evenly gap-60">
   <div className="">
    <p className="text-xl font-bold text-light-blue-900 ">WE MAKE</p>
      <h1 className="mb-5 text-5xl font-bold text-light-blue-900">Dream House</h1>
      <p className="mb-5 text-light-blue-900 font-bold">
      Architectural design blends creativity and functionality, shaping spaces <br />  with  aesthetics, innovation..
      </p>
      <button className="p-4 bg-orange-800 text-white font-bold w-40 hover:bg-light-blue-900">Get Details</button>
    </div>
    <div className="hidden md:block">
        <img src={'https://i.ibb.co.com/SfdwHt2/man-db64c1ff.png'} alt="" />
    </div>
   </div>
  </div>
</div>
        </div>
    );
};

export default Banner;