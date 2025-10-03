import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

/** Reusable input component */
const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  inputMode,
  textarea = false,
  theme,
}: any) => {
  const base =
    "peer block w-full rounded-xl px-3 pt-5 pb-2 outline-none transition";
  const light = "border border-gray-300 bg-white text-gray-900";
  const dark = "border border-gray-600 bg-gray-800 text-white";
  const errorCls = error ? "border-red-500 ring-1 ring-red-500" : "";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          autoComplete="new-password"
          placeholder=" "
          className={`${base} min-h-[120px] ${
            theme === "light" ? light : dark
          } ${errorCls}`}
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
          className={`${base} ${theme === "light" ? light : dark} ${errorCls}`}
        />
      )}

      <label
        htmlFor={id}
        className={`absolute left-3 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base ${
          theme === "light" ? "text-gray-500" : "text-gray-300"
        } ${value ? "top-2" : "top-4"}`}
      >
        {label}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

type StudentFormProps = {
  theme: string;
};

type Student = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  className: string;
  division: string;
  gender: string;
  hobby: string[];
  city: string;
  address: string;
};

export default function StudentForm({ theme }: StudentFormProps) {
  const [students, setStudents] = useState<Student[]>(
    JSON.parse(localStorage.getItem("students") || "[]")
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [className, setClassName] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [editIndex, setEditIndex] = useState<number | null>(null);

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

  const getFieldError = (field: string, value: any) => {
    const nameRegex = /^[A-Za-z]{2,10}$/;
    switch (field) {
      case "firstName":
        return nameRegex.test(value)
          ? ""
          : "First name must be 2–10 letters only.";
      case "lastName":
        return nameRegex.test(value)
          ? ""
          : "Last name must be 2–10 letters only.";
      case "email":
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
          ? ""
          : "Enter a valid email.";
      case "phone":
        return /^[6-9]\d{9}$/.test(value) && !/^(\d)\1{9}$/.test(value)
          ? ""
          : "Enter a valid 10-digit mobile number.";
      case "className": {
        if (!String(value).trim()) return "Class required.";
        const n = Number(value);
        return !isNaN(n) && n >= 1 && n <= 12
          ? ""
          : "Class must be between 1 and 12.";
      }
      case "division":
        return /^[A-Z]$/.test(value)
          ? ""
          : "Division must be a single capital letter (A–Z).";
      case "gender":
        return value ? "" : "Select gender.";
      case "hobby":
        return Array.isArray(value) && value.length > 0
          ? ""
          : "Select at least one hobby.";
      case "address":
        return /^[A-Za-z0-9,\/\s]{10,200}$/.test(String(value).trim())
          ? ""
          : "Address must be 10–200 characters.";
      case "city":
        return value ? "" : "Select a city.";
      default:
        return "";
    }
  };

  const handleChange = (field: string, value: any, setter: any) => {
    setter(value);
    if (!submitted) return;
    const err = getFieldError(field, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[field] = err;
      else delete next[field];
      return next;
    });
  };

  const getHobby = (event: any) => {
    const { value, checked } = event.target;
    let next: string[] = [];
    if (value === "No Choice") next = checked ? ["No Choice"] : [];
    else {
      next = hobby.filter((h) => h !== "No Choice");
      next = checked ? [...next, value] : next.filter((el) => el !== value);
    }
    handleChange("hobby", next, setHobby);
  };

  const resetForm = () => {
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
    setErrors({});
    setSubmitted(false);
    setEditIndex(null);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);

    const fields: Record<string, any> = {
      firstName,
      lastName,
      email,
      phone,
      className,
      division,
      gender,
      hobby,
      city,
      address,
    };

    const allErrors: Record<string, string> = {};
    Object.entries(fields).forEach(([f, v]) => {
      const err = getFieldError(f, v);
      if (err) allErrors[f] = err;
    });

    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    const newStudent: Student = {
      firstName,
      lastName,
      email,
      phone,
      className,
      division,
      gender,
      hobby,
      city,
      address,
    };

    let updated: Student[];
    if (editIndex !== null) {
      updated = [...students];
      updated[editIndex] = newStudent;
      toast.success("Student updated successfully!");
    } else {
      updated = [...students, newStudent];
      toast.success("Student added successfully!");
    }

    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
    resetForm();
  };

  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this student?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = students.filter((_, i) => i !== index);
        setStudents(updated);
        localStorage.setItem("students", JSON.stringify(updated));
        Swal.fire("Deleted!", "Student has been deleted.", "success");
      }
    });
  };

  const handleEdit = (index: number) => {
    const student = students[index];
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setEmail(student.email);
    setPhone(student.phone);
    setClassName(student.className);
    setDivision(student.division);
    setGender(student.gender);
    setHobby(student.hobby);
    setCity(student.city);
    setAddress(student.address);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col items-center min-h-screen p-6 transition-colors ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`shadow-2xl rounded-2xl p-10 w-full max-w-4xl space-y-6 border ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-gray-800 border-gray-700"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center ${
            theme === "light" ? "text-blue-900" : "text-yellow-400"
          }`}
        >
          Student Registration Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={(e: any) =>
              handleChange(
                "firstName",
                e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10),
                setFirstName
              )
            }
            error={errors.firstName}
            theme={theme}
          />
          <InputField
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e: any) =>
              handleChange(
                "lastName",
                e.target.value.replace(/[^A-Za-z]/g, "").slice(0, 10),
                setLastName
              )
            }
            error={errors.lastName}
            theme={theme}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e: any) =>
              handleChange("email", e.target.value, setEmail)
            }
            error={errors.email}
            theme={theme}
          />
          <InputField
            id="phone"
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e: any) =>
              handleChange(
                "phone",
                e.target.value.replace(/\D/g, "").slice(0, 10),
                setPhone
              )
            }
            inputMode="numeric"
            error={errors.phone}
            theme={theme}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            id="className"
            label="Class"
            value={className}
            onChange={(e: any) =>
              handleChange("className", e.target.value, setClassName)
            }
            error={errors.className}
            theme={theme}
          />
          <InputField
            id="division"
            label="Division"
            value={division}
            onChange={(e: any) =>
              handleChange(
                "division",
                e.target.value
                  .replace(/[^A-Za-z]/g, "")
                  .slice(0, 1)
                  .toUpperCase(),
                setDivision
              )
            }
            error={errors.division}
            theme={theme}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <fieldset
            className={`p-4 rounded-md border ${
              theme === "light" ? "border-gray-300" : "border-gray-600"
            } ${errors.gender ? "border-red-500" : ""}`}
          >
            <legend
              className={`px-1 text-sm ${
                theme === "light"
                  ? "bg-white text-gray-600"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Gender
            </legend>
            <div className="flex gap-6">
              {["Male", "Female"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) =>
                      handleChange("gender", e.target.value, setGender)
                    }
                  />
                  {g}
                </label>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-2">{errors.gender}</p>
            )}
          </fieldset>

          <fieldset
            className={`p-4 rounded-md border ${
              theme === "light" ? "border-gray-300" : "border-gray-600"
            } ${errors.hobby ? "border-red-500" : ""}`}
          >
            <legend
              className={`px-1 text-sm ${
                theme === "light"
                  ? "bg-white text-gray-600"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              Hobby
            </legend>
            <div className="flex gap-6">
              {["Reading", "Sports", "Music", "No Choice"].map((h) => (
                <label key={h} className="flex items-center gap-2">
                  <input
                    type="checkbox"
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
              <p className="text-red-500 text-sm mt-2">{errors.hobby}</p>
            )}
          </fieldset>
        </div>

        <div className="relative">
          <select
            id="city"
            value={city}
            onChange={(e) => handleChange("city", e.target.value, setCity)}
            className={`block w-full rounded-xl px-3 pt-5 pb-2 outline-none ${
              theme === "light"
                ? "border border-gray-300 bg-white text-gray-900"
                : "border border-gray-600 bg-gray-800 text-white"
            } ${errors.city ? "border-red-500" : ""}`}
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
            className={`absolute left-3 ${
              city ? "top-2 text-sm" : "top-4 text-base"
            } ${theme === "light" ? "text-gray-500" : "text-gray-300"}`}
          >
            City
          </label>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <InputField
          id="address"
          label="Address"
          value={address}
          onChange={(e: any) =>
            handleChange("address", e.target.value.slice(0, 200), setAddress)
          }
          error={errors.address}
          textarea
          theme={theme}
        />

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold shadow-md hover:bg-yellow-500 hover:text-blue-900 transition"
          >
            {editIndex !== null ? "Update Student" : "Register"}
          </button>
        </div>
      </form>

      {students.length > 0 && (
        <div
          className={`mt-12 w-full max-w-6xl shadow-xl rounded-xl overflow-hidden border ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-gray-800 border-gray-700"
          }`}
        >
          <h3
            className={`text-2xl font-bold text-center py-4 ${
              theme === "light" ? "text-blue-900" : "text-yellow-400"
            }`}
          >
            Registered Students
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead
                className={theme === "light" ? "bg-gray-200" : "bg-gray-700"}
              >
                <tr>
                  {[
                    "First Name",
                    "Last Name",
                    "Email",
                    "Phone",
                    "Class",
                    "Division",
                    "Gender",
                    "Hobby",
                    "City",
                    "Address",
                  ].map((h) => (
                    <th key={h} className="px-4 py-2 border">
                      {h}
                    </th>
                  ))}
                  <th className="px-4 py-2 border" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr
                    key={i}
                    className={`text-center ${
                      theme === "light"
                        ? "hover:bg-gray-100"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <td className="px-4 py-2 border">{s.firstName}</td>
                    <td className="px-4 py-2 border">{s.lastName}</td>
                    <td className="px-4 py-2 border">{s.email}</td>
                    <td className="px-4 py-2 border">{s.phone}</td>
                    <td className="px-4 py-2 border">{s.className}</td>
                    <td className="px-4 py-2 border">{s.division}</td>
                    <td className="px-4 py-2 border">{s.gender}</td>
                    <td className="px-4 py-2 border">{s.hobby.join(", ")}</td>
                    <td className="px-4 py-2 border">{s.city}</td>
                    <td className="px-4 py-2 border">{s.address}</td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => handleEdit(i)}
                        className="px-3 py-1 text-sm rounded bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => handleDelete(i)}
                        className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
