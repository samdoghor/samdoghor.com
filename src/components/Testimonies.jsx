import { TestimoniesData } from "./Data";

const Testimonies = () => {
  return (
    <>
      <div>
        {TestimoniesData.map((d) => (
          <div key={d.id}> {d.id} </div>
        ))}
      </div>
    </>
  );
};

export default Testimonies;
