import { useEffect, useState } from "react";
import IdentifyCardStudentTracerStudy from "./identify-card-student-tracer-study";
import SurveyForm from "./survey-from";
import SurveySuccesfully from "./survey-successfully";

export default function FormTracerStudy() {
  const [step, setStep] = useState(1);
  const [identify, setIdentify] = useState("");
  const [contact, setContact] = useState({ email: "", phone: "" });

  useEffect(() => {
    console.log(identify, contact);
  }, [contact]);

  return (
    <div>
      <div className='bg-gradient-to-r from-[#3e7a81] to-[#38a460] px-4 pt-48 md:pt-56 pb-16'>
        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-4xl'>Form Tracer Study</h1>
          <p className='mx-auto mt-3 mb-12 max-w-3xl text-white'>
            Tracer Study SMK Diponegoro Karanganyar adalah sistem pelacakan
            alumni yang bertujuan untuk mengevaluasi output pendidikan sekolah.
            Identifikasi data alumni terlebih dahulu, kemudian isi data survey
            dengan sejujurnya.
          </p>
        </div>
      </div>

      {/* survey form */}
      <div className='mx-auto my-8 max-w-7xl'>
        {step === 1 && (
          <IdentifyCardStudentTracerStudy
            onIdentified={(id) => setIdentify(id)}
            onContact={(contact) => setContact(contact)}
            onStep={(step) => setStep(step)}
          />
        )}
        {step === 2 && (
          <SurveyForm
            identity={identify}
            contact={contact}
            onStep={(step) => setStep(step)}
          />
        )}
        {step === 3 && <SurveySuccesfully />}
      </div>
    </div>
  );
}
