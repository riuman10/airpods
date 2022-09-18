import { motion } from 'framer-motion';
import LeftPod from '../media/left.png'
import RightPod from '../media/right.png'
import Image from 'next/image';


const Hero = () => {
    return (
        <>
        <div className="relative h-screen flex flex-col justify-center items-center">
            <motion.div 
            className='absolute top-0 left-36'
            >
            <Image
             src={LeftPod}
             width = {400}
             height = {400}
             alt = 'Left'
             />
             </motion.div>
            <p className="text-[11rem] font-medium font-sfpro">Airpods</p>
            <p className="font-sfpro text-lg z-0 font-medium">With Personalized Spatial Audio</p>
            <div className='absolute bottom-0 right-44'>
            <Image
             src={RightPod}
             width = {400}
             height = {400}
             alt = 'Left'
             />
             </div>
        </div>
        </> 
    )
}


export default Hero;