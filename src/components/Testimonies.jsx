import { TestimoniesData } from "./Data";

const Testimonies = () => {
  return (
    <>
      <div>
        {TestimoniesData.map((d, index) => (
          <div key={index}> {d.id} </div>
        ))}
      </div>
    </>
  );
};

export default Testimonies;
