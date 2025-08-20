import { useState } from "react";

export default function StudentForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [className, setClassName] = useState<string>("");
  const [division, setDivision] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const allCity: string[] = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !className ||
      !division ||
      !gender ||
      hobby.length === 0 ||
      !city ||
      !address
    ) {
      alert("Please fill all fields and select at least one hobby.");
      return;
    }

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Class:", className);
    console.log("Division:", division);
    console.log("Gender:", gender);
    console.log("Hobby:", hobby);
    console.log("City:", city);
    console.log("Address:", address);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setClassName("");
    setDivision("");
    setGender("");
    setHobby([]);
    setCity("");
    setAddress("");
    alert("Form submitted successfully!");
  };

  const getHobby = (event: any) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobby((data) => [...data, value]);
    } else {
      setHobby((data) => data.filter((element) => element !== value));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-100 p-6">
      <form
        autoComplete="off"
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl space-y-6 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Student Registration Form
        </h2>

        {/* Hidden Autofill Traps */}
        <input
          type="text"
          name="fakeusernameremembered"
          className="hidden"
          autoComplete="username"
        />
        <input
          type="password"
          name="fakepasswordremembered"
          className="hidden"
          autoComplete="new-password"
        />

        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="firstName"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              First Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="lastName"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="phone"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Phone Number
            </label>
          </div>
        </div>

        {/* Class & Division */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="class"
              id="class"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="class"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Class
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="division"
              id="division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              autoComplete="new-password"
              placeholder=" "
              className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <label
              htmlFor="division"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
            >
              Division
            </label>
          </div>
        </div>

        {/* Gender & Hobby */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Gender */}
          <fieldset className="relative border border-gray-300 rounded-md p-4">
            <legend className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
              Gender
            </legend>
            <div className="flex gap-6">
              <label htmlFor="gender-male" className="flex items-center gap-2">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="Male"
                  onChange={(event) => setGender(event.target.value)}
                  checked={gender === "Male"}
                />
                Male
              </label>

              <label
                htmlFor="gender-female"
                className="flex items-center gap-2"
              >
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="Female"
                  onChange={(event) => setGender(event.target.value)}
                  checked={gender === "Female"}
                />
                Female
              </label>
            </div>
          </fieldset>

          {/* Hobby */}
          <fieldset className="relative border border-gray-300 rounded-md p-4">
            <legend className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
              Hobby
            </legend>
            <div className="flex gap-6">
              <label
                htmlFor="hobby-reading"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="hobby-reading"
                  name="hobby"
                  value="Reading"
                  onChange={getHobby}
                  checked={hobby.includes("Reading")}
                />
                Reading
              </label>

              <label htmlFor="hobby-sports" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hobby-sports"
                  name="hobby"
                  value="Sports"
                  onChange={getHobby}
                  checked={hobby.includes("Sports")}
                />
                Sports
              </label>

              <label htmlFor="hobby-music" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hobby-music"
                  name="hobby"
                  value="Music"
                  onChange={getHobby}
                  checked={hobby.includes("Music")}
                />
                Music
              </label>
            </div>
          </fieldset>
        </div>

        {/* City */}
        <div className="relative">
          <select
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            autoComplete="new-password"
            className="block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none appearance-none"
            required
          >
            <option value="" hidden></option>
            {allCity.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label
            htmlFor="city"
            className={`absolute left-3 ${
              city
                ? "top-2 text-sm text-gray-500"
                : "top-4 text-base text-gray-400"
            } transition-all`}
          >
            City
          </label>
        </div>

        {/* Address */}
        <div className="relative">
          <textarea
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="new-password"
            placeholder=" "
            className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 min-h-[120px] focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          ></textarea>
          <label
            htmlFor="address"
            className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
          >
            Address
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-md hover:bg-yellow-500 hover:text-blue-900 transition"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
