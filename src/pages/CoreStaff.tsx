
const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-pink-500',
];

const coreStaffData = [
    {
        name: "Mr. Govind Rai Gupta",
        designation: "Retired Special Assistant, UCO Bank",
        about: "Mr. Govind Rai Gupta, a retired Special Assistant from UCO Bank, possesses deep expertise in banking operations, financial advisory services, risk management, credit and loan processing, and customer relationship management. His extensive experience enables him to deliver tailored solutions that align with client financial goals and ensure regulatory compliance."
    },
    {
        name: "Mr. Arun",
        designation: "B.Com., ACA",
        about: "Mr. Arun, holding a B.Com. degree and ACA qualification, is a seasoned Company Secretary with deep expertise in Secretarial Compliance, Due Diligence, IPO Planning, and Mergers & Acquisitions, among other areas. His skills support businesses in navigating complex regulatory and strategic processes for sustainable growth."
    },
    {
        name: "Mr. Nitin Puri",
        designation: "Foreign Accounting Specialist",
        about: "Mr. Nitin Puri's background in commerce, combined with over a decade of experience in foreign accounting, audits, and team management, positions him as a highly skilled professional in his field. His expertise likely encompasses a deep understanding of international financial regulations, auditing standards, and effective team leadership strategies, making him a valuable asset in any organization focused on global financial operations."
    },
    {
        name: "Mr. Gourav",
        designation: "MBA (Finance & Marketing)",
        about: "Mr. Gourav is a Bachelor of Commerce graduate who also holds an MBA specializing in Finance and Marketing. With more than 10 years of extensive experience in foreign accounting, data analysis, bank audits, and other areas, he has developed a strong skill set that merges financial knowledge with analytical capabilities. His expertise allows him to effectively manage complex financial environments and make significant contributions to the success of organizations in various financial roles."
    },
    {
        name: "Mr. Mangal Chand Saini",
        designation: "Finance & Taxation Expert",
        about: "Mr. Mangal Chand Saini brings over 25 years of extensive experience to the table, having spent more than 15 years with the esteemed Aarti Group. His expertise lies in team management and the filing of various returns, including Income Tax and GST, among others. His long-standing career reflects a deep understanding of financial regulations and effective leadership in managing teams."
    },
    {
        name: "Mr. Sahil Saini",
        designation: "Engineering & Technical Consultant",
        about: "Mr. Sahil Saini holds a degree in Engineering and has over 3 years of experience. He provides technical expertise to the firm, assisting clients with complex operational matters. His background enables him to effectively address challenges and enhance the efficiency of client operations."
    }
];

function CoreStaff() {
    return (
        <section className="p-6 font-lato w-3/4 mx-auto">
            <h1 className="text-6xl font-bold font-display mb-4 text-blue-500 text-center">Core Staff</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Meet the core staff of A B S Associates, a diverse team with deep expertise in finance, operations, and strategic advisory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreStaffData.map((staff, index) => {
                    const initials = staff.name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase();
                    const color = colors[index % colors.length];

                    return (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 ${color}`}>
                                {initials}
                            </div>
                            <h2 className="text-2xl font-semibold text-center text-gray-800">{staff.name}</h2>
                            <h3 className="text-lg text-center text-gray-600">{staff.designation}</h3>
                            <p className="mt-4 text-justify text-gray-700">{staff.about}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default CoreStaff;
