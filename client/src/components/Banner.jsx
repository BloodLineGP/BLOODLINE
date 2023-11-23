const Banner = () => {
    return (
        <>
            <div className="bg-cover bg-center  h-full text-black py-10 px-10 object-fill">
                <div className="bg-cover bg-center z-50 h-24 text-white px-10 object-fill">
                    <img
                        src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
                <div className="">
                    <div className="flex flex-col justity-center items-center">
                        <p className="text-4xl text-white mb-10 leading-none">
                            Once a blood donor, always a lifesaver. Help us
                            create a better community.
                        </p>

                        <p className="text-3xl w-[50rem] text-justify text-white mb-10 leading-none">
                            BloodLine aims to bridge the gap between donors and
                            recipients, ensuring a swift and efficient exchange
                            of information and assistance during critical times.
                        </p>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default Banner;
