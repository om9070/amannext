import React from 'react'

export default function Faqs() {


  let FAQ = [{
    question: "What types of coffee machines do you offer?",
    answer: "We offer a wide range of coffee machines including bean-to-cup, instant coffee machines, and fully automatic vending machines suitable for offices, cafes, and commercial spaces."
  },
  {
    question: "Do you provide vending machines for other beverages or snacks?",
    answer: "Yes, apart from coffee machines, we also provide vending machines for tea, soups, and snacks depending on your business needs."
  },
  {
    question: "Do you provide installation services for the machines?",
    answer: "Absolutely! We provide complete installation and setup for all coffee and vending machines purchased from us."
  },
  {
    question: "Can I take a machine on rent instead of buying it?",
    answer: "Yes, we offer rental and AMC (Annual Maintenance Contract) options for offices, co-working spaces, and events."
  },
  {
    question: "Do you provide regular maintenance and servicing?",
    answer: "Yes, we have a dedicated team for machine maintenance and on-call servicing across Delhi NCR to ensure uninterrupted performance."
  },
  {
    question: "How quickly can you respond if my machine stops working?",
    answer: "Our technicians usually respond within 24 hours for service requests within Delhi NCR."
  },
  {
    question: "Do you supply coffee beans, premix, or other consumables as well?",
    answer: "Yes, we supply high-quality coffee beans, tea premixes, milk powders, and other related consumables."
  },{
    question: "Can I get a customized vending solution for my office or café?",
    answer: "Definitely! We provide customized vending solutions based on your employee strength, preferences, and space."
  },
  {
    question: "What are your service areas in Delhi NCR?",
    answer: "We provide sales and service in Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad."
  }
]

  return (
    <>
      <section className='mb-8'>
        <div className="space-y-4 w-full max-w-3xl mx-0 md:mx-auto">
          <h2 className="header">FAQs</h2>

          {
            FAQ.map((getdata,index)=>{
              return(

          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            // open
            key={index}
          >
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h1 className="text-lg font-medium">
                {getdata.question}
              </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block size-5 shrink-0 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden size-5 shrink-0 group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              {getdata.answer}
            </p>
          </details>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
