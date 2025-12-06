
import Circle from "../../assets/Circle";
import Button from "../Button/Button"
import TextBox from "../TextBox/TextBox";


function SecondCard() {
  return (  
<section className="w-full flex justify-center py-20 px-6">
  <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center" dir="ltr">

    <div className="relative flex justify-center md:justify-start w-full">
      <div className="absolute left-0 top-0"></div>
      <Circle />
    </div>

  
    <div className="flex flex-col items-end flex-1 space-y-4">
  <TextBox 
    title="گروه صنعتی فلات کوهرنگ"
    description="گروه صنعتی فلات کوهرنگ با سرمایه گذاری قابل توجه چند تن از کارآفرینان برتر ملی با هدف ارائه برترین کیفیت تولید در عرصه لبنیات فعالیت خود را از سال ۱۳۷۴ آغاز نموده است . استفاده از تجهیزات و فن آوری های نوین کشورهای صنعتی پیشرفته چون سوئد و آلمان و نیز تبادل اطلاعات و استفاده از متخصصان داخلی و خارجی امکانات گسترده ای را در زمینه تولید محصولات متنوع لبنی در اختیار مجموعه قرار داده است .

توجه به سلامت و بهداشت فرآیند تولید و احترام به حق مصرف کنندگان و نیز توجه به وظیفه خطیر تولیدکنندگی محصولات غذایی سبب گردیده که کلیه فرآیندها و تولیدات کارخانه از ساخت بنای آن تا هر یک از بخشهای تولیدی تحت نظارت و استانداردهای ملی و بین المللی بهداشت صورت پذیرد."
  />
  <Button className="self-end">درباه کوهرنگ</Button>
</div>


  </div>
</section>







  );
 
}
export default SecondCard