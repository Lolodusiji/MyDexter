import { Controller, useFormState } from "react-hook-form";

const ConnectToWeb = () => {
  const { control } = useFormState();
  return (
    <div className="lg:mt-2 md:mt-2 md:pt-4 mb-5 max-md:mt-10 bg-white border border-gray-300 h-fit shadow-md rounded-lg p-4 lg:w-[84%] md:w-[84%] max-md:w-full ">
      <form className="flex gap-6 items-start">
        <div className=" w-[28%]">
          <div className="flex flex-col gap-3">
            <label htmlFor="access" className="text-#545a67]  text-[11px]">
              Access
            </label>
            <Controller
              name="access"
              control={control}
              defaultValue="None"
              render={({ field }) => (
                <select
                  {...field}
                  id="access"
                  className="w-full max-md:text-[9px] text-gray-400 outline-none focus:border-2 focus:border-gray-500 border border-gray-300 rounded-lg p-2 text-[11px]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="None">None</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                </select>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[65%]">
          <p className=" text-[11px]"> Search depth</p>
          <p className=" text-[10px] text-gray-400  ">
            Currently, your “Connect to web” is off, limiting you to pre-trained
            data. Enabling it reduces AI hallucinations and improves accuracy.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ConnectToWeb;