
import img from '../assets/parrents1.png'
function ForParents() {
  const list = [
    'बच्चों की उपस्थिति और पढ़ाई की नियमित निगरानी करें।',
    'विद्यालय द्वारा आयोजित मीटिंग, PTM और अन्य कार्यक्रमों में भाग लें।',
    'बच्चों को घर पर सकारात्मक और प्रेरणादायक माहौल दें।',
    'स्कूल के नियमों और अनुशासन का पालन सुनिश्चित करें।',
    'बच्चों के मोबाइल, टीवी और इंटरनेट उपयोग पर उचित नियंत्रण रखें।',
    'हर दिन कम से कम 10-15 मिनट बच्चों से स्कूल के बारे में बातचीत करें।',
    'बच्चों की मानसिक और शारीरिक सेहत का विशेष ध्यान रखें।',
    'बच्चों को आत्मनिर्भर बनने और छोटे-छोटे कार्य खुद करने के लिए प्रेरित करें।',
    'विद्यालय द्वारा भेजे गए नोटिस, डायरी प्रविष्टियों और मैसेज को नियमित रूप से पढ़ें।',
    'बच्चों को परीक्षा में ईमानदारी और मेहनत से सफल होने के लिए उत्साहित करें।',
    'कोई भी परेशानी होने पर पहले विद्यालय से मिलकर समाधान का प्रयास करें, बच्चों के सामने चर्चा न करें।',
  ]
  return (
    <div className="pt-17 ">
      <div className="text-lg text-gray-700 leading-relaxed p-4 max-w-7xl mx-auto">
        <p className="mb-4 text-2xl max-sm:text-lg text-black font-semibold">
          <span className="text-green-600 font-bold">
            GOD'S GIFT PUBLIC SCHOOL
          </span>{' '}
          और{' '}
          <span className="text-blue-900 font-bold">
            GOD'S GIFT COACHING CENTRE
          </span>{' '}
          में हम यह मानते हैं कि बच्चों की सफलता में अभिभावकों की भागीदारी
          अत्यंत महत्वपूर्ण है। हमारा लक्ष्य है कि हम शिक्षा को एक सामूहिक
          प्रयास बनाएं जहाँ विद्यालय और अभिभावक मिलकर बच्चों के सर्वांगीण विकास
          की दिशा में कार्य करें।
        </p>

        <div className='relative'>
          <ul className="list-disc list-inside mb-4">
          
         {list.map((lis,i)=> <li key={i} className='mt-3  p-3 font-semibold max-sm:text-sm max-sm:p-1 text-blue-950'>{lis}</li>)}
        </ul>
        <div className='max-w-3xl absolute w-full max-md:blur-[3px] top-0 -z-1 right-0'>
          <img src={img} alt="" />
        </div>
        </div>

        <p className="mt-4 font-semibold max-sm:text-sm text-red-600">
          हम आशा करते हैं कि आपका सहयोग बच्चों को एक उज्ज्वल भविष्य देने में
          हमारी सहायता करेगा। किसी भी प्रकार की जानकारी या सहायता के लिए स्कूल
          कार्यालय से संपर्क करें। 👇👇👇
        </p>
      </div>
    </div>
  )
}

export default ForParents
