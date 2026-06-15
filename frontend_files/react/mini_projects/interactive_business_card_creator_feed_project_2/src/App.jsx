import { BusinessCard } from "./business_card";

const devTeam = [
  {
    id: 1,
    fullName: "Bharath Kumar",
    designation: "MERN Stack Developer",
    city: "Chennai",
  },
  {
    id: 2,
    fullName: "Anand Vyas",
    designation: "UI/UX Designer",
    city: "Bangalore",
  },
  {
    id: 3,
    fullName: "Priya Sharma",
    designation: "Frontend Developer",
    city: "Hyderabad",
  },
  {
    id: 4,
    fullName: "Rahul Verma",
    designation: "Backend Developer",
    city: "Pune",
  },
  {
    id: 5,
    fullName: "Sneha Reddy",
    designation: "Full Stack Developer",
    city: "Chennai",
  },
  {
    id: 6,
    fullName: "Arjun Nair",
    designation: "DevOps Engineer",
    city: "Kochi",
  },
  {
    id: 7,
    fullName: "Kavya Iyer",
    designation: "React Developer",
    city: "Coimbatore",
  },
  {
    id: 8,
    fullName: "Vikram Singh",
    designation: "Software Engineer",
    city: "Delhi",
  },
  { id: 9, fullName: "Neha Gupta", designation: "QA Engineer", city: "Noida" },
  {
    id: 10,
    fullName: "Rohit Mehta",
    designation: "Node.js Developer",
    city: "Ahmedabad",
  },
  {
    id: 11,
    fullName: "Divya Menon",
    designation: "Product Designer",
    city: "Bangalore",
  },
  {
    id: 12,
    fullName: "Suresh Babu",
    designation: "Angular Developer",
    city: "Chennai",
  },
  {
    id: 13,
    fullName: "Meera Krishnan",
    designation: "Data Analyst",
    city: "Hyderabad",
  },
  {
    id: 14,
    fullName: "Karthik Raj",
    designation: "Java Developer",
    city: "Madurai",
  },
  {
    id: 15,
    fullName: "Aisha Khan",
    designation: "Mobile App Developer",
    city: "Mumbai",
  },
  {
    id: 16,
    fullName: "Nitin Joshi",
    designation: "Cloud Engineer",
    city: "Pune",
  },
  {
    id: 17,
    fullName: "Pooja Agarwal",
    designation: "Business Analyst",
    city: "Jaipur",
  },
  {
    id: 18,
    fullName: "Harish Patel",
    designation: "Python Developer",
    city: "Surat",
  },
  {
    id: 19,
    fullName: "Lakshmi Narayanan",
    designation: "Technical Lead",
    city: "Trichy",
  },
  {
    id: 20,
    fullName: "Aditya Kapoor",
    designation: "Cybersecurity Engineer",
    city: "Gurgaon",
  },
];

function App() {
  return (
    <>
      The React
      <h1>The User Details</h1>
      {devTeam.map(({id, fullName:name, designation:role, city: location }) => (
        <BusinessCard key={id} name={name} role={role} location={location} />
      ))}
    </>
  );
}

export default App;
