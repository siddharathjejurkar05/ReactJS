import React from 'react'
import Card from './components/Card'



const App = () => {

  const jobsOpenigs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U4pRN-hmnCKRp5bBpsxjHfbbutWDEgFRUo0YrTP2ag&s=10",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQuCDEwhhg7n2lqFqT8z4b-EyBeP16UeHjBVcZfshBg&s=10",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI/UX Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91gke83AgsjipPMZmrsDP0-K7oWgm4ZCkxZNh9Exo3Q&s=10",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodNTPQrBw6frG0BPXUrOee81xMdSiz4NN2PnUrEsjcg&s=10",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREibn3wb0tqcMxIH16FoQaeqmgEpsQVW-WpVaSk-iU-g&s=10",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtXQqql1XLc4kJ7KypkKET1jQR0qMQ-ZPUd77BGwjRA&s=10",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryjghVtlUo91RnbuEKK_FLLRzEOeiQXZNtl90lrTK7A&s=10",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "Cloud Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Mumbai, India",
  },
];
console.log(jobsOpenigs);

  return (
    <div className="parent">
      {jobsOpenigs.map(function(elem,idx){
        return <div key={idx}>
          <Card pay={elem.pay} datePosted={elem.datePosted} comany={elem.companyName} post={elem.post} logo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} 
        location={elem.location}  />
        </div>
      })}
    </div>
  )
}

export default App