
import Button from "../Button/Button"

function SecondCard() {
  return (  
   <section className="w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-white py-20 px-6">
<div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
{/* Image Section */}
<div className="flex justify-center md:justify-start relative">
<div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200 rounded-full opacity-40 blur-2xl"></div>
<img
src="/images/factory.jpg" // change path accordingly
alt="Factory"
className="relative rounded-lg shadow-lg w-80 object-cover"
/>
</div>


{/* Text Section */}
<div className="text-gray-700 leading-8">
<h2 className="text-3xl font-extrabold text-gray-900 mb-4">
گروه صنعتی فلات کوهرنگ
</h2>
<p className="mb-3">
گروه صنعتی فلات کوهرنگ با سرمایه گذاری قابل توجه چند تن از کارآفرینان بزرگ ملی با هدف
ارائه برترین کیفیت تولید در عرصه لبنیات فعالیت خود را از سال ۱۳۷۴ آغاز نموده است.
</p>
<p className="mb-3">
استفاده از تجهیزات و فن‌آوری‌های روز دنیا و کشور‌های صنعتی پیشرفته چون سوئد و آلمان و نیز
تبادل اطلاعات با متخصصان داخلی و خارجی امکانات گسترده‌ای را در زمینهٔ تولید محصول متنوع
این مجموعه قرار داده است.
</p>
<p className="mb-3">
توجه به سلامت و بهداشت تولید، ارزش نهادن به حق مصرف‌کنندگان و نیز توجه به وظیفه خطیر
تولیدکنندگان کشور موجب گردیده که کلیهٔ فرآیندها و تولیدات کارخانه بر اساس جدیدترین
استانداردهای ملی و بین‌المللی بهداشت صورت پذیرد.
</p>
<Button>درباره کوهرنگ</Button>
</div>
</div>
</section>
  );
 
}
export default SecondCard