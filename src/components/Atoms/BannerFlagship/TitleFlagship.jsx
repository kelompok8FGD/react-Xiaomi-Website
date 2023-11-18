const TitleFlagship = (props) => {
  const { Title, Specs, CurrentPrice, PreviousPrice } = props;
  return (
    <>
      <div className="flex flex-col items-center relative">
        <div className="absolute text-center w-[370px] pt-10 md:text-start md:left-[10%] md:top-[60px] md:w-[600px]">
          <div className="font-inter font-bold leading-[36px] text-[30px] pb-3 md:text-[42px] md:leading-[50px] text-white">
            {Title}
          </div>
          <div className="text-[16px] font-normal leading-[19px] pb-5 md:text-[28px] md:leading-[34px] text-white">
            {Specs}
          </div>
          <div className="flex gap-2 flex-row text-center justify-center md:justify-start md:items-center">
            <div className="font-semibold text-[14px] leading-[18px] md:text-[36px] md:leading-[45px] text-white">
              {CurrentPrice}
            </div>
            <div className="font-normal text-[12px] leading-[15px] text-[#999999] line-through md:text-[25px] md:leading-[32px] ">
              {PreviousPrice}
            </div>
          </div>
          <div className="mt-5 md:flex">
            <button className="bg-white hover:bg-[#444444] text-black rounded-lg p-2 px-5 text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px]">
              <a href="/product/#">Beli Sekarang</a>
            </button>
            <button className="border border-black p-2 px-5 rounded-lg text-[12px] font-normal leading-[14px] md:text-[24px] md:leading-[29px] md:border-none md:hover:underline text-white">
              Learn More &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleFlagship;
