import React, { useState } from "react";
import RunImg from "../assets/images/TreadMill.png";

const Calculation = () => {
  const [gender, setGender] = useState("Female");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (weight && height) {
      const heightInMeters = height * 0.3048; // Convert feet to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setResult(bmi);
    }
  };

  return (
    <div className="bg-[#373737] text-white py-10 flex justify-center flex-col items-center">
      <h1 className="font-Averia text-4xl">Calculate Your BMI</h1>
      <div className="w-40 h-1 bg-[rgb(255,215,0)] mt-2"></div>
      <form
        onSubmit={calculateBMI}
        className="flex flex-col md:flex-row mt-10 items-center gap-5 md:gap-32"
      >
        <div className="left">
          <img
            className="w-60 h-60 object-cover rounded-2xl"
            src={RunImg}
            alt="TreadMill-Running"
          />
        </div>
        <div className="right w-80">
          <h2 className="font-Averia text-3xl mb-5">Advanced Calculator</h2>
          <label
            htmlFor="Gender"
            className="flex flex-col font-Poppins text-lg"
          >
            Gender
            <select
              className="outline-none rounded-lg text-black px-2 py-1 w-full mt-2"
              name="Gender"
              id="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <div className="flex flex-col md:flex-row w-full gap-3 mt-3">
            <label className="flex flex-col font-Poppins text-lg">
              Age
              <input
                className="outline-none rounded-lg text-black px-2 py-1 w-full mt-2"
                type="number"
                placeholder="18 Yrs"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="flex flex-col font-Poppins text-lg">
              Weight (kg)
              <input
                className="outline-none rounded-lg text-black px-2 py-1 w-full mt-2"
                type="number"
                placeholder="20 Kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <label className="flex flex-col font-Poppins text-lg mt-3">
            Height (ft)
            <input
              className="outline-none rounded-lg text-black px-2 py-1 w-full mt-2"
              type="number"
              step="0.01"
              placeholder="5.5 ft"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <button
            className="px-4 py-1 bg-[rgb(255,215,0)] rounded-xl mt-4 font-Poppins"
            type="submit"
          >
            Submit
          </button>
          {result && (
            <div className="border border-[rgb(255,215,0)] px-3 py-1 mt-6">
              <h3 className="font-Poppins text-xl">The Result is: {result}</h3>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Calculation;
