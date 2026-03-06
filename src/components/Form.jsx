import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/tableSlice";

function Form() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addUser({ ...data, id: Date.now() }));
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">

      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">

        <div className="mb-6">
          <p className="text-2xl font-bold text-gray-800">
            Personal Details
          </p>

          <p className="text-gray-500 text-sm mt-1">
            Fill in the details below to add a new account
          </p>
        </div>



        {/* form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >

          {/* Name */}
          <div>
            <input
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("accountName", { required: "Name required" })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.accountName?.message}
            </p>
          </div>

          {/* Email */}
          <div>
            <input
              placeholder="Email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", { required: "Email required" })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* Phone */}
          <div>
            <input
              placeholder="Phone"
              type="tel"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("phone", { required: "Phone number is required" })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.phone?.message}
            </p>
          </div>


          {/* Website */}
          <div>
            <input
              placeholder="Website"
              type="url"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("website", { required: "Website is required" })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.website?.message}
            </p>
          </div>


          {/* Industry */}
          <div>
            <input
              placeholder="Industry"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("industry", { required: "Industry is required" })}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.industry?.message}
            </p>
          </div>
            <div>
            <input
              placeholder="Remark"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("remark",)}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.remark?.message}
            </p>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition mt-2"
          >
            Add User
          </button>

        </form>

      </div>

    </div>
  );
}

export default Form;