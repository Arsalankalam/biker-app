// components/Team.tsx
const members = [
  { name: "Karan Singh", role: "Founder & Lead Rider", image: "/team/karan.jpg" },
  { name: "Megha R.", role: "Event Coordinator", image: "/team/megha.jpg" }
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {members.map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
