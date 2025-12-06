import Inak from "../../assets/Inak";

const FourCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
 
      <div className=" mt-2 afont-estedad font-bold text-[36px] leading-[63px] text-center text-[#3A4B69]">
       برندهای ما
      </div>
      <div className="  font-estedad font-light text-[16px] leading-[28px] text-center text-[#3A4B69]">
       زیر عنوان مناسب برای این بخش 
      </div>

    
      <div className="text-center bg-gray-300 p-4 rounded">
       <Inak></Inak>
      </div>

   
      <div className="font-estedad font-light text-[15px] leading-[26px] text-right text-[#5B6F87] max-w-[560px]">
       توجه به سلامت و بهداشت فرآیند تولید و احترام به حق مصرف کنندگان و نیز توجه به وظیفه خطیر تولیدکنندگی محصولات غذایی سبب گردیده که کلیه فرآیندها و تولیدات کارخانه از ساخت بنای آن تا هر یک از بخشهای تولیدی تحت نظارت و استانداردهای ملی و بین المللی بهداشت صورت پذیرد.
      </div>
    </div>
  );
};

export default FourCart;