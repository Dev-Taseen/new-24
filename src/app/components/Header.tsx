import Image from 'next/image';
import Navlinks from './Navlinks';
import AuthLinks from './AuthLinks';

const Navbar = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
    return (
        <header className='flex flex-col mt-2'>
            <section className='container mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4'>
                <div className='flex min-w-0 items-center justify-center gap-1 xl:ml-90'>
                    <Image
                        className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
                        height={40}
                        width={45}
                        src={"/logo.webp"}
                        alt='Nav logo'
                        priority
                    />
                    <div className='min-w-0'>
                        <h2 className='text-lg font-bold text-red-600 sm:text-2xl'>Bangla News 24</h2>
                        <p className='text-[10px] text-gray-500 sm:text-[12px]'>{date}</p>
                    </div>
                </div>
                <div className='flex shrink-0 gap-1'>
                    <AuthLinks />
                </div>
            </section>
            <Navlinks />
        </header>
    );
};

export default Navbar;