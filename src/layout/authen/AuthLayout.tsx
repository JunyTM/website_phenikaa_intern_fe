const AuthLayout: React.FC<any> = ({ children: Children }: any) => {
  return (
    <div className="w-[100vw] h-[100vh] pt-[3%]">
      <div className="w-[80%] h-[90%] m-auto rounded-md bg-violet-50 shadow-2xl shadow-violet-300 flex flex-row">
        <div className="w-[65%] h-full rounded-l-md">
          <div className="">
            <Children />
          </div>
        </div>
        <div className="w-[35%] h-[95%] rounded-r-md bg-gradient-to-b from-indigo-200">
          <img
            className="w-[20rem] h-auto mt-[14rem] m-auto opacity-90 bg-cover"
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-DH-Phenikaa-V-Wh.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
