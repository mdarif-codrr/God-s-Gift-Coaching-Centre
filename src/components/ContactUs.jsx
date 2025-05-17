
import Owners from './Owners'

function ContactUs() {
  const list = [
    'सोमवार से बुधवार: सुबह 9 बजे से शाम 6 बजे तक',
    'गुरुवार: सुबह 9 बजे से दोपहर 1 बजे तक (हाफ डे)',
    ' कृपया ध्यान दें — शुक्रवार को स्कूल पूर्णतः बंद रहता है।',
   
  ]
  const list2 = [
    'प्रवेश (Admission) संबंधी सवालों के लिए नीचे फॉर्म भरें या हमें कॉल करें।',
    'आप सीधे ईमेल भी कर सकते हैं — हम जल्द से जल्द संपर्क करेंगे।',
    'हमारे सोशल मीडिया पेजेस पर फॉलो करें और अपडेट पाएं।',
  ]
  return (
    <div className="pt-19 pb-5 px-3 bg-blue-300">
      <div className="max-w-4xl mx-auto p-6 bg-white  rounded-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-950">
          Contact Us
        </h1>

        <p className="text-lg mb-4 text-center font-semibold text-red-600">
          प्रवेश (Admission) से जुड़ी जानकारी के लिए हमसे आज ही संपर्क करें!
        </p>

        <p className="mb-6 text-center text-green-700">
          चाहे आपके पास कोई सवाल हो, सुझाव देना चाहते हों, या अपने बच्चे के लिए
          हमारे स्कूल में दाख़िला (admission) कराना चाहते हों — हम आपकी मदद के
          लिए हमेशा तैयार हैं।
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-950 mb-4">
            संपर्क विवरण:
          </h2>
          <div className="flex justify-between bg-white p-3">
            <Owners
              post={'Director :-'}
              name={'Mufti Abshar Faiz ( 2 M.A )'}
              number={'9199507040'}
              mail={'https://mail.google.com/mail/?view=cm&to=mdarif@gmail.com'}
              whatsApp={'https://wa.me/919199507040'}
            />
            <Owners
              post={'Principal :-'}
              name={'Naushad Alam ( B.Sc. & D.E; Ed. )'}
              number={'7260075959'}
              mail={'https://mail.google.com/mail/?view=cm&to=mdarif@gmail.com'}
              whatsApp={'https://wa.me/917260075959'}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-950">
            Office के समय:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {list.map((li,i) => (
              <li key={i} className="font-semibold ">{li}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-950">
            हमसे जुड़ने के तरीके:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {list2.map((li,i)=>  <li key={i} className='font-semibold'> {li} </li>)}
            
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-950">हमारा स्थान</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1416.1581013083257!2d85.22627825844984!3d26.714445273319246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecc07dc4bd1711%3A0x4278c605ac6ea074!2sKusmahwa%2C%20Bihar%20845418!5e1!3m2!1sen!2sin!4v1747484357302!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
