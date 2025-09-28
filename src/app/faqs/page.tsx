import Footer from "@/features/home/components/footer";
import FAQsTitle from "@/features/faqs/components/faqs-title";
import FAQs from "@/features/faqs/components/faqs";

export default function LSCS() {
  return (
    <div className="relative flex flex-col">
      <div className="h-20 w-full" />
      <FAQsTitle />
      <FAQs />
      <Footer />
    </div>
  );
}
