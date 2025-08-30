import { useState } from "react";

//  Reusable Input Component
const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  inputMode,
  textarea = false,
}: any) => (
  <div className="relative">
    {textarea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        autoComplete="new-password"
        placeholder=" "
        className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 min-h-[120px] focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
        required
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="new-password"
        placeholder=" "
        inputMode={inputMode}
        className="peer block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none"
        required
      />
    )}
    <label
      htmlFor={id}
      className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base"
    >
      {label}
    </label>
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const allCity: string[] = [
    "Ahmedabad",
    "Amreli",
    "Anand",
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
    "Vadodara",
    "Valsad",
  ];

  type studentObject = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    class: string;
    division: string;
    gender: string;
    city: string;
    address: string;
    hobby: string[];
  };

  //  Validation Rules
  const validate = () => {
    const e: Record<string, string> = {};
    const nameRegex = /^[A-Za-z]{1,10}$/;

    if (!nameRegex.test(firstName))
      e.firstName =
        "Enter a valid first name (letters only, max 10 characters).";
    if (!nameRegex.test(lastName))
      e.lastName = "Enter a valid last name (letters only, max 10 characters).";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(email))
      e.email = "Enter a valid email address.";
    if (!/^[6-9]\d{9}$/.test(phone) || /^(\d)\1{9}$/.test(phone))
      e.phone = "Enter a valid 10-digit mobile number starting with 6–9.";

    const classNum = Number(className);
    if (!className.trim()) e.className = "Please enter your class.";
    else if (isNaN(classNum) || classNum < 1 || classNum > 12)
      e.className = "Class must be between 1 and 12.";

    if (!/^[A-Z]$/.test(division))
      e.division = "Division must be a single capital letter (A–Z).";
    if (!gender) e.gender = "Please select gender.";
    if (hobby.length === 0)
      e.hobby = "Please select at least one hobby (or No Choice).";
    if (!/^[A-Za-z0-9,\/\s]{10,200}$/.test(address.trim()))
      e.address =
        "Address must be 10–200 characters (letters, numbers, commas, slashes only).";
    if (!city) e.city = "Please select a city.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!validate()) return;

    const studentData: studentObject = {
      firstName,
      lastName,
      email,
      phone,
      class: className,
      division,
      gender,
      hobby,
      city,
      address,
    };
    console.log("Student Data:", studentData);

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPhone("");
    // setClassName("");
    // setDivision("");
    // setGender("");
    // setHobby([]);
    // setCity("");
    // setAddress("");
    // setErrors({});
    alert("Form submitted successfully!");
  };

  //  Handlers
  const onFirstName = (e: any) =>
    setFirstName(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10));
  const onLastName = (e: any) =>
    setLastName(e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10));
  const onPhone = (e: any) =>
    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
  const onDivision = (e: any) =>
    setDivision(
      e.target.value
        .replace(/[^A-Za-z]/g, "")
        .slice(0, 1)
        .toUpperCase()
    );
  const onAddress = (e: any) =>
    setAddress(e.target.value.replace(/[^A-Za-z0-9\s]/g, "").slice(0, 200));

  const getHobby = (event: any) => {
    const { value, checked } = event.target;
    if (value === "No Choice") return setHobby(checked ? ["No Choice"] : []);
    setHobby((prev) => {
      let next = prev.filter((h) => h !== "No Choice");
      if (checked) next = [...next, value];
      else next = next.filter((el) => el !== value);
      return next;
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-100 p-6">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl space-y-6 border border-gray-200"
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
            <InputField
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={onFirstName}
              error={errors.firstName}
            />
            <InputField
              id="lastName"
              label="Last Name"
              value={lastName}
              onChange={onLastName}
              error={errors.lastName}
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              error={errors.email}
            />
            <InputField
              id="phone"
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={onPhone}
              inputMode="numeric"
              error={errors.phone}
            />
          </div>

          {/* Class & Division */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              id="class"
              label="Class"
              value={className}
              onChange={(e: any) => setClassName(e.target.value)}
              error={errors.className}
            />
            <InputField
              id="division"
              label="Division"
              value={division}
              onChange={onDivision}
              error={errors.division}
            />
          </div>

          {/* Gender & Hobby */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <fieldset className="relative border border-gray-300 rounded-md p-4">
              <legend className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Gender
              </legend>
              <div className="flex gap-6">
                {["Male", "Female"].map((g) => (
                  <label
                    key={g}
                    htmlFor={`gender-${g.toLowerCase()}`}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      id={`gender-${g.toLowerCase()}`}
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    />{" "}
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-2">{errors.gender}</p>
              )}
            </fieldset>

            <fieldset className="relative border border-gray-300 rounded-md p-4">
              <legend className="absolute -top-2 left-2 bg-white px-1 text-sm text-gray-600">
                Hobby
              </legend>
              <div className="flex gap-6">
                {["Reading", "Sports", "Music", "No Choice"].map((h) => (
                  <label
                    key={h}
                    htmlFor={`hobby-${h}`}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id={`hobby-${h}`}
                      name="hobby"
                      value={h}
                      onChange={getHobby}
                      checked={hobby.includes(h)}
                    />
                    {h}
                  </label>
                ))}
              </div>

              {errors.hobby && (
                <p className="text-red-600 text-sm mt-2">{errors.hobby}</p>
              )}
            </fieldset>
          </div>

          {/* City */}
          <div className="relative">
            <select
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="block w-full border border-gray-300 rounded-xl px-3 pt-5 pb-2 focus:border-blue-600 focus:ring-2 focus:ring-yellow-400 outline-none appearance-none"
              required
            >
              <option value="" hidden></option>
              {allCity.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <label
              htmlFor="city"
              className={`absolute left-3 ${city
                ? "top-2 text-sm text-gray-500"
                : "top-4 text-base text-gray-400"
                } transition-all`}
            >
              City
            </label>
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* Address */}
          <InputField
            id="address"
            label="Address"
            value={address}
            onChange={onAddress}
            error={errors.address}
            textarea
          />

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

      {/* Table */}

      <div className="mt-8 bg-white shadow-2xl rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Student Information</h3>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-6 py-3 border-b border-gray-300 text-left">Field</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">First Name</td>
              <td className="px-6 py-4 border-b border-gray-300">{firstName}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Last Name</td>
              <td className="px-6 py-4 border-b border-gray-300">{lastName}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Email</td>
              <td className="px-6 py-4 border-b border-gray-300">{email}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Phone</td>
              <td className="px-6 py-4 border-b border-gray-300">{phone}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Class</td>
              <td className="px-6 py-4 border-b border-gray-300">{className}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Division</td>
              <td className="px-6 py-4 border-b border-gray-300">{division}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Gender</td>
              <td className="px-6 py-4 border-b border-gray-300">{gender}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Hobby</td>
              <td className="px-6 py-4 border-b border-gray-300">{hobby.join(", ")}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">City</td>
              <td className="px-6 py-4 border-b border-gray-300">{city}</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 border-b border-gray-300 font-semibold">Address</td>
              <td className="px-6 py-4 border-b border-gray-300">{address}</td>
            </tr>
          </tbody>
        </table>
      </div>


    </>
  );
}
