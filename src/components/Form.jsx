import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/tableSlice";

function Form() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addUser({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start px-4 py-6 sm:py-10">

      {/* Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 sm:p-8">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Personal Details
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Fill in the details below to add a new account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Account Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("accountName", {
                required: "Name is required",
              })}
            />

            {errors.accountName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Website */}
          <div>
            <input
              type="url"
              placeholder="Website"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("website", {
                required: "Website is required",
              })}
            />

            {errors.website && (
              <p className="text-red-500 text-sm mt-1">
                {errors.website.message}
              </p>
            )}
          </div>

          {/* Industry */}
          <div>
            <input
              type="text"
              placeholder="Industry"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("industry", {
                required: "Industry is required",
              })}
            />

            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.industry.message}
              </p>
            )}
          </div>

          {/* Remark */}
          <div>
            <input
              type="text"
              placeholder="Remark (optional)"
              className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("remark")}
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-md transition duration-200"
            >
              Add User
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Form;