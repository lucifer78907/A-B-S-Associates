import member1Img from '../assets/foundingMembers/avinash_photo.jpg';
import member2Img from '../assets/foundingMembers/mr_saini.jpg';
import member3Img from '../assets/foundingMembers/mehak_photo.jpg';
import member4Img from '../assets/foundingMembers/taran_photo.jpg';
import member5Img from '../assets/foundingMembers/vikas_photo.jpg';

const foundingMembersData = [
    {
        title: "CA. MEHAK KAPUR",
        designation: "FCA, B.COM",
        about:
            "Mehak Kapur became a member of the Institute of Chartered Accountants of India in May 2012 and serves as a Partner at A B S and Associates. She specializes in Indian Income Tax, with expertise in statutory, tax, management, and internal audits, particularly in the textile, garment, and automobile sectors. Her proficiency includes Direct Taxation, International Taxation, Double Tax Treaties, and Cross Border Taxation.",
        image: member3Img,
    },
    {
        title: "CA. BABU LAL SAINI",
        designation: "FCA, CCA, FAFD (ICAI), B.COM",
        about:
            "Babu Lal Saini qualified as a Chartered Accountant in 2012 and served as senior partner at A B S and Associates before moving into industry as CFO in various companies. He is an expert in the Indian Companies Act, Project Finance, Debt Syndication, Treasury Operations, and more. His industry experience includes food processing, garment manufacturing, real estate, iron & steel, and infrastructure projects.",
        image: member2Img,
    },
    {
        title: "CA. VIKAS MITTAL",
        designation: "FCA, B.COM",
        about:
            "Vikas Mittal is a Partner at A B S and Associates with over 12 years of experience in audit and tax consultancy. He leads firm operations and specializes in Tax Audits, Internal Audits, and represents clients in tax matters. His expertise includes Direct Taxation, Indirect Taxation, and Tax Planning.",
        image: member5Img,
    },
    {
        title: "CA. AVINASH KHAJURIA",
        designation: "FCA, DISA (ICAI), B.COM",
        about:
            "Avinash Khajuria is a Partner at A B S & Associates with over 12 years of experience in corporate, financial, and taxation domains. He specializes in Management Consultancy, Secretarial Practice, and has handled audits for Banking, NBFCs, IT, Manufacturing, Real Estate, Export-Import, NGOs, and Societies.",
        image: member1Img,
    },
    {
        title: "CA. TARANDEEP KAUR",
        designation: "FCA, B.COM",
        about:
            "Tarandeep Kaur is the Managing Partner at A B S & Associates. She has experience in financial, taxation, and banking services, including audits, project financing, compliance, and business process outsourcing. Her key skills include GST Advisory, Business Valuation, MIS & Budgeting, Risk Management, and Working Capital Management.",
        image: member4Img,
    },
];

function FoundingMembers() {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-8 lg:py-20 font-lato bg-white">
            <h1 className="text-blue-600 text-4xl sm:text-5xl font-bold font-display text-center mb-6">
                Founding Members
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Meet the founding members of A B S Associates, each bringing unique expertise and dedication to our firm.
            </p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {foundingMembersData.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white border border-blue-100 p-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <img
                            src={member.image}
                            alt={member.title}
                            className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 mx-auto mb-5 shadow"
                        />
                        <h2 className="text-xl font-bold text-gray-800 text-center">{member.title}</h2>
                        <h3 className="text-blue-600 font-medium text-center text-sm sm:text-base mb-4">{member.designation}</h3>
                        <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
                            {member.about}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FoundingMembers;
